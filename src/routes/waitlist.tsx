import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import computerJungle from "@/assets/computer-jungle.png";
import { setWaitlistEntry } from "@/lib/redis";

type WaitlistEntry = { name: string; email: string; phone: string };

export const submitWaitlist = createServerFn({ method: "POST" })
  .validator((data: WaitlistEntry) => data)
  .handler(async ({ data }) => {
    await setWaitlistEntry(data)
  });

export const Route = createFileRoute("/waitlist")({
  head: () => ({
    meta: [
      { title: "Join the Waitlist — Create.Design" },
      { name: "description", content: "Sign up for early access to Create.Design." },
    ],
  }),
  component: Waitlist,
});

function Waitlist() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await submitWaitlist({ data: formData });
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Column: Form */}
      <div className="flex w-full flex-col justify-between px-6 py-8 lg:w-1/2 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between">
          <a href="/" className="font-display text-2xl font-medium tracking-tight text-neutral-900">
            Create.Design
          </a>
          <a href="/" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
            Back to home
          </a>
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-col justify-center py-20 lg:py-0">
          <h1 className="text-4xl font-medium tracking-tight text-neutral-900">Join the waitlist</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Be the first to know when we launch and get early access.
          </p>

          {submitted ? (
            <div className="mt-10 flex flex-col items-center justify-center space-y-4 rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
              <h2 className="text-xl font-medium text-green-900">You're on the list!</h2>
              <p className="text-sm text-green-700">
                Thanks for joining. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-700">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-neutral-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#333333] px-4 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:opacity-70"
              >
                {loading ? "Joining..." : "Join waitlist"} {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          )}

          <p className="mt-8 text-center text-xs text-neutral-500">
            By joining, you agree to our{" "}
            <a href="#" className="underline hover:text-neutral-900">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-neutral-900">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Create.Design</span>
          <div className="space-x-4">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="hidden lg:block lg:w-1/2 pl-0">
        <div className="h-full w-full overflow-hidden rounded-l-xl bg-neutral-100">
          <img
            src={computerJungle}
            alt="Computer Jungle"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
