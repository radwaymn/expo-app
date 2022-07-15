import React from "react";
import { Button, Text, View } from "react-native";

const ItemDetails = ({ route, navigation }) => {
  const { title, description, date } = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink"
      }}
    >
      <Text style={{ marginBottom: 20}}>Item Details</Text>
      <Text style={{ marginBottom: 20}}>Title: {title}</Text>
      <Text style={{ marginBottom: 20 }}>Description: {description}</Text>
      <Text style={{ marginBottom: 20 }}>Date: {date}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ItemDetails;
