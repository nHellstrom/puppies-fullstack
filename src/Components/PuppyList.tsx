import React, { useEffect } from "react";
import "./PuppyList.css";
import PuppyIndividual from "./PuppyIndividual";
import {IPuppy} from "../usertypes.js";


const PuppyList = () => {
    const [puppyList, setPuppyList]= React.useState<IPuppy[] | undefined>(undefined);

    
    // const fetchPuppiesFromAPI = async () => {
    //     const response = await fetch("http://localhost:5177/api/Puppies");
    //     const data = await response.json();
    //     console.log(data)
    //     setPuppyList(data);
    // }
    
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:5177/api/Puppies");
            const data = await response.json();
            console.log(data)
            setPuppyList(data);
        })();
    
    }, [])

    return <div className="PuppyList">
        <>
        {puppyList != undefined && puppyList.map(p => 
            <PuppyIndividual name={p.name} id={p.id} breed={p.breed} birthDate={p.birthDate} key={Math.random()}/>
        )}
        </>
        
        {/* <PuppyIndividual name="Testdog" id={null} breed="Testbreed" birthDate="1999-01-02" /> */}
    </div>
}

export default PuppyList;