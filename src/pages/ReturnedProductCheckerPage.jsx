import { FaCheck, FaTimes, FaQuestion } from 'react-icons/fa';

const mockReturnStatus = {
  'SN12345': { genuine: true, resellable: true, flagged: false },
  'SN67890': { genuine: false, resellable: false, flagged: true },
};

const ReturnedProductCheckerPage = () => {
  const [serial, setSerial] = useState('');
  const [status, setStatus] = useState(null);

  const checkSerial = () => {
    setStatus(mockReturnStatus[serial] || { genuine: 'Unknown', resellable: 'Unknown', flagged: 'Unknown' });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Return Checker</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            placeholder="Enter product serial number"
            className="w-full p-3 border rounded-lg"
          />
          <button onClick={checkSerial} className="bg-walmart-blue text-white px-6 py-3 rounded-lg font-semibold">Check</button>
        </div>
        {status && (
          <div className="mt-6 space-y-3">
            <div className={`p-3 rounded-lg flex items-center ${status.genuine === true ? 'bg-green-100' : 'bg-red-100'}`}>
              {status.genuine === true ? <FaCheck className="text-green-500 mr-2" /> : <FaTimes className="text-red-500 mr-2" />}
              Genuine Status: {status.genuine ? 'Genuine' : 'Counterfeit'}
            </div>
            <div className={`p-3 rounded-lg flex items-center ${status.resellable === true ? 'bg-green-100' : 'bg-yellow-100'}`}>
              {status.resellable ? <FaCheck className="text-green-500 mr-2" /> : <FaQuestion className="text-yellow-500 mr-2" />}
              Resellable: {status.resellable ? 'Yes' : 'No'}
            </div>
            <div className={`p-3 rounded-lg flex items-center ${status.flagged === true ? 'bg-red-100' : 'bg-gray-100'}`}>
              {status.flagged ? <FaTimes className="text-red-500 mr-2" /> : <FaCheck className="text-gray-500 mr-2" />}
              Flagged: {status.flagged ? 'Yes' : 'No'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReturnedProductCheckerPage;