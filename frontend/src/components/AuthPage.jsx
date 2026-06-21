import { useState } from "react";
import {
  BarChart3,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  TrendingUp,
  Users,
  Heart,
} from "lucide-react";
import { authService } from "../services/AuthService";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();
  const redirectTo = location.state?.from?.pathname || "/";
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});

  const isLogin = mode === "login";

  const update = (key) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!isLogin && form.name.trim().length < 2)
      next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (form.password.length < 8)
      next.password = "Password must be at least 8 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    setServerError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const user = isLogin
        ? await authService.login({
            email: form.email,
            password: form.password,
          })
        : await authService.signup({
            name: form.name,
            email: form.email,
            password: form.password,
          });

      setUser(user); // store in context
      navigate(redirectTo, { replace: true }); // back to where they came from, or dashboard
    } catch (err) {
      // Field-level errors from Spring validation map straight onto inputs
      if (err.fieldErrors && Object.keys(err.fieldErrors).length) {
        setErrors((prev) => ({ ...prev, ...err.fieldErrors }));
      } else {
        setServerError(err.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const switchMode = (next) => {
    setMode(next);
    setErrors({});
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 flex">
      {/* Left brand / showcase panel */}
      <aside className="relative hidden lg:flex w-1/2 flex-col justify-between overflow-hidden bg-linear-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-12 text-white">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />

        <div className="relative flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur">
            <BarChart3 className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Social Pulse</span>
        </div>

        <div className="relative space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Every metric that
            <br />
            moves your audience.
          </h1>
          <p className="max-w-md text-base text-white/80">
            Track engagement, growth, and reach across all your social channels
            in one clean dashboard.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <Stat
              icon={<Users className="h-4 w-4" />}
              value="48.2K"
              label="Followers"
            />
            <Stat
              icon={<Heart className="h-4 w-4" />}
              value="12.9%"
              label="Engagement"
            />
            <Stat
              icon={<TrendingUp className="h-4 w-4" />}
              value="+24%"
              label="Growth"
            />
          </div>
        </div>

        <p className="relative text-sm text-white/60">
          © {new Date().getFullYear()} Social Pulse Analytics. All rights reserved.
        </p>
      </aside>

      {/* Right form panel */}
      <main className="flex w-full flex-col items-center justify-center px-6 py-12 lg:w-1/2">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white">
              <BarChart3 className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Social Pulse</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">
              {isLogin ? "Welcome back" : "Create your account"}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {isLogin
                ? "Sign in to view your social media analytics."
                : "Start tracking your social performance in minutes."}
            </p>
          </div>

          {/* Mode toggle */}
          <div className="mb-6 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1">
            <TabButton active={isLogin} onClick={() => switchMode("login")}>
              Sign in
            </TabButton>
            <TabButton active={!isLogin} onClick={() => switchMode("signup")}>
              Sign up
            </TabButton>
          </div>

          <div className="space-y-4">
            {!isLogin && (
              <Field
                label="Full name"
                icon={<User className="h-4 w-4" />}
                error={errors.name}
              >
                <input
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jordan Rivera"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </Field>
            )}

            <Field
              label="Email"
              icon={<Mail className="h-4 w-4" />}
              error={errors.email}
            >
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@company.com"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </Field>

            <Field
              label="Password"
              icon={<Lock className="h-4 w-4" />}
              error={errors.password}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={update("password")}
                placeholder={
                  isLogin ? "Enter your password" : "At least 8 characters"
                }
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="ml-2 text-slate-400 transition hover:text-slate-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </Field>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-slate-600">
                  <input
                    type="checkbox"
                    checked={form.remember}
                    onChange={update("remember")}
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="font-medium text-indigo-600 transition hover:text-indigo-700"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {serverError && (
              <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-600">
                {serverError}
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting
                ? isLogin
                  ? "Signing in..."
                  : "Creating account..."
                : isLogin
                  ? "Sign in"
                  : "Create account"}
              {!submitting && (
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 text-xs text-slate-400">
            <div className="h-px flex-1 bg-slate-200" />
            or continue with
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Social auth */}
          <div className="grid grid-cols-2 gap-3">
            <SocialButton label="Google" />
            <SocialButton label="GitHub" />
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => switchMode(isLogin ? "signup" : "login")}
              className="font-semibold text-indigo-600 transition hover:text-indigo-700"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
      <div className="mb-1 text-white/80">{icon}</div>
      <div className="text-lg font-bold leading-none">{value}</div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-white text-slate-900 shadow-sm"
          : "text-slate-500 hover:text-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, icon, error, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div
        className={`flex items-center gap-2 rounded-xl border bg-white px-3.5 py-2.5 transition focus-within:ring-2 ${
          error
            ? "border-rose-300 focus-within:border-rose-400 focus-within:ring-rose-100"
            : "border-slate-200 focus-within:border-indigo-400 focus-within:ring-indigo-100"
        }`}
      >
        <span className="text-slate-400">{icon}</span>
        {children}
      </div>
      {error && <p className="mt-1.5 text-xs text-rose-500">{error}</p>}
    </div>
  );
}

function SocialButton({ label }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {label}
    </button>
  );
}
