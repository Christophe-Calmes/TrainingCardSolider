import { useContext } from 'react';
import FigurineInformations from '../context/StoreUnitInfo';

export const CardSoldier = () => {
  console.log('Avant useContext'); // Pour vérifier si le composant est rendu
  const { infosFigurine } = useContext(FigurineInformations);
  console.log('Après useContext', infosFigurine); // Pour voir la valeur après useContext

  // Si infosFigurine est undefined, vérifiez e contexte FigurineInformations
  if (infosFigurine === undefined) {
    console.log('infosFigurine est undefined');
  }

  return (
    <div>
      <h1>Card Soldier</h1>
      {/* Afficher des informations supplémentaires si disponibles */}
      {infosFigurine && <p>{JSON.stringify(infosFigurine)}</p>}
    </div>
  );
}

export default CardSoldier; 