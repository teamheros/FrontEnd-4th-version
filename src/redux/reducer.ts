import { reduceEachTrailingCommentRange } from "typescript";
import { FORM_DISPLAY, USERS_CHAT, ALL_USER,USER_BIO_DATA, USER_CONVO, CURRENT_USER} from "./actionTypes";

const formInitialState = {
  formDisplay: "LOGIN_FORM",
};

const usersChatInitialState = {
  chats : []
}

const AllusersInitialState = {
  user : []
}

const userBioDataInitialState = {
  userBioData : []
}

const usersChatsInitialState = {
  users : []
}

const currentUserInitialState = {
  currentUser : []
}

export const formReducer = (state = formInitialState, action: any) => {
  switch (action.type) {
    case FORM_DISPLAY:
      return { ...state, formDisplay: action.payload };
    default:
      return state;
  }
};

export const usersChatsReducer = (state = usersChatInitialState, action :any) =>{
  switch (action.type) {
    case USERS_CHAT:
      return { ...state, chats : action.payload };
    default:
      return state;
  } 
}

export const allusersReducer = (state = AllusersInitialState, action :any) =>{
  switch (action.type) {
    case ALL_USER:
      return { ...state, user : action.payload };
    default:
      return state;
  } 
}

//new change//
export const userBioDataReducer = (state = userBioDataInitialState, action :any) =>{
  switch (action.type) {
    case USER_BIO_DATA:
      return { ...state, userBioData : action.payload };
    default:
      return state;
  } 
}


export const userConnectedReducer = (state = usersChatsInitialState, action :any) =>{
  switch (action.type) {
    case USER_CONVO:
      console.log(state, action);
      return { ...state, users : action.payload };
    default:
      return state;
  } 
}

export const currentUseredReducer = (state = currentUserInitialState, action :any) =>{
  switch (action.type) {
    case CURRENT_USER:
      console.log(state, action);
      return { ...state, currentUser : action.payload };
    default:
      return state;
  } 
}




