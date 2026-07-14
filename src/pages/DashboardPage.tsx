import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export function DashboardPage() {
  const navigate = useNavigate();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error.message);
      return;
    }

    navigate("/login");
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <section className="mx-auto max-w-md space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Good morning, Alif</p>

            <h1 className="text-2xl font-bold text-slate-950">
              Collection Overview
            </h1>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border px-4 py-2 text-sm font-medium text-slate-700"
          >
            Logout
          </button>
        </div>

        <Link
          to="/collections/new"
          className="block rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-medium text-white"
        >
          Create Collection
        </Link>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">Active Collections</p>
            <p className="mt-2 text-2xl font-bold">2</p>
          </div>

          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">Total Expected</p>
            <p className="mt-2 text-2xl font-bold">৳24,000</p>
          </div>

          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">Collected</p>
            <p className="mt-2 text-2xl font-bold">৳14,000</p>
          </div>

          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">Unpaid Members</p>
            <p className="mt-2 text-2xl font-bold">4</p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-slate-900">
            Active Collections
          </h2>

          <Link
            to="/collections/july-office-lunch"
            className="block rounded-2xl border bg-white p-4 shadow-sm"
          >
            <h3 className="font-semibold text-slate-950">
              July Office Lunch Fund
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Dhaka Office Lunch Circle
            </p>

            <p className="mt-3 text-sm text-slate-700">
              ৳4,500 collected of ৳12,000
            </p>
          </Link>

          <Link
            to="/collections/generator-repair"
            className="block rounded-2xl border bg-white p-4 shadow-sm"
          >
            <h3 className="font-semibold text-slate-950">
              Generator Repair Fund
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Mohammadpur Building Maintenance
            </p>

            <p className="mt-3 text-sm text-slate-700">
              ৳9,500 collected of ৳12,000
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}