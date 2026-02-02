import React from 'react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

// === AI Quote Estimator (Intro) ===
export const AIQuoteEstimator: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-sans text-[#0d141c] dark:text-slate-100 antialiased">
      <div className="sticky top-0 z-50 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-slate-200 dark:border-slate-800">
        <div onClick={() => onNavigate(Screen.HomeownerDashboard)} className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 cursor-pointer hover:bg-primary/20">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-[#0d141c] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">AI Quote Estimator</h2>
      </div>
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        <div className="flex w-full flex-row items-center justify-center gap-3 py-6">
          <div className="h-2 w-8 rounded-full bg-primary/20"></div>
          <div className="h-2 w-12 rounded-full bg-primary shadow-[0_0_8px_rgba(13,127,242,0.4)]"></div>
          <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        </div>
        <div className="px-4 text-center">
          <h3 className="text-[#0d141c] dark:text-white tracking-tight text-2xl font-bold leading-tight pb-2 pt-2">Precision AI Quoting Engine</h3>
          <p className="text-[#4e7397] dark:text-slate-400 text-base font-normal leading-normal pb-6">Analyzing your plumbing media to determine a market-fair estimate for Columbus, OH.</p>
        </div>
        <div className="px-4 mb-6">
          <div className="relative group overflow-hidden rounded-xl border-2 border-primary/30 bg-white dark:bg-slate-900 shadow-sm">
            <div className="grid grid-cols-2 gap-2 p-3">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10"></div>
                <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGgNRfO48ZSV9MaDGkQO7mEO2GRLlI26DyT6GI9AXfnCciEvEG51n8jHCSCYeY5d1DjD8hJMKt6U-xtp-ARGLyWKDY_VACBdc_lCSbAH4c_kmERpOJxPbCIr_bdQLOpsdlrglh-EQwCAjsyHKofFBCXyJVbOeiem8Eb2Xha2ibr8YcTDV-Vp-pzZsn3eBzfQnR0SegC9E6-OMRhHsLsyPWa1gx_eP9sbZWOkWzz2W4Yl2kZyeLs_njKhxXWo0lumcoKmmSPz3zSeM")' }}></div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10"></div>
                <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5gUV-XW2Jw7huJLV0waddL-LnvNbZ3_Hg53gXElG32pWWna23c9lpEnt9yTa9hw_LHVTMxx5KKDD1hnCIVWa0fvbQ61w8UiBual2DwCT4rLEM0LLmWLV4tYguHKZbgB1EvCbjuFc1A8QQTgGbXg3Kz11BQSmXJLnR-1z4cSeiCXX2UUwotDeTt8e4XaSbUvkR_jc_Dwd3TA7-z7tGF6CEIpaAgYvWqW-13p3wrTRCMfKdh9fUsfOI_5o8qKBWgYjEO1atzW5sBHk")' }}></div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-0 h-1 bg-primary shadow-[0_0_15px_#0d7ff2] opacity-80 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-primary/5 pointer-events-none">
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur px-4 py-2 rounded-full border border-primary/20 flex items-center gap-2 shadow-lg">
                <span className="material-symbols-outlined text-primary text-sm animate-spin">sync</span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Detecting Issue: Pipe Corrosion</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pb-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Market Fair Range</p>
                <h4 className="text-3xl font-extrabold text-[#0d141c] dark:text-white">$150 — $250</h4>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-[10px] font-bold border border-green-200 dark:border-green-800 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">verified</span>
              </div>
            </div>
            <div className="relative h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full mb-6 overflow-hidden">
              <div className="absolute left-[30%] right-[30%] h-full bg-primary rounded-full"></div>
              <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-1 h-6 bg-white dark:bg-slate-300 rounded-full border border-slate-300 dark:border-slate-600 shadow-sm"></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span> Columbus, OH Market
                </span>
                <span className="font-medium text-slate-700 dark:text-slate-200">Verified</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">history</span> Based on
                </span>
                <span className="font-medium text-slate-700 dark:text-slate-200">84 Similar Jobs</span>
              </div>
            </div>
            <hr className="my-5 border-slate-100 dark:border-slate-800" />
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Est. Labor</p>
                <p className="text-sm font-semibold dark:text-white">$120-$180</p>
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Est. Parts</p>
                <p className="text-sm font-semibold dark:text-white">$30-$70</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto px-4 pb-10 space-y-3">
          <button 
            onClick={() => onNavigate(Screen.PhotoUploadGuide)}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]"
          >
            Request Pro Quotes
          </button>
          <p className="text-center text-[11px] text-slate-400 leading-relaxed px-6">
            This estimate is powered by TradeTrust AI using local Columbus data. Final pricing is provided by licensed contractors.
          </p>
        </div>
      </div>
    </div>
  );
};

