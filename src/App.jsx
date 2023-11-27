import './App.css'
//import GetSoldierInfo from './components/GetSoldier';
import { useState } from 'react';
import GetSoldier from './components/GetSoldier'
import UnitInfos from './context/StoreUnitInfo';
import CardSolider from './components/CardSoldier';
function App() {
const [dataUnit, setDataUnit] = useState([]);
console.log(dataUnit[0]);

  return (
    <div>
          <GetSoldier setDataUnit={setDataUnit}/>
          <UnitInfos.Provider value={{dataUnit}}>
            <CardSolider/>
          </UnitInfos.Provider>

    </div>
  )
}

export default App
