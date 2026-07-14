import { useState } from "react";
import type { SubmitEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export function SignupPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSignup(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage(
        "Password must be at least 8 characters long."
      );
      return;
    }

    setIsLoading(true);

    const maskedPhone = phone.trim()
      ? maskPhoneForDemo(phone.trim())
      : null;

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: fullName.trim(),
          phone_masked: maskedPhone,
          role: "collector",
        },
      },
    });

    setIsLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    if (data.session) {
      navigate("/dashboard");
      return;
    }

    setSuccessMessage(
      "Account created. Check your email if confirmation is required before logging in."
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <section className="w-full max-w-md rounded-3xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-emerald-700">
          Demo-only fintech MVP
        </p>

        <h1 className="mt-4 text-2xl font-bold text-slate-950">
          Create collector account
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Create your CollectTrust BD demo account.
        </p>

        <form
          onSubmit={handleSignup}
          className="mt-6 space-y-4"
        >
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Full name
            </label>

            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(event) =>
                setFullName(event.target.value)
              }
              className="w-full rounded-xl border px-4 py-3 text-sm"
              placeholder="Alif Khandker"
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Demo phone number
            </label>

            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) =>
                setPhone(event.target.value)
              }
              className="w-full rounded-xl border px-4 py-3 text-sm"
              placeholder="01700002026"
              autoComplete="tel"
            />

            <p className="mt-1 text-xs text-slate-500">
              This MVP stores only a masked display value.
            </p>
          </div>

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
              placeholder="Minimum 8 characters"
              autoComplete="new-password"
            />
          </div>

          {errorMessage && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
              {successMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading
              ? "Creating account..."
              : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-slate-950 underline"
          >
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}

function maskPhoneForDemo(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, "");

  if (digitsOnly.length < 7) {
    return digitsOnly;
  }

  return `${digitsOnly.slice(0, 3)}****${digitsOnly.slice(-4)}`;
}