import React, {useEffect} from "react";
import {Text, View} from "react-native";
import useUsers from "../network/react-query/auth/login/users";
import useCreateUser from "../network/react-query/auth/login/createUser";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const {data, isPending} = useUsers(1)
    const {mutate} = useCreateUser()
    const { t } = useTranslation();


    useEffect(() => {
        mutate({name: "test", job: "Dev"})
    }, [])

    return (
        <View>
            <Text>{t("common:welcome")}</Text>
        </View>
    );
};

export default Home;
