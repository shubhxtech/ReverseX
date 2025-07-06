import React from "react";
import { motion } from "framer-motion";

const dummyRewards = [
  { id: 1, title: "🎁 50 Points", desc: "For returning Smart Watch at Store #12" },
  { id: 2, title: "🏆 Bronze Badge", desc: "3 returns completed in a month" },
  { id: 3, title: "🎫 10% Discount Coupon", desc: "Redeemed 200 points" },
];

export default function Rewards() {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-lg text-white max-w-lg mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h3
        className="text-3xl font-bold mb-4 text-center text-yellow-400"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        🌟 Offline Store Rewards
      </motion.h3>

      <motion.p
        className="text-gray-300 mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Earn reward points & badges for returning your items at offline partner stores.
        Redeem these for exclusive discounts, NFTs & more.
      </motion.p>

      <ul className="list-disc list-inside space-y-2 text-gray-200 mb-6">
        <motion.li
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ✅ Drop returns at designated offline stores
        </motion.li>
        <motion.li
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          🎁 Earn reward tokens/NFTs on each successful return
        </motion.li>
        <motion.li
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🏆 Redeem rewards in your dashboard
        </motion.li>
      </ul>

      <motion.div
        className="bg-gray-700 p-4 rounded shadow"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="text-xl font-semibold mb-2 text-center text-green-300">
          🎉 Your Recent Rewards
        </h4>
        <ul className="space-y-2">
          {dummyRewards.map((reward) => (
            <li
              key={reward.id}
              className="bg-gray-600 p-2 rounded hover:bg-gray-500 transition"
            >
              <span className="font-bold">{reward.title}</span> —{" "}
              <span className="text-sm text-gray-300">{reward.desc}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
