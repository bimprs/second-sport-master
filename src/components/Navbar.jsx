import React from 'react'
import { Flex, Heading } from '@chakra-ui/layout';
import { IconButton, Image, Input, InputGroup, InputRightElement} from "@chakra-ui/react"
import { FaSistrix, FaRegUser } from 'react-icons/fa'
import G1 from "../assets/Rectangle127.png"
import NavbarMob from './NavbarMob'
import Notification from './Notification'

function Navbar() {
    return(
    <Flex w={"1440px"} boxShadow={'md'} h={'84px'}>
            <Heading>
                <Image ml={136} my={27} w={"100px"} h={"34px"} src={G1}/>
            </Heading>

        <InputGroup h={"20px"} w={"444px"} ml={"24px"} my={"24px"} borderRadius="16px" backgroundColor={'#EEEEEE'}>
            <Input placeholder='Cari di sini ...' />
                <InputRightElement>
                    <button>{<FaSistrix/>}</button>
                </InputRightElement>
        </InputGroup>

        <IconButton my={27} ml={"483px"} w={'1px'} bg={'White'}>
            <NavbarMob></NavbarMob>
        </IconButton>

        <IconButton my={27} w={'1px'} background>
            <Notification></Notification>
        </IconButton>

        <IconButton my={27}
            icon={<FaRegUser/>} background>
        </IconButton>
    </Flex>
    )
}
export default Navbar