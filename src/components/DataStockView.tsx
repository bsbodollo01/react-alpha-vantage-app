import React, { useEffect, useState } from 'react';
import { fetchDataStock } from '../services/AlphaVantageService';

const StockData: React.FC<{ symbol: string }> = ({ symbol }) => {
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataStock(symbol, 'IBM', '5min');
        setData(response);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [symbol]);

  const sampleData = {
    "Meta Data": {
      "1. Information": "Intraday (5min) open, high, low, close prices and volume",
      "2. Symbol": "IBM",
      "3. Last Refreshed": "2024-03-20 19:55:00",
      "4. Interval": "5min",
      "5. Output Size": "Compact",
      "6. Time Zone": "US/Eastern"
    },
    "Time Series (5min)": {
      "2024-03-20 19:55:00": {
        "1. open": "194.8000",
        "2. high": "194.9200",
        "3. low": "194.8000",
        "4. close": "194.9200",
        "5. volume": "3"
      },
      "2024-03-20 19:50:00": {
        "1. open": "194.9200",
        "2. high": "194.9200",
        "3. low": "194.7500",
        "4. close": "194.7500",
        "5. volume": "143"
      }
    }
  };

  if (!data) {
    return ( 
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full text-center sm:p-0 p-2">
            <div
              className="w-[350px] bg-white h-[170px] flex flex-col justify-center items-center rounded-lg gap-y-5 pt-2"
            >
              <div className="typing-indicator">
                <div className="typing-circle" />
                <div className="typing-circle" />
                <div className="typing-circle" />
                <div className="typing-shadow" />
                <div className="typing-shadow" />
                <div className="typing-shadow" />
              </div>
              <h1>Loading please wait...</h1>
            </div>
          </div>
        </div>
    </div>
    )
  }

  const metaData = sampleData['Meta Data'];
  const timeSeries = sampleData['Time Series (5min)'];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">IBM Stock Data</h1>
      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Meta Data:</h2>
          <ul className="list-disc ml-8">
            {Object.entries(metaData).map(([key, value]) => (
              <li key={key} className="mb-2">
                <span className="font-semibold text-gray-900">{`${key}: `}</span>
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Time Series (5min):</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left bg-blue-500 text-white">Timestamp</th>
                  <th className="px-4 py-2 text-left bg-blue-500 text-white">Open</th>
                  <th className="px-4 py-2 text-left bg-blue-500 text-white">High</th>
                  <th className="px-4 py-2 text-left bg-blue-500 text-white">Low</th>
                  <th className="px-4 py-2 text-left bg-blue-500 text-white">Close</th>
                  <th className="px-4 py-2 text-left bg-blue-500 text-white">Volume</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(timeSeries).map(([timestamp, data]) => (
                  <tr key={timestamp}>
                    <td className="px-4 py-2">{timestamp}</td>
                    <td className="px-4 py-2">{data['1. open']}</td>
                    <td className="px-4 py-2">{data['2. high']}</td>
                    <td className="px-4 py-2">{data['3. low']}</td>
                    <td className="px-4 py-2">{data['4. close']}</td>
                    <td className="px-4 py-2">{data['5. volume']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockData;
