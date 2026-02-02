import React, { useState } from 'react';
import { Splash } from './screens/Splash';
import { HomeownerDashboard, LaborPool } from './screens/Homeowner';
import { TrackMyTechSheet, TrackMyTechProgress, NearbyTechs } from './screens/Tracking';
import { TechnicianDashboard, TechLiveTracker, TechPaymentsHub } from './screens/Technician';
import { AIQuoteEstimator, PhotoUploadGuide, AIPriceEstimate, ContractorMatches } from './screens/Estimator';
import { ProjectMilestones, EscrowDeposit, FinalSignOff } from './screens/Project';

enum Screen {
  Splash = 'Splash',
  HomeownerDashboard = 'HomeownerDashboard',
  LaborPool = 'LaborPool',
  TrackMyTechSheet = 'TrackMyTechSheet',
  TrackMyTechProgress = 'TrackMyTechProgress',
  NearbyTechs = 'NearbyTechs',
  TechnicianDashboard = 'TechnicianDashboard',
  TechLiveTracker = 'TechLiveTracker',
  TechPaymentsHub = 'TechPaymentsHub',
  AIQuoteEstimator = 'AIQuoteEstimator',
  PhotoUploadGuide = 'PhotoUploadGuide',
  AIPriceEstimate = 'AIPriceEstimate',
  ContractorMatches = 'ContractorMatches',
  ProjectMilestones = 'ProjectMilestones',
  EscrowDeposit = 'EscrowDeposit',
  FinalSignOff = 'FinalSignOff',
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Splash);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode class on html element
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Splash: return <Splash />;
      case Screen.HomeownerDashboard: return <HomeownerDashboard />;
      case Screen.LaborPool: return <LaborPool />;
      case Screen.TrackMyTechSheet: return <TrackMyTechSheet />;
      case Screen.TrackMyTechProgress: return <TrackMyTechProgress />;
      case Screen.NearbyTechs: return <NearbyTechs />;
      case Screen.TechnicianDashboard: return <TechnicianDashboard />;
      case Screen.TechLiveTracker: return <TechLiveTracker />;
      case Screen.TechPaymentsHub: return <TechPaymentsHub />;
      case Screen.AIQuoteEstimator: return <AIQuoteEstimator />;
      case Screen.PhotoUploadGuide: return <PhotoUploadGuide />;
      case Screen.AIPriceEstimate: return <AIPriceEstimate />;
      case Screen.ContractorMatches: return <ContractorMatches />;
      case Screen.ProjectMilestones: return <ProjectMilestones />;
      case Screen.EscrowDeposit: return <EscrowDeposit />;
      case Screen.FinalSignOff: return <FinalSignOff />;
      default: return <Splash />;
    }
  };

  return (
    <div className="relative min-h-screen max-w-md mx-auto bg-white dark:bg-[#101922] shadow-2xl overflow-hidden border-x border-slate-200 dark:border-slate-800">
      {renderScreen()}

      {/* Navigation Fab/Menu for Demo Purpose */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
        {isMenuOpen && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-2 mb-2 max-h-[60vh] overflow-y-auto border border-slate-200 dark:border-slate-700 min-w-[200px]">
             <div className="p-2 border-b border-slate-200 dark:border-slate-700 mb-2">
               <label className="flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-200 cursor-pointer">
                 <span>Dark Mode</span>
                 <input type="checkbox" checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} className="toggle" />
               </label>
             </div>
             <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">General</p>
            <button onClick={() => { setCurrentScreen(Screen.Splash); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Splash / Landing</button>
            
            <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2 mb-1">Homeowner</p>
            <button onClick={() => { setCurrentScreen(Screen.HomeownerDashboard); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Dashboard</button>
            <button onClick={() => { setCurrentScreen(Screen.LaborPool); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Labor Pool</button>
            <button onClick={() => { setCurrentScreen(Screen.ContractorMatches); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Contractor Matches</button>

            <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2 mb-1">Tracking</p>
            <button onClick={() => { setCurrentScreen(Screen.TrackMyTechSheet); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Track Tech (Sheet)</button>
            <button onClick={() => { setCurrentScreen(Screen.TrackMyTechProgress); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Track Tech (Progress)</button>
            <button onClick={() => { setCurrentScreen(Screen.NearbyTechs); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Nearby Techs</button>
            
            <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2 mb-1">Estimation</p>
            <button onClick={() => { setCurrentScreen(Screen.AIQuoteEstimator); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">AI Quote Intro</button>
            <button onClick={() => { setCurrentScreen(Screen.PhotoUploadGuide); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Photo Guide</button>
            <button onClick={() => { setCurrentScreen(Screen.AIPriceEstimate); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Price Estimate</button>

             <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2 mb-1">Project</p>
            <button onClick={() => { setCurrentScreen(Screen.ProjectMilestones); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Milestones</button>
            <button onClick={() => { setCurrentScreen(Screen.EscrowDeposit); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Escrow Deposit</button>
            <button onClick={() => { setCurrentScreen(Screen.FinalSignOff); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Final Sign-off</button>

            <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2 mb-1">Technician</p>
            <button onClick={() => { setCurrentScreen(Screen.TechnicianDashboard); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Tech Dashboard</button>
            <button onClick={() => { setCurrentScreen(Screen.TechLiveTracker); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Live Tracker</button>
            <button onClick={() => { setCurrentScreen(Screen.TechPaymentsHub); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Payments Hub</button>
          </div>
        )}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-primary hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors flex items-center justify-center"
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
    </div>
  );
};

export default App;
