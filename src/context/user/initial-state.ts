export interface UserState {
   user: {
      id: number;
      username: string;
   };
   isAuthorizing: boolean;
   error: Object | null;
}

export const initialState: UserState = {
   user: {
      id: -1,
      username: "",
   },
   isAuthorizing: false,
   error: null,
};
