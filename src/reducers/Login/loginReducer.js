import { CHECK_LOGIN_DATA } from "../../actions/types";

const INITIAL_STATE = {
    userData: []
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHECK_LOGIN_DATA: {
            return{
                ...state,
                userData: action.payload
            }
        }
        default:
            return state;
    }
}