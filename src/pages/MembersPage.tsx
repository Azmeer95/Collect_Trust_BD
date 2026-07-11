export function MembersPage() {
  const members = [
    ["Alif Khandker", "017****2026", "Collector", "bKash"],
    ["Rahim Uddin", "017****1234", "Member", "bKash"],
    ["Nusrat Jahan", "018****8890", "Member", "Nagad"],
    ["Tanvir Hasan", "019****4432", "Member", "bKash"],
    ["Farhana Akter", "016****9911", "Member", "Rocket"],
    ["Sajid Rahman", "013****7610", "Member", "Nagad"],
    ["Mehedi Hasan", "017****1199", "Member", "Cash"],
    ["Samia Karim", "018****5512", "Member", "bKash"],
    ["Arif Chowdhury", "019****7731", "Member", "Bank"],
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <section className="mx-auto max-w-md space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">Members</h1>
          <p className="mt-1 text-sm text-slate-500">
            Dhaka Office Lunch Circle
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4 border shadow-sm">
          <p className="font-semibold">8 active members</p>
          <p className="mt-1 text-sm text-slate-500">
            1 collector · 7 members
          </p>
        </div>

        <input
          className="w-full rounded-xl border px-4 py-3 text-sm"
          placeholder="Search member"
        />

        <div className="space-y-3">
          {members.map((member) => (
            <div key={member[0]} className="rounded-2xl bg-white p-4 border shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-slate-950">{member[0]}</p>
                  <p className="text-sm text-slate-500">{member[1]}</p>
                </div>
                <span className="rounded-full border px-3 py-1 text-xs">
                  {member[2]}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Preferred Provider: {member[3]}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs leading-5 text-slate-500">
          Phone numbers are masked for privacy. This demo does not store real
          NID or sensitive KYC data.
        </p>
      </section>
    </main>
  );
}