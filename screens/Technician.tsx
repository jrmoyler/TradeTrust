import React from 'react';

// === Technician Dashboard ===
export const TechnicianDashboard: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-[#0d141c] dark:text-slate-100 flex flex-col h-screen overflow-hidden">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="flex size-12 shrink-0 items-center">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqGZxDrOdomQM2Py8PzM92ScRkpQNcNg5FICWkfkOWGau-wW8ufTOayvGDJrAzimFfAz-D89LK6oLwPdmHAy4jkI9zuKt_7muvZOwsdhON-elJwFRaMOFTbHKoqdToDdCPW1ef6VC_pxOEh9Jh7VyaIwJO8rHxbtU4cyCcdLXenYbMbQHI7nLGyJAJblsqnfxfqP8vPrL2vsF-qstW33GxSh1dMKJWrbK3DQLoz6_kYj9QBos8aE4gGZ8cygb7MHADUnon8rbVky0")' }}></div>
        </div>
        <div className="flex-1 px-3">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Welcome back,</p>
          <h2 className="text-[#0d141c] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Alex Thompson</h2>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button className="relative flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white dark:bg-slate-800 shadow-sm text-[#0d141c] dark:text-white">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="p-4">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-md bg-white dark:bg-slate-900 overflow-hidden border border-slate-100 dark:border-slate-800">
            <div className="relative w-full h-48 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6SMKwYORpSP7p9UTdiz0auUAry0r0pM2WPukVZfULsVkSYmO8F2RWUjE0-DbMfEBZ3dkSaDMt753TexyRWauUykZWiW1iCOY250n3atyd-6kSXS5ZABNHoI9lDZHFn8V0SIPu3WhmO4fiI3YWVa3HQe87eXNy1YWEsRd9y-UGKFdbNLbXBm7WknwI7sUpd5dEFgoekgvYGIIsdfdTwYOiqDsk3dzMOzhCSGTAOY8sLIsolV5xT19GdwecBDwT3UGAbIMh7KdcXsc")' }}>
              <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Active Job</div>
            </div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 px-4">
              <div className="flex justify-between items-start">
                <p className="text-[#0d141c] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">HVAC Repair - Residential</p>
                <div className="flex items-center gap-1 text-primary">
                  <span className="material-symbols-outlined text-sm">timer</span>
                  <span className="font-mono font-bold">01:45:22</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400 text-lg">location_on</span>
                  <p className="text-[#49739c] dark:text-slate-400 text-sm font-normal">123 Maple St, North Hills</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm active:scale-95 transition-transform">
                    <span className="material-symbols-outlined text-sm">navigation</span>
                    <span>Start Navigation</span>
                  </button>
                  <button className="flex size-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 active:scale-95 transition-transform">
                    <span className="material-symbols-outlined">call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm active:bg-slate-50 dark:active:bg-slate-800">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">description</span>
              </div>
              <span className="text-sm font-bold dark:text-white">New Estimate</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm active:bg-slate-50 dark:active:bg-slate-800">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">upload_file</span>
              </div>
              <span className="text-sm font-bold dark:text-white">Upload Document</span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 pb-2 pt-6">
          <h2 className="text-[#0d141c] dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em]">Today's Schedule</h2>
          <button className="text-primary text-sm font-medium">View Calendar</button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4 bg-transparent px-4 min-h-[72px] py-2 justify-between border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="text-green-600 dark:text-green-400 flex items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/20 shrink-0 size-12">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] dark:text-white text-base font-bold leading-normal line-clamp-1">Sarah J.</p>
                <p className="text-[#49739c] dark:text-slate-400 text-xs font-medium leading-normal line-clamp-2">Completed • Annual Maintenance</p>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[#49739c] dark:text-slate-400 text-sm font-bold">09:00 AM</p>
              <p className="text-[10px] text-green-600 font-bold uppercase">Paid</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-primary/5 dark:bg-primary/10 px-4 min-h-[72px] py-2 justify-between border-b border-slate-100 dark:border-slate-800 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 shrink-0 size-12 shadow-sm">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0d141c] dark:text-white text-base font-bold leading-normal line-clamp-1">Mike R.</p>
                <p className="text-[#49739c] dark:text-slate-400 text-xs font-medium leading-normal line-clamp-2 italic">Next • System Install</p>
              </div>
            </div>
            <div className="shrink-0">
              <p className="text-primary text-sm font-bold">01:00 PM</p>
              <p className="text-[10px] text-primary font-bold uppercase text-right">Escrowed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full max-w-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-6 py-3 pb-8 flex justify-between items-center z-20">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined filled-icon">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">assignment</span>
          <span className="text-[10px] font-medium">Jobs</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">payments</span>
          <span className="text-[10px] font-medium">Earnings</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
};

