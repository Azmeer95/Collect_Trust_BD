import { Link } from "react-router-dom";

export function CollectionDetailPage() {
  const members = [
    ["Rahim Uddin", "017****1234", "bKash", "৳1,500", "৳1,500", "Paid"],
    ["Nusrat Jahan", "018****8890", "Nagad", "৳1,500", "৳0", "Pending"],
    ["Tanvir Hasan", "019****4432", "bKash", "৳1,500", "৳0", "Unpaid"],
    ["Farhana Akter", "016****9911", "Rocket", "৳1,500", "৳1,500", "Paid"],
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <section className="mx-auto max-w-md space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">
            July Office Lunch Fund
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Dhaka Office Lunch Circle · Due 15 July 2026
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4 border shadow-sm">
          <p className="text-sm text-slate-500">Collection Progress</p>
          <p className="mt-2 text-3xl font-bold">38%</p>
          <div className="mt-4 h-3 rounded-full bg-slate-100">
            <div className="h-3 w-[38%] rounded-full bg-slate-950" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-4 border shadow-sm">
            <p className="text-xs text-slate-500">Expected</p>
            <p className="mt-2 font-bold">৳12,000</p>
          </div>

          <div className="rounded-2xl bg-white p-4 border shadow-sm">
            <p className="text-xs text-slate-500">Collected</p>
            <p className="mt-2 font-bold">৳4,500</p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-slate-900">Member Status</h2>

          {members.map((member) => (
            <div key={member[0]} className="rounded-2xl bg-white p-4 border shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-slate-950">{member[0]}</p>
                  <p className="text-sm text-slate-500">{member[1]} · {member[2]}</p>
                </div>
                <span className="rounded-full border px-3 py-1 text-xs">
                  {member[5]}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Expected {member[3]} · Paid {member[4]}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/members"
          className="block rounded-xl border px-4 py-3 text-center text-sm font-medium text-slate-700"
        >
          View Members
        </Link>
      </section>
    </main>
  );
}