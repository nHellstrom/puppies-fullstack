import React from "react";
import { IPuppy, IPuppyNoID } from "../usertypes";

const AddPuppyForm = (props : any) => {
    // const reRenderPuppyList : IPuppy[] = props.state;
    // const reRenderList = props.fetchAllFunction;

    const [name, setName] = React.useState<string | undefined>(undefined);
    const [breed, setBreed] = React.useState<string | undefined>(undefined);
    const [birthDate, setBirthDate] = React.useState<string | undefined>(undefined);

    const TestPuppy : IPuppyNoID = {
        name: "TestPup",
        breed: "TestBreed",
        birthDate: "TestDate" 
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
        <button onClick={postNewPuppy}>Post a test puppy</button>
    </>
}

export default AddPuppyForm;