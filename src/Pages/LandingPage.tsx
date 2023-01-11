import React from "react";
import { Link } from "react-router-dom";
import PuppyList from "../Components/PuppyList";
import "./LandingPage.css"

const LandingPage = () => {
    const [search, setSearch] = React.useState<string>("");

    // const searchButtonClicked = (e : any) => {
    //     history.pushState(null, "", "puppySearch");
    // }

    return <section className="LandingPage">
        <div className="LandingPage__HeroSearch">
            {/* <h2 className="LandingPage__Title LandingPage__Title--Dog">🐕</h2> */}
            <h2 className="LandingPage__Title">🐕<br/>DogDogGo</h2>
            <p className="LandingPage__Welcometext">When you need privacy for your puppers!</p>
            <div className="LandingPage__Search">
                <label className="LandingPage__Searchfield">
                    Search dogs by name:
                    <input className="LandingPage__SearchfieldField" type="text" placeholder={"Name of the dog"} value={search} onChange={(e) => setSearch(e.target.value)}/>
                </label>
            <Link to={"search?name=" + search}>
                <button className="LandingPage__Searchbutton">Go!</button>
            </Link>
            </div>
        </div>
    </section>
}

export default LandingPage