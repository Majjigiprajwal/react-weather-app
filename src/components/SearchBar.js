import React from 'react'
import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom';
import { initialState } from '../store';


function SearchBar() {

    const [searchLocation,setSearchLocation]=useState('');

    const navigate=useNavigate();
    
    const search = ()=>{
        const lowerCaseSearch = searchLocation.toLowerCase();
      
        const newSearchLocation = lowerCaseSearch.split(" ").join("+");
        
        
       
        navigate(`/weather/${newSearchLocation}`)

    }
    
  return (
    <>
    <div className="search">
      <h1 className="searchHeader">Weather Api</h1>
      <input className="searchInput" type="text" placeholder="Location" onChange={(e)=>{setSearchLocation(e.target.value)  }}/>  
    </div>
    <button  className="button"onClick={search} >Search</button>
    </>
  )
}

export default SearchBar

