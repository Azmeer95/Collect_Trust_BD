import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

import type {
  Session,
  User,
} from "@supabase/supabase-js";


import { supabase } from "../lib/supabase";

type AuthContextValue = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
};

const AuthContext =
  createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [session, setSession] =
    useState<Session | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadInitialSession() {
      const {
        data: { session: initialSession },
      } = await supabase.auth.getSession();

      if (isMounted) {
        setSession(initialSession);
        setIsLoading(false);
      }
    }

    loadInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        setSession(nextSession);
        setIsLoading(false);
      }
    );

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}