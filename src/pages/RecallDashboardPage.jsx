import { FaExclamationTriangle } from 'react-icons/fa';

const mockRecalls = [
  { id: 1, product: 'Spinach Bags', status: 'Contaminated', recalled: 'No', stores: ['#123', '#456'] },
  { id: 2, product: 'Ground Beef', status: 'Clear', recalled: 'No', stores: [] },
  { id: 3, product: 'Chicken Breast', status: 'Contaminated', recalled: 'Yes', stores: ['All Midwest'] },
];

const RecallDashboardPage = () => {
  const issueRecall = (id) => {
    alert(`Recall issued for product ID: ${id}`);
  };

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Recall Dashboard</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Recalled?</th>
              <th className="p-3 text-left">Affected Stores</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockRecalls.map(item => (
              <tr key={item.id} className="border-b">
                <td className="p-3">{item.product}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-sm ${item.status === 'Contaminated' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-3">{item.recalled}</td>
                <td className="p-3">{item.stores.join(', ')}</td>
                <td className="p-3 text-center">
                  {item.status === 'Contaminated' && item.recalled === 'No' && (
                    <button onClick={() => issueRecall(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 flex items-center">
                      <FaExclamationTriangle className="mr-2" /> Issue Recall
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecallDashboardPage;