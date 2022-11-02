import { combineReducers } from "redux";
import loginReducer from "./loginslice";
import registrationReducer from './registrationslice';

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer
});

export default rootReducer;