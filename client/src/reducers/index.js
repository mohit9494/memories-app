import { combineReducers } from 'redux';
import postReducer from './posts.js';


const allReducers = combineReducers({ postReducer })

export default allReducers;
