import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import AppContext from "../context/AppContext";

const BlogIndexScreen = () => {
  const { blogPosts, addBlogPost } = useContext(AppContext);
  console.log(`blog posts :${JSON.stringify(blogPosts)}`);
  console.log(`addBlogPost :${JSON.stringify(addBlogPost)}`);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlogIndexScreen;
