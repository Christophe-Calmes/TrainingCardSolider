import { useState, useEffect } from "react";
const debug = true;
export const GetSoldier = () => {
    const [unitInfos, setUnitInfo] = useState([]);
    const fetchUnitInfo = async() => {
        const response = await fetch('https://apir5.graines1901.com/sources/APIpublic/oneFigurine.php?idFigurine=10');
        if(response.status === 200) {
            const data = await response.json();
            setUnitInfo(data);
        } else {
            return "Error";
        }

    }
    useEffect(()=>{
        fetchUnitInfo();
    }, [])

    let figurineInfos = '';
    let RSInfos = '';
    let equipementFigurineInfos = '';
    if(unitInfos.length === 3) {
        console.log(true);
        figurineInfos = unitInfos[0];
        RSInfos = unitInfos[1];
        equipementFigurineInfos = unitInfos[2]
    }
    if(debug && unitInfos.length === 3) {
        console.log(figurineInfos)
        console.log(RSInfos)
        console.log(equipementFigurineInfos)
    }
    
    
    //const FIGURINES_INFOS = unitInfos[0];
    //     const RS_INFOS = unitInfos[1];
    //     const WEAPONS_INFOS = unitInfos[2];

    //console.log(FIGURINES_INFOS);
    //    console.log(RS_INFOS);
    //    console.log(WEAPONS_INFOS);
        


    

  

  return (
   <div>
    <p 
    figurineInfos={figurineInfos}
    RSInfos={RSInfos}
    equipementFigurineInfos={equipementFigurineInfos}
    ></p>
   </div>
  )
}
export default GetSoldier;
