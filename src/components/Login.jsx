import React from 'react'
import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <Container m="auto" p="4" w="sm" h="sm"  borderRadius="lg">
            <VStack align="center" spacing="4">
                <Heading size="lg" color={'purple.600'}>Login</Heading>
                <Input w="full" placeholder="Email" border={"purple"} />
                <Input w="full" type="password" placeholder="Password" border={'purple'} />
                <Button w="full" colorScheme="purple" size="lg">Login</Button>
                <Text color="gray.500" fontSize="sm">Don't have an account? <Link to="/register">Register</Link></Text>
            </VStack>
        </Container>    
    )
}

export default Login