import {
    Box,
    Button,
    HStack,
    Heading,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import {
    AiFillFacebook,
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineSend,
  } from 'react-icons/ai';
  
  const Footer = () => {
    return (
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading textTransform={'uppercase'} size={'sm'} textAlign={'center'}>
              Login to Get Instant Updatate
            </Heading>
            <HStack borderBottom={'2px solid yellow'} py={'2'}>
              <Input
                placeholder={'Enter Your Mail..'}
                border={'none'}
                outline={'none'}
                borderRadius={'none'}
                focusBorderColor={'none'}
              />
              <Button
                p={'2'}
                colorScheme="yellow"
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={25} />
              </Button>
            </HStack>
          </VStack>
  
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid yellow']}
            borderRight={['none', '1px solid yellow']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              Video Hub
            </Heading>
            <Text>All rights reserved</Text>
          </VStack>
          <VStack w={'full'} pt={'4'} >
            <Heading textTransform="uppercase"  >Social Media</Heading>
            <Stack mt={'2'} direction={['column','row']} >
              <a href="https://www.linkedin.com/in/manash-link2212/" target={"blank"} >
                <AiFillLinkedin size={'25'}  />{' '}
              </a>
              <a href="https://www.facebook.com/profile.php?id=100080939478681" target={"blank"} >
                <AiFillFacebook size={'25'}  />{' '}
              </a>
              <a href="https://www.instagram.com/alwaysmanash/" target={"blank"} >
                <AiFillInstagram size={'25'}  />{' '}
              </a>
              <a href="https://github.com/Manash2212" target={"blank"} >
                <AiFillGithub size={'25'}  />{' '}
              </a>
            </Stack>
          </VStack>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  