import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import image from "../images/StockCake-Excited Programmer Working_1723790801.jpg";

const Feed = ({ posts }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {posts.map((post, index) => (
            <Post key={index} text={post.text} image={post.image} />
          ))}
          <Post text={"Excited Programmer Working"} image={image} />
        </>
      )}
    </Box>
  );
};

export default Feed;
