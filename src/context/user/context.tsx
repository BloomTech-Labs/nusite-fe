import { createContext, Context } from "react";
import { UserState, initialState } from "./initial-state";

const UserContext: Context<UserState> = createContext(initialState);
UserContext.displayName = "UserInfo";

export default UserContext;
