import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

import React from "react";
import { render } from "../test-utils";

import LoadingScreen from "../views/_shared/LoadingScreen";

describe("Loading Screen test", () => {
   test("It displays a loading screen correctly without error.", () => {
      const loadingScreen = render(<LoadingScreen />);
      expect(loadingScreen).toMatchSnapshot();
   });
});
