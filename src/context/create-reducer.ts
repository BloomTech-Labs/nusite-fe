import { Reducer } from "react";

export interface ReducerAction {
   type: string;
   payload: any;
}

interface ReducerHandlers {
   [key: string]: Reducer<any, ReducerAction>;
}

export const createReducer = (
   initialState: any,
   handlers: ReducerHandlers
): Reducer<any, ReducerAction> => {
   return (state = initialState, action) => {
      if (handlers.hasOwnProperty(action.type)) {
         return handlers[action.type](state, action);
      } else {
         return state;
      }
   };
};
