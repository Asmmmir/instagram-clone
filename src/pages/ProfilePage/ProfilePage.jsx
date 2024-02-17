import { Container, Flex } from "@chakra-ui/react";
import React from "react";

const ProfilePage = () => {
  return (
    <Container maxW="container.lg" py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        flexDirection={"column"}
      >
        <ProfileHeader />
      </Flex>
      <Flex></Flex>
    </Container>
  );
};

export default ProfilePage;
