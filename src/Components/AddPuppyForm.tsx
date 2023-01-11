import React from "react";
import { IPuppy, IPuppyNoID } from "../usertypes";
import "./AddPuppyForm.css";

const AddPuppyForm = (props : any) => {
    // const reRenderPuppyList : IPuppy[] = props.state;
    // const reRenderList = props.fetchAllFunction;

    const today = new Date();
    const todayString = 
        `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,"0")}-${today.getDate()}`;

    console.log(todayString);

    const [name, setName] = React.useState<string>("Name");
    const [breed, setBreed] = React.useState<string>("Breed");
    const [birthDate, setBirthDate] = React.useState<string>(todayString);

    

    const TestPuppy : IPuppyNoID = {
        name: name,
        breed: breed,
        birthDate: birthDate 
    };

    const postNewPuppy = async () => {
        try {
            const postData = await fetch("http://localhost:5177/api/Puppies", {
                method: "POST",
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(TestPuppy),
            });
            let response = await postData.json();
            console.log("Pup has been posted! ✉️ Server response: ", response)
            props.fetchPuppiesFromAPI();
        }
        catch (e) {
            console.error("Error while posting form! ☹️", e);
        }
    }
    

    return <>
        <form className="PuppyForm__Form">
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br/>
            <label>
                Breed:
                <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
            </label>
            <br/>
            <label>
                Birthdate:
                <input type="date" value={birthDate} min="2000-01-01" max={todayString} onChange={(e) => setBirthDate(e.target.value)} />
            </label>
            <br/>
            <button onClick={postNewPuppy}>Post to DB</button>
        </form>
    </>
}

export default AddPuppyForm;