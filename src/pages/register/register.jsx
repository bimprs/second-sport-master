import { Button, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, InputRightElement, InputGroup, Box } from '@chakra-ui/react';
import React, {useState} from 'react';
import img from "../../assets/secondsports.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { ViewIcon } from '@chakra-ui/icons';
import { ViewOffIcon } from '@chakra-ui/icons';

const Register = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
    setOpen(!open) };

    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/login");
    };
    
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
    <HStack w="full" h="100vh">
        <Flex w="full" h="full" borderRightWidth={1} display={{base: 'none', md:'flex'}}>
            <Image 
            objectFit="cover" 
            w="full" 
            h="full" 
            src={img} />
        </Flex>
        <Flex w="full" h="full" alignItems="center" justifyContent="center" bg={{base:"0",md:"#F7EDE2"}} >
            <Stack w="full" maxW="md" spacing={4} p={6} >
            <Box p={6}  w={500} h="min-content" bg="white"  borderRadius="25px"  boxShadow={{base:"0",md:"md"}}>
                <Heading fontSize="2xl" color="#235d8f" >
                    Daftar
                </Heading>
                <FormControl mt={{base:"15px", md:"25px"}} color="#235d8f" id="user">
                    <FormLabel>Nama</FormLabel>
                    <Input placeholder="Nama lengkap" />
                </FormControl>
                <FormControl mt={{base:"15px", md:"10px"}} color="#235d8f" id="user">
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Contoh: johndee@gmail.com" />
                </FormControl>
                <FormControl mt={{base:"15px", md:"10px"}} color="#235d8f">
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button bg='white' h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? <ViewIcon /> : <ViewOffIcon />   }
                        </Button>
                    </InputRightElement>
                    </InputGroup>
                    </FormControl>
                <Button mt={{base:"15px", md:"25px"}} fontSize="md" borderRadius="10" bg="#ff7d55" variant='solid' w="100%" color="white" colorScheme='orange'>Daftar</Button>
                <FormLabel textAlign="center" color="#235d8f">Sudah punya akun?
                <Button mt={{base:"15px", md:"10px"}} colorScheme='orange' variant='link' w="120px" onClick={handleOnClick}> Daftar di sini </Button> 
                </FormLabel>
            </Box>
            </Stack>
        </Flex>
    </HStack>
    );
};

export default Register;