import { useState, useEffect, useContext } from "react";


const debug = false;
export const GetSoldier = ({setDataUnit}) => {
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
  

    if(unitInfos.length >= 3) {
       setDataUnit(unitInfos);
    }
    if(debug && unitInfos.length >= 3) {
        console.log(unitInfos);
    }


    return (
        <div></div>
       )

  
}
export default GetSoldier;
