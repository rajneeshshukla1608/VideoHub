import React from 'react'
import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Container maxW="md" m="auto" p="4" >
        <Heading size="lg" textAlign="center" p={4} color={'purple.700'}>Register</Heading>
        <VStack align="center" spacing="4">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
            <Button colorScheme="purple" w="full" size="lg"  >Register</Button>
            <Text textAlign="center" color="gray.500" fontSize="sm">
                Already have an account? <Link to="/login">Login</Link>
            </Text>
        </VStack>
    </Container>
    )
}

export default Register