import { combineReducers } from 'redux';
import posts from './posts.js';
import auth from './auth.js';


const allReducers = combineReducers({ posts, auth })

export default allReducers;
