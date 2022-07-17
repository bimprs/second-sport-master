import { 
    Box,
    Button,
    Center,
    Flex,
    Hide,
    Image,
    Spacer,
    Text,
} from "@chakra-ui/react";
import logo from '../../assets/logosecond.png';
import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";


function infotawar() {
    return(
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
                <Text ml="-30%" fontWeight="semibold" color="#ff7d55">Info Penawar</Text>
                    <Spacer />
            </Flex>
        </Hide>

        <Flex justify="center" h="100vh" bg={{base:"0",md:"#F7EDE2"}}>
        <ArrowBackIcon w={5} h={5} mt="2%" ml="-10%" mr="5%" />
            <Box p={6}  w={600} h="min-content" bg="White" mt="2%" borderRadius="25px" boxShadow={{base:"0",md:"md"}}>
                <Box border="1px solid black" borderRadius="12px" p={3} mt={5} mb={{base:"0",md:"5"}} bg="white">
                    <Flex>
                        <Box mr="3%">
                            <Image 
                            width="48px"
                            height="48px"
                            borderRadius="10px"
                            />
                        </Box>
                        <Box>
                            <Text fontWeight="semibold">Nama Pembeli</Text>
                            <Text fontSize="xs">Kota</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box border="1px solid black" borderRadius="12px" p={3} mt={5} mb={{base:"0",md:"5"}} bg="white">
                    <Text fontWeight="semibold">Daftar Produkmu yang Ditawar</Text>
                    <Flex mt={5}>
                        <Box mr="3%">
                            <Image 
                            width="48px"
                            height="48px"
                            borderRadius="10px"
                            />
                        </Box>
                        <Box>
                            <Text fontSize="xs">Penawaran Produk</Text>
                            <Text fontWeight="semibold">Jam Tangan Casio</Text>
                            <Text fontWeight="semibold">Rp. 250.000</Text>
                            <Text fontWeight="semibold">Di Tawar Rp. 200.000</Text>
                        </Box>
                            <Spacer />
                        <Box>
                            <Text fontSize="xs">20 Apr, 14:04</Text>
                        </Box>
                    </Flex>
                            <Button
                                mt={{base:3, md:1}}
                                mr={{base:0, md:2}}
                                fontSize="xs" 
                                borderRadius="10" 
                                colorScheme="orange"
                                variant='outline'
                                w="25%"
                            >
                                Terima
                            </Button>
                            <Button
                                mt={{base:1, md:5 }}
                                mb={{base:4}}
                                fontSize="xs" 
                                borderRadius="10"
                                colorScheme='orange'
                                bg="#ff7d55" 
                                variant='solid' 
                                w="25%"
                            >
                                Tolak
                            </Button>
                </Box>
            </Box>
        </Flex>
        </>
    )
}
export default infotawar;