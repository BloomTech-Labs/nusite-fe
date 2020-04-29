import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render, cleanup, screen } from "../test-utils";

import SubHeader from "../views/home/SubHeader";

describe("SubHeader component tests", () => {
   test("It displays correctly.", () => {
      const subHeader = render(<SubHeader />);
      expect(subHeader).toMatchSnapshot();
   });
});
