// File: src/components/UserDetails.jsx
import React from 'react';

function UserDetails({ user }) {
    // Generate initial for avatar fallback
    const initial = user?.name ? String(user.name).charAt(0).toUpperCase() : 'U';

    return (
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row gap-6 items-start md:items-center animate-fade-in w-full">
            {/* Top decorative accent light ray */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            
            {/* Premium Mesh Avatar Node Layout */}
            <div className="relative h-16 w-16 shrink-0 select-none overflow-hidden rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-pink-500 p-[1px] shadow-xl shadow-indigo-500/10 group">
                <div className="flex h-full w-full items-center justify-center rounded-[15px] bg-zinc-950/80 backdrop-blur-sm font-mono text-xl font-black text-zinc-100 transition-colors duration-300 group-hover:bg-zinc-950/40">
                    {initial}
                </div>
            </div>

            {/* Content Pipeline Identity Block */}
            <div className="flex-1 space-y-3 w-full">
                <div className="flex flex-wrap items-center gap-3">
                    {/* Category Label Element */}
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-950/50 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-400 backdrop-blur-sm">
                        <i className="bi bi-tags-fill text-zinc-600 text-[9px]" />
                        {user.category || "Uncategorized"}
                    </div>
                    
                    <span className="font-mono text-[10px] text-zinc-600 hidden sm:inline">•</span>
                    <span className="font-mono text-[10px] text-zinc-500 tracking-tight hidden sm:inline">ID: Verified Profile</span>
                </div>

                <div>
                    <h1 className="text-2xl font-black tracking-tight text-zinc-100 sm:text-3xl">
                        {user.name}
                    </h1>
                    {user.bio && (
                        <p className="mt-2 text-sm text-zinc-400 max-w-3xl leading-relaxed">
                            {user.bio}
                        </p>
                    )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-zinc-800/40 w-full">
                    {/* Contact Option Stream */}
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400">
                            <i className="bi bi-envelope-fill text-[11px]" />
                        </div>
                        <span className="text-zinc-400 truncate font-mono select-all">
                            {user.contactOptions || "No connection routing specified"}
                        </span>
                    </div>

                    {user.links && (
                        <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400">
                                <i className="bi bi-link-45deg text-[13px]" />
                            </div>
                            <a 
                                href={user.links} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 truncate hover:underline flex items-center gap-1 group/link"
                            >
                                <span className="truncate">{user.links}</span>
                                <svg className="h-2.5 w-2.5 opacity-50 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserDetails;