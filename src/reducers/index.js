import {combineReducers} from "redux";
import errorsReducer from "./errorsReducer";
import behaviorVersionReducer from "./behaviorVersionReducer";
import brandNameReducer from "./brandNameReducer";

export default combineReducers ({
    errors: errorsReducer,
    behaviorVersionRed: behaviorVersionReducer,
    brandNameRed: brandNameReducer,
});