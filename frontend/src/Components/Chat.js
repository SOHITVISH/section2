import React from "react";
import { useState } from "react";
import './chat.css';

const Chat = () => {
    const [messageList, setmessageList] = useState([
        {text : 'hello', sent : true},
        {text : 'Hi', sent : false},
        


    ]);
     const addMessage=() =>{
        let obj = { text : 'sample message', sent
    :true};
    //messageList.push(obj);
    setmessageList([...messageList, obj]);
     }



    const displayChat = ()=>{
     return messageList.map((msg) => (
        <div className={msg.sent ? "bubble-sent": 'bubble-rec'}>
           <p className="chat-text"> {msg.text}</p>
        </div>
     ))
    }
  return (
    <div className="container py-5">
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">My chat app</h3>
        </div>

        <div style={{ height: "70vh" }} className="card-body">
            {displayChat()}  
            
        </div>

        <div className="card-footer d-flex">
          <input type="text" className="form-control" />
          <button className="btn btn-primary">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
