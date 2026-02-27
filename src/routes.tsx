import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import App from "./App";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
// const Pricing = lazy(() => import("./pages/Pricing"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const Brands = lazy(() => import("./pages/Brands"));
const BrandPage = lazy(() => import("./pages/BrandPage"));
const LocationsHub = lazy(() => import("./pages/LocationsHub"));
const CityHub = lazy(() => import("./pages/CityHub"));
const SuburbPage = lazy(() => import("./pages/SuburbPage"));
const ResourcePage = lazy(() => import("./pages/ResourcePage"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={null}>
            <Index />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={null}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "services/:serviceSlug",
        element: (
          <Suspense fallback={null}>
            <ServicePage />
          </Suspense>
        ),
      },
      {
        path: "industries",
        element: (
          <Suspense fallback={null}>
            <Industries />
          </Suspense>
        ),
      },
      {
        path: "industries/:industrySlug",
        element: (
          <Suspense fallback={null}>
            <IndustryPage />
          </Suspense>
        ),
      },
      {
        path: "brands",
        element: (
          <Suspense fallback={null}>
            <Brands />
          </Suspense>
        ),
      },
      {
        path: "brands/:brandSlug",
        element: (
          <Suspense fallback={null}>
            <BrandPage />
          </Suspense>
        ),
      },
      { path: "process", element: <Navigate to="/services" replace /> },
      // { path: "pricing", element: <Suspense fallback={null}><Pricing /></Suspense> },
      {
        path: "resources",
        element: (
          <Suspense fallback={null}>
            <Resources />
          </Suspense>
        ),
      },
      {
        path: "resources/:resourceSlug",
        element: (
          <Suspense fallback={null}>
            <ResourcePage />
          </Suspense>
        ),
      },
      {
        path: "contact-us",
        element: (
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "locations",
        element: (
          <Suspense fallback={null}>
            <LocationsHub />
          </Suspense>
        ),
      },
      {
        path: "locations/:citySlug",
        element: (
          <Suspense fallback={null}>
            <CityHub />
          </Suspense>
        ),
      },
      {
        path: "locations/:citySlug/:suburbSlug",
        element: (
          <Suspense fallback={null}>
            <SuburbPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={null}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
];
