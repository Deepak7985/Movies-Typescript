export const upadatemovie="updatemovie"
export const updatetv="updatetv"
export const updatekey="updatekey"
export const movies="movies"
export const tv="tv"
export const page0="page0"
export const popular="popular"
export const moviepageincrease="moviepageincrease"
export const moviepagedecrease="moviepagedecrease"
export const tvpageincrease="tvpageincrease"
export const tvpagedecrease="tvpagedecrease"
export const popularpageincrease="popularpageincrease"
export const popuarpagedecrease="popularpagedecrease"


export interface Iupdatemovie{
    type: typeof upadatemovie,
    data:any,
    results:number,
    pages:number,
    Key:string

}

export interface  Iupdatetv{
    type:typeof updatetv,
    data:any,
    results:number,
    pages:number,
    Key:string

}
export interface Iupdatekey{
    type:typeof updatekey,
    key:string

}
export interface Ipage0{
    type:typeof page0
}
export interface Ipopular{
    type:typeof popular,
    data:any,
    page:number,
    total_pages:number,
    total_results:number

}

export interface Isearchkeymovie{
    type:typeof movies,
    searchtype:string
}
export interface Isearchkeytv{
    type:typeof tv ,
    searchtype:string
}

export  interface Imoviepageincrease{
    type:typeof moviepageincrease,
    page:number

}

export interface Imoviepagedecrease{
    type:typeof moviepagedecrease,
    page:number
}

export interface  Itvpageincrease{
    type:typeof tvpageincrease,
    page:number
}

export interface Itvpagedecrease{
    type:typeof tvpagedecrease,
    page:number
}

export interface Ipopularpageincrease{
    type:typeof popularpageincrease,
    page:number
}

export interface Ipopularpagedecrease{
    type:typeof popuarpagedecrease,
    page:number
}



export type Actiontypes = Iupdatemovie | Iupdatetv |Iupdatekey|Ipage0|Ipopular|Imoviepagedecrease|Imoviepageincrease|
                          Ipopularpagedecrease|Ipopularpageincrease|Itvpagedecrease|Itvpageincrease|Isearchkeymovie|Isearchkeytv