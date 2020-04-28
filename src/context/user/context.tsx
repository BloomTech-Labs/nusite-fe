import { createContext, Context, Dispatch, ReducerAction } from "react";

export interface UserState {
   user: {
      id: number;
      username: string;
   };
   isAuthorizing: boolean;
   error: Error | null;
}

export interface UserAction {
   type: string;
   payload: any;
}

export const ANONYMOUS_USER: UserState = {
   user: {
      id: -1,
      username: "Anonymous",
   },
   isAuthorizing: false,
   error: null,
};

const NO_USER_PROVIDER: UserState = {
   ...ANONYMOUS_USER,
   error: new Error("You probably forgot to put <MyProvider>."),
};

export const UserData: Context<UserState> = createContext(NO_USER_PROVIDER);
UserData.displayName = "UserInfo";

const NO_PROVIDER: Dispatch<UserAction> = (action: UserAction) => {
   throw new Error(
      `There was a problem dispatching ${action.type}. You probably forgot to put <MyProvider>.`
   );
};

export const UserDispatch: Context<typeof NO_PROVIDER> = createContext(
   NO_PROVIDER
);
UserDispatch.displayName = "UserDispatch";
