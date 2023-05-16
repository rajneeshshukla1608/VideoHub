import React from 'react'
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi'


const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={4}
        left={4}
        colorScheme='purple'
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>

        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link to='/'>VIDEO HUB</Link>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>

              <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose}>
                <Link to={"/"}>Home</Link>
              </Button>

              <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose}>
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose}>
                <Link to={"/ideos?category=free"}>Free Videos</Link>
              </Button>

              <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose}>
                <Link to={"/upload"}>Upload</Link>
              </Button>
            </VStack>
              <HStack 
              pos={'absolute'}
              left={0}
              bottom={10}
              w={'full'}
              justifyContent={'space-evenly'}>
                <Button variant={'outline'} colorScheme='purple' onClick={onClose}>
                  <Link to={"/login"}>Log In</Link>
                </Button>
                <Button variant={'outline'} colorScheme='purple' onClick={onClose}>
                  <Link to={"/signup"}>Sign Up</Link>
                </Button>
              </HStack>
          </DrawerBody>

        </DrawerContent>

      </Drawer>
    </>
  )
}

export default Header;