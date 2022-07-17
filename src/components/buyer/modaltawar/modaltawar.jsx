import { Button, Text, Flex, Box, Image} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';

  function ModalTawar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton /> 
            <ModalBody boxShadow="md">

                  <Text fontWeight='bold' mb='1rem'>
                  Masukan Harga Tawaranmu                 
                  </Text>
                  <Text >
                  Harga tawaranmu akan diketahui penjual jika penjual cocok kamu akan segera dihubungi penjual.               
                  </Text>
                  <Box 
                  border="1px solid black"
                  borderRadius="12px"
                  p={3}
                  mt={5}
                  mb={{ base: "0", md: "5"}}
                  bg="grey" >

                  <Flex>
                    <Box mr="3%">
                      <Image width="48px" height="48px" borderRadius="10px" />
                    </Box>
                    <Box>
                      <Text fontWeight="semibold"> Jam Tangan Casino </Text>
                      <Text fontSize="xs"> Rp 250.000 </Text>
                    </Box>
                  </Flex>
                  </Box>
                  <Text fontWeight="semibold">Harga Tawar</Text>
                  <Input placeholder='Rp 0,00' />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='orange' bg="#ff7d55" size='md' height='45px' width='500px' onClick={onClose}>
                Kirim
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  export default ModalTawar;