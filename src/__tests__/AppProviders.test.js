import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "@testing-library/jest-dom/extend-expect";

import AppProviders from "../AppProviders";

describe("AppProviders component tests", () => {
   test("App renders without crashing", () => {
      const div = document.createElement("div");
      render(<AppProviders />, div);
      unmountComponentAtNode(div);
   });
});
