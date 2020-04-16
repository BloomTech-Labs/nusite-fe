import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup, screen } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";

import Header from "../views/_shared/Header";
afterEach(cleanup);

test("It renders correctly", () => {
   const { container } = render(
      <MemoryRouter>
         <Header />
      </MemoryRouter>
   );

   const companyLogo = screen.getByRole(/button/);
   expect(companyLogo).not.toBeNull();
   expect(companyLogo).toBeDefined();
   expect(companyLogo.getAttribute("href")).toBe("/");

   const headerTabs = screen.getAllByRole("tab");
   const tabRefs = ["/login", "/register", "/"];
   expect(headerTabs.length).toBe(3);
   headerTabs.forEach(tab => {
      expect(tabRefs).toContain(tab.getAttribute("href"));
   });
});
