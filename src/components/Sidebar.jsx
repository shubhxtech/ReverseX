export default function Sidebar({
  setActiveSection,
  activeSection,
  menuItems = [],
  title = "Dashboard",
}) {
  return (
    <aside className="w-64 bg-gray-800 p-6">
      <h2 className="text-xl font-bold mb-6 text-white">{title}</h2>
      <ul className="space-y-4">
        {menuItems.map(({ key, label }) => (
          <li
            key={key}
            className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
              activeSection === key
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => setActiveSection(key)}
          >
            {label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
