import React, { useRef } from "react";
import { 
    Flex, 
    Box, 
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    Button,
    Center,
    Text,
    Hide,
    Spacer,
    Image,
    InputGroup,
    InputLeftAddon
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FaCamera } from 'react-icons/fa';
import logo from '../../assets/logosecond.png';
import { useState } from "react";
import '../infoproduk/infoproduk.css'


function InfoProfil () {
    
    const [foto,setFoto] = useState(null);
    const target = useRef(null);

    const handleUpload = (e) => {
        const uploaded = e.target.files[0];
        setFoto(URL.createObjectURL(uploaded));
    }

    return (
        <>
        <Hide breakpoint='(max-width: 640px)'>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="white" h="80px" boxShadow="md" position="relative">
                <Box p='2' ml="10%">
                    <Image
                    width="200px"
                    src={logo}
                    />
                </Box>
                    <Spacer />
                <Text ml="-30%" fontWeight="semibold" color="#ff7d55">Lengkapi Info Akun</Text>
                    <Spacer />
            </Flex>
        </Hide>

        <Flex justify="center" h="100vh" bg={{base:"0",md:"#F7EDE2"}}>
                <ArrowBackIcon w={5} h={5} mt="2%" ml="-10%" mr="5%" />
            <Box p={6}  w={500} h="min-content" bg="white" mt="2%" borderRadius="25px"  boxShadow={{base:"0",md:"md"}}>
                    <Hide breakpoint='(min-width: 640px)'>
                        <Box>
                            <ArrowBackIcon w={5} h={5} ml="-4" />
                            <Center><Text fontWeight="semibold" mt="-6" mb="6" color="#ff7d55">Lengkapi Info Akun</Text></Center>
                        </Box>
                    </Hide>
                <Center>
                <Button
                        w={{base: "80px" , md:"100px"}}
                        h={{base: "80px" , md:"100px"}}
                        border={0}
                        borderStyle="dashed"
                        onClick={()=>target.current.click()}
                        >
                        {<FaCamera size="25px"/>}
                        {foto !== null && <img src={foto}  w={{base: "80px" , md:"100px"}}/>}
                </Button>
                        <input type="file" ref={target} onChange={(e) => handleUpload(e)} hidden />
                </Center>
                <FormControl color="#235d8f" mt={{base:"8px", md:"0"}}>
                    <FormLabel fontSize="xs" mb="2px" mt="2px"  >Nama*</FormLabel>
                        <Input  size="sm" bg="white" borderRadius="10" id="nama" type="text" placeholder="Nama" required />
                </FormControl>
                <FormControl color="#235d8f" mt={{base:"10px", md:"8px"}}>
                <FormLabel fontSize="xs" mb="2px" >Kota*</FormLabel>
                    <Select  size="sm" bg="White" borderRadius="10" id='kategori' placeholder='Pilih Kota'>
                        <option>Jakarta</option>
                        <option>Bandung</option>
                    </Select>
                </FormControl>
                <FormControl color="#235d8f" mt={{base:"10px", md:"8px"}}>
                    <FormLabel fontSize="xs" mb="2px">Alamat*</FormLabel>
                        <Textarea size="sm" bg="White" borderRadius="10" id="kategori" placeholder="Contoh: Jalan Hiu 33"></Textarea>
                </FormControl>
                <FormControl color="#235d8f" mt={{base:"10px", md:"8px"}}>
                    <FormLabel fontSize="xs" mb="2px">No Handphone</FormLabel>
                        <InputGroup size="sm" >
                            <InputLeftAddon borderRadius="10" children='+62' />
                            <Input borderRadius="10" id="nama" type="tel" placeholder="contoh: +628123456789" />
                        </InputGroup>
                </FormControl>
                <Button  mt={{base:"15px", md:"10px"}} fontSize="xs" borderRadius="10" bg="#ff7d55" variant='solid' w="100%" color="white" colorScheme='orange'>Simpan</Button>
                
            </Box>
        </Flex>
        </>
    )
}

export default InfoProfil;
