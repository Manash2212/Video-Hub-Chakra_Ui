import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload, AiOutlineUpload } from 'react-icons/ai'

const Upload = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <VStack color={'yellow.500'} justifyContent={'center'} h={'full'} >
                <AiOutlineCloudUpload size={'7vmax'} />
                <form>
                    <HStack>
                        <Input required type='file' css={{
                            '&::file-selector-button': {
                                border: 'none',
                                height: '100%',
                                color: ' yellow',
                                cursor: 'pointer'
                            }
                        }} />
                        <Button colorScheme='yellow' type='submit'>Upload</Button>
                    </HStack>
                </form>
            </VStack>
        </Container>
    )
}

export default Upload
