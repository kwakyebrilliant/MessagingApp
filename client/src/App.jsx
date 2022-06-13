import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer, Auth } from './components';

import './App.css';

const apiKey = 'x7t2k6sud4bk';
const authToken = false;

const client = StreamChat.getInstance(apiKey);

function App() {

  if(!authToken) return <Auth/>

  return (
    <div className="app__wrapper">
        <Chat client={client} theme="team light">
            <ChannelListContainer 
            
            
            />

            <ChannelContainer 
            
            />
        </Chat>
    </div>
  )
}

export default App