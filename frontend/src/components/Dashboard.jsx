import { getUsers } from "../services/Api";
import { useState, useEffect } from "react";
import { BarChart3, Users, RefreshCw, LogOut } from "lucide-react";
import UserList from "./UserList";

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const load = () => {
        setIsLoading(true);
        getUsers()
            .then((response) => {
                setUsers(response?.data || response || []);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
            {/* Top bar — mirrors the AuthPage brand mark */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white">
                            <BarChart3 className="h-5 w-5" />
                        </div>
                        <span className="text-lg font-semibold tracking-tight">Social Pulse</span>
                    </div>

                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <LogOut className="h-4 w-4" />
                        Sign out
                    </button>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Page heading */}
                <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Data engine connected
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Social media analytics
                        </h1>
                        <p className="mt-1.5 max-w-xl text-sm text-slate-500">
                            Engagement, growth, and reach across every profile in your
                            workspace.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={load}
                        disabled={isLoading}
                        className="inline-flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        <RefreshCw
                            className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
                        />
                        Refresh
                    </button>
                </div>

                {/* Summary stats */}
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <StatCard
                        icon={<Users className="h-5 w-5" />}
                        label="Total profiles"
                        value={isLoading ? "—" : users.length}
                    />
                    <StatCard
                        icon={<BarChart3 className="h-5 w-5" />}
                        label="Active this week"
                        value={isLoading ? "—" : users.length}
                    />
                    <StatCard
                        icon={<RefreshCw className="h-5 w-5" />}
                        label="Last synced"
                        value={isLoading ? "—" : "Just now"}
                    />
                </div>

                {/* User list card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-base font-semibold text-slate-900">
                            Tracked profiles
                        </h2>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                            {isLoading ? "Loading" : `${users.length} total`}
                        </span>
                    </div>
                    <UserList users={users} isLoading={isLoading} />
                </div>
            </main>
        </div>
    );
}

function StatCard({ icon, label, value, trend }) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-zinc-300">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
                {icon}
            </div>
            <div className="min-w-0">
                <div className="text-sm text-zinc-500">{label}</div>
                <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold tracking-tight text-zinc-900">
                        {value}
                    </span>
                    {trend && (
                        <span className="text-xs font-medium text-emerald-600">{trend}</span>
                    )}
                </div>
            </div>
        </div>
    );
}