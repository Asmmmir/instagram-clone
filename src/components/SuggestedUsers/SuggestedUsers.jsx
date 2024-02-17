import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.500" }}
          cursor={"pointer"}
        >
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser name='Dan Abrahmov' followers={1739} avatar="/instagram-clone/img1.png" />
      <SuggestedUser name='Ryan Florence' followers={1541} avatar="/instagram-clone/img2.png" />
      <SuggestedUser name='Christian Nwamba' followers={893} avatar="/instagram-clone/img3.png" />


      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={'start'}>
        © 2024 Built By <Link color={'blue.400'} href="https://github.com/asmmmir" target="_blank">Asmmmir</Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
