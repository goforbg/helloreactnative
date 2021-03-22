import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/AppContext";
import { Feather } from "@expo/vector-icons";

const BlogIndexScreen = (props) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  console.log(`blog posts :${JSON.stringify(state)}`);
  console.log(`addBlogPost :${JSON.stringify(addBlogPost)}`);
  console.log(`addBlogPost :${JSON.stringify(deleteBlogPost)}`);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("BlogDetailScreen", { id: item.id })
              }
            >
              <View style={styles.container}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>{" "}
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.delete} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
