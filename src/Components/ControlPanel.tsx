import React from "react";
import "./ControlPanel.css";

const ControlPanel = () => {
    return <section className="Bifurcation Bifurcation__smaller">
        <h2 className="Bifurcation__title">Control Panel</h2>
        <div className="ControlPanel__leaf">
            <button className="ControlPanel__button">Add New<br/>Puppy</button>
            <button className="ControlPanel__button">Action</button>
            <button className="ControlPanel__button">Another</button>
        </div>
    </section>
}

export default ControlPanel