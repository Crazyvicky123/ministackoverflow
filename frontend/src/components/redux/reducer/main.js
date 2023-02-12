import {getQuestionreducer} from "./Questionreducer"
import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getquestiondata:getQuestionreducer
});


export default rootreducers;