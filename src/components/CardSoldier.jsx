import { useContext } from 'react';
import FigurineInformations from '../context/StoreUnitInfo';
//import './CardSoldier.css'; a toi christophe de crée le css  lol

export const CardSoldier = () => {
  const { figurineInfos, RSInfos, equipementFigurineInfos } = useContext(FigurineInformations);

  return (
    <div className="card-soldier">
      
      <h1>Card Soldier</h1>
      {figurineInfos && (
        <div className="figurine-section">
          <h2>Figurine Information</h2>
          <p>Nom: {figurineInfos.nomFigurine}</p>
          <p>Faction: {figurineInfos.nomFaction}</p>
          <p>Points: {figurineInfos.points}</p>
          <p>Nombre de figurines: {figurineInfos.nombreFigurines}</p>
          
        </div>
      )}

      {RSInfos && (
        <div className="rs-section">
          <h2>RS Information</h2>
          <p>Nom RS: {RSInfos.nomRS}</p>
          {/* tu peux ajuter ce que tu veux ici Chris */}
        </div>
      )}

      {equipementFigurineInfos && (
        <div className="equipment-section">
          <h2>Equipment Information</h2>
          <p>Nom Arme: {equipementFigurineInfos.nomArme}</p>
          <p>Description: {equipementFigurineInfos.description}</p>
          {/* tu peux ajuter ce que tu veux ici Chris */}
        </div>
      )}
    </div>
  );
};

export default CardSoldier;
