import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup, RenderWithSpiesResult } from "../test-utils";
import { LOGIN } from "../graphql-requests/mutations";
import { MockedProvider } from "@apollo/react-testing";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";
afterEach(cleanup);

test("It renders 'Home' component when URL is '/'", (): void => {
   const { getByText }: RenderWithSpiesResult = render(
      <MemoryRouter>
         <App />
      </MemoryRouter>
   );

   const tagLine: HTMLElement = getByText(/We are creating a marketplace/i);
   expect(tagLine.tagName).toMatch(/p/i);
});

test.skip("It renders 'Login' component when URL is '/login'", (): void => {
   const mockLogin = {
      request: {
         query: LOGIN,
         variables: { email: "Test01@email.com", password: "yourMum1234" },
      },
      result: {
         data: {
            login: { token: "test01-token", user: { username: "Test01" } },
         },
      },
   };

   const { getByLabelText }: RenderWithSpiesResult = render(
      <MockedProvider mocks={[mockLogin]} addTypename={false}>
         <MemoryRouter initialEntries={["/login"]}>
            <App />
         </MemoryRouter>
      </MockedProvider>
   );

   expect(true).toBe(false);
   // const usrNameLabel: HTMLElement = getByLabelText(/Username/);
   // const loginForm: HTMLElement | null = usrNameLabel.parentElement;

   // if (loginForm) {
   //    expect(loginForm.tagName).toMatch(/form/i);
   //    expect(loginForm.classList.contains("login-form")).toBe(true);
   // }
});

test.skip("Renders 'Registration' component when URL is '/register'", (): void => {});

test.skip("Renders 'Dashboard' component when URL is '/home'", (): void => {});
