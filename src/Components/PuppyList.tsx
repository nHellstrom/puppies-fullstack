import React, { useEffect } from "react";
import "./PuppyList.css";
import PuppyIndividual from "./PuppyIndividual";
import {IPuppy} from "../usertypes.js";


const PuppyList = () => {
    const [puppyList, setPuppyList]= React.useState<IPuppy[] | undefined>(undefined);
    const [connectionWorking, setConnectionWorking] = React.useState< undefined | boolean>(undefined);

    
    const fetchPuppiesFromAPI = async () => {
        const response = await fetch("http://localhost:5177/api/Puppies");
        const data = await response.json();
        console.log(data)
        setPuppyList(data);
    }

    const showError = () => {
        return <div className="PuppyList_Errormessage">
            <h2>Error!</h2>
            <p>Could not fetch data from the backend ☹️</p>
        </div>
    }

    const renderFetchedPuppies = () => {
        return puppyList != undefined && puppyList.map(p => 
            <PuppyIndividual name={p.name} id={p.id} breed={p.breed} birthDate={p.birthDate} key={Math.random()}/>
        )
    }
    
    useEffect(() => {
        (async () => {
            try {
                fetchPuppiesFromAPI();
            }
            catch(e) {
                console.error("Could not resolve API fetch. ", e)
            }
        })();
    
    }, [])

    return <section className="Bifurcation">
        <h2 className="Bifurcation__title">Puppy list</h2>
        <>
        {connectionWorking ? renderFetchedPuppies() : showError()}
        </>
        
        {/* <PuppyIndividual name="Testdog" id={null} breed="Testbreed" birthDate="1999-01-02" /> */}
    </section>
}

export default PuppyList;