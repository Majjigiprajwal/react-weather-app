import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './reducer';



export const initialState={
   temperature :'celsius',
}

export const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk)))