// === Photo Upload Guide ===
export const PhotoUploadGuide: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col font-sans">
            <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center p-4 justify-between max-w-md mx-auto w-full">
                    <div onClick={() => onNavigate(Screen.AIQuoteEstimator)} className="flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">AI Photo Upload Guide</h2>
                    <div className="size-10 flex items-center justify-center">
                        <span className="material-symbols-outlined">help_outline</span>
                    </div>
                </div>
            </header>
            <main className="flex-1 max-w-md mx-auto w-full pb-32">
                <section className="px-4 pt-6">
                    <h3 className="tracking-tight text-2xl font-bold leading-tight">For the most accurate estimate:</h3>
                    <p className="text-[#90adcb] text-sm mt-1">High quality photos help our AI identify plumbing and HVAC issues faster.</p>
                </section>
                <section className="mt-2">
                    <div className="grid grid-cols-2 gap-3 p-4">
                        <div className="flex flex-col gap-3">
                            <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl border border-white/10 overflow-hidden relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvcXYmhwaiL9BeEr4U8dqa9owe3fDfLM7VDiqk0U_MwD3d7cDX23HzkUbDioYTxbDwtKuSXWOEvThBFkBMSouMX-Af3oxqRqaKZH74jMO_Sx7kaV4kq6jXuBgne1uu5yiOgEnrrkGUkuxC4W4J0iRrgVKqG51m8F5DQ3hMBDVpT0HesrrodLZLh-1CwZwjVq5Ve7DoX4TYCaD057UQL6KOq7BeA0qD-XYHvNPSQXR5nNs7WWcPpiVBNoAWLb6BezRhVkmkzjBzVMY")'}}>
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute top-2 right-2 bg-green-500 rounded-full p-0.5 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[16px] text-white">check</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold leading-normal">Clear lighting</p>
                                <p className="text-[#90adcb] text-xs font-normal leading-normal">Use flash if needed</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl border border-white/10 overflow-hidden relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArqsdUcwpqsmdw8vuXE0Xr27Vzb9OTBz5qAtT7VTmF3f-iA8eRT6lt5Fnlj45IX-Wd0oWthr2mFLo8eIoA30_nNjziUPVMrQmULIEIZKbQNojOoQ05aVBHghmPebesYjmYdi71nxXV8le-lTmJ9M1qhLBTYWpNVUzq2M6-izAQOeR2MunG3ikbrCGhSFx8_ELhs80fxGCgFylUGGqMkDrOTgTwmtkpo35X8makOn9xL5KiIECdoOvVuWfC1VPRXbZKT2nEFivUxnQ")'}}>
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute top-2 right-2 bg-green-500 rounded-full p-0.5 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[16px] text-white">check</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold leading-normal">Show full fixture</p>
                                <p className="text-[#90adcb] text-xs font-normal leading-normal">Include surrounding pipes</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-4 mt-2">
                    <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#314d68] bg-primary/5 px-6 py-12 transition-colors active:bg-primary/10 cursor-pointer">
                        <div className="flex size-16 items-center justify-center rounded-full bg-primary text-white">
                            <span className="material-symbols-outlined text-3xl">photo_camera</span>
                        </div>
                        <div className="flex max-w-[480px] flex-col items-center gap-2">
                            <p className="text-lg font-bold leading-tight tracking-tight text-center">Tap to Capture or Upload</p>
                            <p className="text-[#90adcb] text-sm font-normal leading-normal max-w-[280px] text-center">Take up to 5 photos or upload a short video of the issue.</p>
                        </div>
                        <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#223649] text-white text-sm font-bold leading-normal tracking-wide transition-all active:scale-95">
                            <span className="truncate">Open Camera</span>
                        </button>
                    </div>
                </section>
                <section className="mt-6">
                    <div className="flex items-center justify-between px-4 pb-2">
                        <h3 className="text-lg font-bold leading-tight tracking-tight">Captured Photos (2/5)</h3>
                        <button className="text-primary text-sm font-medium">Edit</button>
                    </div>
                    <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar pb-4">
                        <div className="relative flex-shrink-0">
                            <div className="size-24 bg-center bg-no-repeat bg-cover rounded-lg border border-white/10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmXapP_9MkSYGar26FjgPNqO06Tsh06os46b6xVtApd6S3sExnSQDk23IfrWxe3OS_V1MD34EITIbP9jR5tJQL-now0sCSquoqkZQJWNbiJvE2Rr_7t4g0ONPjzGrIbxbz1JpsuZ1H8RShgvEDWVnrnrt3_UkipZ44TIvJTXE3zpxNN33b23chMD6CoiXZd1aDUdV02ohHXBIEjZrE8jdSupj1z5olUjsoZFa7TD9uYyYrngKJsD9a5zdnv68TrQQ_eCQK0AyCSTM")'}}></div>
                            <button className="absolute -top-1.5 -right-1.5 size-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-[14px]">close</span></button>
                        </div>
                        <div className="relative flex-shrink-0">
                            <div className="size-24 bg-center bg-no-repeat bg-cover rounded-lg border border-white/10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDn4m4M6gslUbGD1Fuzh2QK1pvoBwvRGMLfFm2CVh2nIBTkEBRNAMOMP2HDuFcnyhueJaN106hKusGrWvNCtb3q32xLfXTQtyXI1RtmJUDxaTnGIwoKmAmIIGRj_5gb0sFfC0MlPbB16HNErFjDKXICO_39G3P2T8mbGVa_4OqSnoeiy4kMKhfpqh1SAt6vbDyrajl1XccvhmplPSfL86pJICoB70AGNit0hu7qSua5zUG6-BladlMnWj7V0bxqVHNjNBLbiBr9Im8")'}}></div>
                            <button className="absolute -top-1.5 -right-1.5 size-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-[14px]">close</span></button>
                        </div>
                        <div className="size-24 rounded-lg border-2 border-dashed border-[#314d68] flex items-center justify-center text-[#314d68] flex-shrink-0">
                            <span className="material-symbols-outlined">add</span>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-white/10 max-w-md mx-auto">
                <button 
                  onClick={() => onNavigate(Screen.AIPriceEstimate)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl h-14 bg-primary text-white text-base font-bold tracking-wide shadow-lg active:scale-[0.98] transition-all"
                >
                    <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                    <span>Analyze with AI</span>
                </button>
                <p className="text-center text-[10px] text-[#90adcb] mt-3 uppercase tracking-widest font-semibold">TradeTrust AI Estimation Engine</p>
            </footer>
        </div>
    );
}

