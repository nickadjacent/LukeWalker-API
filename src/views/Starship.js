import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Starships = ({ id }) => {
    const [starship, setStarship] = useState({});

    useEffect(() => {
        // make api request to get data and then set starships
        axios
            .get("https://swapi.co/api/starships/" + id)
            .then(res => {
                console.log(res.data);
                setStarship(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>{starship.name}</h1>
            <br />
            <h3>Model: {starship.model}</h3>
            <h3>Manufacturer: {starship.manufacturer}</h3>
            <h3>Length: {starship.length}</h3>
            <h3>Starship Class: {starship.starship_class}</h3>
        </div>
    )
}


export default Starships;