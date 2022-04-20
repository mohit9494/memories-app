import { combineReducers } from 'redux';
import posts from './posts.js';


const allReducers = combineReducers({ posts })

export default allReducers;
