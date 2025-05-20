import React from 'react';
import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { MessagePane } from './MessagePane.jsx';

function App(props) {
  return(
    <div>
        <HeaderBar />
        <div className="d-flex">
          <ChannelList />
          <MessagePane />
        </div>
      {/* Items we need in a chat app
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <ComposeForm />
      <MessagePane>
      */}

    </div>
  );
}

export default App;