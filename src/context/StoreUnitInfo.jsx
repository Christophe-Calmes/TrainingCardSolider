import React, { useState, createContext } from 'react';

const FigurineInformations = createContext();

export const FigurineInformationsProvider = ({ children }) => {
  const [figurineData, setFigurineData] = useState({
    figurineInfos: null,
    RSInfos: null,
    equipementFigurineInfos: null,
  });

  const setFigurineInfos = (newData) => {
    setFigurineData(newData);
  };

  return (
    // ici on passe les données et la fonction setFigurineInfos dans le contexte
    <FigurineInformations.Provider value={{ ...figurineData, setFigurineInfos }}> 
    {/* ici on passe les données et la fonction setFigurineInfos dans le contexte */}
      {children}
    </FigurineInformations.Provider>
  );
};

export default FigurineInformations;

