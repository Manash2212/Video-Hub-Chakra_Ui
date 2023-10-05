import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        p={2}
        w={'10'}
        h={'10'}
        pos={'fixed'}
        top={2}
        left={2}
        colorScheme="yellow"
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={20} />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        colorScheme="blue"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor={'black'} color={'white'} cursor={'pointer'} onClick={onClose} >
            <Link to={'/'}>VIDEO HUB</Link>
          </DrawerHeader>
          <DrawerBody bgColor={'black'}>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme="yellow" variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme="yellow" variant={'ghost'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="yellow" variant={'ghost'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="yellow" variant={'ghost'}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'15'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="yellow" p={2} m={3}>
                <Link to={'/login'}>Log in</Link>
              </Button>
              <Button onClick={onClose} colorScheme="yellow" p={2} m={3}>
                <Link to={'/signup'}>Sign in</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
