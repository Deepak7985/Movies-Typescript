import {store } from '../index'
import {Dispatch} from 'redux'
import { Actiontypes } from '../types/actions';

export function onSubmit(e:React.FormEvent){
    e.preventDefault();
    //( document.getElementById("search"))!.value="";
    const s=store.getState();
    let page:Number;
    if(s.searchtype==="movie"){
        page=s.Movies.page;
        
        }
    else if(s.searchtype==="tv"){
        page=s.Tv.page;

        }
    return (dispatch:Dispatch<Actiontypes>)=>{
        return fetch(`https://api.themoviedb.org/3/search/${s.searchtype}?api_key=${s.APIKey}&query=${s.Key}&page=${page}`)
               .then(data=>data.json())
               .then(data=>{
                        console.log("fetched in submit ",data);
                        if(s.searchtype==="movie"){
                        dispatch( {
                                type:"updatemovie",
                                data:data.results,
                                results:data.total_results,
                                pages:data.total_pages,
                                Key:s.Key
                        })}
                        else if(s.searchtype==="tv"){
                            dispatch( {
                                type:"updatetv",
                                data:data.results,
                                results:data.total_results,
                                pages:data.total_pages,
                                Key:s.Key
                        })}
                        
                });        
    }
    
    
}


export function handleChange(e:React.FormEvent<HTMLInputElement>){
    return (dispatch:Dispatch<Actiontypes>)=>{
        dispatch({
            type:"updatekey",
            key:e.currentTarget.value
        })
        dispatch({
            type:"page0",
        });
                
    }
}



export function onClickmovies(){
    
    document.getElementById("movieselect")!.className="col s6 z-depth-4 btn-large  grey darken-3"
    document.getElementById("tvselect")!.className="col s6 z-depth-4 btn-large  grey darken-1"
    return (dispatch:Dispatch<Actiontypes>)=>{
        dispatch({
            type :"movies",
            searchtype:"movie"
    })
}
}
export function onClickTV(){
    
    document.getElementById("movieselect")!.className="col s6 z-depth-4 btn-large  grey darken-1 "
    document.getElementById("tvselect")!.className="col s6 z-depth-4 btn-large  grey darken-3"
    return (dispatch:Dispatch<Actiontypes>)=>{
         dispatch({
            type:"tv",
            searchtype:"tv"
    })
}
}

export function TvPageIncrease(page:number){
    
    return (dispatch:Dispatch<Actiontypes>)=>{
        dispatch({
        type:"tvpageincrease",
        page
      })
    }
}

export function TvPageDecrease(page:number){
    
    return (dispatch:Dispatch<Actiontypes>)=>{
        dispatch({
            type:"tvpagedecrease",
            page
               
        })
    }
}
export function MoviePageIncrease(page:number){
    return (dispatch:Dispatch<Actiontypes>)=>{
        dispatch({
            type:"moviepageincrease",
            page
        })
    }
}

export function MoviePageDecrease(page:number){
    
    return (dispatch:Dispatch<Actiontypes>)=>{
        dispatch({
            type:"moviepagedecrease",
            page
               
        }
    )
    }
}

export function PopularPageIncrease(page:number){
    
    return (dispatch:Dispatch<Actiontypes>)=>{
        dispatch({
            type:"popularpageincrease",
            page
        })
    }
}

export function PopularPageDecrease(page:number){

    return (dispatch:Dispatch<Actiontypes>)=>{
        dispatch({
            type:"popularpagedecrease",
            page
               
        }
    )
    }
}

export function popular(){
   return (dispatch:Dispatch<Actiontypes>)=>{
         fetch(`https://api.themoviedb.org/3/movie/popular?api_key=403215d4d68a271d4c5dc907db08554e&language=en-US&page=${store.getState().Popular.page}`)
                .then(data=>data.json())
                .then(data=>{
                        console.log("fetched in popular",data);
                        dispatch({
                        type:"popular",
                        data:data.results,
                        page:data.page,
                        total_pages:data.total_pages,
                        total_results:data.total_results
                        })
     
                    })
    }
}