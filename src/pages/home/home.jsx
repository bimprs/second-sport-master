import { ArrowRightIcon, Search2Icon } from "@chakra-ui/icons";
import { 
Box, 
Button, 
ButtonGroup,  
Flex,  
Hide, 
Input,
Image, 
InputGroup, 
InputRightElement, 
Spacer,
Text, 
Tag,
HStack
} from "@chakra-ui/react";
import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import coreStyles from 'react-awesome-slider/src/core/styles.scss';
import animationStyles from 'react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss';
import logo from '../../assets/logosecond.png';
import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';
import { useNavigate } from 'react-router-dom';


function Home () {

        const navigate = useNavigate();
        const handleOnClick = () => {
            navigate("/login");
        };

        const AutoplaySlider = withAutoplay(AwesomeSlider);
        const slider = (
        <AwesomeSlider
            media={[
            {
                source: '/path/to/image-0.png',
            },
            {
                source: '/path/to/image-1.png',
            },
            {
                source: '/path/to/image-2.png',
            },
            ]}
            maxW={["10px"]}
        />
        );
    return(
        <>
        <Hide breakpoint='(max-width: 640px)'>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="White" h="80px" boxShadow="md" position="relative">
                <Box p='2' ml="10%">
                    <Image
                        width="200px"
                        src={logo}
                        />
                </Box>
                <Box >
                    <InputGroup size='md' color="#235d8f" >
                        <Input w={{md:'300px' , lg:'400px'}} borderRadius="10px" 
                            placeholder='Cari di sini ...'
                        />
                    <InputRightElement width='4rem'>
                        <Button h='1.75rem' size='sm' bg="#F7EDE2" _hover="White"> {<Search2Icon />}  </Button>
                    </InputRightElement>
                    </InputGroup>
                </Box>
                <Spacer />
                <ButtonGroup gap='2' mr="10%" >
                <Button borderRadius="10px" colorScheme='orange' bg="#ff7d55" leftIcon={<ArrowRightIcon />} onClick={handleOnClick}>Masuk</Button>
                </ButtonGroup>
            </Flex>
        </Hide>

        <AwesomeSlider 
                animation="scaleOutAnimation"
                cssModule={[coreStyles, animationStyles]}
            >
            <Tag variant='subtle' color='#ff7d55' bg='#ff7d55'>
                <img src={carousel1} alt="" />
            </Tag>
            <Tag variant='subtle' color='#ff7d55' bg='#ff7d55'>
                <img src={carousel2} alt="" />
            </Tag>
            <Tag variant='subtle' color='#ff7d55' bg='#ff7d55'>
                <img src={carousel3} alt="" />
            </Tag>
            </AwesomeSlider>

            <HStack spacing={4}>
                {['lg'].map((size) => (
            <Tag size={size} key={size} variant='solid' bg='#ff7d55' my="10%" ml="2.5%">
                Semua
            </Tag>
            ))}
            {['lg'].map((size) => (
            <Tag size={size} key={size} variant='solid' bg='#235d8f' my="10%">
                Badminton
            </Tag>
            ))}
            {['lg'].map((size) => (
            <Tag size={size} key={size} variant='solid' bg='#235d8f' my="10%">
                Sepak Bola
            </Tag>
            ))}
            {['lg'].map((size) => (
            <Tag size={size} key={size} variant='solid' bg='#235d8f' my="10%">
                Voli
            </Tag>
            ))}
            {['lg'].map((size) => (
            <Tag size={size} key={size} variant='solid' bg='#235d8f' my="10%">
                Tenis
            </Tag>
            ))}
            {['lg'].map((size) => (
            <Tag size={size} key={size} variant='solid' bg='#235d8f' my="10%">
                Basket
            </Tag>
            ))}
            </HStack>
        
        <HStack spacing={4}>
        <Box p="5" maxW="320px" borderWidth="1px" ml={5} mb={5}>
                <Image borderRadius="md" src={logo} />
                <Flex align="baseline" mt={2}>
                    <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    >
                    Jam Tangan Casio
                    </Text>
                </Flex>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    Jam Tangan
                </Text>
                <Text mt={2}>Rp. 250.000</Text>
        </Box>

        <Box p="5" maxW="320px" borderWidth="1px" ml={5} mb={5}>
                <Image borderRadius="md" src={logo} />
                <Flex align="baseline" mt={2}>
                    <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    >
                    Jam Tangan Casio
                    </Text>
                </Flex>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    Jam Tangan
                </Text>
                <Text mt={2}>Rp. 250.000</Text>
        </Box>

        <Box p="5" maxW="320px" borderWidth="1px" ml={5} mb={5}>
                <Image borderRadius="md" src={logo} />
                <Flex align="baseline" mt={2}>
                    <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    >
                    Jam Tangan Casio
                    </Text>
                </Flex>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    Jam Tangan
                </Text>
                <Text mt={2}>Rp. 250.000</Text>
        </Box>

        <Box p="5" maxW="320px" borderWidth="1px" ml={5} mb={5}>
                <Image borderRadius="md" src={logo} />
                <Flex align="baseline" mt={2}>
                    <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    >
                    Jam Tangan Casio
                    </Text>
                </Flex>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    Jam Tangan
                </Text>
                <Text mt={2}>Rp. 250.000</Text>
        </Box>

        <Box p="5" maxW="320px" borderWidth="1px" ml={5} mb={5}>
                <Image borderRadius="md" src={logo} />
                <Flex align="baseline" mt={2}>
                    <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    >
                    Jam Tangan Casio
                    </Text>
                </Flex>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                    Jam Tangan
                </Text>
                <Text mt={2}>Rp. 250.000</Text>
        </Box>
        </HStack>
        </>
    )
}

export default Home;