// === AI Price Estimate ===
export const AIPriceEstimate: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col font-sans">
            <nav className="sticky top-0 z-50 flex items-center bg-background-light dark:bg-background-dark p-4 border-b border-slate-200 dark:border-white/5 justify-between">
                <div onClick={() => onNavigate(Screen.PhotoUploadGuide)} className="flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-70">
                    <span className="material-symbols-outlined text-2xl">arrow_back_ios</span>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">AI Price Estimate</h2>
                <div className="flex w-12 items-center justify-end">
                    <button className="flex items-center justify-center rounded-lg h-12 bg-transparent p-0">
                        <span className="material-symbols-outlined text-2xl">share</span>
                    </button>
                </div>
            </nav>
            <main className="flex-1 overflow-y-auto pb-32">
                <div className="p-4">
                    <div className="flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-[#182634] p-4 shadow-lg border border-slate-200 dark:border-white/5">
                        <div className="flex flex-col gap-1 flex-[1.5]">
                            <p className="text-base font-bold leading-tight">Rheem 40-gal Gas Water Heater</p>
                            <div className="flex items-center gap-1.5 mt-1">
                                <span className="material-symbols-outlined text-sm text-red-400">error</span>
                                <p className="text-[#90adcb] text-sm font-normal leading-normal">Leaking Pressure Relief Valve</p>
                            </div>
                            <div className="mt-3 inline-flex items-center px-2 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider w-fit">Asset ID: #4492-Z</div>
                        </div>
                        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex-1 border border-slate-200 dark:border-white/10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC23CeAEsTrjC2cxi0nG-oR5iOQF7R_yixf0z0jv8Yh1ZUIEy7SgcSNghiitqbEogEJAzVIFpFgPpy-6dM4gudiuCL6Bloqknmz1xSEnskcGu98v5f2XvqLRqdLG_s-Zanwc2wcRbDGVeGrETWARsf4s7TOxgJdNtG9HNsNoKHzcbZJ2qr1UhXfQdy6OGGsdzqADXt5It67AmFPEYk1EixA-bNBuTlOCLCY9hzydphK0ec4r95rk43k0lL6uyVsb6BkUL4PfFJ1mQ8")'}}></div>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className="bg-white dark:bg-[#182634] rounded-xl p-6 border border-slate-200 dark:border-white/5 flex flex-col items-center shadow-sm">
                        <p className="text-[#90adcb] text-sm font-medium uppercase tracking-widest mb-2">Market Fair Range</p>
                        <h3 className="tracking-tight text-4xl font-bold leading-tight text-center">$1,200 - $1,600</h3>
                        <p className="text-[#90adcb] text-sm font-normal leading-normal mt-3 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">location_on</span> Based on Columbus, OH market data
                        </p>
                        <div className="w-full mt-6 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-primary to-orange-500 rounded-full opacity-50"></div>
                            <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-1.5 h-5 bg-slate-900 dark:bg-white rounded-full ring-4 ring-primary/30"></div>
                        </div>
                        <div className="flex justify-between w-full mt-2 text-[10px] text-[#90adcb] font-bold uppercase">
                            <span>Low</span><span className="text-slate-900 dark:text-white">Fair</span><span>High</span>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className="flex flex-col gap-3 p-5 rounded-xl bg-white dark:bg-[#182634] border border-slate-200 dark:border-white/5 shadow-sm">
                        <div className="flex gap-6 justify-between items-center">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                                <p className="text-base font-medium leading-normal">AI Accuracy Score</p>
                            </div>
                            <p className="text-lg font-bold leading-normal">94%</p>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200 dark:bg-[#314d68] overflow-hidden">
                            <div className="h-full rounded-full bg-primary" style={{width: "94%"}}></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-emerald-500 text-xs font-semibold uppercase">High Confidence</p>
                            <p className="text-[#90adcb] text-xs">Based on 12,000+ local samples</p>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 mb-6">
                    <div className="bg-white dark:bg-[#182634] rounded-xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
                        <div className="p-4 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/5">
                            <h4 className="font-bold text-sm uppercase tracking-wide">Estimated Breakdown</h4>
                        </div>
                        <div className="p-4 space-y-4">
                            {[
                                {label: "Labor & Installation", sub: "Certified Technician (4-6 hrs)", cost: "$400 - $600"},
                                {label: "Parts & Materials", sub: "OEM Valve & Connectors", cost: "$750 - $900"},
                                {label: "Local Permits", sub: "Columbus Municipal Fee", cost: "$50 - $100"}
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium">{item.label}</span>
                                        <span className="text-[#90adcb] text-xs">{item.sub}</span>
                                    </div>
                                    <span className="font-bold">{item.cost}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/5">
                            <div className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-sm">info</span>
                                <p className="text-[#90adcb] text-[11px] leading-relaxed">Estimates are based on standard accessibility. Final on-site inspection may vary by ±10%.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/80 backdrop-blur-lg border-t border-slate-200 dark:border-white/10 p-4 pb-8 max-w-md mx-auto">
                <div className="flex flex-col gap-3">
                    <button 
                        onClick={() => onNavigate(Screen.ContractorMatches)}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                    >
                        <span className="material-symbols-outlined">calendar_today</span> Book Now
                    </button>
                    <button 
                        onClick={() => onNavigate(Screen.ContractorMatches)}
                        className="w-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-900 dark:text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 transition-all active:scale-[0.98]"
                    >
                        <span className="material-symbols-outlined">description</span> Get Professional Quote
                    </button>
                </div>
            </footer>
        </div>
    );
}

// === Contractor Matches ===
export const ContractorMatches: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white font-sans">
             <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center p-4 justify-between max-w-md mx-auto">
                    <div onClick={() => onNavigate(Screen.AIPriceEstimate)} className="flex size-10 shrink-0 items-center justify-start cursor-pointer hover:opacity-70"><span className="material-symbols-outlined cursor-pointer">arrow_back_ios</span></div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-base font-bold leading-tight">Top Matches</h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Columbus, OH • Water Heater</p>
                    </div>
                    <div className="flex size-10 items-center justify-end">
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent"><span className="material-symbols-outlined">tune</span></button>
                    </div>
                </div>
            </header>
            <main className="max-w-md mx-auto pb-24">
                <div className="px-4 pt-6 pb-2">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold tracking-tight">Plumbing Repairs</h3>
                        <span className="text-primary text-sm font-semibold">Est. $250 - $400</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">We found 12 vetted professionals matching your AI estimate for a water heater repair.</p>
                </div>
                <div className="px-4 py-4">
                    <div className="flex h-11 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800/50 p-1">
                        {['Price', 'Rating', 'Earliest'].map((tab, i) => (
                             <label key={i} className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-500 dark:text-slate-400 has-[:checked]:text-primary font-semibold text-sm transition-all">
                                <span>{tab}</span>
                                <input className="hidden" name="sort" type="radio" defaultChecked={i===1} />
                            </label>
                        ))}
                    </div>
                </div>
                {[
                    {name: "Buckeye Plumbing Pro", badge: "Water Heater Expert", dist: "1.2 miles away", rate: "99%", time: "2:00 PM Today", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLSFNurCHKS_bo4sIAcT3MwsjtkLmmqYQasqpkt7gKA0bjAI7gdWTUSjDtk6-IRPzGIE7k07l4MJHBv3Qkq0ghSbIGoET9T-RPeeumvBN2Vz_aJn973ZK2puvNiPny5y5nIVcowhnfl0qyvrwSZ9evxbgNtcdbyxIzOXBbcOao4bAD2RZf5OR9v3Akdz-sgCcQBz06b9-UNhXILbCmtiXiW8uaEuBY5DnManEbj_9L2wR0lFXVwneUcK_akxCYjSwHSvKdC3xYXE0"},
                    {name: "Columbus Flow Services", badge: "Emergency Specialist", dist: "3.5 miles away", rate: "98%", time: "4:30 PM Today", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfRg0jaxzizpUFYlwOgRp8cF7_XRUpm-XwKyBvlAJkT2ScirrVroSsEyiIq0Dzpts9MjP9bDmPxh4Q1srbZWt9PUyneMjnb3J3FXgA8YzUTUyB4XDiP2tNDOrqgj_wxcCDitVW0mDGZsQL7wZ4HPsGs9TR4SvsIWEgTFl7s9ym-CCmlB7KlTpGF3yenhAJJkOskEtz586WFUf2ylMuFdsJZSOrQQg856rojNuWjaxb7HkgA5G9Q1AdZ5Fwc64Bv-Za-V2jZOkskFk"},
                    {name: "Mid-Ohio Master Plumbers", badge: "Full System Repair", dist: "5.0 miles away", rate: "97%", time: "8:00 AM Tomorrow", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA7ZnG4qlS7vW-baztgL0NVpPwCPLUCpj6V4JGkk0vh5LZH3YW1Wjs9mYizHBTYbxcRsdOrwHaGEqoZXVCUJ58A1xUg2oAuF_JmcVX8RuwLaYmGzsqOcbraO1CkqRsA20s4mNPWZaNsFOG25aiMi3vYshaO5tGDFc5VyK0xc5n5lvxfHVggHGFlmUBpMD-ZWqw4cVS6KtbbNRHqcue9JzjDnnZTtd6VshaD6IlIYzhJ8jZDfoZDugG94NqP6cyt3vJfK6bgPWNjd8"}
                ].map((c, i) => (
                    <div key={i} className="px-4 py-3">
                        <div className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#182634] border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="relative h-48 w-full bg-center bg-cover" style={{backgroundImage: `url("${c.img}")`}}>
                                <div className="absolute top-3 left-3 flex items-center gap-1 bg-primary px-3 py-1 rounded-full shadow-lg">
                                    <span className="material-symbols-outlined text-[14px] text-white">verified</span>
                                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">TradeTrust Verified</span>
                                </div>
                            </div>
                            <div className="p-4 flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-lg font-bold">{c.name}</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="bg-primary/10 text-primary text-[11px] font-bold px-2 py-0.5 rounded uppercase">{c.badge}</span>
                                            <span className="text-slate-400 dark:text-slate-500 text-xs">•</span>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs">{c.dist}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center justify-end text-green-500 font-bold text-lg"><span>{c.rate}</span><span className="material-symbols-outlined text-[18px] ml-0.5 filled-icon">thumb_up</span></div>
                                        <p className="text-[10px] text-slate-400 uppercase font-medium">Reliability</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                                    <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
                                    <div>
                                        <p className="text-sm font-semibold">Next Arrival: {c.time}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 pt-1">
                                    <button onClick={() => onNavigate(Screen.EscrowDeposit)} className="flex-1 flex items-center justify-center rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 active:scale-[0.98] transition-transform">Book Now</button>
                                    <button onClick={() => onNavigate(Screen.ContactForm)} className="flex items-center justify-center rounded-lg h-11 w-11 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"><span className="material-symbols-outlined">chat_bubble</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#101922] border-t border-slate-200 dark:border-slate-800 pb-6 max-w-md mx-auto">
                <div className="flex justify-around p-2">
                    {['search', 'description', 'event_available', 'account_circle'].map((icon, i) => (
                        <div onClick={() => onNavigate([Screen.ContractorMatches, Screen.AIPriceEstimate, Screen.ProjectMilestones, Screen.HomeownerDashboard][i])} key={i} className={`flex flex-col items-center p-2 cursor-pointer ${i===0 ? 'text-primary' : 'text-slate-400'}`}>
                            <span className="material-symbols-outlined">{icon}</span>
                            <span className="text-[10px] mt-1 font-medium">{['Matches', 'Estimates', 'Bookings', 'Profile'][i]}</span>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
}
