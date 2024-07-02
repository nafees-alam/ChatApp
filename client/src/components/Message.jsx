import { AttachmentIcon, Icon } from '@chakra-ui/icons'
import { Flex, Button, Box, Textarea, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, ButtonGroup, PopoverBody, PopoverFooter, PopoverHeader, } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { BiCamera } from "react-icons/bi";
import { FiVideo } from "react-icons/fi";
import { IoIosPaper } from "react-icons/io";
import { PiPaperPlaneRight } from "react-icons/pi";
import UserContext from '../context/UserContext';

const Message = () => {

    const { message, setMessage, sendMessage} = useContext(UserContext);

  return (
    <Box p='4' bg='#FAF9F4' position='fixed' bottom='0' w='100%'>
        <form>
          <Flex bg='white' alignItems='center' borderRadius='12'>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter message..."
              focusBorderColor='white'
              size="md"
              flex="1"
              resize='none'
              rows={1}
              border='0'
            />
            <Popover isLazy>
                <PopoverTrigger>
                <Button colorScheme='white' color='black'> 
                    <AttachmentIcon  boxSize={6} /> 
                </Button>
                </PopoverTrigger>
                <PopoverContent borderRadius={16} gap='4' mr='4' color='white' ml='5' bg='#008000'>
                <PopoverHeader border='0' display='flex' alignItems='center' justifyContent='space-between' pb={4}>
                  <ButtonGroup size='lg' >
                    <Button colorScheme='#00800'><Icon as={BiCamera} /></Button>
                    <Button colorScheme='#00800'><Icon as={FiVideo} /></Button>
                    <Button colorScheme='#00800'><Icon as={IoIosPaper} /></Button>
                  </ButtonGroup>
                </PopoverHeader>
                <PopoverArrow bg='#008000'/>
                <PopoverCloseButton />
                </PopoverContent>
            </Popover>
            <Button type="submit" onClick={sendMessage} colorScheme='white' color='black'>
              <Icon as={PiPaperPlaneRight} boxSize={6}/>
            </Button>
          </Flex>
        </form>
    </Box>
  )
}

export default Message