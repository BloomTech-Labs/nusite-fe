import { Reducer } from "react";
import { createReducer, ReducerAction } from "../create-reducer";
import { UserState, ANONYMOUS_USER } from "./context";
import {
   LOGIN_START,
   LOGIN_SUCCESS,
   LOGIN_END,
   SIGNUP_START,
   SIGNUP_SUCCESS,
   AUTH_ERROR,
} from "./actions";

const NO_ERRORS = null;
const start: Reducer<UserState, ReducerAction> = (
   state: UserState,
   action: ReducerAction
): UserState => {
   return {
      ...state,
      user: {
         ...state.user,
      },
      isAuthorizing: true,
      error: NO_ERRORS,
   };
};
const success: Reducer<UserState, ReducerAction> = (
   state: UserState,
   action: ReducerAction
): UserState => {
   return {
      ...state,
      user: action.payload,
      isAuthorizing: false,
      error: NO_ERRORS,
   };
};
const end: Reducer<UserState, ReducerAction> = (
   state: UserState,
   action: ReducerAction
): UserState => {
   return {
      ...state,
      user: {
         ...state.user,
      },
      isAuthorizing: false,
      error: NO_ERRORS,
   };
};
const error: Reducer<UserState, ReducerAction> = (
   state: UserState,
   action: ReducerAction
): UserState => {
   return {
      ...ANONYMOUS_USER,
      error: action.payload,
   };
};

export default createReducer(ANONYMOUS_USER, {
   [LOGIN_START]: start,
   [LOGIN_SUCCESS]: success,
   [LOGIN_END]: end,
   [SIGNUP_START]: start,
   [SIGNUP_SUCCESS]: success,
   [AUTH_ERROR]: error,
});
