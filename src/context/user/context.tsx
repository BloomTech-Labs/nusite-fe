import { createContext, Context } from "react";

export type UserState = {
   user: {
      id: number;
      username: string;
   };
   isAuthorizing: boolean;
   error: Error | null;
};

export const ANONYMOUS_USER: UserState = {
   user: {
      id: -1,
      username: "Anonymous",
   },
   isAuthorizing: false,
   error: null,
};

const NO_PROVIDER: UserState = {
   ...ANONYMOUS_USER,
   error: new Error("You probably forgot to put <MyProvider>."),
};

const UserContext: Context<UserState> = createContext(NO_PROVIDER);
UserContext.displayName = "UserInfo";

export default UserContext;
