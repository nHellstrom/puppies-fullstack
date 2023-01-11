import React from "react";
import "./ControlPanel.css";
import AddPuppyForm from "./AddPuppyForm";
import { IPuppy } from "../usertypes";

const ControlPanel = (props : any) => {
    // const puppyList : IPuppy[] = props.state;
    // const setPuppyList : React.Dispatch<React.SetStateAction<IPuppy[]>>= props.setState;
    
    const showAction = () => {

    }

    return <section className="ControlPanel">
        <h2 className="Bifurcation__title">Control Panel</h2>
        <div className="ControlPanel__leaf">
            <button className="ControlPanel__button">Add New<br/>Puppy</button>
            <button className="ControlPanel__button">Action</button>
            <button className="ControlPanel__button">Another</button>
        </div>
        <AddPuppyForm fetchPuppiesFromAPI={props.fetchPuppiesFromAPI}/>
    </section>
}

export default ControlPanel