// === Tech Live Tracker ===
export const TechLiveTracker: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-white font-sans flex flex-col h-screen overflow-hidden">
            <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50">
                <div className="flex size-12 shrink-0 items-center">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCu2V-n2EYsoEuKR-DwBrk8xZXsJsiJHkx7DJfID6mjchdrhoaI8EN8qQ0i1ldQHIZFPuSQ1fCqiDzlAvzPz12bR2WBrDjykWD_pHvL634S1LF0mpgv-4JumEQu8jLmQOLJ9Dr0x2N9tCupm2BAFWK4J_m8KpSKrbkESDRcw_LoGoOXhLHu2B4ajxOepIse2hhaw_ncKjXSAKqb8VvTyblv4mERzZfyc5JlFm0Q8dV5btEHygN-j_01LqWz6dgZF9gk6rivxpIXuqo")'}}></div>
                </div>
                <div className="flex-1 px-3">
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Live Tracker</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Active Status</p>
                </div>
                <div className="flex w-12 items-center justify-end">
                    <button className="relative flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-red-500"></span>
                    </button>
                </div>
            </div>
            <div className="relative flex-1 min-h-[40vh]">
                <div className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTK2vYeQsnzRlSeEDIVrdzZ2K4Si8K77Fc-iSq6JDf7DQigmr_c65MTyEHc5JpUtu9WKgOnVpj63_lC2BfPXECmotXz6_3zx8Rweq8Yw3d51gOQ73iXtKP_zUUMIm_6cT-1mBhNl1njjjTRE8F7XDDDJ1R-cZYQG64fX1iZ5UOHYCmNn3s8VIfYZv7lN4xo1U7-slrUpgbXpfl0uj49WZZGl6WRiEYXiddVvUH_TqFgi6RbKOhDt-6yTovQ4jzBlAljhO24Cub5PA")'}}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark/80"></div>
                </div>
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                    <div className="bg-background-dark/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700 flex items-center gap-2 pointer-events-auto">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase text-white">GPS Signal: Strong</span>
                    </div>
                </div>
                <div className="absolute bottom-4 right-4">
                    <button className="flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined">my_location</span>
                    </button>
                </div>
            </div>
            <div className="relative bg-background-light dark:bg-background-dark rounded-t-3xl -mt-6 z-10 px-4 pt-6 pb-24 shadow-[0_-10px_20px_rgba(0,0,0,0.2)]">
                <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-6"></div>
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Next Job</h3>
                    <span className="bg-primary/10 text-primary text-[11px] font-bold px-2.5 py-1 rounded-full border border-primary/20 uppercase tracking-wide">In Transit</span>
                </div>
                <div className="mb-6">
                    <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="relative">
                            <div className="w-full h-32 bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZ2rEAYvUA1FDpdOo9p5ZZNecwVzGcnVXNoHfp4SJK4cSsRPVj8I_sWbzcTfHaOrdg9TSSjehMv3X_436ynnKuiZrsJAVweB70SXoI1Ml_3z_ynkANJxitNk1zMHTEhUYXOH7mKCWLSUodsdGkdO5WpxZmKpJ2Gw_HmfgpG1vCqgoXq_vKVkeiOE2tjG57CrlDsUbpyo833Y4vtHNZ72JrkEz91nXmgXksrmOGBjVUFCWfN3zcEV3NQVeEJcCl3bThmlL-yX7RKEI")'}}></div>
                            <div className="absolute bottom-3 left-3 flex gap-2">
                                <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                                    <span className="material-symbols-outlined !text-[12px]">location_on</span> 0.8 MILES
                                </span>
                                <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1 uppercase">
                                    <span className="material-symbols-outlined !text-[12px]">sensors</span> Entering Geo-fence
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-1 p-4">
                            <div className="flex justify-between items-start">
                                <h4 className="text-slate-900 dark:text-white text-lg font-bold">Emergency Leak Repair</h4>
                                <span className="text-primary font-bold text-lg">$145.00</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal mb-3">123 Market St, San Francisco, CA</p>
                            <div className="flex gap-2">
                                <button className="flex-1 flex cursor-pointer items-center justify-center rounded-lg h-11 bg-primary text-white gap-2 font-bold transition-all active:scale-[0.98]">
                                    <span className="material-symbols-outlined !text-[20px]">directions</span>
                                    <span className="truncate">Navigate</span>
                                </button>
                                <button className="flex size-11 cursor-pointer items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold transition-all active:scale-[0.98]">
                                    <span className="material-symbols-outlined">call</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Jobs Done Today</p>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-black text-slate-900 dark:text-white leading-none">04</span>
                            <span className="material-symbols-outlined text-green-500 !text-[20px]">check_circle</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Escrow Balance</p>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-black text-primary leading-none">$1,240</span>
                            <span className="material-symbols-outlined text-primary/40 !text-[20px]">account_balance_wallet</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 z-50 max-w-md mx-auto">
                <div className="flex justify-around items-center h-16">
                    {['home', 'calendar_today', 'payments', 'person'].map((icon, i) => (
                        <button key={i} className={`flex flex-col items-center gap-1 ${i===0?'text-primary':'text-slate-400'}`}>
                            <span className={`material-symbols-outlined ${i===0?'filled-icon':''}`}>{icon}</span>
                            <span className="text-[10px] font-bold">{['Home', 'Schedule', 'Wallet', 'Profile'][i]}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

// === Tech Payments Hub ===
export const TechPaymentsHub: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen font-sans pb-24">
            <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center p-4 justify-between max-w-md mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="shrink-0">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyz7f1Or4DjjsGU2AwMv7qTtYVFAPx6QbbCS9a7GKkXymCa4HcfInaZXGxua2fwVNKtKZEuSCx3pIUiUfvARHZOeqKWmIYhH6CCcJkyFPoGKLhU6KF7b2fxn_KkJP0dxSh1hoUKYU-MWXLVlo1Y4h3cClSdeV8qLBtsYDagRAnwvO9NmuaMSY4PnmNRMpkuyo_dn0a45ImG-JgNRsxvfXw3bsdbkYrQfvnnAdlNneudhdJix6rGYNPAl6G8xS6D81clAh8Ds_sWjQ")'}}></div>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Welcome back,</p>
                            <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Alex Thompson</h2>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="relative flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            <span className="material-symbols-outlined text-[24px]">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
                        </button>
                    </div>
                </div>
            </nav>
            <main className="max-w-md mx-auto">
                <div className="p-4">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/50 rounded-xl p-4 flex items-start gap-3">
                        <div className="text-amber-600 dark:text-amber-400 mt-0.5">
                            <span className="material-symbols-outlined text-[20px]">warning</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-amber-900 dark:text-amber-100 text-sm font-semibold">License Verification Required</p>
                            <p className="text-amber-700 dark:text-amber-300 text-xs mt-1">Your General Liability Insurance expires in 4 days. Update now to avoid escrow holds.</p>
                        </div>
                        <button className="text-primary text-xs font-bold uppercase tracking-wider self-center">Update</button>
                    </div>
                </div>
                <div className="px-4 pb-4">
                    <div className="flex flex-col items-stretch justify-start rounded-xl md:flex-row shadow-lg bg-white dark:bg-[#182634] border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover relative group cursor-pointer" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5I9LAfcBvHfSJYmRICRvupYk_hgxSSDLNDWwr0uZVe1UmRhe1T03JpkDqGtn-HHaxOFuF7I11P98Tbrx6uqC1rDMjfeJIS2tIu4tGsx048Ivp-mE5rkc2ua57hDLw5CLzM-UNmWkAxb1ZIfB7WmR2vtYCB0KCUCK0roUPPxzffYb32Zkvxhk1-bG5vKVhWfyqQXvdqdbJWoYQ_SmBk5PDGfCplNabaq90rOVQrWJj6EeFLauAqbyM1gSysJuXiTwzt80yNRB9_VY")'}}>
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="size-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                    <span className="material-symbols-outlined text-white text-[32px]">photo_camera</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-5">
                            <div className="flex items-center gap-2">
                                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">Powered by AI</span>
                            </div>
                            <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">AI Job Estimator</p>
                            <p className="text-slate-500 dark:text-[#90adcb] text-sm leading-relaxed">Snap a photo of the site or materials for instant labor and cost estimates. Over 98% accuracy on standard residential trades.</p>
                            <div className="mt-2">
                                <button className="w-full flex cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold gap-2 shadow-md shadow-primary/20 active:scale-95 transition-transform">
                                    <span className="material-symbols-outlined text-[20px]">bolt</span>
                                    <span className="truncate">Quick AI Estimate</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between px-4 pt-4 pb-2">
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">Active Escrow Projects</h3>
                    <button className="text-primary text-sm font-medium">View All</button>
                </div>
                <div className="mx-4 mb-4 bg-white dark:bg-[#182634] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-start">
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-bold text-base uppercase tracking-tight">Kitchen Rewiring - Phase 2</h4>
                            <p className="text-slate-500 dark:text-[#90adcb] text-xs">Project ID: TT-88219 • Client: J. Miller</p>
                        </div>
                        <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-2 py-1 rounded border border-emerald-500/20 uppercase tracking-wider">Funded</span>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        <div className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between">
                            <div className="flex items-center gap-3">
                                <div className="text-emerald-500 flex items-center justify-center rounded-lg bg-emerald-500/10 shrink-0 size-10">
                                    <span className="material-symbols-outlined text-[24px]">check_circle</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-slate-900 dark:text-white text-sm font-semibold line-clamp-1">Deposit & Materials</p>
                                    <p className="text-slate-500 dark:text-[#90adcb] text-xs font-normal">Released to your account</p>
                                </div>
                            </div>
                            <div className="shrink-0 text-right">
                                <p className="text-slate-900 dark:text-white text-sm font-bold">$2,400.00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 px-4 min-h-[72px] py-3 justify-between bg-slate-50/50 dark:bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
                                    <span className="material-symbols-outlined text-[24px]">hourglass_empty</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-slate-900 dark:text-white text-sm font-semibold line-clamp-1">Rough-in Inspection</p>
                                    <p className="text-slate-500 dark:text-[#90adcb] text-xs font-normal">Pending client approval</p>
                                </div>
                            </div>
                            <div className="shrink-0 text-right">
                                <p className="text-slate-900 dark:text-white text-sm font-bold">$1,850.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 p-4 bg-slate-50 dark:bg-slate-900/50">
                        <div className="flex justify-between items-center">
                            <p className="text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Project Completion</p>
                            <p className="text-primary text-sm font-bold">65%</p>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-[#314d68] rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(13,127,242,0.4)]" style={{width: "65%"}}></div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-[#101922]/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-3 z-50">
                <div className="max-w-md mx-auto flex justify-between items-center">
                    <button className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-[24px]">home</span>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
                        <span className="material-symbols-outlined text-[24px]">handyman</span>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Jobs</span>
                    </button>
                    <div className="relative -mt-10">
                        <button className="size-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/40 border-4 border-white dark:border-[#101922]">
                            <span className="material-symbols-outlined text-[28px]">add</span>
                        </button>
                    </div>
                    <button className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
                        <span className="material-symbols-outlined text-[24px]">payments</span>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Escrow</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
                        <span className="material-symbols-outlined text-[24px]">settings</span>
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
