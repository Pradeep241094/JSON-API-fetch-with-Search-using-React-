import { combineReducers } from 'redux';
import { dataViewReducer } from './dataViewReducer'

export default combineReducers({
    dataViewReducer: dataViewReducer,
});