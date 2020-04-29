import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render, cleanup, testLinkArray, screen } from "../test-utils";
import { MemoryRouter } from "react-router";

import Footer from "../views/_shared/footer/Footer";
afterEach(cleanup);

describe("Footer Component Tests", () => {
   test("It renders with a list of links", () => {
      const { container, getAllByRole } = render(
         <MemoryRouter>
            <Footer />
         </MemoryRouter>
      );

      const footerLinks = getAllByRole("link");
      const NUM_LINKS = 10;
      const LINK_REFS = [
         "/",
         "/contact-us",
         "/login",
         "/register",
         "https://www.facebook.com/",
         "https://www.twitter.com/",
      ];

      testLinkArray(footerLinks, NUM_LINKS, LINK_REFS);
   });
});
