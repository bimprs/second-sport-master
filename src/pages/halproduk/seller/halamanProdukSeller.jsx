import React from'react'
import Navbar from '../../../components/Navbar';
import PopUp from '../../../components/PopUp';

import { Container, VStack, Box } from '@chakra-ui/layout';
import { Image, Grid, GridItem, SimpleGrid, Button, Text,Flex } from "@chakra-ui/react"
import G2 from "../../../assets/Rectangle134.png"
import G3 from "../../../assets/Rectangle33.png"
function halamanProdukSeller() {
return (

    <VStack>
<Navbar></Navbar>
{/* <CardModal></CardModal> */}
{/* <PopUp></PopUp> */}
{/* <Notification></Notification> */}

<Flex>
<SimpleGrid columns={2} >
<Box w={'600px'} h={'436px'} my={'40px'} ml={'132px'} borderRadius={'16px'}><Image src={G2}/>       
<Container my={'24px'} w={'600px'} h={'436px'} boxShadow={'md'}>
    <Text fontWeight={'Bold'}>Deskripsi</Text>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
    <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.      
    </Text>

    </Container> 
    </Box>
<Box boxShadow={'base'} w={'336px'} h={'266px'} borderRadius={'16px'} ml={'164px'} my={'40px'}>
    <div ml={'24px'} >
    <Text ml={'24px'} my={'16px'} fontWeight={'bold'}>Jam Tangan Casio</Text>
    </div>
<Text ml={'24px'} my={'1px'} fontWeight={'thin'}>Aksesoris
</Text>
    <div>
    <Text ml={'24px'} fontWeight={'semibold'} my={'16px'}>Rp. 250.000
</Text>
    </div>
    <PopUp></PopUp>
    <div>
    <Button color={'black'}colorScheme='white' variant={'outline'}  w={'304px'} h={'48px'} borderRadius={'16px'} ml={'16px'} >Edit</Button></div>
    <Box boxShadow={'base'} w={'336px'} h={'80px'} my={'24px'}>
    <Grid templateColumns='repeat(5, 1fr)' gap={4}>
    <GridItem colSpan={1} my={'16px'} ml={'16px'}> <Image w={'48px'} h={'48px'} src={G3}/> </GridItem>
    <GridItem colStart={2} colEnd={6} my={'16px'}> <Text fontWeight={'bold'}>Nama penjual</Text> <Text>Kota</Text> </GridItem>
</Grid>
    </Box>
    
    </Box>
</SimpleGrid>
</Flex>

    </VStack>

)
}
export default halamanProdukSeller;