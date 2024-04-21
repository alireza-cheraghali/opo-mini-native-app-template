import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { RoutesEnum } from "../routes/routes.enum";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={RoutesEnum.HOME} component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
