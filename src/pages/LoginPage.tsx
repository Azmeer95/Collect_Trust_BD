import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 flex items-center justify-center">
      <section className="w-full max-w-md rounded-3xl bg-white p-6 shadow-sm border">
        <p className="text-sm font-medium text-emerald-700">
          Demo-only fintech MVP
        </p>

        <h1 className="mt-4 text-2xl font-bold text-slate-950">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Sign in to manage your group collections.
        </p>

        <div className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl border px-4 py-3 text-sm"
            placeholder="Email"
          />

          <input
            className="w-full rounded-xl border px-4 py-3 text-sm"
            placeholder="Password"
            type="password"
          />

          <Link
            to="/dashboard"
            className="block w-full rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-medium text-white"
          >
            Login
          </Link>

          <Link
            to="/dashboard"
            className="block w-full rounded-xl border px-4 py-3 text-center text-sm font-medium text-slate-700"
          >
            Continue as Demo Collector
          </Link>
        </div>
      </section>
    </main>
  );
}