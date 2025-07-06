import { useState } from "react";
import { motion } from "framer-motion";

const dummyProducts = [
  { id: 1, name: "Smart Watch", description: "Digital twin of Smart Watch", status: "pending" },
  { id: 2, name: "Headphones", description: "Digital twin of Headphones", status: "pending" },
  { id: 3, name: "Laptop", description: "Verified Laptop Twin", status: "verified" },
];

export default function ProductList({ status }) {
  const [products, setProducts] = useState(dummyProducts);

  const handleVerify = (id, result) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: result === "pass" ? "verified" : "failed" } : p
      )
    );
  };

  const filtered = products.filter((p) =>
    status === "pending" ? p.status === "pending" : p.status === "verified"
  );

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">
        {status === "pending" ? "📝 Products To Verify" : "✅ Verified Products"}
      </h2>

      {filtered.length === 0 && (
        <p className="text-gray-400">No products in this category.</p>
      )}

      {filtered.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0.5, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800 p-4 rounded shadow flex flex-col gap-2"
        >
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-300">{product.description}</p>
          <div className="flex gap-4 items-center">
            <span
              className={`inline-block px-3 py-1 text-sm rounded ${
                product.status === "verified"
                  ? "bg-green-600"
                  : product.status === "failed"
                  ? "bg-red-600"
                  : "bg-yellow-600"
              }`}
            >
              {product.status.toUpperCase()}
            </span>

            {status === "pending" && (
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => handleVerify(product.id, "pass")}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm"
                >
                  ✅ Pass
                </button>
                <button
                  onClick={() => handleVerify(product.id, "fail")}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
                >
                  ❌ Fail
                </button>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
