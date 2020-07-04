export interface Istate{
    Movies :{
        movies:any,
        Key:string,
        TotalPages:number,
        TotalResults:number,
        page:number
    },
    Tv :{
        tv:any,
        Key:string,
        TotalPages:number,
        TotalResults:number,
        page:number
    },
    Popular :{
        show:any,
        TotalPages:number,
        TotalResults:number,
        page:number
    },
    Key:string,
    searchtype:string,
    APIKey:string
}



export interface Iposter{
    key:number,
    image:URL,
    name:string,
    rating:number
 }