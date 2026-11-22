import type { RouteObject } from "react-router-dom";
import { HomePage } from "./App";
import CGPACalculatorPage from "./pages/CgpaCalculatorPage";
import PercentageCalculatorPage from "./pages/PercentageCalculatorPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/percentage-calculator",
    element: <PercentageCalculatorPage />,
  },
  {
    path: "/cgpa-calculator",
    element: <CGPACalculatorPage />,
  },
];