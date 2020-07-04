import React from 'react'
import { Iprops } from './App';


export class Pagination extends React.Component<Iprops>{

 
    render(){
        
        let t=this.props.state;

        let cl="row col s4 push-s2 btn-large left ";
        let cr="row col s4 pull-s2 btn-large right ";

        if(t.searchtype==="movie" && t.Movies.TotalPages>1 && t.Movies.page===1){
           // console.log("ddef1");
            return (
                   
                   <button onClick={(e)=>{this.props.MoviePageIncrease(t.Movies.page+1) ;this.props.onSubmit(e)}} className={cr} >Next Page</button>
                   )
        }
        else if(t.searchtype==="tv" && t.Tv.TotalPages>1 && t.Tv.page===1){
           /// console.log("ddef2");
            return (
                   
                   <button onClick={(e)=>{this.props.TvPageIncrease(t.Tv.page+1) ;this.props.onSubmit(e)}}className={cr} >Next Page</button>

            )
        }
        else if(t.searchtype==="movie" && t.Movies.TotalPages>1 && t.Movies.TotalPages===t.Movies.page){
           // console.log("ddef3");
            return (
                   
                   <button onClick={(e)=>{this.props.MoviePageDecrease(t.Movies.page-1) ;this.props.onSubmit(e)}} className={cl}>Prev Page</button>
                   )
        }
        else if(t.searchtype==="tv" && t.Tv.TotalPages>1 && t.Tv.TotalPages=== t.Tv.page){
           // console.log("ddef4");
            return (
                   
                   <button onClick={(e)=>{this.props.TvPageDecrease(t.Tv.page-1);this.props.onSubmit(e)}} className={cl}>Prev Page</button>

            )
        }
        else if(t.searchtype==="movie" && t.Movies.TotalPages>1 && t.Movies.page>1){
           // console.log("ddef5");
            return (
                   <>
                   <button onClick={(e)=>{this.props.MoviePageIncrease(t.Movies.page+1);this.props.onSubmit(e)}} className={cr}>Next Page</button>
                   <button onClick={(e)=>{this.props.MoviePageDecrease(t.Movies.page-1);this.props.onSubmit(e)}} className={cl}>Prev Page</button>
                    </>
            )
        }
        else if(t.searchtype==="tv" && t.Tv.TotalPages>1 && t.Tv.page>1){
            ///console.log("ddef6");
            return (
                <>
                   <button onClick={(e)=>{this.props.TvPageIncrease(t.Tv.page+1);this.props.onSubmit(e)}} className={cr}>Next Page</button>
                   <button onClick={(e)=>{this.props.TvPageDecrease(t.Tv.page-1);this.props.onSubmit(e)}} className={cl}>Prev Page</button>
                </>
            )
        }
        else if(t.searchtype==="popular" && t.Popular.TotalPages>1 && t.Popular.page===1){
            /// console.log("ddef2");
             return (
                    
                    <button onClick={(e)=>{this.props.PopularPageIncrease(t.Popular.page+1) ;this.props.popular()}} className={cr} >Next Page</button>
 
             )
         }
         else if(t.searchtype==="popular" && t.Popular.TotalPages>1 && t.Popular.TotalPages=== t.Tv.page){
            // console.log("ddef4");
             return (
                    
                    <button onClick={(e)=>{this.props.PopularPageDecrease(t.Popular.page-1);this.props.popular()}} className={cl}>Prev Page</button>
 
             )
         }
         else if(t.searchtype==="popular" && t.Popular.TotalPages>1 && t.Popular.page>1){
            ///console.log("ddef6");
            return (
                <>
                   <button onClick={(e)=>{this.props.PopularPageIncrease(t.Popular.page+1);this.props.popular()}} className={cr}>Next Page</button>
                   <button onClick={(e)=>{this.props.PopularPageDecrease(t.Popular.page-1);this.props.popular()}} className={cl}>Prev Page</button>
                </>
            )
        }
        else {
            return <></>
        }
    }

}