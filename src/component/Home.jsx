import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
};

function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'}  p={16}>
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid yellow'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']} >
            <Image src={img5} h={['40','350']} />
            <Text  letterSpacing={'wide'} lineHeight={'150%'} p={['4','16']} textAlign='justify'  >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur iste esse repellendus aliquid debitis dolorem, distinctio ratione ullam beatae earum autem sapiente quos cum tenetur nam cumque eveniet nostrum, quis nemo vero nisi! Delectus, expedita. Laboriosam eius molestias deleniti error perferendis consequatur officia dolorem expedita est. Laborum nostrum maiores magnam ullam debitis, ea consectetur quaerat deleniti aperiam veniam officia quis perferendis eligendi suscipit, aliquid, minima qui? Dignissimos beatae laudantium iste corrupti fugiat? Quo doloremque ad aspernatur exercitationem rerum laudantium optio sequi, sit maiores! Aspernatur, inventore quibusdam. Id, ut voluptatum, dignissimos, similique expedita corporis maiores consequatur fugiat quod quo iusto debitis?
            </Text>
        </Stack>
      </Container>
    </Box>
  );
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1300}
    showThumbs={false}
    showStatus={false}
    showArrows={false}
  >
    <Box w="100%" h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption}>
        Watch the Future
      </Heading>
    </Box>
    <Box w="100%" h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption}>
        Future is Gamming
      </Heading>
    </Box>
    <Box w="100%" h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption}>
        Gamming on Consol
      </Heading>
    </Box>
    <Box w="100%" h={'100vh'}>
      <Image src={img4}  h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOption}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
