import React from "react";
import { render, cleanup, fireEvent } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";

import DarkMode from "../views/_shared/DarkMode";
afterEach(cleanup);

describe("DarkMode Component Tests", () => {
   test("It renders correctly", () => {
      const { container } = render(<DarkMode />);
      expect(container.innerHTML).toMatch(/Click for Night Mode/);
   });

   test.skip("It updates darkmode context onChange ", () => {
      const {
         container,
         mockSpies: { setDarkMode },
      } = render(<DarkMode />);

      const darkMode = container.querySelector(".darkMode input");
      expect(darkMode).toBeDefined();
      expect(darkMode).not.toBeNull();
      if (darkMode) {
         expect(darkMode.checked).toBe(false);
         expect(setDarkMode).not.toHaveBeenCalled();
         fireEvent.click(darkMode, { target: { value: true } });
         expect(setDarkMode).toHaveBeenCalledWith(true);
         expect(darkMode.checked).toBe(true);
      }
   });
});
