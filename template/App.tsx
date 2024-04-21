import React from "react";
import {StyleSheet, useColorScheme} from "react-native";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import RootNavigator from "./navigators/RootNavigator";
import './localization/i18n'
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'


const queryClient = new QueryClient()


function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={styles.container}>
                <QueryClientProvider client={queryClient}>
                    <RootNavigator/>
                </QueryClientProvider>
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
