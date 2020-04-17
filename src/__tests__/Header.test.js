import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup, testLinkArray } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";

import Header from "../views/_shared/Header";
afterEach(cleanup);

describe("Header Component Tests", () => {
   test("It renders Company Logo, Home, Login, and Register tabs when logged out", () => {
      const { getByRole, getAllByRole } = render(
         <MemoryRouter>
            <Header />
         </MemoryRouter>
      );

      const companyLogo = getByRole(/button/);
      expect(companyLogo).not.toBeNull();
      expect(companyLogo).toBeDefined();
      expect(companyLogo.getAttribute("href")).toBe("/");

      const headerTabs = getAllByRole("tab");
      const NUM_TABS = 3;
      const TAB_REFS = ["/login", "/register", "/"];
      expect(headerTabs.length).toBe(3);
      testLinkArray(headerTabs, NUM_TABS, TAB_REFS);
   });

   test("It renders Company Logo, Home, Dashboard, and Logout tabs when logged in", () => {
      localStorage.setItem("token", "test-token");
      const { container, getAllByRole } = render(
         <MemoryRouter>
            <Header />
         </MemoryRouter>
      );

      const companyLogo = container.querySelector("a[href='/']");
      expect(companyLogo).not.toBeNull();
      expect(companyLogo).toBeDefined();

      const headerTabs = getAllByRole("tab");
      const tabRefs = ["/logout", "/home", "/"];
      expect(headerTabs.length).toBe(3);
      headerTabs.forEach(tab => {
         expect(tabRefs).toContain(tab.getAttribute("href"));
      });

      localStorage.clear("token");
   });
});
