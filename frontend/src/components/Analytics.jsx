// File: src/components/Analytics.jsx
import React, { useEffect, useState } from "react";
import { analyticsById } from "../services/Api";

const METRIC_CONFIGS = [
  { key: "reachedCount", label: "Account Reached", icon: "bi-bar-chart-line" },
  { key: "engagedCount", label: "Account Engaged", icon: "bi-people" },
  { key: "storiesCount", label: "Total Stories", icon: "bi-journal" },
  { key: "followsCount", label: "Total Follows", icon: "bi-person-plus" },
  { key: "postsCount", label: "Total Posts", icon: "bi-postcard" },
  { key: "saveCount", label: "Total Saves", icon: "bi-bookmark" },
  { key: "commentsCount", label: "Total Comments", icon: "bi-chat-dots" },
  { key: "sharesCount", label: "Total Shares", icon: "bi-share" },
];

const Analytics = ({ analyticsId }) => {
  const [analytics, setAnalytics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCurrentRequest = true;

    setIsLoading(true);
    setError(null);

    analyticsById(analyticsId)
      .then((response) => {
        if (isCurrentRequest) {
          setAnalytics(response?.data || {});
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isCurrentRequest) {
          console.error(`Failed to fetch analytics for ID ${analyticsId}:`, err);
          setError("Failed to load metrics. Please try again.");
          setIsLoading(false);
        }
      });

    return () => {
      isCurrentRequest = false;
    };
  }, [analyticsId]);

  // Loading State - Premium Grid Skeleton Architecture
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full py-2 animate-pulse">
        {METRIC_CONFIGS.map(({ key }) => (
          <div key={key} className="rounded-xl border border-zinc-800/40 bg-zinc-900/10 p-4 space-y-3 h-[92px]">
            <div className="h-3.5 bg-zinc-800/60 rounded w-2/3" />
            <div className="h-7 bg-zinc-800/40 rounded w-1/2 mt-1" />
          </div>
        ))}
      </div>
    );
  }

  // Error State - Modern Warning Alert Boundary
  if (error) {
    return (
      <div className="relative overflow-hidden rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 text-sm text-rose-400 backdrop-blur-xl flex items-center gap-3 w-full my-4 animate-fade-in">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400">
          <i className="bi bi-exclamation-triangle-fill text-xs" />
        </div>
        <div className="font-medium tracking-tight">{error}</div>
      </div>
    );
  }

  // Functional View Structure Matrix
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full py-2 animate-fade-in">
      {METRIC_CONFIGS.map(({ key, label, icon }) => {
        const rawValue = analytics?.[key] ?? 0;
        const formattedValue = typeof rawValue === "number" ? rawValue.toLocaleString() : rawValue;

        return (
          <div
            key={key}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-700/60 hover:bg-zinc-900/40 hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.5)]"
          >
            {/* Top Border Laser Interaction Line */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50 transition-all duration-500 group-hover:via-indigo-500/30 group-hover:opacity-100" />

            <div className="space-y-1.5">
              {/* Metric Meta Row Descriptor */}
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">
                <i className={`bi ${icon} text-zinc-600 transition-colors duration-200 group-hover:text-indigo-400 text-xs`} />
                <span className="truncate">{label}</span>
              </p>

              {/* Data Node Quantitative Value */}
              <h2 className="text-2xl font-black font-mono tracking-tight text-zinc-100 transition-colors duration-200 group-hover:text-white">
                {formattedValue}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Analytics;