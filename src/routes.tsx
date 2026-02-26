import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import App from "./App";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const Process = lazy(() => import("./pages/Process"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Suspense fallback={null}><Index /></Suspense> },
      { path: "services", element: <Suspense fallback={null}><Services /></Suspense> },
      { path: "industries", element: <Suspense fallback={null}><Industries /></Suspense> },
      { path: "process", element: <Suspense fallback={null}><Process /></Suspense> },
      { path: "pricing", element: <Suspense fallback={null}><Pricing /></Suspense> },
      { path: "contact-us", element: <Suspense fallback={null}><Contact /></Suspense> },
      { path: "*", element: <Suspense fallback={null}><NotFound /></Suspense> },
    ],
  },
];
