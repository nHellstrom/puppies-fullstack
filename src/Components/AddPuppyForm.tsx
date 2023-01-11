import React from "react";
import { IPuppy, IPuppyNoID } from "../usertypes";

const AddPuppyForm = (props : any) => {
    // const reRenderPuppyList : IPuppy[] = props.state;
    // const reRenderList = props.fetchAllFunction;

    const [name, setName] = React.useState<string>("name");
    const [breed, setBreed] = React.useState<string>("breed");
    const [birthDate, setBirthDate] = React.useState<string>("2000-01-01");

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
                <input type="text" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            </label>
        </form>
        <button onClick={postNewPuppy}>Post a test puppy</button>
    </>
}

export default AddPuppyForm;