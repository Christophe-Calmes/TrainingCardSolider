// GetSoldier.js
import { useState, useEffect, useContext } from 'react';
import FigurineInformations from '../context/StoreUnitInfo';

export const GetSoldier = () => {
  const [unitInfos, setUnitInfo] = useState([]);
  const { setFigurineInfos } = useContext(FigurineInformations);

    // Fonction pour récupérer les informations de l'unité
    const fetchUnitInfo = async() => {
        const response = await fetch('https://apir5.graines1901.com/sources/APIpublic/oneFigurine.php?idFigurine=10');
        if (response.ok) {
            const data = await response.json();
            setUnitInfo(data);
            if (data.length >= 3) {
              setFigurineInfos({
                figurineInfos: data[0][0],
                RSInfos: data[1][0],
                equipementFigurineInfos: data[2][0]
              });
            }
        } else {
            console.error("Erreur lors de la récupération des données");
        }
    };
    
    useEffect(() => {
        fetchUnitInfo();
    }, []); 

    if (unitInfos.length < 3) {
        return <div><p>**Loading**</p></div>;
    }

    // Le composant ne rend rien de visuel lui-même, mais transmet les données via le contexte
    return null;
}

export default GetSoldier;
