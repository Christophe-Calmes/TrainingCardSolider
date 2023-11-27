import { useContext } from 'react';
import StoreUnitInfos from '../context/StoreUnitInfo'

export const CardSoldier = () => {

const { dataUnit } = useContext(StoreUnitInfos)
console.log(dataUnit);

  return (
    <div>
      <h1>Card Soldier</h1>
        <article>
       
        </article>
    </div>
  );
}

export default CardSoldier; 