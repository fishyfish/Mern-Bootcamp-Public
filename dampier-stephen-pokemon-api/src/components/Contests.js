import React, {useState, useEffect} from 'react';

function Contests(props) {
    const [ contestUrl, setContestUrl ] = useState([]);

    const displayContests = () => {
        fetch("https://pokeapi.co/api/v2/contest-type/")
        .then((response) => {
        response.json()
            .then((jsonResponse) => {
            console.log(jsonResponse);
            setContestUrl(jsonResponse.results); // results not url ding bat
            })
            .catch((jsonError) => {
            console.log(jsonError);
            })
        })
        .catch((error) => {
        console.log(error);
        
        })
};
    
    return (
        <div>
            <ol className="pokemon contest"> 
            <button className="pokemonBtn" onClick={displayContests}>Display Contests</button>
            {
                contestUrl.map((contestUrl, index) => (
                <li key={index}>
                    <span className=""><label>Name:</label>  <a href={contestUrl.url }>{contestUrl.name } </a></span>
                </li>
                ))
            }
            </ol> 
        </div>
    );
}



export default Contests;

