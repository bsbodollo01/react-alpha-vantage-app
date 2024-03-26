import axios from 'axios';

const API_KEY = 'RIBXT3XYLI69PC0Q';
const API_BASE_URL = 'https://www.alphavantage.co/query';

interface ApiResponse {
    "Meta Data": {
      "1. Information": string;
      "2. Symbol": string;
      "3. Last Refreshed": string;
      "4. Interval": string;
      "5. Output Size": string;
      "6. Time Zone": string;
    };
    "Time Series (5min)": {
      [timestamp: string]: {
        "1. open": string;
        "2. high": string;
        "3. low": string;
        "4. close": string;
        "5. volume": string;
      };
    };
  }
  

export const fetchDataStock = async (
    func: string,
    symbol: string,
    interval: string
): Promise<ApiResponse> => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        function: func,
        symbol,
        interval,
        apikey: API_KEY,
      },
    });
    console.log(response)

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from Alpha Vantage API');
  }
};