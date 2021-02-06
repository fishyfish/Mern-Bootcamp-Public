
import './App.css';
import logo from './pokeapi.png';
import React, {useState, useEffect} from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import Contests from './components/Contests';
import Pokemon from './components/Pokemon';

function App() {
    const [ pokemon, setPokemon ] = useState([]);
    const [ pokemonCount, setPokemonCount ] = useState([]);
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
        fetch("https://pokeapi.co/api/v2/contest-type")
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

    // const GetMe = () => {
        console.log('button got clicked');
        useEffect(() => {
            fetch("https://pokeapi.co/api/v2/contest-type/")
            .then((response) => {
            response.json()
                .then((jsonResponse) => {
                console.log(jsonResponse);
                setContestUrl(jsonResponse.results);
                })
                .catch((jsonError) => {
                console.log(jsonError);
                })
            })
            .catch((error) => {
            console.log(error);
            
            })
        }, [])
    // };

    return (
        <div className="App">
            <img src={logo} alt="Pokemon Logo" />
            {/* <button type="submit" className="pokemonBtn" onClick={GetMe}>Fetch Pokemon Contests</button> */}
            <h2>{contestCount} Pokemon Contests</h2>
            <Router>
                <Contests path="/Contests"></Contests>
                <Pokemon path="/Pokemon"></Pokemon>
            </Router> 
            <ol className="pokemon contest">
                { console.log('Countest Count', contestCount ) }
                { console.log('Countest Results', contestUrl.url ) }
                <h3>Contest Count: {contestCount}</h3>
                {
                    contestUrl.map((contestUrl, index) => (
                        <li key={index}>
                            <span className="nobreak">{ contestUrl.url }</span>
                        </li>
                        ))
                }
            </ol>
            <h1>{pokemonCount} Pokemon's &amp; Counting!</h1>
            <ol className="pokemon">
            { console.log(useEffect) }
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