import FigurineInformations from '../context/StoreUnitInfo';
import CardSolider from './CardSoldier';
const debug = false;

export const TrasmitContexts = ({figurineInfos, RSInfos, equipementFigurineInfos }) => {
if(debug) {
    console.log(figurineInfos);
    console.log(RSInfos);
    console.log(equipementFigurineInfos);
}
    

  return (
    <div>
    <FigurineInformations.Provider value={{figurineInfos: figurineInfos}}>
      <CardSolider/>
    </FigurineInformations.Provider>
   </div>
  )
}
export default TrasmitContexts;