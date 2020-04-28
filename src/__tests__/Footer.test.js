import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render, cleanup, testLinkArray } from "../test-utils";
import { MemoryRouter } from "react-router";

import Footer from "../views/_shared/Footer";
afterEach(cleanup);

describe("Footer Component Tests", () => {
   test("It renders with a list of links", () => {
      const { getAllByRole } = render(
         <MemoryRouter>
            <Footer />
         </MemoryRouter>
      );

      const footerLinks = getAllByRole("link");
      const NUM_LINKS = 4;
      const LINK_REFS = ["/", "/contact-us", "/login", "/register"];

      testLinkArray(footerLinks, NUM_LINKS, LINK_REFS);
   });
});
