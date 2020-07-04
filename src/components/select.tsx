import React from "react";
import { Iprops } from "./App";



export class Select extends React.Component<Iprops>{

    render(){
        return (
            <div className="row">
               <button  onClick={()=>{this.props.onClickmovies()}} id="movieselect" className="col s6  z-depth-4 btn-large  grey darken-1 " >Movies</button>
                <button  onClick={()=>{this.props.onClickTV()}} id="tvselect" className="col s6 z-depth-4 btn-large  grey darken-1" >Tv-Series</button>
               
            </div>
        )
    }
}