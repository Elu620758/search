import React, { Component } from "react";
import './UserApp.css';
import Data from './UserData.json'




export default class UserApp extends Component{

constructor(props){
    super(props)
        this.state = {

            details : Data.data,
            keyword : '',
            results : [],
            showsugg : false,
            showdetails: false

        }
    }
        matchaName =(name,keyword)=>{
            let keyLen = keyword.length
            keyword = keyword.toLowercase()
            name = name.toLowercase().substring(0,keyLen)
            return name === keyword && keyLen !==0
        }

        onSearch = value=>{
            let results = this.state.details.filter
            (item => this.matchaName(item.name,value))
            this.setState({
                results : results
            })
            
        }

        updateField =value=>{ 
            this.setState({
                
                keyword : value,
                showsugg : true
                     
            
            })
            this.onSearch(value)
    
        }
    
        render(){
            return (
                <div className = "Userapp" >
                    <div className="autocomplete-container">
                        <h1 className="main-head">Users Details</h1>
                        <br/>
                        <br/>
                        <div className="search-container">
                            <div className="input">
                                <input className="search-bar" 
                                placeholder="search details..." onChange={
                                    event => this.updateField(event.target.value)}/>
                                    value={this.state.keyword} 
                                {/* <h1>{this.state.keyword}</h1>                                 */}
                                
                            </div>
                        </div>
                        {
                        this.state.showsugg && this.state.results.length > 0?
                        <div className = "suggestion-container>"
                        </div> : 
                        this.state.keyword.length > 0&& this.state.result.length ===0?
                        <div> className = "no-results" >
                            </div>:null
                            }
                    </div>
                </div>       )
            
        }  }          
  