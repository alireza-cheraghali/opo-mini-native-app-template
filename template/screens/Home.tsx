import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import useUsers from "../network/react-query/auth/login/users";
import useCreateUser from "../network/react-query/auth/login/createUser";
import {useTranslation} from 'react-i18next';
import FontIcon from "../components/FontIcon/FontIcon"

const Home = () => {
    const {data, isPending} = useUsers(1)
    const {mutate} = useCreateUser()
    const {t} = useTranslation();


    useEffect(() => {
        mutate({name: "test", job: "Dev"})
    }, [])

    return (
        <View>
            <Text style={styles.text}>{t("common:test")}</Text>
            <Text style={styles.text}>{JSON.stringify(data)}</Text>
            <FontIcon name={"pencil"} color={"#002080"} size={24}/>
            <FontIcon name={"pencil"} color={"red"} size={48}/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "red"
    }
})

export default Home;
