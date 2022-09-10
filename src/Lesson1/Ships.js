import React from 'react';
import './styles.css'

const Ships = ({mission_name,launch_year,mission_path_small}) => {
    return (
        <div className='ship'>
            <h1>{mission_name}</h1>
            <h3>{launch_year}</h3>
            <img src={mission_path_small} alt=""/>
        </div>
    );
};

export default Ships;