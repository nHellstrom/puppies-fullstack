import React from "react";
import { IPuppyNoID } from "../usertypes";

const AddPuppyForm = () => {
    const [name, setName] = React.useState<string | undefined>(undefined);
    const [breed, setBreed] = React.useState<string | undefined>(undefined);
    const [birthDate, setBirthDate] = React.useState<string | undefined>(undefined);

    const TestPuppy : IPuppyNoID = {
        name: "TestPup",
        breed: "TestBreed",
        birthDate: "1984-01-01"
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