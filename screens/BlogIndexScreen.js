import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/AppContext";

const BlogIndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  console.log(`blog posts :${JSON.stringify(state)}`);
  console.log(`addBlogPost :${JSON.stringify(addBlogPost)}`);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
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
