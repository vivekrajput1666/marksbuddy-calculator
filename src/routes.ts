import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("./App.tsx"),
  route(
    "percentage-calculator",
    "./pages/PercentageCalculatorPage.tsx"
  ),
  route(
    "cgpa-calculator",
    "./pages/CgpaCalculatorPage.tsx"
  ),
] satisfies RouteConfig;