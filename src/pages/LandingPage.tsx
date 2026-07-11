import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <section className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-sm border">
        <p className="text-sm font-medium text-emerald-700">
          Demo-only fintech MVP
        </p>

        <h1 className="mt-4 text-3xl font-bold text-slate-950">
          CollectTrust BD
        </h1>

        <p className="mt-3 text-lg font-medium text-slate-700">
          Transparent group collections for Bangladesh.
        </p>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          Track office funds, building maintenance collections, class funds,
          and community payments without relying only on screenshots, chat
          threads, and manual follow-ups.
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            to="/login"
            className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white"
          >
            Start Demo
          </Link>

          <Link
            to="/dashboard"
            className="rounded-xl border px-4 py-2 text-sm font-medium text-slate-700"
          >
            View Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}