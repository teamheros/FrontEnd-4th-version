import { FORM_DISPLAY, USERS_CHAT, ALL_USER, USER_CONVO, CURRENT_USER } from "./actionTypes"

export const selectForm = (form : string) =>{
    return {
        type : FORM_DISPLAY,
        payload : form
    }
}

export const setChatsToDisplay = (chats : string[]) =>{
    return {
        type : USERS_CHAT,
        payload : chats
    }
}

export const setAllUSer= (user : string[]) =>{
    return {
        type : ALL_USER,
        payload : user
    }
}

export const setUserConversation= (user : string[]) =>{
    console.log('Entering', user);
    
    return {
        type : USER_CONVO,
        payload : user
    }
}

export const setCurrentUser= (user : string[]) =>{
    console.log('setCurrentUser', user);
    
    return {
        type : CURRENT_USER,
        payload : user
    }
}