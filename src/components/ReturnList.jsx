import React from "react";

// some dummy returns
const dummyReturns = [
  {
    orderId: "ORD123456",
    item: "Smart Watch Twin",
    reason: "Defective screen",
    status: "Pending",
    date: "2025-07-05T14:35:00",
    txHash: "0xabc123def456",
  },
  {
    orderId: "ORD987654",
    item: "Bluetooth Headphones Twin",
    reason: "Wrong color delivered",
    status: "Approved",
    date: "2025-06-30T09:20:00",
    txHash: "0xdef789ghi012",
  },
  {
    orderId: "ORD555666",
    item: "Fitness Band Twin",
    reason: "Not working properly",
    status: "Rejected",
    date: "2025-06-28T18:50:00",
    txHash: "0xjkl345mno678",
  },
];

export default function ReturnList({ returns = dummyReturns }) {
  return (
    <div className="bg-gray-800 p-6 rounded shadow text-white">
      <h3 className="text-2xl font-semibold mb-4 text-center">
        My Return Requests
      </h3>

      {returns.length === 0 ? (
        <p className="text-gray-400 italic text-center">
          📭 You haven’t submitted any return requests yet.
        </p>
      ) : (
        <ul className="space-y-4">
          {returns.map((r, index) => (
            <li key={index} className="p-4 bg-gray-700 rounded shadow-sm">
              <div className="flex justify-between flex-wrap">
                <div>
                  <p>
                    <span className="font-semibold">Order ID:</span> {r.orderId}
                  </p>
                  <p>
                    <span className="font-semibold">Item:</span> {r.item}
                  </p>
                  <p>
                    <span className="font-semibold">Reason:</span> {r.reason}
                  </p>
                  {r.status && (
                    <p>
                      <span className="font-semibold">Status:</span>{" "}
                      <span
                        className={
                          r.status === "Approved"
                            ? "text-green-400"
                            : r.status === "Rejected"
                            ? "text-red-400"
                            : "text-yellow-400"
                        }
                      >
                        {r.status}
                      </span>
                    </p>
                  )}
                  {r.date && (
                    <p className="text-sm text-gray-400">
                      Submitted: {new Date(r.date).toLocaleString()}
                    </p>
                  )}
                </div>

                {r.txHash && (
                  <a
                    href={`https://explorer.aptoslabs.com/txn/${r.txHash}?network=testnet`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline text-sm mt-2"
                  >
                    View Tx
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
