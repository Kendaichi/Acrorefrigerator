import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import IndustryPage from "./pages/IndustryPage";
import Brands from "./pages/Brands";
import BrandPage from "./pages/BrandPage";
import LocationsHub from "./pages/LocationsHub";
import CityHub from "./pages/CityHub";
import SuburbPage from "./pages/SuburbPage";
import ResourcePage from "./pages/ResourcePage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:serviceSlug",
        element: <ServicePage />,
      },
      {
        path: "industries",
        element: <Industries />,
      },
      {
        path: "industries/:industrySlug",
        element: <IndustryPage />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "brands/:brandSlug",
        element: <BrandPage />,
      },
      { path: "process", element: <Navigate to="/services" replace /> },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "resources/:resourceSlug",
        element: <ResourcePage />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "locations",
        element: <LocationsHub />,
      },
      {
        path: "locations/:citySlug",
        element: <CityHub />,
      },
      {
        path: "locations/:citySlug/:suburbSlug",
        element: <SuburbPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
