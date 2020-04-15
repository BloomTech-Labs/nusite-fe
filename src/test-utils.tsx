import React from "react";
import { render, RenderResult } from "@testing-library/react";

import { ThemeContext } from "./context/contexts";

export interface SpiesMap {
   setDarkMode: jest.Mock;
}

export interface RenderWithSpiesResult extends RenderResult {
   mockSpies: SpiesMap;
}

const mockSpies: SpiesMap = {
   setDarkMode: jest.fn(),
};

// const mockMutationObserver: MutationObserver = {
//    disconnect: jest.fn(),
//    observe: jest.fn(),
//    takeRecords: jest.fn(),
// };
// global.MutationObserver = mockMutationObserver;

const AllTheProviders: React.FC = ({ children }) => (
   <ThemeContext.Provider
      value={{ darkMode: false, setDarkMode: mockSpies.setDarkMode }}
   >
      {children}
   </ThemeContext.Provider>
);

const customRender = (
   ui: React.ReactElement,
   options?: Object | undefined
): RenderWithSpiesResult => {
   return {
      ...render(ui, { wrapper: AllTheProviders, ...options }),
      mockSpies,
   };
};

export * from "@testing-library/react";
export { customRender as render };
