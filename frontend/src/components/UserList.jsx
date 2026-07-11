import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, isLoading }) => {
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="animate-pulse rounded-xl border border-zinc-200 bg-white p-5"
                    >
                        <div className="mb-5 flex items-center justify-between">
                            <div className="h-10 w-10 rounded-lg bg-zinc-100" />
                            <div className="h-5 w-16 rounded-full bg-zinc-100" />
                        </div>
                        <div className="h-4 w-2/3 rounded bg-zinc-100" />
                        <div className="mt-2 h-3 w-full rounded bg-zinc-100" />
                        <div className="mt-5 h-9 w-full rounded-lg bg-zinc-100" />
                    </div>
                ))}
            </div>
        );
    }

    if (!users || users.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/50 p-12 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-zinc-900">No profiles yet</h3>
                <p className="mx-auto mt-1 max-w-xs text-xs leading-relaxed text-zinc-500">
                    Connect a social account to start tracking engagement and growth here.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="group flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-100/50"
                >
                    <div>
                        <div className="mb-5 flex items-start justify-between gap-4">
                            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">
                                {String(user.name).charAt(0).toUpperCase()}
                            </div>

                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                {user.category}
                            </span>
                        </div>

                        <h5 className="truncate text-base font-semibold tracking-tight text-zinc-900">
                            {user.name}
                        </h5>

                        <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                            Engagement and reach are being tracked. Open analytics for the full breakdown.
                        </p>
                    </div>

                    <div className="mt-5 border-t border-zinc-100 pt-4">
                        <Link
                            to={`/users/${user.id}`}
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-[0.98]"
                        >
                            View analytics
                            <svg
                                className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;