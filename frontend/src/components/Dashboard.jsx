import { getUsers } from "../services/Api";
import { useState, useEffect } from "react";
import UserList from "./UserList";

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response?.data || response || []);
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="min-h-screen bg-[#09090b] text-zinc-50 antialiased selection:bg-indigo-500/30 relative overflow-hidden">
            {/* Ambient Graphic Elements */}
            <div className="absolute top-0 left-1/4 -z-10 h-150 w-150 rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none animate-pulse duration-8000" />
            <div className="absolute top-1/3 right-1/4 -z-10 h-125 w-125 rounded-full bg-violet-500/5 blur-[150px] pointer-events-none animate-pulse duration-6000" />

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 tracking-tight">
                {/* Header Action Hierarchy */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-zinc-800 pb-8 mb-10">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 px-3 py-1 text-xs font-medium text-indigo-400 mb-3 backdrop-blur-sm">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                            Core Data Engine Connected
                        </div>
                        <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white via-zinc-200 to-zinc-500 sm:text-4xl">
                            Social Media Analytics Dashboard
                        </h1>
                        <p className="mt-2 text-sm text-zinc-400 max-w-xl">
                            Real-time pipeline ingestion for workspace profiles, creator engagement distribution metrics, and performance lifecycles.
                        </p>
                    </div>

                </div>

                <div className="relative rounded-2xl border-zinc-800/80 backdrop-blur-md p-6 sm:p-8 shadow-2xl shadow-black/50 overflow-hidden group">
                    <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-zinc-700/50 to-transparent" />
                    <UserList users={users} isLoading={isLoading} />
                </div>
            </div>
        </div>
    );
}