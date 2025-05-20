import React from 'react';

export function ChannelList(props) {
  const channelNames = ["general","social","random","birds"]
  
  //want: an array of <li>
  const elementArray = channelNames.map((channelNameString) => {
    const transform = (
      <li key={channelNameString}>
        <a className="text-primary"
           href={"/"+channelNameString}>{channelNameString}
        </a>
      </li>
    );
    return transform;
  })
  return (
    <nav className="text-white bg-secondary px-0 pe-3 py-3">
      <ul>
        {elementArray}
      </ul>
    </nav>
  );
}