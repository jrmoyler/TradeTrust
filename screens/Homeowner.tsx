import React from 'react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

// === Homeowner Dashboard ===
export const HomeownerDashboard: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-sans pb-24 relative">
      <header className="sticky top-0 z-40 bg-white dark:bg-[#1a2632] border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="size-10 overflow-hidden rounded-full border-2 border-primary/20 bg-slate-200 cursor-pointer" onClick={() => onNavigate(Screen.ContactForm)}>
              <img alt="User Profile" loading="lazy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDY3cvP7C6GI9jDRnujmJenMIFkk1oWn4o6hdKegn0yPYvdfhjSRVpTqRi7kZsDLlXDycsb83GJULB61sTmiMoKv6dmVqSpn-El0gWfL_3Em7cJ_IFiqQqzliwyHytnqitis-iZUxo_EG_LTqSlBYeb0bLDLOLme3v-djfr-0Q35NIaLuuxQJvfsG1ztvRCelLH3RgXXSFvAiD0hVoTF4uCkkAFZNbWlkd-PAaHyL8OGg7sg0fMigtYOTtx5nhi5EPPk0b-XBclPk" />
            </div>
            <div>
              <h1 className="text-[#0d141c] dark:text-white text-sm font-bold leading-tight">TradeTrust Columbus</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                German Village, OH
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="p-4">
          <div onClick={() => onNavigate(Screen.TrackMyTechProgress)} className="flex flex-col overflow-hidden rounded-xl shadow-sm bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-800 cursor-pointer group hover:border-primary/50 transition-colors">
            <div className="relative w-full h-48 bg-slate-200">
              <img alt="Live Map Tracking" loading="lazy" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxkGhuBPvfCehFdXgxlTiTZNarTRAQGuqYDmUlPjoZLDPhlLFqSfIhDhspqdVzPv1mI0UpEGy-5BTFcqc1riGnSi49pz0hh0oNimq9CGjDH_GLjo5nMfchBrDcuArbyO9O1x4bH5atHy4Hkr5ELcewI0vYUGReA9kqhaNcXUnow8_VbFAMcCviFTdbuCn4pKhpOgFW8wrgr5YpvFiUwRk9aB9LRi_piGpoIsObcXuPOrl1raihnpzE5qRBZXTQoa788E2j2G6GLew" />
              <div className="absolute bottom-3 left-3 bg-white dark:bg-[#1a2632] px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold text-[#0d141c] dark:text-white tracking-tight uppercase">Live Update</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[#0d141c] dark:text-white text-lg font-bold leading-tight">Track My Tech: John is arriving</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Plumbing Repair • 2.4 miles away</p>
                </div>
                <div className="bg-primary/10 dark:bg-primary/20 px-3 py-2 rounded-lg text-center">
                  <p className="text-primary text-[10px] font-bold uppercase tracking-wider">ETA</p>
                  <p className="text-primary text-xl font-bold leading-none">12m</p>
                </div>
              </div>
              <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button 
                  onClick={(e) => { e.stopPropagation(); onNavigate(Screen.TrackMyTechSheet); }}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white h-10 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">map</span>
                  View Live Map
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); onNavigate(Screen.ContactForm); }}
                  className="size-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <h2 className="text-[#0d141c] dark:text-white text-xl font-bold tracking-tight">Request Service</h2>
            <button onClick={() => onNavigate(Screen.LaborPool)} className="text-primary text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3 p-4">
            {[
              { icon: "water_drop", name: "Plumbing", color: "blue", textClass: "text-primary" },
              { icon: "bolt", name: "Electrical", color: "yellow", textClass: "text-yellow-600" },
              { icon: "air", name: "HVAC", color: "green", textClass: "text-green-600" },
              { icon: "home_repair_service", name: "Roofing", color: "orange", textClass: "text-orange-600" }
            ].map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => onNavigate(Screen.AIQuoteEstimator)}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] p-4 transition-all hover:border-primary/50 cursor-pointer active:scale-95"
              >
                <div className={`size-10 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-900/30 flex items-center justify-center ${item.textClass}`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-[#0d141c] dark:text-white text-sm font-bold">{item.name}</h3>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <h2 className="text-[#0d141c] dark:text-white text-xl font-bold tracking-tight">Active Projects</h2>
            <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2 py-0.5 rounded-full font-bold">2 Active</span>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <div onClick={() => onNavigate(Screen.ProjectMilestones)} className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] p-4 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined">deck</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[#0d141c] dark:text-white text-sm font-bold truncate">Backyard Deck Renovation</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="inline-block size-1.5 rounded-full bg-amber-500"></span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Scheduled for Thursday</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </div>
            <div onClick={() => onNavigate(Screen.ProjectMilestones)} className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] p-4 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                <span className="material-symbols-outlined">palette</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[#0d141c] dark:text-white text-sm font-bold truncate">Interior Painting</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="inline-block size-1.5 rounded-full bg-primary"></span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">In Progress • Day 2</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </div>
          </div>
        </section>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#1a2632]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 pb-6 pt-3 flex justify-between items-center z-[100] max-w-md mx-auto">
        <div onClick={() => onNavigate(Screen.HomeownerDashboard)} className="flex flex-col items-center gap-1 text-primary cursor-pointer hover:opacity-80">
          <span className="material-symbols-outlined filled-icon">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </div>
        <div onClick={() => onNavigate(Screen.ContactForm)} className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300">
          <span className="material-symbols-outlined">forum</span>
          <span className="text-[10px] font-medium">Messages</span>
        </div>
        <div className="relative -top-4">
          <button 
            onClick={() => onNavigate(Screen.AIQuoteEstimator)}
            className="bg-primary hover:bg-blue-600 transition-colors size-14 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center text-white border-4 border-white dark:border-[#101922] transform active:scale-95"
          >
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>
        <div onClick={() => onNavigate(Screen.ProjectMilestones)} className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300">
          <span className="material-symbols-outlined">assignment</span>
          <span className="text-[10px] font-medium">Projects</span>
        </div>
        <div onClick={() => onNavigate(Screen.HomeownerDashboard)} className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </div>
      </nav>
    </div>
  );
};

// === Labor Pool ===
export const LaborPool: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-sans pb-24 relative">
      <div className="sticky top-0 z-50 flex items-center bg-white dark:bg-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-800 justify-between">
        <div onClick={() => onNavigate(Screen.HomeownerDashboard)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-start cursor-pointer hover:opacity-70">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Labor Pool</h2>
        <div className="flex items-center justify-end">
          <button onClick={() => onNavigate(Screen.AIQuoteEstimator)} className="bg-primary hover:bg-primary/90 text-white text-xs font-bold py-2 px-4 rounded-full transition-colors whitespace-nowrap">
            Post a Seat
          </button>
        </div>
      </div>
      <div className="px-4 py-3 bg-white dark:bg-slate-900">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
            <div className="text-slate-500 dark:text-slate-400 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-xl">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-slate-800 h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 pl-2 text-base font-normal" placeholder="Search trades (e.g. Electrician)" />
          </div>
        </label>
      </div>
      <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar bg-white dark:bg-slate-900">
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 hover:bg-primary/90">
          <span className="text-sm font-medium">All</span>
          <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
        </button>
        {["Journeymen", "Apprentices", "OH Licensed"].map((filter, i) => (
          <button key={i} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 hover:bg-slate-200 dark:hover:bg-slate-700">
            <span className="text-sm font-medium">{filter}</span>
            <span className="material-symbols-outlined text-sm text-slate-400">keyboard_arrow_down</span>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between px-4 pb-2 pt-6">
        <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">The Bench</h3>
        <span className="text-primary text-sm font-semibold">12 available</span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {[
          { name: "Marcus Miller", role: "Journeyman Electrician • 8 yrs exp", badge: "OH Licensed", rating: "4.9", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWak75g2aeMI20bSUYdbNQQlmAIbaH_AtZh4FZ65IR0tcXwsXk9sS4moMV_y4pAUOjYQFyAQMIHb7MeXqZy8NnnicKLSxSShk87qZ-F759HvMEHDWc4EYhmJXWjustBUVtm9CpjAl7VMY2szql76vzWzjQtQlaPfU58U293j-_j4xvIZn2b0OG5WsRtwbWtORfQYK9QTHbCEXSld3PC4J7GFhw7yOc9teUwsD-XgNJvJ24uG2jtigKQH9HO_53ywFdqzcOc4E0HyQ" },
          { name: "Sarah Jenkins", role: "HVAC Technician • 2 yrs exp", badge: "Apprentice", rating: "4.7", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9ZxYiIYn0vUVdRQQYEQg688CD7FAYjL45HboMdyfomfUF2BcMAZi_oH34hMzBG5I5_TWK3f3-ptHR1YH9bxTHvyvZLHN1lO7fxqF3unITTYt0WKQq_J0KgzIXZveS3W8AqAsHkfpoJn_QMLjARJV--We3AhB0MQGLmOlVyPxpEfI-vvevmv9ySTwkkAc1XA762BQhQieHOz9ePXp9N8H9hWzT7AR9AclDE9LFygJSmqITgB5O54KDMFC3958mphCmUpBT9dCru1w", badgeClass: "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400" },
          { name: "David Chen", role: "Master Plumber • 12 yrs exp", badge: "OH Licensed", rating: "5.0", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO7c43vjZbZn3V5eySCMEaLezWbLj9ALUIk61hOzsOhXVG_UkMZFuOpdNtL26t_tH95hZHYYYUkegaeEonIk29nGbHYmc40Z-1laL6r7w1ugFFLcfraqPVfgqWpyw5sPcDV1p0hMfpXX9J2t7lAS8fhizo9kjFYmmcV6Y6nOCy8O-d4PMlfcn15SbKz6TJOh_rJWWnmkmAOHnWbp1shUgT-a_YuDrJ-BfXFvfldkQNRp39zuImMuwjMtg0rhd30e9Va7Ug7l_ZeuQ" }
        ].map((worker, i) => (
          <div key={i} className="flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex flex-[2_2_0px] flex-col justify-between gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${worker.badgeClass || "bg-primary/10 text-primary"}`}>{worker.badge}</span>
                  <div className="flex items-center text-yellow-500">
                    <span className="material-symbols-outlined text-xs filled-icon">star</span>
                    <span className="text-xs font-bold ml-0.5">{worker.rating}</span>
                  </div>
                </div>
                <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">{worker.name}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">{worker.role}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => onNavigate(Screen.AIQuoteEstimator)}
                  className="flex-1 flex items-center justify-center rounded-lg h-9 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold active:scale-95"
                >
                  Hire {worker.name.split(' ')[0]}
                </button>
                <button onClick={() => onNavigate(Screen.ContactForm)} className="w-10 flex items-center justify-center rounded-lg h-9 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined text-xl">info</span>
                </button>
              </div>
            </div>
            <div className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-xl flex-shrink-0" style={{ backgroundImage: `url("${worker.img}")` }}></div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 py-2 flex justify-between items-center pb-8 max-w-md mx-auto">
        <button onClick={() => onNavigate(Screen.LaborPool)} className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined filled-icon">groups</span>
          <span className="text-[10px] font-medium">Labor Pool</span>
        </button>
        <button onClick={() => onNavigate(Screen.ProjectMilestones)} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
          <span className="material-symbols-outlined">work</span>
          <span className="text-[10px] font-medium">My Jobs</span>
        </button>
        <button onClick={() => onNavigate(Screen.ContactForm)} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="text-[10px] font-medium">Messages</span>
        </button>
        <button onClick={() => onNavigate(Screen.HomeownerDashboard)} className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-[10px] font-medium">Account</span>
        </button>
      </div>
    </div>
  );
};
