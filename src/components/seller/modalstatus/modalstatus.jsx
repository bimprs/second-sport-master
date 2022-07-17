import { Button, Stack, Text, Heading} from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';

  function ModalStatus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton /> 
            <ModalBody>
            <RadioGroup defaultValue=''>
                <Stack>
                  <Text fontWeight='bold' mb='rem'>
                  Perbarui status penjualan produkmu                  
                  </Text>

                    <Radio colorScheme='green' value='1'>
                    <Heading as='h1' size='sm'>Berhasil terjual</Heading>
                    <Text fontSize='sm'>Kamu telah sepakat menjual produk ini kepada pembeli</Text>
                    </Radio>
                    <Radio colorScheme='red' value='2'> 
                    <Heading as='h1' size='sm'>Batalkan transaksi</Heading>
                    <Text fontSize='sm'>Kamu membatalkan transaksi produk ini dengan pembeli</Text>
                    </Radio>
                </Stack>
            </RadioGroup>
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

  export default ModalStatus;