import React, { useEffect, useState } from "react";
import "./PuppyIndividual.css";
import {IPuppy} from "../../usertypes.js";

const PuppyIndividual = (props: any) => {
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [name, setName] = useState<string>(props.puppy.name)
    const [breed, setBreed] = useState<string>(props.puppy.breed)
    const [birthdate, setBirthdate] = useState<string>(props.puppy.birthDate)

    const deleteThisPuppy = async () => {
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

    const saveChangesToPuppy = async () => {
        try {
            if(window.confirm("Are you sure you want to update this puppy?")) {
                const updateData = await fetch("http://localhost:5177/api/Puppies/" + props.puppy.id, {
                    method: "PUT",
                    headers: { 
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({name:name, breed:breed, birthdate:birthdate}),
                });
                // let response = await updateData.json();
                // console.log("Pup has been updated! ✉️ Server response: ", response)
                props.fetchPuppiesFromAPI();
                setIsUpdating(!isUpdating);
            }
        }
        catch (e) {
            alert("Update failed");
            console.error("Error while updating puppy! ☹️", e);
        }
    }

    return <div className="Puppy__Card">
        <img className="Puppy__image" src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"></img>
        <ul className={`Puppy__info Puppy__info--updating-${isUpdating}`}>
            <li><b>Name:</b><br/> {name ? name : "Missing"}</li>
            <li><b>Breed:</b><br/> {breed ? breed : "Missing"}</li>
            <li><b>Birthdate:</b><br/> {birthdate ? birthdate : "Missing"}</li>
            <li><b>Id:</b><br/> {props.puppy.id ? props.puppy.id : "Missing"}</li>
        </ul>
        <ul className={`Puppy__info Puppy__info--updateInput-${isUpdating}`}>
            <li><b>Name:</b><br/> <input type="text" placeholder={props.puppy.name} value={name} onChange={(e) => setName(e.target.value)}></input></li>
            <li><b>Breed:</b><br/> <input type="text" placeholder={props.puppy.breed} value={breed} onChange={(e) => setBreed(e.target.value)}></input></li>
            <li><b>Birthdate:</b><br/> <input type="text" placeholder={props.puppy.birthDate} value={birthdate} onChange={(e) => setBirthdate(e.target.value)}></input></li>
            <button className="Puppy__info--updateInputButton" onClick={() => saveChangesToPuppy()}>Save Changes</button>
        </ul>
        <div className="Puppy__controls">
            <button className="Puppy__button" onClick={deleteThisPuppy}>Delete</button>
            <button className="Puppy__button" onClick={() => setIsUpdating(!isUpdating)}>Update</button>
        </div> 
        <div className="Puppy__closeWindow" onClick={() => props.setShowFeatured(false)}>❌<br/>Close</div>
    </div>
}

export default PuppyIndividual;