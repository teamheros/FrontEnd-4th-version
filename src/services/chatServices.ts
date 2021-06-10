import axios from "axios";
import { USERS_CHAT } from "../redux/actionTypes";

export const getChats = async (dispatch: any, users: any) => {
  let res = await axios.get(
    "http://localhost:4000/api/chat/" + JSON.stringify(users)
  );
  dispatch({ type: USERS_CHAT, payload: res.data.messages });
};

export const sendMessage = async (dispatch: any, users: any, msg: string) => {
  let res = await axios.post("http://localhost:4000/api/chat", {
    users,
    msg,
    sentBy: "saurav",
  });
  getChats(dispatch, users);
};
