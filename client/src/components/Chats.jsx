import { Box, Avatar, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect, useContext, useRef } from 'react'
import axios from 'axios';
import UserContext from '../context/UserContext.js'

const Chats = () => {

    const [chats, setChats] = useState()
    const { chatsDb } = useContext(UserContext);
    const userId = localStorage.getItem('chatSender');
    const chatEndRef = useRef(null);

    const fetchChats = async () =>  {
        const { data } = await axios.get("https://chatapp-jzkd.onrender.com/api/chats");
        setChats(data);
    }

    useEffect(() => {
      fetchChats();
    }, [])
    
    useEffect(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatsDb]);

  return (
    <div>
        <Box bg='#FAF9F4' p='4' pb='16'>
            {chats?.map((chat) => (
              <Flex key={chat.id} gap='3' pb='4'>
                <Avatar size='sm' name='Dan Abrahmov' src={chat.sender.image} />
                <Box p='3' bg='white' w='75%' borderRadius={12} borderTopLeftRadius={0}>
                  {chat.message}
                  <Text fontSize='xs' fontWeight='bold' textAlign='right'>{chat.time.substring(11,16)}</Text>
                </Box>
              </Flex>
            ))}
            {chatsDb?.map((chat) => {
              const isCurrentUser = chat.sender === userId;
              return (
              <Flex key={chat._id} justify={isCurrentUser ? 'flex-end' : 'flex-start'} gap='3' pb='4'>
                {!isCurrentUser && (
                  <Avatar size='sm' src='https://bit.ly/broken-link' />
                )
                }
                <Box p='3' w='75%' 
                borderRadius={12} 
                borderTopLeftRadius={isCurrentUser ? 12 : 0}
                borderBottomRightRadius={isCurrentUser ? 0 : 12}
                bg={chat.sender === localStorage.getItem('chatSender') ? 'blue.500' : 'white'} >
                  <Text color={chat.sender === localStorage.getItem('chatSender') ? 'white' : 'black'}>{chat.message}</Text>
                  <Text color='white' fontSize='xs' fontWeight='bold' textAlign='right'>
                    {new Date(chatsDb.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </Text>
                </Box>
              </Flex>
            )})}
        </Box>
        <div ref={chatEndRef} />
    </div>
  )
}

export default Chats