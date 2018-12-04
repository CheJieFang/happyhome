import {createStore} from 'redux';
import reducer from './reducers/commonReducers';
let store =createStore(reducer);
export default store;
