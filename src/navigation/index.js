import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

import Login  from "../container/Login"
import Home from "../component/Home";

const appNavigation = createStackNavigator({
        Login: Login,
        Home: Home
    },
    {
        initialRouteName:'Login',
        headerMode: 'none'
    },
);

export default createAppContainer(appNavigation)