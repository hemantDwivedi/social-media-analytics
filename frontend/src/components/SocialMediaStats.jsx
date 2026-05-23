// File: src/components/SocialMediaStats.jsx
import React from "react";
import { Icon } from "../services/Icon";

const SocialMediaStats = ({ account }) => {
  const platformIcon = Icon(account.platform);

  // Formatter fallback to handle analytical values cleanly
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num ?? 0;
  };

  return (
    <div className="w-full space-y-4 animate-fade-in">
      {/* Platform Channel Identifier Header */}
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 shadow-inner text-indigo-400 group-hover:text-indigo-300 transition-colors">
          <i className={`bi ${platformIcon} text-sm`} />
        </div>
        <h5 className="text-sm font-bold uppercase tracking-wider text-zinc-300 font-mono">
          {account.platform} Channel
        </h5>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/60 hover:bg-zinc-900/50 shadow-lg shadow-black/20 w-full">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent transition-all duration-500 group-hover:via-indigo-500/30" />
          <div className="flex flex-col gap-2 min-w-0">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              <i className="bi bi-person-fill text-xs text-zinc-600 group-hover:text-indigo-400 transition-colors" />
              Followers
            </p>
            <h2 className="text-3xl font-black font-mono tracking-tight text-zinc-100 group-hover:text-white transition-colors break-words">
              {formatNumber(account.followersCount)}
            </h2>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/60 hover:bg-zinc-900/50 shadow-lg shadow-black/20 w-full">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent transition-all duration-500 group-hover:via-indigo-500/30" />
          <div className="flex flex-col gap-2 min-w-0">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              <i className="bi bi-person-check-fill text-xs text-zinc-600 group-hover:text-indigo-400 transition-colors" />
              Following
            </p>
            <h2 className="text-3xl font-black font-mono tracking-tight text-zinc-100 group-hover:text-white transition-colors break-words">
              {formatNumber(account.followingCount)}
            </h2>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/60 hover:bg-zinc-900/50 shadow-lg shadow-black/20 w-full">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent transition-all duration-500 group-hover:via-indigo-500/30" />
          <div className="flex flex-col gap-2 min-w-0">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
              <i className="bi bi-card-text text-xs text-zinc-600 group-hover:text-indigo-400 transition-colors" />
              Posts
            </p>
            <h2 className="text-3xl font-black font-mono tracking-tight text-zinc-100 group-hover:text-white transition-colors break-words">
              {formatNumber(account.postsCount)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaStats;
