import { useState, useEffect } from "react";
import TrasmitContexts from './TrasmitContexts';

const debug = false;
export const GetSoldier = () => {


    const [unitInfos, setUnitInfo] = useState([]);

    useEffect(()=>{
        const fetchUnitInfo = async() => {
            const response = await fetch('https://apir5.graines1901.com/sources/APIpublic/oneFigurine.php?idFigurine=10');
            if(response.status === 200) {
                const data = await response.json();
                setUnitInfo(data);
            } else {
                return "Error";
            }
    
        }
        fetchUnitInfo();
    }, [])
  
    const figurineInfos = [];
    const RSInfos = [];
    const equipementFigurineInfos = [];
    if(unitInfos.length >= 3) {
        figurineInfos.push(unitInfos[0]);
        RSInfos.push(unitInfos[1]);
        equipementFigurineInfos.push(unitInfos[2]);
    }
    if(debug && unitInfos.length === 3) {
        console.log(figurineInfos[0][0].idFigurine)
        console.log(RSInfos)
        console.log(equipementFigurineInfos)
    }

if(unitInfos.length >= 3) {
    return (
    <TrasmitContexts
        figurineInfos={figurineInfos[0][0]}
        RSInfos={RSInfos[0][0]}
        equipementFigurineInfos={equipementFigurineInfos[0][0]}
    />
       )
} else {
    return (
        <div><p>**Loading**</p></div>
    )
}
  
}
export default GetSoldier;
