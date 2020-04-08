import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup, RenderResult } from "../test-utils";
import { createMemoryHistory, MemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import AppRouter from "../AppRouter";
afterEach(cleanup);

test("It renders 'Home' component when URL is '/'", (): void => {
   const appRouter: RenderResult = render(<AppRouter />);

   const tagLine: HTMLElement = appRouter.getByText(
      /Connecting web developers to people with great ideas./i
   );
   expect(tagLine.tagName).toMatch(/h1/i);
   expect(tagLine.classList.contains("tagline")).toBeTruthy();
});

test.skip("It renders 'Login' component when URL is '/login'", (): void => {
   const history: MemoryHistory = createMemoryHistory();
   history.push("/login");

   const appRouter: RenderResult = render(
      <MemoryRouter initialEntries={["/login"]}>
         <AppRouter />
      </MemoryRouter>
   );

   const usrNameLabel: HTMLElement = appRouter.getByLabelText(/Username/);
   const loginForm: HTMLElement | null = usrNameLabel.parentElement;

   if (loginForm) {
      expect(loginForm.tagName).toMatch(/form/i);
      expect(loginForm.classList.contains("login-form")).toBeTruthy();
   }
});

test.skip("Renders 'Registration' component when URL is '/register'", (): void => {});

test.skip("Renders 'Dashboard' component when URL is '/home'", (): void => {});
