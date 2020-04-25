export const initialState = {
   user: {
      id: -1,
      username: "",
   },
   isAuthorizing: false,
   error: null,
};

export type UserState = typeof initialState;
