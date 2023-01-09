import React from "react";
import "./PuppyList.css";
import PuppyIndividual from "./PuppyIndividual";
const [puppyList, setPuppyList]= React.useState([]);

const PuppyList = () => {
    return <div className="PuppyList">
        <PuppyIndividual/>
    </div>
}

export default PuppyList;