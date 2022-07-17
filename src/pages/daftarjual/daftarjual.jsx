import {  
    ChevronRightIcon,
    EditIcon,
    ExternalLinkIcon,
    HamburgerIcon, 
    Search2Icon,
    SettingsIcon
    } from "@chakra-ui/icons";
import { 
    Box, 
    Button, 
    ButtonGroup, 
    Flex, 
    Hide, 
    Image, 
    Input, 
    InputGroup, 
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Show,
    SimpleGrid,
    Spacer,
    Text,
    Wrap,
    WrapItem} from "@chakra-ui/react";
import React from "react";
import { FaBell } from "react-icons/fa";
import { BsBox, BsCurrencyDollar, BsFillPersonFill, BsPlusLg, BsSave, BsSuitHeart } from "react-icons/bs";
import logo from '../../assets/logosecond.png';

function daftarjual() {
    return(
        <>
        <Hide breakpoint='(max-width: 639px)'>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="White" h="80px" boxShadow="md" position="relative">
                <Box p='2' ml="10%">
                    <Image
                    width="200px"
                    src={logo}
                    />
                </Box>
                    <Box >
                        <InputGroup size='md' color="#235d8f">
                            <Input w={{md:'300px' , lg:'400px'}} borderRadius="10px"
                                placeholder='Cari di sini ...'
                            />
                        <InputRightElement width='4rem'>
                            <Button h='1.75rem' size='sm' bg="#F7EDE2" _hover="White"> {<Search2Icon />}  </Button>
                        </InputRightElement>
                        </InputGroup>
                    </Box>
                        <Spacer />
                    <ButtonGroup mr="10%" color="#235d8f">
                        <Button bg="White" _hover="White" borderRadius="10px"> {<HamburgerIcon />} </Button>
                        <Button bg="White" _hover="White" borderRadius="10px" mr="10px"> {<FaBell />} </Button>
                        <Menu>
                            <MenuButton> {<BsFillPersonFill />} </MenuButton>
                            <MenuList>
                                <MenuItem icon={<EditIcon />}  >
                                Ubah Akun
                                </MenuItem>
                                <MenuItem icon={<SettingsIcon />} >
                                Pengaturan Akun
                                </MenuItem>
                                <MenuItem icon={<BsSave />} >
                                Daftar Simpan
                                </MenuItem>
                                <MenuItem icon={<ExternalLinkIcon />} >
                                Keluar
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </ButtonGroup>
            </Flex>
        </Hide>

        <Flex justify="center" h="100vh" color="#235d8f" bg={{base:"0",md:"#F7EDE2"}}>
            <Box p={6}  w={800} h="min-content" bg="White" mt="2%" borderRadius="25px" boxShadow={{base:"0",md:"md"}}>
                <Text fontSize="xl" fontWeight="bold">Daftar Jual Saya</Text>
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
                            <Text fontWeight="semibold">Nama Penjual</Text>
                            <Text fontSize="xs">Kota</Text>
                        </Box>
                        <Spacer />
                        <Box>
                            <Button bg="#ff7d55" color="white" colorScheme='orange' fontSize="sm" borderRadius="12px">Edit</Button>
                        </Box>
                    </Flex>
                </Box>

                <Show breakpoint='(max-width: 639px)'>
                    <Flex>
                        <Box my={5}>
                            <Button bg="White" _hover="White" borderRadius="12px" mr={4} leftIcon={<BsBox />}>Produk</Button>
                            <Button bg="White" _hover="White" borderRadius="12px" mr={4} leftIcon={<BsSuitHeart />}>Diminati</Button>
                            <Button bg="White" _hover="White" borderRadius="12px" leftIcon={<BsCurrencyDollar />}>Terjual</Button>
                        </Box>
                    </Flex>
                </Show>

                <Wrap>
                <Hide breakpoint='(max-width: 639px)'>
                    <WrapItem w={250}>
                        <Box p={5} borderRadius="20px" >
                            <Text mb={2} fontWeight="semibold">Kategori</Text>
                                <Button width="200px" borderBottom="1px solid black" borderRadius={0} mb={2} bg="white"  _hover="White" leftIcon={<BsBox />} rightIcon={<ChevronRightIcon ml="40px"/>}>Semua produk</Button>
                                    <Button  width="200px" borderBottom="1px solid black" borderRadius={0} mb={2} bg="white"  _hover="White" leftIcon={<BsSuitHeart />} rightIcon={<ChevronRightIcon ml="82px"/>}>Diminati</Button>
                                        <Button  width="200px" borderBottom="1px solid black" borderRadius={0} mb={2} bg="white"  _hover="White" leftIcon={<BsCurrencyDollar />} rightIcon={<ChevronRightIcon ml="100px"/>}>Terjual</Button>
                        </Box>
                    </WrapItem>
                </Hide>
                    <WrapItem w="max-content">
                        <Box p={5} borderRadius="20px" >
                            <SimpleGrid columns={[2, 3]} spacing='15px'>
                                <Box>
                                    <Button 
                                        width={{base:"155px",md:"140px"}}
                                        height={{base:"200px",md:"140px"}}
                                        fontSize="xs"
                                        leftIcon={<BsPlusLg />}
                                        >  Tambah produk</Button>
                                </Box>
                                <Box>
                                    <Image
                                        src=""
                                        width={{base:"155px",md:"140px"}}
                                        height={{base:"200px",md:"140px"}}
                                    ></Image>
                                </Box>
                                <Box>
                                        <Image
                                        src=""
                                        width={{base:"155px",md:"140px"}}
                                        height={{base:"200px",md:"140px"}}
                                        ></Image>
                                </Box>
                            </SimpleGrid>
                        </Box>
                    </WrapItem>
                </Wrap>
            </Box>  
        </Flex>
        </>
    )
}

export default daftarjual;

