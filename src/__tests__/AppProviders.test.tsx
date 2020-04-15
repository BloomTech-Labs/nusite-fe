import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "../test-utils";
import "@testing-library/jest-dom/extend-expect";

import AppProviders from "../AppProviders";
afterEach(cleanup);

test("App renders without crashing", (): void => {
   const div: HTMLDivElement = document.createElement("div");
   ReactDOM.render(<AppProviders />, div);
   ReactDOM.unmountComponentAtNode(div);
});
