import React, { useEffect } from "react";
import "./PuppyIndividual.css";
import {IPuppy} from "../usertypes.js";

const PuppyIndividual = (props: any) => {

    // useEffect(()=> {
    //     console.log("Props: ", props)
    //     console.log("Name: ", props.name)
    //     console.log("Breed: ", props.breed)
    //     console.log("DoB: ", props.birthDate)
        
    // }, )

    const deleteThisPuppy = async () => {
        // http://localhost:5177/api/Puppies/67e4b842-bb62-4c5b-9922-9b8e193fa636

        try {
            if(window.confirm("Are you sure you want to delete this puppy?")) {
                const deleteData = await fetch("http://localhost:5177/api/Puppies/" + props.puppy.id, {
                    method: "DELETE",
                    headers: { 
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    },
                    
                });
                props.fetchPuppiesFromAPI();
                props.setShowFeatured(false);
            }
        }
        catch (e) {
            alert("Deletion failed");
            console.error("Error while deleting puppy! ☹️", e);
        }
    }

    return <div className="Puppy__Card">
        <img className="Puppy__image" src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"></img>
        <ul className="Puppy__info">
            <li><b>Name:</b><br/> {props.puppy.name ? props.puppy.name : "Missing"}</li>
            <li><b>Breed:</b><br/> {props.puppy.breed ? props.puppy.breed : "Missing"}</li>
            <li><b>Birthdate:</b><br/> {props.puppy.birthDate ? props.puppy.birthDate : "Missing"}</li>
            <li><b>Id:</b><br/> {props.puppy.id ? props.puppy.id : "Missing"}</li>
        </ul>
        <div className="Puppy__controls">
            <button className="Puppy__button" onClick={deleteThisPuppy}>Delete</button>
            <button className="Puppy__button" >Update (not impl)</button>
        </div> 
        <div className="Puppy__closeWindow" onClick={() => props.setShowFeatured(false)}>❌<br/>Close</div>
    </div>
}

export default PuppyIndividual;