// import React from 'react'
// // import Navbar from './components/Navbar'


// import {Input, InputGroup, InputRightElement} from "@chakra-ui/react"
// import {FaSistrix} from 'react-icons/fa'

//   function functionClick() { 
//     function clickHandler() {
//     console.log('Button clicked')
//   }


//   <InputGroup size='sm'>

//   <Input placeholder='Cari di sini ...' />
//   <InputRightElement>
//   <button onClick={clickHandler}>
//     {<FaSistrix/>} 
//   </button>
//   </InputRightElement>

// </InputGroup>
//   }
// export default functionClick

// import './App.css';
// import Navbar from '../src/components/Navbar';
// import { Route, Routes } from "react-router-dom";

import React from 'react'
import Search from '../src/components/searchClick'
import Navbar from './components/Navbar'


import { Flex, Heading, Container, VStack, Box } from '@chakra-ui/layout';
import { IconButton, Image, Input, InputGroup, InputRightElement, Show, Grid, GridItem, SimpleGrid, Button, ButtonGroup, Spacer, Center, Text, Square } from "@chakra-ui/react"
import { FaRegBell, FaSistrix, FaRegUser, FaListUl } from 'react-icons/fa'

// import G1 from "../src/assets/Rectangle127.png"
import G2 from "../src/assets/image/Rectangle134.png"
// import G3 from "../src/assets/image/Rectangle33.png"

function App() {
  // function functionClick() 
  // { const clickHandler = () => setShow(!Show)
  //   console.log('Button clicked')
  // }
  return (

    <VStack>
<Navbar></Navbar>


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
  <Button color={'#FFFF'} colorScheme='purple' w={'304px'} h={'48px'} borderRadius={'16px'} my={'8px'} ml={'16px'}>Terbitakan</Button>
  <div>
  <Button color={'black'}colorScheme='white' variant={'outline'}  w={'304px'} h={'48px'} borderRadius={'16px'} ml={'16px'} >Edit</Button></div>
  {/* <Image src={G3}/> */}
  </Box>
</SimpleGrid>

{/* 
      <Navbar>

      </Navbar> */}

    </VStack>

  //   <>
  //   <Routes>
  //     <Route path='/'>
  //           <Route path="" element={<Navbar />} />
  //           </Route>
  //   </Routes>
  //   </>
  );
}


export default App;
