import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
    if (!users || users.length === 0) {
        return (
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-950/20 p-12 text-center backdrop-blur-xl animate-fade-in">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent_70%)]" />
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 shadow-inner">
                    <svg className="h-5 w-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.008 1.24l.885 1.77a2.25 2.25 0 002.007 1.24h1.98a2.25 2.25 0 002.007-1.24l.885-1.77a2.25 2.25 0 012.007-1.24h3.86m-18 0h18a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v4.5A2.25 2.25 0 002.25 13.5z" />
                    </svg>
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-zinc-200">No active telemetry profiles</h3>
                <p className="mt-1 text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                    The requested pipeline segment returned an unindexed layer. Awaiting stream processing initiation.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 animate-slide-up">
            {users.map(user => (
                <div 
                    key={user.id} 
                    className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700/60 hover:bg-zinc-900/40 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent opacity-40 transition-all duration-500 group-hover:via-indigo-500/40 group-hover:opacity-100" />
                    
                    <div className="absolute -right-10 -top-10 -z-10 h-32 w-32 rounded-full bg-indigo-500/0 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/5" />

                    <div>

                        <div className="flex items-start justify-between gap-4 mb-5">
                            <div className="relative flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-lg border border-zinc-800 bg-linear-to-b from-zinc-800/80 to-zinc-900/90 font-mono text-xs font-bold text-zinc-300 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:from-zinc-800 group-hover:to-zinc-900 group-hover:text-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                                {String(user.name).charAt(0).toUpperCase()}
                            </div>
                            
                            <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/40 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-400 backdrop-blur-sm transition-colors duration-200 group-hover:border-zinc-700 group-hover:text-zinc-300">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400/40 opacity-75 duration-1000" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500/80" />
                                </span>
                                {user.category}
                            </div>
                        </div>

                        {/* Title Context Mapping */}
                        <h5 className="text-base font-bold tracking-tight text-zinc-200 transition-colors duration-200 group-hover:text-white truncate">
                            {user.name}
                        </h5>
                        
                        <p className="mt-1.5 text-xs leading-relaxed text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">
                            Telemetry active. Process logs to synchronize live metric velocity matrices.
                        </p>
                    </div>

                    {/* Execution Trigger Layer */}
                    <div className="mt-5 pt-3.5 border-t border-zinc-800/30">
                        <Link 
                            to={`/users/${user.id}`} 
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-medium text-zinc-300 shadow-sm transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 active:scale-[0.98]"
                        >
                            <span>View Analytics</span>
                            <svg 
                                className="h-3 w-3 text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-zinc-300" 
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