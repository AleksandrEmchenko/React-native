import { View, Button } from "react-native";
import Registration from "./Screens/RegistrationScreen/Registration";
import Login from "./Screens/LoginScreen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

const MainStack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>

      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen name="Registration" component={Registration} options={{headerShown: false}}
        // options={{
        //   title: "Home screen",
        //   headerStyle: {
        //     backgroundColor: "#f4511e",
        //   },
        //   headerTintColor: "#fff",
        //   headerTitleStyle: {
        //     fontWeight: "bold",
        //     fontSize: 20,
        //   },
        //   headerRight: () => (
        //     <Button
        //       onPress={() => alert("This is a button!")}
        //       title="Press me"
        //       color="#fff"
        //     />
        //   ),
        // }}
        
        />
        <MainStack.Screen name="Login" component={Login} options={{headerShown: false}} />
        {/* <MainStack.Screen name="Home" component={Home} /> */}
      </MainStack.Navigator>

      </NavigationContainer>
    </>
  );
}
