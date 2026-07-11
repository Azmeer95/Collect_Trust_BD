import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { CreateCollectionPage } from "../pages/CreateCollectionPage";
import { CollectionDetailPage } from "../pages/CollectionDetailPage";
import { MembersPage } from "../pages/MembersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/collections/new",
    element: <CreateCollectionPage />,
  },
  {
    path: "/collections/:id",
    element: <CollectionDetailPage />,
  },
  {
    path: "/members",
    element: <MembersPage />,
  },
]);