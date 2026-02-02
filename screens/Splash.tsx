import React from 'react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const Splash: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#121212] font-sans">
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full max-w-[280px] mb-12 animate-[fadeIn_0.8s_ease-out]">
          <img 
            alt="TradeTrust Columbus Logo" 
            className="w-full h-auto drop-shadow-lg dark:invert-[.05]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASCtPYtVp3b4b_-nMWiCEb6NW4-3SBVsbeOIHtsJ4cKf1MCFVCiDkUS1JjccueDKdzLw85XV4FoL2wUB4v5ncE4aNOpwuxZlELQhCYz19vNIIOtem_DWqOSTomhzkbxHvfEXOabDHVK8uKaTQ6xA_oJ-72uH3E3Vw6bX9P-hht0Ayu45HRCmvGmdk_flsDhy0qAl9_PYZxVX-whlncB0RwTv4FFvi3XtO7pwTqlwC7FqqruV2Xqe6PNtRv429UGbIAf-QCF9lAMAc" 
            loading="eager"
          />
        </div>
        <div className="text-center space-y-4 mb-16">
          <h1 className="font-display text-4xl uppercase tracking-tight text-[#1A1A1A] dark:text-white leading-tight">
            Reliable Skilled Trades <br />
            <span className="text-[#B68D5D]">for Columbus</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed max-w-xs mx-auto">
            No more no-shows. <br />
            No more sticker shock.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-4">
          <button 
            onClick={() => onNavigate(Screen.HomeownerDashboard)}
            className="group w-full bg-[#B68D5D] hover:bg-[#A37B4D] text-white py-5 px-6 rounded-2xl font-bold text-lg flex items-center justify-between transition-all active:scale-[0.98] shadow-lg"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined">search</span>
              Find a Pro
            </span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
          <button 
            onClick={() => onNavigate(Screen.TechnicianDashboard)}
            className="group w-full bg-white dark:bg-zinc-800 border-2 border-gray-100 dark:border-zinc-700 text-[#1A1A1A] dark:text-white py-5 px-6 rounded-2xl font-bold text-lg flex items-center justify-between transition-all active:scale-[0.98] shadow-lg"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined">engineering</span>
              Join the Network
            </span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
        </div>
      </main>
      <footer className="pb-10 pt-4 px-8">
        <div className="flex justify-center items-center gap-8 text-gray-400 dark:text-gray-600">
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-2xl">verified</span>
            <span className="text-[10px] uppercase font-bold tracking-widest">Verified Pros</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-2xl">payments</span>
            <span className="text-[10px] uppercase font-bold tracking-widest">Fair Pricing</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-2xl">history</span>
            <span className="text-[10px] uppercase font-bold tracking-widest">On-Time</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
