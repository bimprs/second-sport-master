import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody,  ModalCloseButton,  IconButton, Flex} from '@chakra-ui/react'

import { FaRegBell } from 'react-icons/fa'


    function BasicUsage() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
        return (
          <>
          <Flex>
            <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
            <IconButton my={27} 
            icon={<FaRegBell/>} color='black' background>
        </IconButton>

            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>

                <ModalCloseButton />
                <ModalBody>
                <Alert w={'380px'} status='error'>
  <AlertIcon />
  <AlertTitle >Alert!</AlertTitle>
  <AlertDescription>Validasi akun: lengkapi profil</AlertDescription>
</Alert>
                </ModalBody>

              </ModalContent>
            </Modal>
            </Flex>
          </>
        )
      }

export default BasicUsage