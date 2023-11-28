import { useContext } from 'react';
import StoreUnitInfos from '../context/StoreUnitInfo'
import './CardSoldier.scss';

export const CardSoldier = () => {

const { dataUnit } = useContext(StoreUnitInfos)
//console.log(dataUnit[2][0]);
const dice  = ['D6', 'D8', 'D10', 'D12'];
const svg = ['Non applicable', '6+', '5+', '4+', '3+', '3++', '2+'];

if(dataUnit.length >= 3) {
  return (
    <div>
      <section className="itemBox">
        <h1 className="titleh1">Card Soldier</h1>
        
          <figure>
            <img className="stylePicture" src="../src/pictures/annihilators-stormcast-eternals.jpg" alt={dataUnit[0][0]?.nomFigurine}/>
          </figure>
         <ul className="flexColomun">
          <li><h2>{dataUnit[0][0]?.nomUnivers}</h2></li>
          <li>Name : {dataUnit[0][0]?.nomFigurine}</li>
          <li>Faction : {dataUnit[0][0]?.nomFaction}</li>
      
            <ul className="flexColomun">
              <li>Combat dice : {dice[dataUnit[0][0]?.DC]}</li>
              <li>Martial quality dice : {dice[dataUnit[0][0]?.DQM]}</li>
              <li>Mouvement : {dataUnit[0][0]?.mouvement} pouces/ {Math.ceil(dataUnit[0][0]?.mouvement * 1.4)} pouces + 1D4 pouces </li>
              <li>Life point: {dataUnit[0][0]?.pdv}</li>
              <li>Armor : {svg[dataUnit[0][0]?.svg]}</li>
            </ul>
         </ul>
         <p>
          {dataUnit[0][0]?.texteFigurine}
         </p>
         <article>
          {
            dataUnit[2].length > 0 ? (
            
              <article>
                <h3>Weapon</h3>
                <ul>
                {
                  dataUnit[2].map((element, index) => {
                    console.log(element)
                  
                  })
                }
                </ul>
              </article>
               
            ) : (<p></p>)
          }
       
         </article>
         <p>
          {dataUnit[1].length > 0 ? (
              <ul className="flexColomun padding1">
                <li><span className="titleSpan">Special rules</span></li>
                {dataUnit[1].map((element, index) => (   
                  <li className="specialRules" key={element?.nomRS}><span>{element?.nomRS}</span></li>
                ))}
              </ul>
            ) : (
              <p>No special rules.</p>
            )}
         </p>
        </section>
    </div>
  );
} else {
  return (
    <div><p>***Loading**</p></div>
  )
}

}

export default CardSoldier; 