// File: src/components/UserAnalytics.jsx
import React, { useState, useEffect } from 'react';
import { userById, getAccounts } from '../services/Api';
import SocialMediaStats from './SocialMediaStats';
import Analytics from './Analytics';
import { useParams } from 'react-router-dom';
import UserDetails from './UserDetails';

const UserAnalytics = () => {
    const [user, setUser] = useState({});
    const [accounts, setAccounts] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        userById(userId).then(response => {
            setUser(response?.data || response || {});
        }).catch(() => {});

        getAccounts(userId).then(response => {
            setAccounts(response?.data || response || []);
        }).catch(() => {});
    }, [userId]);

    return (
        <div className="min-h-screen bg-[#09090b] text-zinc-50 antialiased relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">

            <div className="absolute top-0 right-1/4 -z-10 h-125 w-125 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none animate-pulse duration-10000" />
            <div className="absolute bottom-1/4 left-1/4 -z-10 h-150 w-150 rounded-full bg-violet-500/5 blur-[150px] pointer-events-none animate-pulse duration-8000" />

            <div className="mx-auto max-w-7xl space-y-10 animate-slide-up">
                {/* Profile Header Block */}
                <div className="relative rounded-2xl border border-zinc-800/60 bg-zinc-900/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
                    <UserDetails user={user} />
                </div>

                {/* Subsections & Connected Data Channels Array */}
                <div className="space-y-8">
                    {accounts && accounts.length > 0 ? (
                        accounts.map(account => (
                            <div 
                                key={account.id} 
                                className="group relative flex flex-col gap-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-6 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"
                            >
                                {/* Upper Laser Border Microinteraction */}
                                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent transition-all duration-500 group-hover:via-indigo-500/30" />
                                
                                {/* Metrics Node Meta Tracking Header */}
                                <div className="flex items-center justify-between border-b border-zinc-800/40 pb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                                            Telemetry Node ID: {account.id}
                                        </span>
                                    </div>
                                    <span className="font-mono text-[10px] text-zinc-600 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900">
                                        LIVE_SYNC
                                    </span>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="xl:col-span-1 border-b xl:border-b-0 xl:border-r border-zinc-800/40 pb-6 xl:pb-0 xl:pr-6">
                                        <SocialMediaStats account={account} />
                                    </div>
                                    <div className="xl:col-span-4 pt-2 xl:pt-0">
                                        <Analytics analyticsId={account.id} />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="relative overflow-hidden rounded-2xl border border-zinc-800/40 bg-zinc-950/30 p-16 text-center backdrop-blur-xl">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-500 font-mono text-lg">
                                //
                            </div>
                            <h4 className="text-sm font-semibold tracking-tight text-zinc-300">No managed accounts found</h4>
                            <p className="mt-1 text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                                This user identifier profile does not contain any operational data channels or connected pipelines.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserAnalytics;