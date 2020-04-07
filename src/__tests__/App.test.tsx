import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";
afterEach(cleanup);

test("App renders without crashing", (): void => {
   const div: HTMLDivElement = document.createElement("div");
   ReactDOM.render(<App />, div);
   ReactDOM.unmountComponentAtNode(div);
});

test("Home page renders correctly", (): void => {
   const app: RenderResult = render(<App />);
   expect(app).toMatchSnapshot();
});
