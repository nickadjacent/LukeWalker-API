import React, { useState } from 'react';
import { navigate } from '@reach/router';



const HomePage = () => {
    const [state, setState] = useState(
        {
            value: '',
            id: '',
        }
    );

    const onSearchSubmit = event => {

        event.preventDefault();

        navigate(`/${state.value}/${state.id}`);

    }

    return (
        <div value={{ state, setState }}>
            <form onSubmit={event => onSearchSubmit(event)}>
                <label>Search for:</label>
                <select onChange={event => setState({ ...state, value: event.target.value })}>
                    <option hidden>- Choose Category -</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <label>ID:</label>
                <input onChange={event => setState({ ...state, id: event.target.value })} placeholder="Enter an ID" />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}



export default HomePage;