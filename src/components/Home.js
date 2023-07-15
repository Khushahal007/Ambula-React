import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Box
      textAlign="center"
      mt={20}
      p={10}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      maxW="900px"
      mx="auto"
      backgroundColor="white"
    >
      <Heading as="h1" size="xl" mb={4}>
        Welcome to the Todo & Cart App
      </Heading>
      <Text fontSize="lg">
      

        At Todo Company, we believe in empowering individuals and organizations to streamline their task management and boost productivity. We provide innovative solutions that simplify the process of organizing, tracking, and completing tasks efficiently.

        With our cutting-edge technology and user-friendly applications, Todo Company offers a range of task management tools designed to meet the diverse needs of individuals, teams, and businesses. Our goal is to help you stay organized, focused, and in control of your daily tasks, so you can achieve your goals with ease.
      </Text>
    </Box>
  );
}

export default Home;