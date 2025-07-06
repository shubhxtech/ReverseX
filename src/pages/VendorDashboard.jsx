import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";

export default function VendorDashboard() {
  const [activeSection, setActiveSection] = useState("toVerify");

  const menuItems = [
    { key: "toVerify", label: "📋 Products to Verify" },
    { key: "verified", label: "✅ Verified Products" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar
        title="Vendor Dashboard"
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        menuItems={menuItems}
      />

      <main className="flex-1 p-6 overflow-y-auto">
        {activeSection === "toVerify" && (
          <ProductList status="pending" />
        )}
        {activeSection === "verified" && (
          <ProductList status="verified" />
        )}
      </main>
    </div>
  );
}
