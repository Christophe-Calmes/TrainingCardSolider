import { useContext } from 'react';
import StoreUnitInfos from '../context/StoreUnitInfo'

export const CardSoldier = () => {

const { FigurineInformations } = useContext(StoreUnitInfos)
console.log(FigurineInformations);

  return (
    <div>
      <h1>Card Soldier</h1>
      
    </div>
  );
}

export default CardSoldier; 