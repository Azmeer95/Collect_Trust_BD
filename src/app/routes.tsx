import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { SignupPage } from "../pages/SignupPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { CreateCollectionPage } from "../pages/CreateCollectionPage";
import { CollectionDetailPage } from "../pages/CollectionDetailPage";
import { MembersPage } from "../pages/MembersPage";
import { ProtectedRoute } from "../auth/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
  path: "/signup",
  element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/collections/new",
    element: (
      <ProtectedRoute>
        <CreateCollectionPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/collections/:id",
    element: (
      <ProtectedRoute>
        <CollectionDetailPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/members",
    element: (
      <ProtectedRoute>
        <MembersPage />
      </ProtectedRoute>
    ),
  },
]);