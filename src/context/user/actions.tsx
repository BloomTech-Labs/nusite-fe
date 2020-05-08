import { Dispatch } from "react";
import { UserAction, UserType } from "./context";

export const LOGIN_START: string = "LOGIN_START";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
export const LOGIN_END: string = "LOGIN_END";
export const SIGNUP_START: string = "SIGNUP_START";
export const SIGNUP_SUCCESS: string = "SIGNUP_SUCCESS";
export const AUTH_ERROR: string = "AUTH_ERROR";

//== Action Creators ==//
export const loginStart: () => UserAction = () => {
   return { type: LOGIN_START, payload: null };
};

export const loginSuccess: (payload: UserType) => UserAction = (
   payload: UserType
) => {
   return { type: LOGIN_SUCCESS, payload };
};

export const signupStart: () => UserAction = () => {
   return { type: SIGNUP_START, payload: null };
};

export const signupSuccess: (payload: UserType) => UserAction = (
   payload: UserType
) => {
   return { type: SIGNUP_SUCCESS, payload };
};

export const authError: (payload: Error) => UserAction = (payload: Error) => {
   return { type: AUTH_ERROR, payload };
};
