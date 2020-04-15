import React from "react";
import { render } from "@testing-library/react";

import { ThemeContext } from "./context/contexts";

const mockSpies = {
   setDarkMode: jest.fn(),
};

// const mockMutationObserver: MutationObserver = {
//    disconnect: jest.fn(),
//    observe: jest.fn(),
//    takeRecords: jest.fn(),
// };
// global.MutationObserver = mockMutationObserver;

const AllTheProviders = ({ children }) => (
   <ThemeContext.Provider
      value={{ darkMode: false, setDarkMode: mockSpies.setDarkMode }}
   >
      {children}
   </ThemeContext.Provider>
);

const customRender = (ui, options) => {
   return {
      ...render(ui, { wrapper: AllTheProviders, ...options }),
      mockSpies,
   };
};

export * from "@testing-library/react";
export { customRender as render };
