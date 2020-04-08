import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AppRouter from "../AppRouter";
afterEach(cleanup);

test("Renders 'Home' component when URL is '/'", (): void => {});

test("Renders 'Login' component when URL is '/login'", (): void => {});

test("Renders 'Registration' component when URL is '/register'", (): void => {});

test("Renders 'Dashboard' component when URL is '/home'", (): void => {});
