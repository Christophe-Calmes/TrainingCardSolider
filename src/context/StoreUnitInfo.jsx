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
    <FigurineInformations.Provider value={{ ...figurineData, setFigurineInfos }}>
      {children}
    </FigurineInformations.Provider>
  );
};

export default FigurineInformations;

