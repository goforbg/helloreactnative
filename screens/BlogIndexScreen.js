import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/AppContext";
import { Feather } from "@expo/vector-icons";

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
          return (
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>{" "}
              <Feather style={styles.delete} name="trash" />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
  },
  delete: {
    fontSize: 24,
  },
});

export default BlogIndexScreen;
