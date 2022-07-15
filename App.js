import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ItemsStack from "./navigation/stacks/itemsStack";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ItemsStack />
      </NavigationContainer>
    </>
  );
}
