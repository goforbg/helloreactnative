import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AppContext from "../context/AppContext";

const BlogIndexScreen = () => {
  const blogPosts = useContext(AppContext);
  return (
    <View>
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
