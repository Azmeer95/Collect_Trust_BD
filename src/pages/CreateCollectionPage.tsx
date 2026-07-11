import { Link } from "react-router-dom";

export function CreateCollectionPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <section className="mx-auto max-w-md rounded-3xl bg-white p-6 border shadow-sm">
        <h1 className="text-2xl font-bold text-slate-950">
          Create Collection
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Set up a new collection for your group.
        </p>

        <div className="mt-6 space-y-4">
          <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Collection title" />
          <textarea className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Description" />
          <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Group" defaultValue="Dhaka Office Lunch Circle" />
          <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Amount per member" defaultValue="৳1,500" />
          <input className="w-full rounded-xl border px-4 py-3 text-sm" placeholder="Due date" defaultValue="15 July 2026" />

          <div>
            <p className="mb-2 text-sm font-medium text-slate-700">
              Allowed payment methods
            </p>

            <div className="flex flex-wrap gap-2">
              {["bKash", "Nagad", "Rocket", "Upay", "Bank", "Cash"].map(
                (method) => (
                  <span
                    key={method}
                    className="rounded-full border px-3 py-1 text-xs text-slate-700"
                  >
                    {method}
                  </span>
                )
              )}
            </div>
          </div>

          <Link
            to="/collections/july-office-lunch"
            className="block w-full rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-medium text-white"
          >
            Create Collection
          </Link>
        </div>
      </section>
    </main>
  );
}