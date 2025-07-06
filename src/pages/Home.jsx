import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Reverse Logistics System</h1>
      <div className="flex gap-6">
        <button
          onClick={() => navigate("/customer")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Customer Dashboard
        </button>
        <button
          onClick={() => navigate("/admin")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Admin Dashboard
        </button>
      </div>
    </div>
  );
}
