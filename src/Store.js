import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addJobseekar,
  loginReducer,
  singleJobseekarReducer,
  UpdateProfileReducer
} from "./Reducers/Reducer";

const midleware = [thunk];
const reducer = combineReducers({
  jobseekar: addJobseekar,
  login: loginReducer,
  singlejobseekar: singleJobseekarReducer,
  profileUpdate: UpdateProfileReducer
  
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
