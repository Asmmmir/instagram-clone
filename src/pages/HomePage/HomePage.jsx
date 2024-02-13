import { Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FeedPosts from "../../components/Feedposts/FeedPosts";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={10} py={10}>
        <Box flex={2} py={10}   >
          <FeedPosts />
        </Box>
        <Box 
        flex={3}
         mr={20}
         display={{base:'none', lg:'block'}}
        maxW={'300px'}
  

         
         
         >Suggested Users</Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
