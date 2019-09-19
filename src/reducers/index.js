import { combineReducers } from 'redux';
import count from './count';
import photos from './photos';

export default combineReducers({ count, photos });