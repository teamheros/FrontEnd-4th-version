import { createStore, combineReducers } from "redux";
import { getUserBioDataById } from "../services/userServices";
import { formReducer, usersChatsReducer, allusersReducer, userConnectedReducer, currentUseredReducer } from "./reducer";

const reducer = combineReducers({
  form: formReducer,
  chat : usersChatsReducer,
  user : allusersReducer,
  users : userConnectedReducer,
  userBioData : getUserBioDataById,
  currentUser : currentUseredReducer
});

const store = createStore(reducer);
console.log(reducer);

export default store;
