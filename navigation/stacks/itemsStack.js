import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemsIndex from "../../components/Items";
import ItemDetails from "../../components/Items/details";

const Stack = createNativeStackNavigator();

const ItemsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Items">
      <Stack.Screen name="Items" component={ItemsIndex} />
      <Stack.Screen name="Details" component={ItemDetails} />
    </Stack.Navigator>
  );
};

export default ItemsStack;
