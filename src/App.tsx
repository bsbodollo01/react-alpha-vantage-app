import React from 'react';
import StockData from './components/DataStockView';

const App: React.FC = () => {
  return (
    <div className="App bg-gray-200 h-screen">
      {/* <header className="App-header">
        <h1 className=''>Stock Data</h1>
      </header> */}
      <main className=''>
        <StockData symbol="IBM" />
      </main>
    </div>
  );
};

export default App;
