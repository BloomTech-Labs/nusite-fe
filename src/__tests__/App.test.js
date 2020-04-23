import React from "react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, screen } from "../test-utils";
import { LOGIN, SIGNUP } from "../graphql-requests/mutations";
import { GET_USER } from "../graphql-requests/queries";
import { MockedProvider } from "@apollo/react-testing";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";

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

const mockSignup = {
   request: {
      query: SIGNUP,
      variables: {
         username: "Da1337",
         password: "iMda1337",
         first_name: "John",
         last_name: "Doe",
         email: "da1337@email.com",
      },
   },
   result: {
      data: {
         signup: { token: "da1337-token", user: { username: "Da1337" } },
      },
   },
};

const mockGetUsers = {
   request: {
      query: GET_USER,
      variables: {
         id: 10,
      },
   },
   result: {
      data: {
         user: {
            id: "10",
            username: "johnwick",
            email: "johnwick@johnwick.com",
            first_name: "John",
            last_name: "Wick",
         },
      },
   },
};

afterEach(cleanup);

describe("Test App Routes", () => {
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
      const { getByTestId } = render(
         <MockedProvider mocks={[mockLogin]} addTypename={false}>
            <MemoryRouter initialEntries={["/login"]}>
               <App />
            </MemoryRouter>
         </MockedProvider>
      );
      const loginForm = getByTestId("login-form");

      expect(loginForm).not.toBeNull();
      expect(loginForm).toBeDefined();
      expect(loginForm.tagName).toMatch(/form/i);
   });

   test("Renders 'Registration' component when URL is '/register'", () => {
      const { getByTestId } = render(
         <MockedProvider mocks={[mockSignup]} addTypename={false}>
            <MemoryRouter initialEntries={["/register"]}>
               <App />
            </MemoryRouter>
         </MockedProvider>
      );
      const registerForm = getByTestId("register-form");

      expect(registerForm).not.toBeNull();
      expect(registerForm).toBeDefined();
      expect(registerForm.tagName).toMatch(/form/i);
   });

   test("Renders 'Dashboard' component when URL is '/home'", () => {
      //set a test token to trick private route into rendering the component
      localStorage.setItem("token", "test-token");

      //render the component
      const { getByText } = render(
         <MockedProvider mocks={[mockGetUsers]} addTypename={false}>
            <MemoryRouter initialEntries={["/home"]}>
               <App />
            </MemoryRouter>
         </MockedProvider>
      );

      //run the tests
      const welcomeText = getByText(/Welcome to Your Dashboard/i);
      expect(welcomeText).not.toBeNull();
      expect(welcomeText).toBeDefined();
      expect(welcomeText.tagName).toMatch(/h2/i);

      //remove test token
      localStorage.clear();
   });

   test("It clears local data and redirects to '/login' when URL is '/logout'", () => {
      localStorage.setItem("token", "test-token");
      localStorage.setItem("username", "testUser01");
      localStorage.setItem("user_id", "1234567");

      const history = createMemoryHistory();
      history.push("/logout");

      const { getByText } = render(
         <MockedProvider mocks={[mockLogin]} addTypename={false}>
            <Router history={history}>
               <App />
            </Router>
         </MockedProvider>
      );

      expect(localStorage.getItem("token")).toBeNull();
      expect(localStorage.getItem("username")).toBeNull();
      expect(localStorage.getItem("user_id")).toBeNull();
      expect(history.location.pathname).toBe("/login");
   });
});
