import {
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "./AuthContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-600">
          Checking your session...
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
        }}
      />
    );
  }

  return children;
}