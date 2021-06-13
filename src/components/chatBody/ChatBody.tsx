import React, { Component, useEffect } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import { getAllUser, getUserConvo, getUserBioDataById } from '../../services/userServices';
import { setAllUSer, setCurrentUser, setUserConversation } from "../../redux/actions";
import { useDispatch } from "react-redux";

function ChatBody() {
  const dispatch = useDispatch();

useEffect(() => {
  getAllUser().then((res) => dispatch(setAllUSer(res)))
  getUserConvo().then((res) => dispatch(setUserConversation(res.data.chatDetails)))    
  getUserConvo().then((res) => dispatch(setCurrentUser(res.data)))
},[])

  return (
    <div className="main-chatbody">
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
  )
}

export default ChatBody
