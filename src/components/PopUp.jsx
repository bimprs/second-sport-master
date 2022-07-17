import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,

    ModalCloseButton,
    Text,
    Button,
    useDisclosure,
    HStack,
    Box,
    Center,
    Container,
    Stack,
    IconButton,
    useColorModeValue,
    Image
  } from '@chakra-ui/react'

  import {FaWhatsapp} from 'react-icons/fa'
  import G3 from "../assets/Rectangle34.png"
import G4 from "../assets/Rectangle35.png"

    function PopUp() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
<Button onClick={onOpen} color={'#FFFF'} colorScheme='purple' w={'304px'} h={'48px'} borderRadius={'16px'} my={'8px'} ml={'16px'}>Terbitkan</Button>
    
      
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>

                <ModalCloseButton />


                <Center py={6}>
      <Box 
        maxW={'330px'}
        h={'456px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        rounded={'md'}
        overflow={'hidden'}>
        <IconButton  bg={'white'} size={'lg'} alignContent={'end'} left={'280px'}/>      
        <Stack borderRadius={'16px'}
          textAlign={'center'}
          
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text fontFamily={'Helvetica'} fontWeight={'bold'} textAlign={'left'} pl={'19px'} pr={'10px'}>
            Yeay kamu berhasil mendapat harga yang sesuai
          </Text>
          <Text color={'grey'} textAlign={'left'} fontWeight={'thin'} fontFamily={'Helvetica'} pl={'19px'} pr={'10px'} >
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya 
          </Text>
          <Container bgColor={'#EEEEEE'} borderRadius={'16px'} h={'200px'} w={'296px'}>
          <Text fontWeight={'bold'} my={'10px'} fontFamily={'Helvetica'}>
            Product Match
          </Text>
          <HStack my={'16px'} > 
            <Image w={'48px'} h={'48px'} src={G3}/>
            <Text fontWeight={'bolder'} textAlign={'left'} fontFamily={'Helvetica'}>
              <h1>Nama Pembeli</h1>
              <Text fontSize={'smaller'} fontWeight={'light'} fontFamily={'Helvetica'} color={'grey'}>
              <h1>Kota</h1>
              </Text>
            </Text>
          </HStack>
          <HStack>
            <Image w={'48px'} h={'48px'} src={G4}/>
            <Text  fontWeight={'light'} textAlign={'left'} fontFamily={'Helvetica'} fontSize={'small'}>
              <h1>Jam Tangan Casio</h1>
              <h1>Rp. 250.000</h1>
              <h1>Ditawar Rp. 200.000</h1>
            </Text>
          </HStack>
          </Container>
        </Stack>


        <Center><Button my={'24px'} placeContent={'center'} bgColor={'#7126B5'} borderRadius={'16px'} rightIcon={<FaWhatsapp/>} colorScheme='White' w={'296px'} h={'48px'}>
    Hubungi via whatsapp
  </Button></Center>
        </Box>
    </Center>
              </ModalContent>
            </Modal>
          </>
        )
      }

export default PopUp