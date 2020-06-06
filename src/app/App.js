import React, { Component } from 'react';

import ClimaDatos from './components/ClimaDatos';
import ClimaForm from './components/ClimaForm';



import { WeatherKey } from './keys';

class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null    
    };

    getWeather =async e => {
        e.preventDefault ();
        const { city, country } = e.target.elements;
        const ciudadVal = city.value;
        const paisVal = country.value;

        if (ciudadVal && paisVal){

            const APIDir = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadVal},${paisVal}&appid=${WeatherKey}&units=metric`;
            const response = await fetch(APIDir);
            const data = await response.json();
        
            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            });
        } else {
            this.setState({error: 'Por favor ingrese la ciudad y el país'})
        }

    }

   
    render(){
        return (
            <div className="container p-5">
            <div className="row">
                <div className="col-md-4 mx-auto"> 
                    <ClimaForm getWeather = {this.getWeather}/>
                </div>
            </div>
            <div className="row">                
                <div className="col-md-4 mx-auto"> 
                    <ClimaDatos {...this.state}/>
                </div>
            </div>
        </div>
        )
    }
}

export default App;

