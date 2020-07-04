import React from 'react'
import {Poster} from './Poster'
import { Iprops } from './App';

export class Thumbnails extends React.Component<Iprops>{
    
    render(){
        let Statevalue=this.props.state;
      //  console.log( Statevalue.searchtype, Statevalue.Popular);
        if( Statevalue.searchtype==="movie" && Statevalue.Movies.TotalResults!==0){
            return ( 
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {
                                Statevalue.Movies.movies.map((movie:any,i:number) => {
                                    return (
                                        <Poster  key={i} image ={movie.poster_path} name={movie.title} rating={movie.vote_average}/>)
                                })
                                }
                        </div>
                    </div>
                </div>

    )}
    else if(Statevalue.searchtype==="tv" && Statevalue.Tv.TotalResults!==0){
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {   
                            Statevalue.Tv.tv.map((movie:any,i:number) => {
                                return (
                                    
                                    <Poster key={i} image={movie.poster_path} name={movie.name} rating={movie.vote_average}/>)
                            })
                            }
                    </div>
                </div>
            </div>

        )}
        else if(Statevalue.searchtype==="popular" && Statevalue.Popular.TotalResults!==0){
            return ( 
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {
                                Statevalue.Popular.show.map((movie:any,i:number) => {
                                    return (
                                        <Poster key={i} image={movie.poster_path} name={movie.title} rating={movie.vote_average}/>)
                                })
                                }
                        </div>
                    </div>
                </div>
                )

        }

        else if((Statevalue.searchtype==="movie"||Statevalue.searchtype==="tv" )&&  (Statevalue.Movies.TotalPages===0 ||Statevalue.Movies.TotalPages===0)){
            return (
                    <div className="row col s10 push-s3">
                        Something is wrong ..Please check the spelling
                        </div>
                    )
        }

        else return <></>

}
}

export default Thumbnails