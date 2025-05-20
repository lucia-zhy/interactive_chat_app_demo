import React from 'react';
import DEFAULT_CHAT_LOG from '../data/chat_log.json'
import { ComposeForm } from './ComposeForm';

export function MessagePane(props) {
  // have chat log (array of objects)
  // map elements
  const messageElement = DEFAULT_CHAT_LOG.map((message) => {
    const transformed = (
        <MessageItem messageData={message} 
                     key={message.timestamp}/>
    )
    return transformed;
  })

  return (
    <div>
      {messageElement}
      {/* <MessageItem userName="Melody" text="Hello All!"/>
      <MessageItem userName="Hello Kitty" text="Meow~"/>
      <MessageItem /> */}
      <ComposeForm />
    </div>
  );
}

//?helper method
function MessageItem(props) {
  const messageData = props.messageData;
  const {userName, text, userImg} = messageData; //destructuring
  // console.log(props); //object

  return (
    <div className="message m-2">
      <div className="d-flex">
        <img className="me-1" src={userImg}
        alt="Melody from Sanrio" />
        <p><strong>{userName}</strong></p>
      </div>
      <p>{text}</p>
    </div>
  );
}