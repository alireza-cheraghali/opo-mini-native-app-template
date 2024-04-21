import React from "react";
import {StyleSheet, useColorScheme} from "react-native";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import RootNavigator from "./navigators/RootNavigator";
import './localization/i18n'

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={styles.container}>
                <RootNavigator/>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default App;
