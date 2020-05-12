import { createContext, Context, Dispatch } from "react";

export interface UserType {
   id: number;
   username: string;
}

export interface UserState {
   user: UserType;
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

const NO_PROVIDER: {
   userData: UserState;
   userDispatch: Dispatch<UserAction>;
} = {
   userData: {
      ...ANONYMOUS_USER,
      error: new Error("You probably forgot to put <MyProvider>."),
   },
   userDispatch: (action: UserAction) => {
      throw new Error(
         `There was a problem dispatching ${action.type}. You probably forgot to put <MyProvider>.`
      );
   },
};

const UserContext: Context<typeof NO_PROVIDER> = createContext(NO_PROVIDER);
UserContext.displayName = "UserContext";

export default UserContext;
