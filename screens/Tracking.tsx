import React from 'react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

// === Track My Tech (Sheet View) ===
export const TrackMyTechSheet: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans h-screen flex flex-col relative overflow-hidden">
      <header className="bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 z-50">
        <div className="flex items-center p-4 pb-4 justify-between">
          <div onClick={() => onNavigate(Screen.HomeownerDashboard)} className="text-slate-900 dark:text-slate-100 flex size-10 items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Track My Tech</h2>
          <div className="size-10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">info</span>
          </div>
        </div>
      </header>
      <main className="flex-1 relative flex flex-col">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAE6hlaw41N8_s0FE6c7dfi0dGsSkIwzpw--3ZS9zk5F_O4kIg3OmYV2peYFb2hzMN7Mmj74tO0i6OIoNyJofaQR5SrbujTQ01NuE9Iq-hZNvBav72zTSfrAtQJv7cehh8e7qFFiFGH6wOrv681inKXB8RL6NElh5WMb-tL2H1DSEiORRbc4stZtt3e3CahrYwXmsAMyhJB6g5sgttHdir79jP3ftQUOdkf2_HMnqPZ9U0eO1vQMuBcanW77xZ5ZHAkSyjebb9rb1A")' }}>
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {['add', 'remove', 'my_location'].map((icon, i) => (
              <button key={i} className={`flex size-10 items-center justify-center rounded-lg bg-white dark:bg-slate-800 shadow-lg ${icon === 'my_location' ? 'text-primary' : 'text-slate-700 dark:text-slate-200'} active:scale-95 transition-transform`}>
                <span className="material-symbols-outlined">{icon}</span>
              </button>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
              <div className="bg-primary text-white p-2 rounded-full shadow-xl border-2 border-white">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 p-4">
          <label className="flex flex-col w-full h-12">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-md bg-white dark:bg-slate-800">
              <div className="text-slate-400 flex border-none items-center justify-center pl-4 rounded-l-xl">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-slate-400 px-4 pl-2 text-base font-normal" placeholder="Current address: 123 Scioto Mile, Columbus" readOnly />
            </div>
          </label>
        </div>
        <div className="mt-auto relative z-20">
          <div className="flex flex-col items-stretch bg-white dark:bg-slate-900 rounded-t-[2rem] shadow-[0_-8px_30px_rgb(0,0,0,0.12)] border-t border-slate-100 dark:border-slate-800">
            <button className="flex h-8 w-full items-center justify-center cursor-pointer" onClick={() => onNavigate(Screen.TrackMyTechProgress)}>
              <div className="h-1.5 w-12 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </button>
            <div className="px-6 pb-2">
              <div className="flex flex-col gap-4">
                <div className="flex gap-5 items-center">
                  <div className="relative">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border-4 border-slate-50 dark:border-slate-800 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtg3NMOnC7VPnGyf2Y2AMccgdW_KeShkfIg2-lan8bkkICVPqD6l3_UutrLvfWatep5RAMT_zy5EwmzYgJJqTH8a8YhOo8qVl0Fp5l9Lx3ydqUFOAZ8NVp9BwYkwb3_lAdazuypb3fPM_jw7TDCJcqJWg5DYtq0EB-Du-HYpswkpSPQeDhvvDYFBfy2wtOSrtGzEzU1wXi_c0rnPYET5W-NS4HwouO9W3xFIiJWx1TRuBQgsnNFa6JIqmP9KdxlZ33CGjd6T7qz_g")' }}></div>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 h-5 w-5 rounded-full border-2 border-white dark:border-slate-900"></div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Marcus J.</p>
                      <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">IN TRANSIT</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">HVAC Specialist • <span className="text-orange-500 font-bold">★ 4.9</span> (120+ reviews)</p>
                    <p className="text-primary text-lg font-bold mt-1">Arriving in 8 mins</p>
                  </div>
                </div>
                <div className="flex w-full gap-3">
                  <button onClick={() => onNavigate(Screen.ContactForm)} className="flex items-center justify-center gap-2 rounded-xl h-12 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold flex-1 active:scale-95 transition-transform hover:bg-slate-200 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-lg">chat_bubble</span>
                    <span>Message</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-xl h-12 bg-primary text-white text-sm font-bold flex-1 active:scale-95 transition-transform hover:bg-primary/90">
                    <span className="material-symbols-outlined text-lg">call</span>
                    <span>Call</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-4">
                <div className="flex gap-3">
                  <div className="mt-1 bg-primary/20 text-primary p-2 rounded-lg h-fit">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-slate-900 dark:text-white text-base font-bold leading-tight">Show-Up Guarantee</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-normal">TradeTrust Verified: This appointment is backed by our $1,000 reliability promise.</p>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Status: Protection Active</span>
                  <label className="relative flex h-[28px] w-[48px] cursor-pointer items-center rounded-full border-none bg-primary p-1">
                    <div className="h-full w-[20px] ml-auto rounded-full bg-white shadow-md"></div>
                    <input defaultChecked className="invisible absolute" type="checkbox" />
                  </label>
                </div>
              </div>
            </div>
            <div className="h-8 bg-white dark:bg-slate-900"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

// === Track My Tech (Progress View) ===
export const TrackMyTechProgress: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white font-sans h-screen flex flex-col relative overflow-hidden border-x border-white/5">
      <div className="flex items-center bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between sticky top-0 z-50">
        <div onClick={() => onNavigate(Screen.HomeownerDashboard)} className="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer hover:opacity-80">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Track My Tech</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-12 bg-transparent text-white p-0">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="relative w-full aspect-square bg-[#1a2634]">
          <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0PzAz4FEaPkY5FufEnoNLza-NdbDy8jcz-TKB1g6-JMIU7_hdro-F8gnVJrvc7G2zv2Vo0RAldMmW8F8CJDJFgbyIM5_8bd9gZ_34PqUNKyFM1oaI_-DwhUZihas9GdgKusm_jhPbaaASvryd3JIn8LAQd596MgroeLWtPX0prEv39xBmjcJAHTV-XXXfWZakPoel3CitE4bjCatkuBRGjdcaoL2jfLtT3Y4y--u1MUFrhzSe9-HEAmrFHnpi62NdNtdWsoxl9Nk')" }}></div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] z-10">
            <div className="bg-primary/90 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-white animate-pulse">location_on</span>
              <p className="text-white text-sm font-bold tracking-wide">Mike is within 1 mile!</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex items-center justify-center">
              <div className="absolute h-16 w-16 bg-primary/20 rounded-full animate-ping"></div>
              <div className="relative h-10 w-10 bg-primary border-2 border-white rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-lg">electric_bolt</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative -mt-6 bg-background-dark rounded-t-[2rem] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex h-8 w-full items-center justify-center cursor-pointer" onClick={() => onNavigate(Screen.TrackMyTechSheet)}>
            <div className="h-1.5 w-12 rounded-full bg-white/20"></div>
          </div>
          <div className="px-6 pb-4">
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">4 mins away</h3>
                  <p className="text-[#90adcb] text-sm">Estimated arrival at 2:15 PM</p>
                </div>
                <div className="bg-primary/20 px-3 py-1 rounded-full">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">In Transit</span>
                </div>
              </div>
              <div className="rounded-full bg-[#1e2e3d] h-3 overflow-hidden mt-2">
                <div className="h-full rounded-full bg-primary" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl p-3 mb-8">
              <span className="material-symbols-outlined text-green-500 text-sm">shield</span>
              <p className="text-green-400 text-xs font-medium">Deposit Protected: Your $200 is held safely in escrow</p>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <div className="relative">
                <div className="size-20 rounded-2xl bg-center bg-cover border-2 border-primary/30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOtnTv311CaGWdRDKW3kdzSXyTxuuC2yamaclrxJ56fRey80Fgd6BLiG5iuInolVliMo6BTr7lNMJ8AdFqAemDUDh5I7J5FQJ0XAUG--4tj2A9_lYC7UpjNUf2h6IXfdyyFxpIBZqZk3rlKGTjCaFzOZNvS-ZaxtseZnpkl2gqHXpQyczsIPW2hOSLETpxsu3k2zZvBGIQ3WLycPVX7eRE_1p9xOnox-AvKYv93M99dNmqylsNZv4chxTMzbO9E_wELjbxE6h6d9k')" }}></div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-white size-7 rounded-full flex items-center justify-center border-2 border-background-dark">
                  <span className="material-symbols-outlined text-[16px] font-bold">verified</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-white text-lg font-bold">Mike Harrison</h4>
                <p className="text-[#90adcb] text-sm leading-relaxed mt-1">Master Electrician with 12+ years experience. Specializes in smart home integration and panel upgrades.</p>
              </div>
            </div>
            <div className="mb-8">
              <p className="text-white text-xs font-bold uppercase tracking-widest mb-3 text-white/50">Verified Skills</p>
              <div className="flex flex-wrap gap-2">
                {[
                    {icon: "bolt", label: "Electrical"},
                    {icon: "hvac", label: "HVAC Certified"},
                    {icon: "verified_user", label: "TradeTrust Pro"}
                ].map((s,i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-primary">{s.icon}</span> {s.label}
                    </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button onClick={() => onNavigate(Screen.LaborPool)} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors">View Full Profile</button>
              <div className="flex gap-3">
                <button onClick={() => onNavigate(Screen.ContactForm)} className="flex-1 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 rounded-xl border border-white/10 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-xl">chat_bubble</span> Message
                </button>
                <button className="flex-1 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 rounded-xl border border-white/10 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-xl">call</span> Call
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background-dark to-transparent pointer-events-none">
          <div className="flex justify-center items-center gap-2 opacity-40">
            <span className="material-symbols-outlined text-sm">location_city</span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Columbus Property Group</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// === Nearby Techs ===
export const NearbyTechs: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-white relative flex h-screen w-full flex-col overflow-hidden">
            <header className="z-20 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md p-4 justify-between border-b border-slate-200 dark:border-slate-800">
                <div onClick={() => onNavigate(Screen.HomeownerDashboard)} className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                    <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
                </div>
                <div className="flex-1 px-2">
                    <h2 className="text-lg font-bold leading-tight tracking-tight">Nearby Available Techs</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Columbus, OH • Live Updates</p>
                </div>
                <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-2xl">tune</span>
                </button>
            </header>
            <main className="relative flex-1 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACRUUoTyh68j-mX9zd2R5QMHiOdpjrM5TfjRmNLD0u3jQeb5d0y15-Lt0XEFM8hZA6GXhpKXtVCfRd_jnOOU0Weu2ciScGjhgK3lEXGU05oRNHJqFeRJH20tEkIgMQVFGolnrAaW1rOuJjUHlcknfTvRRfxRpmIUt3ZVMKqLPXGeE1RR4cqITgqpfg1OcBpnSEtetHqw94yLsHiScjp-3KCmx6_Bufebtb1mo0CXT8zgu6J8ibmw_3Mw074BWyfUQQd5YMJxRiOwQ")'}}></div>
                    <div className="absolute top-1/3 left-1/4">
                         <div className="relative flex items-center justify-center">
                            <div className="absolute h-8 w-8 animate-ping rounded-full bg-primary/40"></div>
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/40 border-2 border-white">
                                <span className="material-symbols-outlined text-white text-sm filled-icon">home_repair_service</span>
                            </div>
                         </div>
                    </div>
                    {/* More markers simulated by position */}
                </div>
                <div className="absolute top-4 left-4 right-4 z-10">
                    <div className="flex w-full items-center rounded-xl bg-white/95 dark:bg-background-dark/95 backdrop-blur shadow-xl border border-slate-200 dark:border-slate-800 h-12 px-4">
                        <span className="material-symbols-outlined text-slate-400 mr-3">search</span>
                        <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium placeholder:text-slate-400" placeholder="Search Columbus area..." />
                        <span className="material-symbols-outlined text-primary">my_location</span>
                    </div>
                </div>
                <div className="absolute right-4 bottom-[280px] z-10 flex flex-col gap-3">
                    <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-background-dark shadow-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white">
                        <span className="material-symbols-outlined">layers</span>
                    </button>
                    <div className="flex flex-col rounded-xl bg-white dark:bg-background-dark shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <button className="flex h-12 w-12 items-center justify-center border-b border-slate-100 dark:border-slate-800 text-slate-700 dark:text-white"><span className="material-symbols-outlined">add</span></button>
                        <button className="flex h-12 w-12 items-center justify-center text-slate-700 dark:text-white"><span className="material-symbols-outlined">remove</span></button>
                    </div>
                    <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/40 text-white"><span className="material-symbols-outlined">explore</span></button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-10 pb-6 pt-10 bg-gradient-to-t from-background-dark/80 via-background-dark/40 to-transparent">
                    <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 gap-4">
                        {[
                            {name: "Columbus HVAC Pros", rate: "98%", dist: "1.2 mi", rev: "4.9 (124 reviews)", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAejYHdCjb71KFlzS1Xyw3capsSOCyiXNUmtL7gmnWbvDWGw8-ykf8jmTJnt5z04ZirxJu05FJUhzfoqdUjSFe5axDcS-oBmNOIYNgz6qgLW6u3VIUMXEjMatIZwF8nARefAPi5-8HDPyNtz0OBF4a9zwiwMZDrnMvSC0tpPNyo5cGA_gyJ22GinUH4q-kboMrc9d6dIxzUzzjE4PmghIkNIfRl8OISN0WmAgcMjVnQhphdLFaebnH911k7rntmGhYi79OItolB9b8"},
                            {name: "Elite Electricians", rate: "95%", dist: "2.8 mi", rev: "4.7 (89 reviews)", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjEi57Q-2mfWk1GC56Q7G9DAOK81NT0KOMPBLm5_4-PjbRYSgt4CzOvKamxkIuXEVKPkHf_G03iNc4LDPIAchyNDgLLqpnssKg2c08HpxbVhnqSn57aoxZsOZKCts58GVH7zS7UhKibvIKOLx_KtfmWNZ_6EU0BMLAsywWMTlOodEmE5rVSpS-Yc7_TohTkEkPGdJMgSiqNcB_fr01jhyi3CwXobV70ffGWwsauFI-BNWEiIge2b9iTC5SdxiDozgY29EjzgEb3KE"},
                             {name: "Precision Plumbing", rate: "99%", dist: "0.5 mi", rev: "5.0 (212 reviews)", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvRVzRk1yk4OirQnF2sTUbnUDtyQwtl_ex1PUlPd8Z2O0Ir-R4CXb9eBqUyqLNlvZmEP2JlI_GnWdsfw9W1uy359-tT1bV7tW-Ok_ZPVwZ9ze3Wd9lyWbLP95xm8QS1vu8sPY8EGz8jMMz41-NzFCvd9i97acaZnctoEudeGFjMuhKsKj_Sze08bfKjAc1H0uIR7SMoGGysKcDhuSjWhf96YWgDcpiib00NtpBoe8PEAn9YmGFPeZOjZzmLHBucxVySk7tSE6VUPw"}
                        ].map((c, i) => (
                             <div key={i} className="flex-none w-[280px] snap-center rounded-2xl bg-white dark:bg-[#1c2a38] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-transform active:scale-95">
                                <div className="p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="h-12 w-12 rounded-lg bg-cover bg-center border border-slate-100 dark:border-slate-700" style={{backgroundImage: `url("${c.img}")`}}></div>
                                        <div className="flex-1 overflow-hidden">
                                            <div className="flex items-center gap-1">
                                                <h3 className="font-bold text-sm truncate uppercase tracking-tight">{c.name}</h3>
                                                <span className="material-symbols-outlined text-primary text-[16px] filled-icon">verified</span>
                                            </div>
                                            <div className="flex items-center gap-1 mt-0.5">
                                                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/20 text-green-500"><span className="material-symbols-outlined text-[12px] font-bold">trending_up</span></div>
                                                <span className="text-xs font-semibold text-green-500 uppercase">{c.rate} Show-Up Rate</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                                        <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">distance</span><span>{c.dist}</span></div>
                                        <div className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">star</span><span>{c.rev}</span></div>
                                    </div>
                                    <button 
                                        onClick={() => onNavigate(Screen.AIQuoteEstimator)}
                                        className="w-full h-11 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-primary/20"
                                    >
                                        <span className="material-symbols-outlined text-sm">event_available</span> Book for $50 Deposit
                                    </button>
                                </div>
                            </div>
                        ))}
                         <div className="flex-none w-4"></div>
                    </div>
                </div>
            </main>
            <nav className="z-20 bg-white/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 pb-8 pt-2">
                <div className="flex justify-around items-center px-4">
                    <button onClick={() => onNavigate(Screen.NearbyTechs)} className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined text-[28px] filled-icon">map</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Map</span>
                    </button>
                    <button onClick={() => onNavigate(Screen.AIQuoteEstimator)} className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined text-[28px]">request_quote</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Estimates</span>
                    </button>
                    <button onClick={() => onNavigate(Screen.ProjectMilestones)} className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined text-[28px]">calendar_today</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Bookings</span>
                    </button>
                    <button onClick={() => onNavigate(Screen.HomeownerDashboard)} className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined text-[28px]">person</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
