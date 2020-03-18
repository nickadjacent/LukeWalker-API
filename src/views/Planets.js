import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Planets = ({ id }) => {
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        // make api request to get data and then set planets
        axios
            .get("https://swapi.co/api/planets/" + id)
            .then(res => {
                console.log(res.data);
                setPlanet(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>{planet.name}</h1>
            <br />
            <h3>Terrain: {planet.terrain}</h3>
            <h3>Climate: {planet.climate}</h3>
            <h3>Diameter: {planet.diameter}</h3>
            <h3>Population: {planet.population}</h3>
        </div>
    )
}


export default Planets;