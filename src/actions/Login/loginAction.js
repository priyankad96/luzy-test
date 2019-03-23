import { CHECK_LOGIN_DATA } from "../types";


export const checkLoginData = (emailId,  password) => {
    return (dispatch, getState) => {

        return fetch("http://63.35.102.119/node_api/luzy_UserLogin", {
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({in_Username: emailId, in_Password: password})
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.status === "200") {
                    dispatch({
                        type: CHECK_LOGIN_DATA,
                        payload: responseJson.result
                    });
                    return Promise.resolve(true);
                }
                else
                {
                    dispatch({
                        type: CHECK_LOGIN_DATA,
                        payload: "User Not Found"
                    });
                    return Promise.resolve(true);
                }
            })
            .catch((error) => {
                alert(error);
            });
    };
};
