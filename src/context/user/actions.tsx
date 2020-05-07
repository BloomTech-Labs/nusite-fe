import { Dispatch } from "react";
import { UserAction } from "./context";

export const LOGIN_START: string = "LOGIN_START";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
export const LOGIN_END: string = "LOGIN_END";
export const SIGNUP_START: string = "SIGNUP_START";
export const SIGNUP_SUCCESS: string = "SIGNUP_SUCCESS";
export const AUTH_ERROR: string = "AUTH_ERROR";
export const LOGOUT: string = "LOGOUT";

//== Actions ==//
// interface LoginCredentials {
//    username: string,
//    password: string
// }

// export const login = (dispatch: Dispatch<UserAction>, payload: LoginCredentials) => {
//    dispatch({ type: "LOGIN_START", payload: null});

// };
