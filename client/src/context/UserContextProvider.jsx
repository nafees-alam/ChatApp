import React, { useState, useEffect } from 'react'
import UserContext from "./UserContext";
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const UserContextProvider = ({children}) => {
    const [chatsDb, setChatsDb] = useState([]);
    const [message, setMessage] = useState('');
    const [sender, setSender] = useState('');

    useEffect(() => {

        const storedSender = localStorage.getItem('chatSender');
        if (!storedSender) {
            const newSender = uuidv4();
            localStorage.setItem('chatSender', newSender);
            setSender(newSender);
        } else {
            setSender(storedSender);
        }

        const fetchChats = async () => {
            try {
              const response = await Axios.get('https://chatapp-jzkd.onrender.com/api/chats/db');
              setChatsDb(response.data);
            } catch (error) {
              console.error('Error fetching chats:', error.response ? error.response.data : error.message);
            }
          };
    
        fetchChats();
      }, []);

      const sendMessage = async () => {
        if (!message || !sender) return;
    
        const newChat = { message, sender };
    
        const response = await Axios.post('https://chatapp-jzkd.onrender.com/api/chats/db', newChat);
        setChatsDb([response.data, ...chatsDb]);
        setMessage('');
      };

    return(
        <UserContext.Provider value={{ chatsDb, message, setMessage, sendMessage }}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider