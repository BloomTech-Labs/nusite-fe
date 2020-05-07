import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

import React from "react";
import { render } from "../test-utils";

import Home from "../views/home/Home";

describe("Home component test", () => {
   test("It displays all Home children components correctly without error.", () => {
      const home = render(
         <MemoryRouter>
            <Home />
         </MemoryRouter>
      );
      expect(home).toMatchSnapshot();
   });
});
