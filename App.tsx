import React, { useState, useEffect } from 'react';
import { Splash } from './screens/Splash';
import { HomeownerDashboard, LaborPool } from './screens/Homeowner';
import { TrackMyTechSheet, TrackMyTechProgress, NearbyTechs } from './screens/Tracking';
import { TechnicianDashboard, TechLiveTracker, TechPaymentsHub } from './screens/Technician';
import { AIQuoteEstimator, PhotoUploadGuide, AIPriceEstimate, ContractorMatches } from './screens/Estimator';
import { ProjectMilestones, EscrowDeposit, FinalSignOff } from './screens/Project';
import { ContactForm } from './screens/Contact';

export enum Screen {
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
  ContactForm = 'ContactForm',
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Splash);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navigate = (screen: Screen) => {
    window.scrollTo(0, 0);
    setCurrentScreen(screen);
    setIsMenuOpen(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Splash: return <Splash onNavigate={navigate} />;
      case Screen.HomeownerDashboard: return <HomeownerDashboard onNavigate={navigate} />;
      case Screen.LaborPool: return <LaborPool onNavigate={navigate} />;
      case Screen.TrackMyTechSheet: return <TrackMyTechSheet onNavigate={navigate} />;
      case Screen.TrackMyTechProgress: return <TrackMyTechProgress onNavigate={navigate} />;
      case Screen.NearbyTechs: return <NearbyTechs onNavigate={navigate} />;
      case Screen.TechnicianDashboard: return <TechnicianDashboard onNavigate={navigate} />;
      case Screen.TechLiveTracker: return <TechLiveTracker onNavigate={navigate} />;
      case Screen.TechPaymentsHub: return <TechPaymentsHub onNavigate={navigate} />;
      case Screen.AIQuoteEstimator: return <AIQuoteEstimator onNavigate={navigate} />;
      case Screen.PhotoUploadGuide: return <PhotoUploadGuide onNavigate={navigate} />;
      case Screen.AIPriceEstimate: return <AIPriceEstimate onNavigate={navigate} />;
      case Screen.ContractorMatches: return <ContractorMatches onNavigate={navigate} />;
      case Screen.ProjectMilestones: return <ProjectMilestones onNavigate={navigate} />;
      case Screen.EscrowDeposit: return <EscrowDeposit onNavigate={navigate} />;
      case Screen.FinalSignOff: return <FinalSignOff onNavigate={navigate} />;
      case Screen.ContactForm: return <ContactForm onNavigate={navigate} />;
      default: return <Splash onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 dark:bg-slate-900 flex justify-center items-start py-0 md:py-8">
      <div className="relative w-full min-h-screen md:min-h-[800px] md:h-[90vh] md:max-h-[900px] max-w-md bg-white dark:bg-[#101922] shadow-2xl md:rounded-[2.5rem] overflow-hidden border-x border-slate-200 dark:border-slate-800 flex flex-col">
        <div className="flex-1 overflow-y-auto no-scrollbar relative">
          {renderScreen()}
        </div>

        {/* Floating Action Button for Navigation Menu */}
        <div className="absolute bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
          {isMenuOpen && (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-2 mb-2 max-h-[60vh] overflow-y-auto border border-slate-200 dark:border-slate-700 min-w-[200px] animate-[slideUp_0.2s_ease-out]">
               <div className="p-2 border-b border-slate-200 dark:border-slate-700 mb-2">
                 <label className="flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-200 cursor-pointer">
                   <span>Dark Mode</span>
                   <input type="checkbox" checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} className="toggle accent-primary" />
                 </label>
               </div>
               <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">General</p>
              <button onClick={() => navigate(Screen.Splash)} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Splash / Landing</button>
              <button onClick={() => navigate(Screen.ContactForm)} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Contact Support</button>
              
              <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2 mb-1">Homeowner</p>
              <button onClick={() => navigate(Screen.HomeownerDashboard)} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Dashboard</button>
              <button onClick={() => navigate(Screen.LaborPool)} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Labor Pool</button>

              <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2 mb-1">Tracking</p>
              <button onClick={() => navigate(Screen.TrackMyTechProgress)} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Track Tech (Live)</button>
              
              <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-2 mb-1">Project</p>
              <button onClick={() => navigate(Screen.ProjectMilestones)} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Milestones</button>
              <button onClick={() => navigate(Screen.TechnicianDashboard)} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-200">Tech View</button>
            </div>
          )}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-primary hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors flex items-center justify-center transform active:scale-95"
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
