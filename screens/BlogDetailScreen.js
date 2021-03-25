import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/AppContext";

const BlogDetailScreen = ({ navigation }) => {
  //Getting id
  const blogPostId = navigation.getParam("id");
  console.log(`blog post id received  ${blogPostId}`);

  //Getting list of post using state
  const { state } = useContext(BlogContext);
  console.log(`All state items : ${JSON.stringify(state)}`);

  //Finding specific blog post id
  const blogPost = state.find((blogPost) => blogPost.id === blogPostId);
  console.log(`blog post is ${JSON.stringify(blogPost)}`);

  //Render View
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlogDetailScreen;
