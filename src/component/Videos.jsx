import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

import vid1 from '../assets/video/one.mp4'
import vid2 from '../assets/video/two.mp4'
import vid3 from '../assets/video/three.mp4'
import vid4 from '../assets/video/four.mp4'
import vid5 from '../assets/video/five.mp4'
import vid7 from '../assets/video/six.mp4'
import vid8 from '../assets/video/seven.mp4'


const Videos = () => {

  // const video_Data = [vid1,
  //   vid2,
  //   vid3,
  //   vid4,
  //   vid5,
  //   vid6,
  //   vid7,
  //   vid8]

  const data = [
    { URL: vid1, Title: 'Sample Video 1', Desc: 'This is a Sample Video and Little Bit information About this Video.' },
    { URL: vid2, Title: 'Sample Video 2', Desc: 'This is a Sample Video and Little Bit information About this Video.' },
    { URL: vid3, Title: 'Sample Video 3', Desc: 'This is a Sample Video and Little Bit information About this Video.' },
    { URL: vid4, Title: 'Sample Video 4', Desc: 'This is a Sample Video and Little Bit information About this Video.' },
    { URL: vid5, Title: 'Sample Video 5', Desc: 'This is a Sample Video and Little Bit information About this Video.' },
    { URL: vid7, Title: 'Sample Video 7', Desc: 'This is a Sample Video and Little Bit information About this Video.' },
    { URL: vid8, Title: 'Sample Video 8', Desc: 'This is a Sample Video and Little Bit information About this Video.' },
  ]


  const [videoSrc, setVideoSrc] = useState(data)


  return (
    <>
      <Stack direction={['column', 'row']} height={'100vh'} >
        <VStack width={'full'} >

          <video
            src={videoSrc} title="YouTube video player"
            style={{ width: '100%', borderRadius: '20px' }}
            controls
            controlsList='nodownload'
          >
          </video>

          <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'} >
            <Heading>Sample Video 1</Heading>
            <Text >
              This is a Sample Video and Little Bit information About this Video.

            </Text>
          </VStack>

        </VStack>

        <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'} >
          {
            data.map((item, index) => (
              <Button variant={'ghost'} colorScheme='yellow' onClick={() => setVideoSrc(item.URL)} >
                Lecture {index + 1}
              </Button>
            ))
          }
        </VStack>
      </Stack>
    </>
  )
}

export default Videos

