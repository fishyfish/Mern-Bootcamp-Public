import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Contests(props) {
    const {count} = props;
    const [ contestCount, setContestCount ] = useState(0);
    const [ pokemon, setPokemon ] = useState([]);
    const [ contestUrl, setContestUrl ] = useState([]);

    const buttonClick = () => {
        fetch ("https://pokeapi.co/api/v2/contest-type")
        .then((response) => {
            console.log(response);
            setPokemon(response.data.results);
            setContestCount(response.data.count);
        })
        .catch((error)=> {
            console.log(error);
        });
    };

    return (
        <div className="App">
            <h4>Tot</h4>
            <button onClick={buttonClick}>Click the DingDang Button</button>
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
        </div>
    );
}



export default Contests;

