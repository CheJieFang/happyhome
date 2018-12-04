import { combineReducers } from "redux";

import currentCity from './currentCity';
import commonReducer from './commonReducers';

let rootReducer = combineReducers({
    currentCity,
    commonReducer
});

export default rootReducer;