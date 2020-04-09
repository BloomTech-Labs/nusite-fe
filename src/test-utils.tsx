import React from "react";
import { render, RenderResult } from "@testing-library/react";

import { ThemeContext } from "./context/contexts";

interface SpiesMap {
   setDarkMode: jest.Mock;
}

interface RenderWithSpiesResult extends RenderResult {
   mockSpies: SpiesMap;
}

const mockSpies: SpiesMap = {
   setDarkMode: jest.fn(),
};

const AllTheProviders: React.FC = ({ children }) => (
   <ThemeContext.Provider
      value={{ darkMode: false, setDarkMode: mockSpies.setDarkMode }}
   >
      {children}
   </ThemeContext.Provider>
);

const customRender = (ui: React.ReactElement, options?: Object | undefined) => {
   return {
      ...render(ui, { wrapper: AllTheProviders, ...options }),
      mockSpies,
   };
};

export * from "@testing-library/react";
export { customRender as render, RenderWithSpiesResult as RenderResult };
