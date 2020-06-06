import React from 'react';

import { FaSearch } from 'react-icons/fa';  


const ClimaForm = props => (
    <div className="card card-body">
        
        <form onSubmit={props.getWeather}>
            <div className="form-group w-100 h-50">
                <input type="text" name="city" placeholder="Ciudad"
                className="form-control" autoFocus/>
            </div>
            <div className="form-group w-100">
                <input type="text" name="country" placeholder="País"
                className="form-control"/>
            </div>
            <button className="btn btn-success btn-block w-25 float-right">
                <FaSearch size='20'/>
            </button>
        </form>
    </div>
);

export default ClimaForm;
