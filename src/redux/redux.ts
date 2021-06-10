import { createStore, combineReducers } from "redux";
import { formReducer, usersChatsReducer, allusersReducer, userConnectedReducer, currentUseredReducer } from "./reducer";

const reducer = combineReducers({
  form: formReducer,
  chat : usersChatsReducer,
  user : allusersReducer,
  users : userConnectedReducer,
  currentUser : currentUseredReducer
});

const store = createStore(reducer);
console.log(reducer);

export default store;
