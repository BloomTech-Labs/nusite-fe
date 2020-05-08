import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render, cleanup, screen } from "../test-utils";

import Hero from "../views/home/Hero";

describe("Hero component tests", () => {
   test("It displays correctly.", () => {
      const hero = render(<Hero />);
      expect(hero).toMatchSnapshot();
   });
});
