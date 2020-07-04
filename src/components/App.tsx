import React from 'react';
import {Header} from './header';
import {Searchbar} from './searchbar';
import {Thumbnails}from './Thumbnails';
import {connect} from 'react-redux';
import {Select} from './select';
import { Pagination } from './pagination';
//import {Filterbar} from './filterbar.js';
import { popular,onSubmit,handleChange ,onClickmovies,
        onClickTV,MoviePageIncrease,MoviePageDecrease,
        TvPageIncrease,TvPageDecrease,PopularPageIncrease,
        PopularPageDecrease} from '../redux/action';


import {Istate} from '../types/interfaces'        
import { ThunkDispatch } from 'redux-thunk';
import {Actiontypes} from '../types/actions'
import { bindActionCreators} from 'redux';

export type Iprops=LinkDispatchprops & Linkstateprops;

class App extends React.Component<Iprops> {

    componentDidMount(){
        this.props.popular();
           
    }

    render(){
        return (
            <>
                <Header /> 
                <Select {...this.props}/>
                
                <Searchbar {...this.props}/> 
                <Thumbnails {...this.props}/>
                <Pagination {...this.props}/>       
            </>
        );
    }
}
interface Linkstateprops{
  state:Istate
}
interface LinkDispatchprops{
    popular:() => void, 
    onSubmit:(e:React.FormEvent)=>void,
    handleChange:(e:React.FormEvent<HTMLInputElement>)=>void,
    onClickmovies:()=>void,
    onClickTV:()=>void,
    MoviePageIncrease:(page:number)=>void,
    MoviePageDecrease:(page:number)=>void,
    TvPageIncrease:(page:number)=>void,
    TvPageDecrease:(page:number)=>void
    PopularPageIncrease:(page:number)=>void
    PopularPageDecrease:(page:number)=>void
}

function mapStateToProps(state:Istate):Linkstateprops{
    return {
        state:state
    }
}

function mapDispatchToProps(dispatch:ThunkDispatch<any,any,Actiontypes>):LinkDispatchprops {
    return { popular: bindActionCreators ( popular,dispatch), 
             onSubmit: bindActionCreators(onSubmit,dispatch) ,
             handleChange:bindActionCreators(handleChange,dispatch),
             onClickmovies:bindActionCreators(onClickmovies,dispatch),
             onClickTV:bindActionCreators(onClickTV,dispatch),
             MoviePageIncrease:bindActionCreators(MoviePageIncrease,dispatch),
             MoviePageDecrease:bindActionCreators(MoviePageDecrease,dispatch),
             TvPageIncrease:bindActionCreators(TvPageIncrease,dispatch),
             TvPageDecrease:bindActionCreators(TvPageDecrease,dispatch),
             PopularPageIncrease:bindActionCreators(PopularPageIncrease,dispatch),
             PopularPageDecrease:bindActionCreators(PopularPageDecrease,dispatch),
             
    };
   }

export default connect(mapStateToProps,mapDispatchToProps)(App)
