import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get("/posts").then(res => {
      setPosts(res.data);
    });
  }, []);

  let recentPosts = posts ? (
    posts.map(post => <Post post={post} key={post.postId} />)
  ) : (
    <center>Loading...</center>
  );

  return (
    <Grid container spacing={9}>
      <Grid item sm={8} xs={12}>
        {recentPosts}
      </Grid>
      <Grid item sm={4} xs={12}>
        <p>We are still on it </p>
      </Grid>
    </Grid>
  );
};

export default Home;
