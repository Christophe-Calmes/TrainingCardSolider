// App.js
import React from 'react';
import './App.css';
import GetSoldier from './components/GetSoldier';
import CardSoldier from './components/CardSoldier';
import { FigurineInformationsProvider } from './context/StoreUnitInfo';

function App() {
  return (
    <FigurineInformationsProvider>
      <div>
        <GetSoldier />
        <CardSoldier />
      </div>
    </FigurineInformationsProvider>
  );
}

export default App;
