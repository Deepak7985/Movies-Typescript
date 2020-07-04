import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Reducers from './redux/reducers'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { Actiontypes } from './types/actions';

export type IAppstate=ReturnType<typeof Reducers>;
export const store=createStore(Reducers,applyMiddleware(thunk as ThunkMiddleware<IAppstate,Actiontypes>));

ReactDOM.render( <Provider store={store}><App /></Provider> ,document.getElementById('root'));


