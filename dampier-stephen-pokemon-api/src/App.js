
import './App.css';
import logo from './pokeapi.png';
import React, {useState, useEffect} from 'react';

function App() {
    const [ pokemon, setPokemon ] = useState([]);
    const [ pokemonCount, setPokemonCount ] = useState([0]);
    const [ contestCount, setContestCount ] = useState([]);
    const [ contestUrl, setContestUrl ] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
        .then((response) => {
        response.json()
            .then((jsonResponse) => {
            console.log(jsonResponse);
            setPokemon(jsonResponse.results);
            })
            .catch((jsonError) => {
            console.log(jsonError);
            })
        })
        .catch((error) => {
        console.log(error);
        
        })
    }, [])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
        response.json()
            .then((jsonResponse) => {
            console.log(jsonResponse);
            setPokemonCount(jsonResponse.count);
            })
            .catch((jsonError) => {
            console.log(jsonError);
            })
        })
        .catch((error) => {
        console.log(error);
        
        })
    }, [])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/contest-type/")
        .then((response) => {
        response.json()
            .then((jsonResponse) => {
            console.log(jsonResponse);
            setContestCount(jsonResponse.count);
            })
            .catch((jsonError) => {
            console.log(jsonError);
            })
        })
        .catch((error) => {
        console.log(error);
        
        })
    }, [])
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
        <div className="App">
            <img src={logo} alt="Pokemon Logo" />
            <h2>{contestCount} Pokemon Contests</h2>
            <ol className="pokemon contest"> 
            <button className="pokemonBtn" onClick={displayContests}>Display Contests</button>
            {
                contestUrl.map((contestUrl, index) => (
                <li key={index}>
                    <span className=""><label>Name:</label> {contestUrl.name } </span>
                    <span className=""><label>Url:</label> <a href={contestUrl.url }>{contestUrl.url }</a></span>
                </li>
                ))
            }
            </ol> 
            <h1>{pokemonCount} Pokemon's &amp; Counting!</h1>
            <ol className="pokemon">
        {
            pokemon.map((pokemon, index) => (
            <li key={index}>
                <span className="nobreak">{pokemon.count}{pokemon.name} </span>
            </li>
            ))
        }
        </ol>
    </div>
    )
    }
    export default App;