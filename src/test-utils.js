import React from "react";
import { render } from "@testing-library/react";
import { ThemeContext } from "./context/contexts";
import UserContext, { ANONYMOUS_USER } from "./context/user/context";

function MutationObserver(callback) {
   this.observe = jest.fn();
   this.disconnect = jest.fn();
   this.takeRecords = jest.fn();
}
global.MutationObserver = jest.fn(MutationObserver);

const mockSpies = {
   setDarkMode: jest.fn(),
   userDispatch: jest.fn(),
};

const AllTheProviders = ({ children }) => (
   <ThemeContext.Provider
      value={{ darkMode: false, setDarkMode: mockSpies.setDarkMode }}
   >
      <UserContext.Provider
         value={{
            userData: ANONYMOUS_USER,
            userDispatch: mockSpies.userDispatch,
         }}
      >
         {children}
      </UserContext.Provider>
   </ThemeContext.Provider>
);

const customRender = (ui, options) => {
   return {
      ...render(ui, { wrapper: AllTheProviders, ...options }),
      mockSpies,
   };
};

const testLinkArray = (linkArray, expected_length, expected_refs) => {
   expect(linkArray.length).toBe(expected_length);
   linkArray.forEach(element => {
      expect(expected_refs).toContain(element.getAttribute("href"));
   });
};

export * from "@testing-library/react";
export { customRender as render, testLinkArray };
