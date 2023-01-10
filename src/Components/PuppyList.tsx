import React, { useEffect } from "react";
import "./PuppyList.css";
import PuppyIndividual from "./PuppyIndividual";
import {IPuppy} from "../usertypes.js";
import ControlPanel from "./ControlPanel";


const PuppyList = () => {
    const [puppyList, setPuppyList]= React.useState<IPuppy[] | undefined>(undefined);
    const [connectionWorking, setConnectionWorking] = React.useState< undefined | boolean>(undefined);

    
    const fetchPuppiesFromAPI = async () => {
        try {
            const response = await fetch("http://localhost:5177/api/Puppies");
            const data = await response.json();
            console.log(data)
            setPuppyList(data);
            setConnectionWorking(true);
        }
        catch(e) {
            console.error("Could not resolve API fetch ☹️ ", e)
            setConnectionWorking(false);
        }
    }

    const showError = () => {
        return <div className="PuppyList_Errormessage">
            <h2>Error!</h2>
            <p>Could not fetch data from the backend ☹️</p>
        </div>
    }

    const renderFetchedPuppies = () => {
        // return puppyList != undefined && puppyList.map((p,index) => 
        //     <><PuppyIndividual name={p.name} id={p.id} breed={p.breed} birthDate={p.birthDate} key={p.id}/></>
        // )

        return <table className="PuppyList__table">
            <tbody>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Breed</th>
                <th>Birthdate</th>
                <th></th>
            </tr>
            {puppyList !== undefined && puppyList.map((p,index) =>
            <tr className="PuppyList__puppyrow" key={p.id}>
                <td>{index+1}</td>
                <td>{p.name.length < 12 ? p.name : `${p.name.slice(0,10)}...`}</td>
                <td>{p.breed.length < 12 ? p.breed : `${p.breed.slice(0,10)}...`}</td>
                <td>{p.birthDate}</td>
                <td>Edit</td>
            </tr>
            )}
            </tbody>
        </table>
    }
    
    useEffect(() => {
        (async () => {
            fetchPuppiesFromAPI();
        })();
    
    }, [])

    return <>
    <section className="Bifurcation">
        <h2 className="Bifurcation__title">Puppy list</h2>
        <p>Currently has {puppyList?.length ?? "no"} puppies</p>
        <>
        {connectionWorking ? renderFetchedPuppies() : showError()}
        </>
        
        {/* <PuppyIndividual name="Testdog" id={null} breed="Testbreed" birthDate="1999-01-02" /> */}
    </section>
    <section>
        <ControlPanel fetchPuppiesFromAPI={fetchPuppiesFromAPI}/>
    </section>
    </>
}

export default PuppyList;