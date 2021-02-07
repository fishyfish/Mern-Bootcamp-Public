import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Router, Link } from '@reach/router';

function Contests(props) {
    const {count} = props;
    // const [ contestCount, setContestCount ] = useState(0);
    // const [ pokemon, setPokemon ] = useState([]);
    const [ contestUrl, setContestUrl ] = useState([]);

    const buttonClick = () => {
        axios.get("https://pokeapi.co/api/v2/contest-type")
        .then((response) => {
            console.log(response);
            // setPokemon(response.data.results);
            // setContestCount(response.data.count);
            setContestUrl(response.data.url);
        })
        .catch((error)=> {
            console.log(error);
        });
    };

    return (
        <div>
            <h3>nothing is here holmes.</h3>
            <button onClick={buttonClick}>Show Pokemon Contests!</button>
                {
                <ol className="pokemon contest"> 
                {
                    contestUrl.map((contestUrl, index) => (
                        <li key={index}>
                            <span className="nobreak">{ contestUrl.url }</span>
                        </li>
                    ))
                }
                </ol> 
                }
        </div>
    );
}

export default Contests;

