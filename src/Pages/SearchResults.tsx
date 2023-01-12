import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { IPuppy } from "../usertypes";
import "./SearchResults.css"
import PuppyIndividual from "../Components/PuppyIndividual";

const SearchResults = () => {
    const params = useParams();
    console.log(params);
    const [searchResults, setSearchResults] = useState<IPuppy[]>([])
    const [connectionWorking, setConnectionWorking] = useState<boolean>(true);
    const [featuredPuppy, setFeaturedPuppy] = useState<IPuppy>({id:null, name:"Puppy", breed:"Breed", birthDate:"Birthdate"});
    const [showFeatured, setShowFeatured] = useState<boolean>(false);

    const fetchPuppiesFromAPI = async () => {
        try {
            const response = await fetch(`http://localhost:5177/api/Puppies/searchname/${params.searchquery}`);
            const data = await response.json();
            console.log(data)
            setSearchResults(data)
        }
        catch(e) {
            setConnectionWorking(false);
            console.error("Could not resolve API fetch ☹️ ", e)
        }
    }

    const showError = () => {
        return <div className="PuppyList_Errormessage">
            <h2>Error!</h2>
            <p>Could not fetch data from the server ☹️</p>
        </div>
    }

        

    const renderFeaturedPuppy = (e : IPuppy) => {
        console.log(e);
        setFeaturedPuppy(e);
        setShowFeatured(true);
    }

    const renderFetchedPuppies = () => {
    
        return <>
            {showFeatured && <PuppyIndividual puppy={featuredPuppy} setShowFeatured={setShowFeatured} fetchPuppiesFromAPI={fetchPuppiesFromAPI}/>}
            <div className={showFeatured ? "SearchResults__hide" : ""}>
            
                <table className="SearchResults__table">
                {/* {showFeatured && <PuppyIndividual id={featuredPuppy.id} name={featuredPuppy.name} breed={featuredPuppy.breed} birthDate={featuredPuppy.birthDate} setShowFeatured={setShowFeatured}/>} */}

                <tbody>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Breed</th>
                    <th>Birthdate</th>
                    {/* <th></th> */}
                </tr>
                {searchResults.map((p,index) =>
                <tr 
                className="SearchResults__row" 
                key={p.id}
                onClick={() => renderFeaturedPuppy(p)}>
                    <td>{index+1}</td>
                    <td>{p.name.length < 12 ? p.name : `${p.name.slice(0,10)}...`}</td>
                    <td>{p.breed.length < 12 ? p.breed : `${p.breed.slice(0,10)}...`}</td>
                    <td>{p.birthDate}</td>
                    {/* <td className="PuppyList__editbutton">Edit</td> */}
                </tr>
                )}
                </tbody>
                </table>
                </div>
        </>
    }
    
    useEffect(() => {
        (async () => {
            fetchPuppiesFromAPI();
        })();
    
    }, [])

    return <section className="SearchResults">
        <h2 className="SearchResults__title">Unstyled search results</h2>
        <p className="SearchResults__howMany"><b>Your search gave {searchResults.length} hits.</b></p>
        {connectionWorking && (searchResults.length > 0 ? renderFetchedPuppies() : "No results!")}
        {!connectionWorking && showError()}
        <Link to={"/"}>
            <button className="SearchResults__returnbutton">Return</button>
        </Link>
    </section>
}

export default SearchResults;