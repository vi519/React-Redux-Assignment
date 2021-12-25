import { combineReducers} from "redux";
import usersReducers from "./reducer";


const rootReducer = combineReducers({
    users:usersReducers
})

export default rootReducer;