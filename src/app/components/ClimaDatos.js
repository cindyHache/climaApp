import React from 'react';

import { FaTemperatureLow } from 'react-icons/fa';  
import { GiWorld } from 'react-icons/gi';  
import { GiWaterDrop } from 'react-icons/gi'; 
import { GiWindsock } from 'react-icons/gi'; 


const ClimaDatos = props => {
     
    console.log(props)

    return (
<div>
        {
            props.error &&
            <div className="alert alert-danger">
                <p>{props.error}</p>
            </div>
        }
        
        {
            props.temperature ?
             <div className="card card-body">
                <p align="left" style={{color:"white"}}>{props.city} {props.country} <GiWorld color='white' size='15'/></p>

                <h2 align="center" style={{color:"white"}}> {props.temperature} °C, {props.description}</h2> 

                <p align="right" style={{color:"white"}}> {props.humidity} <GiWaterDrop color='white' size='15'/></p>
                
                <p align="right" style={{color:"white"}}>{props.wind_speed} m/s <GiWindsock color='white' size='20'/></p>
            </div>
        :
        <div className="card car-body float-right" >         
            <p> No hay petición aún</p>       
        </div> 
    
         
        }
    </div>       
        
    )
}

export default ClimaDatos;

