import React from "react";
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa'

//import SearchIcon from '@mui/icons-material/Search';



function Search({placeholder,data}){
    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder}/>
                <div className="SearchIcon"  >
                    <FaSearch/>

                </div>
            </div> 
            <div className="DataResult">
                {data.map((value,key)=>{return<div>{value.title}</div>})}
            </div>
            </div>
        
    )
}
export default Search;