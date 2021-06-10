import { useEffect, useState } from "react";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "../chatContent/ChatItem";
import { useDispatch, useSelector } from "react-redux";
import { getChats, sendMessage } from "../../services/chatServices";

const chatItems = [
  {
    key: 1,
    image:
      "https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg",
    type: "",
    msg: "Hi Tim, How are you?",
  },
  {
    key: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    type: "other",
    msg: "I am fine.",
  },
  {
    key: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    type: "other",
    msg: "What about you?",
  },
  {
    key: 4,
    image:
      "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    type: "",
    msg: "Awesome these days.",
  },
  {
    key: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    type: "other",
    msg: "Finally. What's the plan?",
  },
  {
    key: 6,
    image:
      "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    type: "",
    msg: "what plan mate?",
  },
  {
    key: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    type: "other",
    msg: "I'm taliking about the tutorial",
  },
];

function ChatContent(props: any) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const chats = useSelector((state: any) => state.chat.chats);
  console.log(chats);
  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user ">
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <p>Tim Hover</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chats.map((item: any, index: number) => (
            <ChatItem
              animationDelay={index + 2}
              key={index}
              user={item.sentBy !== "saurav" ? "other" : "me"}
              // user={item.sentBy !== "saurav" ? "other" : "me"}
              msg={item.content}
              image={item.image}
            />
          ))}
          {/* <div ref={messagesEndRef} /> */}
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={(e: any) => setMessage(e.target.value)}
            value={message}
          />
          <button
            className="btnSendMsg"
            id="sendMsgBtn"
            onClick={() => {
              sendMessage(dispatch, ["saurav", "rutu"], message);
            }}
          >
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatContent;
