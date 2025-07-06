import {
  Network,
  Aptos,
  AptosConfig,
  Ed25519PrivateKey,
  Ed25519Account,
  AccountAddress,
} from '@aptos-labs/ts-sdk';

const CONFIG = {
  NETWORK: Network.TESTNET,
  MINT_DELAY: 1000,
};

class DigitalTwinSystem {
  constructor() {
    const config = new AptosConfig({ network: CONFIG.NETWORK });
    this.aptos = new Aptos(config);
  }

  async wait(txHash) {
    await this.aptos.waitForTransaction({ transactionHash: txHash });
  }

  async createCollection(creator) {
    const txn = await this.aptos.createCollectionTransaction({
      creator,
      name: 'Digital Twins Collection',
      description: 'On-chain representation of physical products',
      uri: 'https://example.com/digital-twins-metadata',
    });
    const res = await this.aptos.signAndSubmitTransaction({ signer: creator, transaction: txn });
    await this.wait(res.hash);
    console.log('✅ Collection created.');
  }

  async mintDigitalTwin(creator, collectionName, twin) {
    const nftName = `${twin.name} [${twin.productId}]`;
    const txn = await this.aptos.mintDigitalAssetTransaction({
      creator,
      collection: collectionName,
      name: nftName,
      description: twin.description,
      uri: twin.metadataUrl,
    });
    const res = await this.aptos.signAndSubmitTransaction({ signer: creator, transaction: txn });
    await this.wait(res.hash);
    console.log(`✅ Minted Digital Twin '${nftName}' with metadata at ${twin.metadataUrl}`);
  }

  async transferTwin(sender, recipient, twinTokenAddress) {
    const txn = await this.aptos.transferDigitalAssetTransaction({
      sender,
      digitalAssetAddress: twinTokenAddress,
      recipient: AccountAddress.fromString(recipient),
    });
    const res = await this.aptos.signAndSubmitTransaction({ signer: sender, transaction: txn });
    await this.wait(res.hash);
    console.log(`🔄 Digital twin transferred to ${recipient}`);
  }

  async mintFromFrontend(productDetails) {
    try {
      const { productId, name, description, metadataUrl } = productDetails;

      const PRIVATE_KEY_HEX =
        'ed25519-priv-0xc38c3c64696528ea2dad858e56aa33d318f84272217393ad36493b0e12f949c0';
      const privateKey = new Ed25519PrivateKey(PRIVATE_KEY_HEX);
      const creator = new Ed25519Account({ privateKey });

      const collectionName = 'Digital Twins Collection';
      const nftName = `${name} [${productId}]`;

      const txn = await this.aptos.mintDigitalAssetTransaction({
        creator,
        collection: collectionName,
        name: nftName,
        description,
        uri: metadataUrl,
      });

      const res = await this.aptos.signAndSubmitTransaction({ signer: creator, transaction: txn });
      await this.wait(res.hash);

      return {
        success: true,
        message: '✅ Digital twin NFT minted successfully.',
        transactionHash: res.hash,
        name: nftName,
        metadataUrl,
      };
    } catch (error) {
      console.error('❌ Minting error:', error);
      return {
        success: false,
        message: error.message || 'Unknown error occurred during minting.',
      };
    }
  }
}

export { DigitalTwinSystem };
