import './App.css'
import GetSoldierInfo from './components/GetSoldier';
import { useContext } from 'react';
import UnitInfos from './context/StoreUnitInfo';

function App() {


  return (
    <div>
          <UnitInfos.Provider value={{figurineInfos}}>
         
          </UnitInfos.Provider>
      

      
    </div>
  )
}

export default App
