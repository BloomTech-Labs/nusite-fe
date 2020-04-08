import React from "react";
import { render, cleanup, RenderResult } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";

import DarkMode from "../views/_shared/DarkMode";
afterEach(cleanup);

test("It renders correctly", (): void => {
   const { container, queryByText }: RenderResult = render(<DarkMode />);

   queryByText(/Click for Dark Mode/);
   const darkMode: Element | null = container.querySelector(".darkMode");
   expect(darkMode).toBeDefined();
});
