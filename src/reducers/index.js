import { combineReducers } from "redux";

import currentCity from './currentCity';
import commonReducer from './commonReducers';
import regin from './regin';

let rootReducer = combineReducers({
    currentCity,
    commonReducer,
    regin
});

export default rootReducer;