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
    Hide,
    Center,
    Text,
    Image
} from "@chakra-ui/react";
import { AddIcon, ArrowBackIcon } from "@chakra-ui/icons";
import logo from '../../assets/logosecond.png';
import { useState } from "react";

function InfoProduk (){

        const [selectedImages, setSelectedImages] = useState([]);
        const target = useRef(null);

        const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
    
        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });
    
        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    
        // FOR BUG IN CHROME
        event.target.value = "";
        };
    
        function deleteHandler(image) {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }



    return (
        <>
        <Hide breakpoint='(max-width: 639px)'>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="White" h="80px" boxShadow="md" position="relative">
                <Box p='2' ml="10%">
                    <Image
                    width="200px"
                    src={logo}
                    />
                </Box>
            </Flex>
        </Hide>

        <Flex  justify="center" h="max" pb="5%" bg={{base:"0",md:"#F7EDE2"}}>
            <ArrowBackIcon w={5} h={5} mt="2%" ml="-10%" mr="5%" />
            <Box p={6}  w={500} h="min-content" bg="White" mt="2%" borderRadius="25px" boxShadow={{base:"0",md:"md"}}>
                <Hide breakpoint='(min-width: 640px)'>
                    <Box>
                        <ArrowBackIcon w={5} h={5} ml="-4" />
                        <Center><Text fontWeight="semibold" mt="-6" mb="6" color="#ff7d55" >Lengkapi Detail Produk</Text></Center>
                    </Box>
                </Hide>
                <FormControl color="#235d8f" >
                    <FormLabel fontSize="xs" mb="2px">Nama Produk</FormLabel>
                        <Input size="sm" bg="whiteAlpha.700" borderRadius="10" id="nama" type="text" placeholder="Nama Produk" />
                </FormControl>
                <FormControl color="#235d8f" mt="8px">
                    <FormLabel fontSize="xs" mb="2px">Harga Produk</FormLabel>
                        <Input size="sm" bg="whiteAlpha.700" borderRadius="10" id="nama" type="number" placeholder="Rp 0,00" />
                </FormControl>
                <FormControl color="#235d8f" mt="8px">
                <FormLabel fontSize="xs" mb="2px">Kategori</FormLabel>
                    <Select size="sm" bg="whiteAlpha.700" borderRadius="10" id='kategori' placeholder='Pilih Kategori'>
                        <option>1</option>
                        <option>2</option>
                    </Select>
                </FormControl>
                <FormControl color="#235d8f" mt="8px">
                    <FormLabel fontSize="xs" mb="2px">Deskripsi</FormLabel>
                        <Textarea size="sm" bg="whiteAlpha.700" borderRadius="10" id="kategori" placeholder="Contoh: Jalan Hiu 33"></Textarea>
                </FormControl>
                <FormControl color="#235d8f" mt="8px" >
                    <FormLabel fontSize="xs"  mb="2px">Foto Produk</FormLabel>
                    <Button
                        w={{base: "80px" , md:"100px"}}
                        h={{base: "80px" , md:"100px"}}
                        border={1}
                        borderStyle="dashed"
                        onClick={()=>target.current.click()}
                        >
                        {<AddIcon />}
                    </Button>

                    <input
                        type="file"
                        name="images"
                        onChange={onSelectFile}
                        multiple
                        accept="image/png , image/jpeg, image/webp"
                        ref={target}
                        hidden
                    />


                    <div className="images" >
                            {selectedImages &&
                            selectedImages.map((image, index) => {
                                return (
                                    <div key={image} className="image">
                                    <img src={image} height="100" alt="upload" />
                                    <button onClick={() => deleteHandler(image)}>
                                    -
                                    </button>
                                    <p>{index + 1}</p>
                                </div>
                                );
                            })}
                        </div>
                    
                {selectedImages.length > 0 &&
                        (selectedImages.length > 4 ? (
                        <p className="error">
                            Maksimal Upload 4 Images <br />
                            <span>
                            Tolong Hapus <b> {selectedImages.length - 4} </b> Images{" "}
                            </span>
                        </p>
                        ) : (
                        <button
                            className="upload-btn"
                            onClick={() => {
                            console.log(selectedImages);
                            }}
                        >
                            UPLOAD {selectedImages.length} IMAGE
                            {selectedImages.length === 1 ? "" : "S"}
                        </button>
                        ))}

                </FormControl>
                <Button
                    mt={{base:3, md:1}}
                    mr={{base:0, md:2}}
                    fontSize="xs" 
                    borderRadius="10" 
                    colorScheme="orange"
                    variant='outline'
                    w={{ base: "100%", md:"49%", lg:"49%" }}
                    
                >
                    Preview
                </Button>
                <Button
                    mt={{base:1, md:5 }}
                    mb={{base:4}}
                    fontSize="xs" 
                    borderRadius="10" 
                    colorScheme='orange'
                    bg="#ff7d55" 
                    variant='solid' 
                    w={{ base: "100%", md:"49%", lg:"49%" }}
                >
                    Terbitkan
                </Button>
            </Box>
        </Flex>

        </>
    )
}
export default InfoProduk;

