import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup } from "../test-utils";
import { LOGIN } from "../graphql-requests/mutations";
import { MockedProvider } from "@apollo/react-testing";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";

afterEach(cleanup);

test("It renders 'Home' component when URL is '/'", () => {
   const { getByText } = render(
      <MemoryRouter>
         <App />
      </MemoryRouter>
   );

   const tagLine = getByText(/We are creating a marketplace/i);
   expect(tagLine.tagName).toMatch(/p/i);
});

test("It renders 'Login' component when URL is '/login'", () => {
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

   const { getByLabelText } = render(
      <MockedProvider mocks={[mockLogin]} addTypename={false}>
         <MemoryRouter initialEntries={["/login"]}>
            <App />
         </MemoryRouter>
      </MockedProvider>
   );

   const usrNameLabel = getByLabelText(/Username/);
   const loginForm = usrNameLabel.parentElement;

   if (loginForm) {
      expect(loginForm.tagName).toMatch(/form/i);
      expect(loginForm.classList.contains("login-form")).toBe(true);
   }
});

test.skip("Renders 'Registration' component when URL is '/register'", () => {});

test.skip("Renders 'Dashboard' component when URL is '/home'", () => {});
