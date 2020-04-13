import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup, RenderWithSpiesResult } from "../test-utils";
import { createMemoryHistory, MemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";
afterEach(cleanup);

test("It renders 'Home' component when URL is '/'", (): void => {
   const { getByText }: RenderWithSpiesResult = render(
      <MemoryRouter>
         <App />
      </MemoryRouter>
   );

   const tagLine: HTMLElement = getByText(
      /Connecting web developers to people with great ideas./i
   );
   expect(tagLine.tagName).toMatch(/h1/i);
   expect(tagLine.classList.contains("tagline")).toBeTruthy();
});

test.skip("It renders 'Login' component when URL is '/login'", (): void => {
   const { getByLabelText }: RenderWithSpiesResult = render(
      <MemoryRouter initialEntries={["/login"]}>
         <App />
      </MemoryRouter>
   );

   const usrNameLabel: HTMLElement = getByLabelText(/Username/);
   const loginForm: HTMLElement | null = usrNameLabel.parentElement;

   if (loginForm) {
      expect(loginForm.tagName).toMatch(/form/i);
      expect(loginForm.classList.contains("login-form")).toBe(true);
   }
});

test.skip("Renders 'Registration' component when URL is '/register'", (): void => {});

test.skip("Renders 'Dashboard' component when URL is '/home'", (): void => {});
