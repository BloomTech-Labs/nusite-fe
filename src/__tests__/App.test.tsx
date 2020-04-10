import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, RenderWithSpiesResult } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";
afterEach(cleanup);

test("App renders without crashing", (): void => {
   const div: HTMLDivElement = document.createElement("div");
   ReactDOM.render(<App />, div);
   ReactDOM.unmountComponentAtNode(div);
});

test("Home page renders correctly", (): void => {
   const app: RenderWithSpiesResult = render(<App />);
   expect(app).toMatchSnapshot();
});
