import React, { useState, useEffect } from 'react';
import axios from 'axios';


const People = ({ id }) => {
    const [person, setPerson] = useState({});

    useEffect(() => {
        // make api request to get data and then set people
        axios
            .get("https://swapi.co/api/people/" + id)
            .then(res => {
                console.log(res.data);
                setPerson(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>{person.name}</h1>
            <br />
            <h3>Height: {person.height}</h3>
            <h3>Mass: {person.mass}</h3>
            <h3>Gender: {person.gender}</h3>
            <h3>Hair Color: {person.hair_color}</h3>
        </div>

    )
}


export default People;