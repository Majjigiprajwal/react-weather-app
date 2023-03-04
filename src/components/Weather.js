import React from 'react';
import './Weather.css';
import { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {SET_TEMPERATURE_PREFERENCE} from '../store/action';
import { useSelector } from 'react-redux';


function Weather() {
    // const [weatherData,setWeatherData] = useState('');
    const [currentWeather,setCurrentWeather]=useState([]);
    const [locationWeather,setLocationWeather]=useState([]);

    const param=useParams();
    const dispatch=useDispatch();
    const state=useSelector((state)=>state)
    const [temp,setTemp]=useState('')

    const url=`https://api.weatherapi.com/v1/current.json?key=19e0d82e795d4465b91100625230403&q=${param.id}`
    useEffect(()=>{
       fetch(url)
           .then((response)=>response.json())
           .then((data)=>{
            // setWeatherData(data);
            setLocationWeather(data.location);
            console.log(data.location)
            setCurrentWeather(data.current);
            console.log(data.current)
            
           })
           dispatch({type:SET_TEMPERATURE_PREFERENCE,payload:{}})
        
     },[])
     
     useEffect(()=>{
       if(state.temperature==='Celsius'){
        setTemp(currentWeather?.temp_c);
        
       }
       else{
        setTemp(currentWeather?.temp_f)
        
       }
     },[state])

     const celsiusUpdate=()=>{
       dispatch({type:SET_TEMPERATURE_PREFERENCE,payload:'Celsius'})
      
     }

     const fahrenheitUpdate=()=>{
     dispatch({type:SET_TEMPERATURE_PREFERENCE,payload:'Fahrenheit'})
     }


  return (
    <div className="weather">
      <h1 className="weatherDataHeader">Weather Data</h1>
      <div className="buttons">
      <button onClick={celsiusUpdate} className="button1">Celsius</button>
      <button  onClick={fahrenheitUpdate}className="button2">Fahrenheit</button>
      </div>
      {/* {console.log(weatherData?.location?.country)} */}
      <div className="weatherData">
        <div className="location">
            {/* {console.log(weatherData)} */}
            <p><span>Location </span>:{locationWeather?.name}</p>
            <p><span>Condition </span>:<img src={currentWeather?.condition?.icon} alt="icon" />
            {currentWeather?.condition?.text}</p>
        </div>
        <div className="weatherResult">
            <div className="result1">
                
            <p><span >Country </span>: {locationWeather?.country}</p>
            <p><span >Region </span>:{locationWeather?.region} </p>
            <p><span >Latitude </span>: {locationWeather?.lat}</p>
            <p><span >Longitude </span>: {locationWeather?.lon}</p>
            <p><span >Wind Degree</span>: {currentWeather?.wind_degree}</p>
            <p><span >Wind Speed </span>: {currentWeather?.wind_kph}</p>
           
            </div>
            <div className="result2">
            <p><span >Temperature </span>:{temp} </p>
            <p><span >Humidity </span>:{currentWeather?.humidity}</p>
            <p><span >Pressure </span>: {currentWeather?.pressure_in}</p>
            <p><span >Wind Direction</span>: {currentWeather?.wind_dir}</p>
            <p><span >Last Updated</span>: {currentWeather?.last_updated}</p>
            <p><span >Cloud </span>: {currentWeather?.cloud}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
