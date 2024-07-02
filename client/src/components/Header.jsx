import React from 'react'
import {ArrowBackIcon, EditIcon} from '@chakra-ui/icons'
import { AiOutlineMore } from "react-icons/ai";
import { Flex, Avatar, Spacer, Text, Divider, Heading, Icon, Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box position="sticky" top='0' zIndex="1000">
        <Flex minWidth='max-content' alignItems='center' gap='2' bg='#FAF9F4' p='4'>
            <Flex alignItems='center' gap='3'>
                <ArrowBackIcon />
                <Heading size='md'>Trip 1</Heading>
            </Flex>
            <Spacer />
            <EditIcon />
        </Flex>
        <Flex minWidth='max-content' alignItems='center' gap='3' bg='#FAF9F4' pr='4' pb='4'>
            <Avatar size='lg' bg='teal.500' ml='4'/>
            <Flex direction='column'>
                <Flex gap='2' alignItems='center'>
                    <Text fontSize='sm'>From</Text>
                    <Text>IGI Airport, T3</Text>
                </Flex>
                <Flex gap='2' alignItems='center'>
                    <Text fontSize='sm'>To</Text>
                    <Text>Sector 28</Text>
                </Flex> 
            </Flex>
            <Spacer />
            <Icon as={AiOutlineMore} boxSize={6}/>
        </Flex>
        <Divider orientation='horizontal' color='black'/>
    </Box>
  )
}

export default Header