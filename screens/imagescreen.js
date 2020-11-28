import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ImageDetail from "../components/imagedetail";

const ImageScreen = () => {
  const images = [
    {
      key: 1,
      title: "Mountains",
      imageUrl: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
      score: 7,
    },
    {
      key: 2,
      title: "Beach",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      score: 10,
    },
    {
      key: 3,
      title: "Forest",
      imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b",
      score: 8,
    },
  ];

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => {
          return (
            <ImageDetail
              title={item.title}
              imageSource={item.imageUrl}
              score={item.score}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageScreen;
