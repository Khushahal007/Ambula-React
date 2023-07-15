import React from 'react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import { ChakraProvider, CSSReset, Box, Flex, Link, Spacer, Heading } from '@chakra-ui/react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import TaskList from './components/TaskList';
import Product from './components/Product';
import ShoppingCartItem from './components/ShoppingCartItem';


function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box bgGradient="linear(to-r, gray.300, gray.500)" minHeight="100vh">
        <Box p={4} bg="rgba(255, 255, 255, 0.8)">
          <Flex align="center" justify="center" maxW="800px" mx="auto">
            <Link
              as={RouterLink}
              to="/"
              fontSize="xl"
              _hover={{ textDecoration: 'none' }}
              mr={7}
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              to="/tasks"
              _hover={{ textDecoration: 'none' }}
              mr={7}
              fontSize="xl"
            >
              Tasks
            </Link>
            <Link
              as={RouterLink}
              to="/product"
              _hover={{ textDecoration: 'none' }}
              mr={7}
              fontSize="xl"
            >
              Product
            </Link>
            <Link
              as={RouterLink}
              to="/about"
              _hover={{ textDecoration: 'none' }}
              mr={7}
              fontSize="xl"
            >
              About
            </Link>
            <Link
              as={RouterLink}
              to="/contact"
              _hover={{ textDecoration: 'none' }}
              fontSize="xl"
            >
              Contact
            </Link>
          </Flex>
        </Box>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/product" element={<Product />} />
           <Route path="/cart" element={<ShoppingCartItem />} />
          </Routes>
       
      </Box>
    </ChakraProvider>
  );
}

export default App;
