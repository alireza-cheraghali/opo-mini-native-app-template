import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
const resources = {
    en,
};
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;
