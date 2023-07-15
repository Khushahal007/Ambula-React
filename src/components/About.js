import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box
      textAlign="center"
      mt={20}
      p={10}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      maxW="1100px"
      mx="auto"
      backgroundColor="white"
    >
      <Heading as="h1" size="xl" mb={4}>
        About the Project
      </Heading>
      <Text fontSize="lg">
        <strong>Todo List Project:</strong>
        <br />
        A Todo List project is a common application that allows users to create, manage, and track their tasks or to-do items. Users can add new tasks, mark tasks as completed, delete tasks, and update task details. The project typically involves a user interface where users can interact with the list of tasks.
        <br />
        <br />
        To implement a Todo List project, you would need to create components for displaying the list of tasks, adding new tasks, updating task status, and deleting tasks. You can use React state and state management libraries like Redux or React Context to manage the list of tasks. Each task in the list would have properties such as the task name and status (completed or not completed).
        <br />
        <br />
        <strong>Adding Items to Cart in Item Details:</strong>
        <br />
        In addition to the Todo List functionality, you can also incorporate an "add to cart" feature in the item details. This allows users to add items to a shopping cart for purchase.
        <br />
        <br />
        To implement this feature, you would need to create a separate component for the item details page. This component would display the details of a particular item, such as the item name, description, price, and an option to add it to the cart. When the user clicks on the "add to cart" button, you would update the shopping cart state with the selected item.
        <br />
        <br />
        The shopping cart can be implemented using React state or state management through local storage. The cart state would store an array of items with their details, such as ID, name, quantity, and price. You can also include functionalities like updating the quantity of items in the cart, removing items from the cart, and calculating the total price of the items in the cart.
        <br />
        <br />
        By combining the Todo List project with the "add to cart" feature in item details, you can create a more comprehensive application that allows users to manage tasks and shop for items simultaneously.
      </Text>
    </Box>
  );
}

export default About;
