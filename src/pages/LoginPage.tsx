import { useState } from "react";
import type { SubmitEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(
    event: SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setErrorMessage("");
    setIsLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    setIsLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    navigate("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <section className="w-full max-w-md rounded-3xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-emerald-700">
          Demo-only fintech MVP
        </p>

        <h1 className="mt-4 text-2xl font-bold text-slate-950">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Sign in to manage your group collections.
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-4"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              className="w-full rounded-xl border px-4 py-3 text-sm"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              className="w-full rounded-xl border px-4 py-3 text-sm"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          {errorMessage && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Need a demo account?{" "}
          <Link
            to="/signup"
            className="font-medium text-slate-950 underline"
          >
            Create one
          </Link>
        </p>
      </section>
    </main>
  );
}