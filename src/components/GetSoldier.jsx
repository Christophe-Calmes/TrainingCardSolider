// GetSoldier.js
import { useState, useEffect, useContext } from 'react';
import FigurineInformations from '../context/StoreUnitInfo';

export const GetSoldier = () => {
  const [unitInfos, setUnitInfo] = useState([]);
  const { setFigurineInfos } = useContext(FigurineInformations);

    // Fonction pour récupérer les informations de l'unité
 const fetchUnitInfo = async() => {
  // Récupération des données de l'API
    const response = await fetch('https://apir5.graines1901.com/sources/APIpublic/oneFigurine.php?idFigurine=10');
  // ici on passe les données et la fonction setFigurineInfos dans le contexte
    if (response.ok) {
      // Si la réponse est ok, on récupère les données
      const data = await response.json();
      // le console log Christoph c'est pour toi
      console.log("Données reçues de l'API:", data); // Log des données de l'API

      setUnitInfo(data);
      if (data.length >= 3) {
        // Ajustement de la condition en fonction de la structure des données
        setFigurineInfos({
          figurineInfos: data[0][0],
          RSInfos: data[1][0],
          equipementFigurineInfos: data[2][0]
        });
      } else {
        console.error("Données insuffisantes reçues de l'API");
      }
    } else {
      console.error("Erreur lors de la récupération des données de l'API");
    }
  };
 // useEffect pour récupérer les informations de l'unité au chargement du composant uniquement (équivalent du componentDidMount)
  useEffect(() => {
    fetchUnitInfo();
  }, []);  

    if (unitInfos.length = 3) {
        return <div><p>**Loading**</p></div>;
    }

    // Le composant ne rend rien de visuel lui-même, mais transmet les données via le contexte
    return null;
}

export default GetSoldier;
