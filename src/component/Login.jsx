import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}  >
            <form>
                <VStack 
                alignItems={'stretch'}
                 spacing={'8'} 
                 w={['full', '96']} 
                 m={'auto'} 
                 my={'16'} >
                    <Heading >Wellcome Back</Heading>
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

                    <Button colorScheme='yellow' variant={'link'} alignSelf={'flex-end'}  >
                        <Link to='/forgetpassword'>Forget Password?</Link>
                    </Button>
                    <Button colorScheme='yellow'  >Log in</Button>

                    <Text textAlign={'right'}>
                        New user? {" "}
                        <Button variant={'link'}colorScheme='yellow' >
                            <Link to='/signup'>Sign Up</Link>
                        </Button>
                    </Text>
                </VStack>
            </form>

        </Container>
    )
}

export default Login
