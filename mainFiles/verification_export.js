"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_sdk_1 = require("@aptos-labs/ts-sdk");
const CONFIG = {
    NETWORK: ts_sdk_1.Network.TESTNET,
};
const aptos = new ts_sdk_1.Aptos(new ts_sdk_1.AptosConfig({ network: CONFIG.NETWORK }));

async function verifyDigitalTwin(productId) {
    try {
        const ownerAddress = "0xe5e964ba9e36d5a321f24b07d6c073373256cb982c53cbc4c77619d541d85f66";
        console.log(`🔍 Verifying productId: ${productId}`);
        const address = ts_sdk_1.AccountAddress.fromString(ownerAddress);
        const assets = await aptos.getOwnedDigitalAssets({ ownerAddress: address });
        if (!assets.length) {
            console.log("❌ No NFTs found for this account.");
            return;
        }
        const matchingNFT = assets.find((asset) => {
            const name = asset.current_token_data?.token_name;
            return name?.includes(`[${productId}]`);
        });
        if (matchingNFT && matchingNFT.current_token_data) {
            const data = matchingNFT.current_token_data;
            console.log("✅ Product found!");
            console.log(`🔹 Name: ${data.token_name}`);
            console.log(`🔹 Description: ${data.description}`);
            console.log(`🔹 Metadata URL: ${data.token_uri}`);
            console.log(`🔹 Token ID: ${matchingNFT.token_data_id}`);
        }
        else {
            console.log("❌ Product ID not found in any NFT.");
        }
    }
    catch (err) {
        console.error("❌ Error verifying product:", err);
    }
}


exports.verifyDigitalTwin = verifyDigitalTwin;


// // Example usage
// const PRODUCT_ID = "SKU-00234-A";
// verifyDigitalTwin(PRODUCT_ID);
