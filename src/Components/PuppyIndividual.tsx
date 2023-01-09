import React, { useEffect } from "react";
import "./PuppyIndividual.css";
import {IPuppy} from "../usertypes.js";

const PuppyIndividual = (props: IPuppy) => {

    useEffect(()=> {
        console.log("Props: ", props)
        console.log("Name: ", props.name)
        console.log("Breed: ", props.breed)
        console.log("DoB: ", props.birthDate)
    }, )

    return <div className="Puppy__Card">
        <img className="Puppy__image" src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
        <ul className="Puppy__info">
            <li><b>Name:</b><br/> {props.name} </li>
            <li><b>Breed:</b><br/> {props.breed}</li>
            <li><b>DoB:</b><br/> {props.birthDate}</li>
        </ul>
    </div>
}

export default PuppyIndividual;