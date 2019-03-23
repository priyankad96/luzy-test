import {Alert, AsyncStorage} from 'react-native';
let isAlertShown = false;

export function isValidEmail(email) {
    const format = /^[0-9A-Za-z_]{4,}$/;
    return format.test(email);
}
