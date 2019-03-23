import {connect} from "react-redux";
import {checkLoginData} from "../../actions/Login/loginAction";
import Login from '../../component/Login'

const handleLocalAction = (dispatch, action, navigation) => {
    const {type} = action;

    switch (type) {
        case localActions.LOGIN:
            dispatch(checkLoginData(action['emailID'], action['password']));
            break
    }
};
export const localActions = {
    LOGIN: 'LOGIN'
};

const mapStateToProps = (state) => {
    const {userData} = state.Login;
    return {
        localActions,
        userData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLocalAction: (actionType, navigation) => handleLocalAction(dispatch, actionType, navigation)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
