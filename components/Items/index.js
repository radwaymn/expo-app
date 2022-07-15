import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const myItems = [];

const fillMyItemsArray = () => {
  for (let i = 1; i <= 30; i++) {
    myItems.push({
      id: i,
      title: `Item ${i}`,
      description: `Description of item ${i}`,
      date: new Date().toUTCString(),
    });
  }
};

const ItemsIndex = ({ navigation }) => {
  fillMyItemsArray();
  return (
    <View style={style.container}>
      <FlatList
        data={myItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={style.item}
            onPress={() => navigation.navigate("Details", item)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "pink",
    margin: 10,
    padding: 20,
    alignSelf: "center",
  },
});

export default ItemsIndex;
