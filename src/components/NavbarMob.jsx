import {Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,DrawerContent,DrawerCloseButton, Button, useDisclosure, IconButton} from '@chakra-ui/react'
import React from 'react'
import { FaListUl } from 'react-icons/fa'


function NavbarMob() {
    const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
return (
        

        <>
            <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
            <IconButton my={27} 
            icon={<FaListUl/>} color='black' background>
        </IconButton>

            </Button>
            <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontWeight={'bold'}>Second Hand</DrawerHeader>
                <DrawerBody>
                    <Button background>Notifikasi</Button>
                    <div></div>
                    <Button background>Daftar Jual</Button>
                    <div></div>
                    <Button background>Akun Saya</Button>
                {/* <Input placeholder='Type here...' /> */}
                </DrawerBody>
                <DrawerFooter>
                {/* <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button> */}
                </DrawerFooter>
            </DrawerContent>
            </Drawer>
        </>
        )
}



export default NavbarMob