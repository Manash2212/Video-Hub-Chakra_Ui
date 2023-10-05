import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}  >
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'} >
          <Heading >VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input
            required
            placeholder={'Name'}
            type={'text'}
            focusBorderColor={'yellow.500'} />
          <Input
            required
            placeholder={'Enter your email'}
            type={'email'}
            focusBorderColor={'yellow.500'} />

          <Input
            required
            placeholder={'Password'}
            type={'password'}
            focusBorderColor={'yellow.500'} />

          <Button colorScheme='yellow'  >Sign Up</Button>

          <Text textAlign={'right'}>
            Already Signed Up? {" "}
            <Button variant={'link'} colorScheme='yellow' >
              <Link to='/login'>Login In</Link>
            </Button>
          </Text>
        </VStack>
      </form>

    </Container>
  )
}

export default Signup
