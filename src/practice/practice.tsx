import socketIOClient from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import axios from 'axios'

const ENDPOINT = "localhost:4000";

function Practice() {
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  const connect = () =>{
    const socket = socketIOClient(ENDPOINT, { transports: ["websocket"] });

    socket.on("connection", (data) => {
      console.log("here : ", data);
    });

    socket.on("message-sent", (data) => {
        console.log(text)
      setText(message + "    >>>   " + data);
    });
  }

  useEffect(() => {
   
  }, []);

  const sendSocket = () => {
    axios.post("http://localhost:4000/",{message})
  };

  return (
    <div>
      <h1>Message : {text}</h1>
      <input onChange={(e: any) => setMessage(e.target.value)}></input>
      <button onClick={sendSocket}>Click</button>
      <button onClick={connect}>Connect</button>
    </div>
  );
}

export default Practice;
