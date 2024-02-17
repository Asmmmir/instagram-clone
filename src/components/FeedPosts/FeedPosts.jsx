import {
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, i) => (
          <VStack key={i} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"}></Skeleton>
                <Skeleton height={"10px"} w={"150px"}></Skeleton>
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box height={500}>Contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost
            username={"asmmmir"}
            img="/instagram-clone/img1.png"
            avatar="/instagram-clone/profilepic.png"
          />
          <FeedPost
            username={"diana"}
            img="/instagram-clone/img2.png"
            avatar="/instagram-clone//img2.png"
          />
          <FeedPost
            username={"asset"}
            img="/instagram-clone/img3.png"
            avatar="/instagram-clone//img3.png"
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
