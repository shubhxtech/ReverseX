import React, { useState } from "react";

// mock blockchain check
const checkOrderOnBlockchain = async (orderId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (orderId === "valid-order") resolve(true);
      else resolve(false);
    }, 1000);
  });
};

// mock submit
const submitReturnOnBlockchain = async (form) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ txHash: "0xabc123def456..." });
    }, 1500);
  });
};

export default function ReturnForm() {
  const [form, setForm] = useState({ orderId: "", reason: "", item: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [verified, setVerified] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleVerify = async () => {
    setLoading(true);
    setStatus(null);
    setVerified(false);
    const isValid = await checkOrderOnBlockchain(form.orderId);
    setLoading(false);
    if (!isValid) {
      setStatus({ type: "error", message: "❌ Order not found or invalid." });
    } else {
      setStatus({ type: "success", message: "✅ Order verified." });
      setVerified(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const result = await submitReturnOnBlockchain(form);
      setStatus({
        type: "success",
        message: `✅ Return request submitted. Tx: ${result.txHash}`,
        txHash: result.txHash,
      });
    } catch {
      setStatus({ type: "error", message: "❌ Failed to submit return." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Return Your Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md w-full bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <div>
          <label htmlFor="orderId" className="block mb-1">
            Order ID
          </label>
          <input
            id="orderId"
            name="orderId"
            type="text"
            value={form.orderId}
            onChange={handleChange}
            placeholder="Order ID"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="item" className="block mb-1">
            Digital Twin Name
          </label>
          <input
            id="item"
            name="item"
            type="text"
            value={form.item}
            onChange={handleChange}
            placeholder="Product / Twin Name"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block mb-1">
            Reason for Return
          </label>
          <textarea
            id="reason"
            name="reason"
            value={form.reason}
            onChange={handleChange}
            placeholder="Reason for return"
            required
            rows={4}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleVerify}
            disabled={loading || verified}
            className={`flex-1 ${
              verified
                ? "bg-green-600 cursor-not-allowed"
                : "bg-yellow-600 hover:bg-yellow-700"
            } px-4 py-2 rounded text-white font-semibold`}
          >
            {loading && !verified
              ? "Verifying..."
              : verified
              ? "Verified ✅"
              : "Verify Order"}
          </button>

          <button
            type="submit"
            disabled={!verified || loading}
            className={`flex-1 ${
              !verified || loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } px-4 py-2 rounded text-white font-semibold`}
          >
            {loading && verified ? "Submitting..." : "Submit Return Request"}
          </button>
        </div>

        {status && (
          <div
            className={`mt-4 p-3 rounded ${
              status.type === "success" ? "bg-green-700" : "bg-red-700"
            }`}
          >
            {status.message}
            {status.txHash && (
              <a
                href={`https://explorer.aptoslabs.com/txn/${status.txHash}?network=testnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 underline text-sm"
              >
                View Transaction
              </a>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
