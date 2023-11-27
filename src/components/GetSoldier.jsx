import { useState, useEffect, useContext } from "react";
import StoreUnitInfo from '../context/StoreUnitInfo';
import CardSoldier from "./CardSoldier";


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
        <div><p>**Datas load**</p></div>
       )
} else {
    return (
        <div><p>**Loading**</p></div>
    )
}
  
}
export default GetSoldier;
