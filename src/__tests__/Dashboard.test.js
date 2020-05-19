import React from "react";
import { render, cleanup, fireEvent } from "../test-utils";
import { MockedProvider } from "@apollo/react-testing";
import { GET_USER } from "../graphql-requests/queries";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "../views/dashboard/Dashboard";

const mockGetUsers = {
   request: {
      query: GET_USER,
      variables: {
         user_id: 10,
      },
   },
   result: {
      data: {
         user: {
            id: 10,
            username: "johnwick",
            email: "johnwick@johnwick.com",
            first_name: "John",
            last_name: "Wick",
         },
      },
   },
};

afterEach(cleanup);

describe("Dashboard component tests", () => {
   test("It should render Welcome message with User's name", () => {
      //set a test user data
      localStorage.setItem("username", "johnwick");
      localStorage.setItem("user_id", "10");

      //render the component
      const { getByText } = render(
         <MockedProvider mocks={[mockGetUsers]} addTypename={false}>
            <Dashboard />
         </MockedProvider>
      );

      //run the tests
      const welcomeText = getByText(/Welcome to Your Dashboard johnwick/);
      expect(welcomeText.tagName).toMatch(/h1/i);

      //test that User component and welcome message have same username

      //remove test token
      localStorage.clear();
   });
});
