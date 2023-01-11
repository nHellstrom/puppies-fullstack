import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { IPuppy } from "../usertypes";
import "./SearchResults.css"

const SearchResults = () => {
    const params = useParams();
    console.log(params);
    const [searchResults, setSearchResults] = useState<IPuppy[]>([])

    const fetchPuppiesFromAPI = async () => {
        try {
            const response = await fetch(`http://localhost:5177/api/Puppies/searchname/${params.searchquery}`);
            const data = await response.json();
            console.log(data)
            setSearchResults(data)
        }
        catch(e) {
            console.error("Could not resolve API fetch ☹️ ", e)
        }
    }

    // const showError = () => {
    //     return <div className="PuppyList_Errormessage">
    //         <h2>Error!</h2>
    //         <p>Could not fetch data from the server ☹️</p>
    //     </div>
    // }

    const renderFetchedPuppies = () => {

        return <table className="SearchResults__table">
            <tbody>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Breed</th>
                <th>Birthdate</th>
                {/* <th></th> */}
            </tr>
            {searchResults.map((p,index) =>
            <tr className="SearchResults__row" key={p.id}>
                <td>{index+1}</td>
                <td>{p.name.length < 12 ? p.name : `${p.name.slice(0,10)}...`}</td>
                <td>{p.breed.length < 12 ? p.breed : `${p.breed.slice(0,10)}...`}</td>
                <td>{p.birthDate}</td>
                {/* <td className="PuppyList__editbutton">Edit</td> */}
            </tr>
            )}
            </tbody>
        </table>
    }
    
    useEffect(() => {
        (async () => {
            fetchPuppiesFromAPI();
        })();
    
    }, [])

    return <section className="SearchResults">
        <h2 className="SearchResults__title">Unstyled search results</h2>
        <p className="SearchResults__howMany"><b>Your search gave {searchResults.length} hits.</b></p>
        {searchResults.length > 0 ? renderFetchedPuppies() : "No results!"}
    </section>
}

export default SearchResults;