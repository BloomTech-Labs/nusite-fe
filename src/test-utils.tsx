import React from "react";
import { render } from "@testing-library/react";

import { ThemeContext } from "./context/contexts";

const AllTheProviders: React.FC = ({ children }) => (
   <ThemeContext.Provider value={{ darkMode: false }}>
      {children}
   </ThemeContext.Provider>
);

const customRender = (ui: React.ReactElement, options?: Object | undefined) => {
   return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
