import React, { useState } from 'react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

// === Project Milestones ===
export const ProjectMilestones: React.FC<Props> = ({ onNavigate }) => {
    const [showGallery, setShowGallery] = useState(false);
    
    // Simple Carousel Component
    const GalleryModal = () => (
        <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4">
            <button onClick={() => setShowGallery(false)} className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full h-[60vh] max-w-lg items-center no-scrollbar">
                {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAvcXYmhwaiL9BeEr4U8dqa9owe3fDfLM7VDiqk0U_MwD3d7cDX23HzkUbDioYTxbDwtKuSXWOEvThBFkBMSouMX-Af3oxqRqaKZH74jMO_Sx7kaV4kq6jXuBgne1uu5yiOgEnrrkGUkuxC4W4J0iRrgVKqG51m8F5DQ3hMBDVpT0HesrrodLZLh-1CwZwjVq5Ve7DoX4TYCaD057UQL6KOq7BeA0qD-XYHvNPSQXR5nNs7WWcPpiVBNoAWLb6BezRhVkmkzjBzVMY",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuArqsdUcwpqsmdw8vuXE0Xr27Vzb9OTBz5qAtT7VTmF3f-iA8eRT6lt5Fnlj45IX-Wd0oWthr2mFLo8eIoA30_nNjziUPVMrQmULIEIZKbQNojOoQ05aVBHghmPebesYjmYdi71nxXV8le-lTmJ9M1qhLBTYWpNVUzq2M6-izAQOeR2MunG3ikbrCGhSFx8_ELhs80fxGCgFylUGGqMkDrOTgTwmtkpo35X8makOn9xL5KiIECdoOvVuWfC1VPRXbZKT2nEFivUxnQ",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuC23CeAEsTrjC2cxi0nG-oR5iOQF7R_yixf0z0jv8Yh1ZUIEy7SgcSNghiitqbEogEJAzVIFpFgPpy-6dM4gudiuCL6Bloqknmz1xSEnskcGu98v5f2XvqLRqdLG_s-Zanwc2wcRbDGVeGrETWARsf4s7TOxgJdNtG9HNsNoKHzcbZJ2qr1UhXfQdy6OGGsdzqADXt5It67AmFPEYk1EixA-bNBuTlOCLCY9hzydphK0ec4r95rk43k0lL6uyVsb6BkUL4PfFJ1mQ8"
                ].map((src, idx) => (
                    <div key={idx} className="snap-center shrink-0 w-full h-full flex items-center justify-center">
                        <img src={src} className="max-h-full max-w-full rounded-lg object-contain shadow-2xl" loading="lazy" />
                    </div>
                ))}
            </div>
            <p className="text-white mt-4 text-sm font-medium">Swipe to view more • 1 of 3</p>
        </div>
    );

    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-white min-h-screen flex flex-col">
            {showGallery && <GalleryModal />}
            <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center p-4 justify-between max-w-md mx-auto">
                    <div className="flex items-center gap-3">
                        <span onClick={() => onNavigate(Screen.HomeownerDashboard)} className="material-symbols-outlined cursor-pointer hover:opacity-70">arrow_back_ios</span>
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Kitchen Leak Fix</h2>
                    </div>
                    <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors"><span className="material-symbols-outlined">info</span></button>
                </div>
            </header>
            <main className="flex-1 max-w-md mx-auto w-full pb-32">
                <section className="p-4">
                    <div className="flex items-center gap-4 bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16 border-2 border-primary" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEYxUyUJoHk0XqayA1LWSHQ8B2tyRqMu_V3okDsPS-xWF7Gfv6XTaiQUt5b248UldHhCBct44BdB3uUK_DVm3dzOql_GxxpQvBcbM90e4fUW8VBNaf4ovUWN5F78B4MB6N9YaZRxVRPI0H3dCgcs3g2u_wGLm863oFnI0y4RhN9iaT16O6mtuH5NtDTGj4QqZOHXEk43S2AKT_jZ3mcR1idiiTtTEOLiZTqGc70eXYlPeA7gZkR34dAy-6en9Tz7mk1wwnzIrX1Jg")'}}></div>
                        <div className="flex flex-col">
                            <p className="text-lg font-bold">Expert Plumbing Co.</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Lead Contractor • <span className="text-primary font-medium">Online</span></p>
                            <div className="flex items-center gap-1 mt-1">
                                <span className="material-symbols-outlined text-sm text-yellow-500 filled-icon">star</span><span className="text-sm font-medium">4.9 (124 reviews)</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-4 py-2">
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4 border border-primary/20">
                        <div className="flex justify-between items-end mb-2">
                            <div><p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Overall Progress</p><p className="text-2xl font-bold">33%</p></div>
                            <p className="text-sm text-primary font-semibold pb-1">1 of 3 Milestones</p>
                        </div>
                        <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{width: "33.33%"}}></div>
                        </div>
                        <div className="flex items-center gap-2 mt-4 text-xs text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined text-sm">verified_user</span><span>Secured by TradeTrust Escrow</span>
                        </div>
                    </div>
                </section>
                <section className="mt-4">
                    <div className="px-4 flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold">Project Milestones</h3>
                        <span className="text-xs bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">Active</span>
                    </div>
                    <div className="px-4">
                        {/* Milestone 1 */}
                        <div className="grid grid-cols-[40px_1fr] gap-x-4">
                            <div className="flex flex-col items-center">
                                <div className="z-10 bg-green-500 text-white rounded-full p-1 flex items-center justify-center"><span className="material-symbols-outlined text-[20px] font-bold">check</span></div>
                                <div className="w-0.5 bg-green-500 h-full"></div>
                            </div>
                            <div className="pb-8 pt-0.5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-base font-bold">Arrival & Assessment</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Contractor inspected the site and identified the main leak source.</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold"><span className="material-symbols-outlined text-[14px]">payments</span> Fund Released</span>
                                    <button 
                                        onClick={() => setShowGallery(true)}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold hover:bg-primary/20 transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-[14px]">image</span> View Proof of Work
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Milestone 2 */}
                        <div className="grid grid-cols-[40px_1fr] gap-x-4">
                            <div className="flex flex-col items-center">
                                <div className="z-10 bg-primary text-white rounded-full p-1 flex items-center justify-center animate-pulse"><span className="material-symbols-outlined text-[20px]">hourglass_empty</span></div>
                                <div className="w-0.5 bg-slate-200 dark:bg-slate-800 h-full border-dashed border-l-2"></div>
                            </div>
                            <div className="pb-8 pt-0.5">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-base font-bold text-primary">Parts Ordered</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Replacement copper piping and gaskets are on the way to the site.</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold"><span className="material-symbols-outlined text-[14px]">lock</span> Escrow Held in TradeTrust</span>
                                </div>
                                <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                    <span className="text-xs font-medium text-slate-500">Estimated delivery: Today, 4:00 PM</span>
                                    <span className="material-symbols-outlined text-slate-400 text-sm">local_shipping</span>
                                </div>
                            </div>
                        </div>
                        {/* Milestone 3 */}
                        <div onClick={() => onNavigate(Screen.FinalSignOff)} className="grid grid-cols-[40px_1fr] gap-x-4 cursor-pointer hover:opacity-80">
                             <div className="flex flex-col items-center">
                                <div className="z-10 bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full p-1 flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">lock</span></div>
                            </div>
                            <div className="pb-4 pt-0.5">
                                <h4 className="text-base font-bold text-slate-400 dark:text-slate-600">Final Installation</h4>
                                <p className="text-sm text-slate-400 dark:text-slate-600 mt-0.5">Assembly and quality testing of the new plumbing system.</p>
                                <div className="mt-3">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase">Scheduled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-6 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] max-w-md mx-auto">
                <div className="p-4 flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">Project Total</span>
                        <span className="text-xl font-bold">$450.00</span>
                    </div>
                    <button 
                        onClick={() => onNavigate(Screen.ContactForm)}
                        className="flex-1 bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-primary/20"
                    >
                        <span className="material-symbols-outlined filled-icon">chat</span> Chat with Pro
                    </button>
                </div>
            </footer>
        </div>
    );
}

// === Escrow Deposit ===
export const EscrowDeposit: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-sans text-gray-900 dark:text-white min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden max-w-md mx-auto border-x border-gray-200 dark:border-gray-800">
                <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800">
                    <div onClick={() => onNavigate(Screen.ContractorMatches)} className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center cursor-pointer hover:opacity-70"><span className="material-symbols-outlined">arrow_back_ios</span></div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Secure Escrow Deposit</h2>
                </div>
                <div className="flex flex-col p-4">
                    <div className="flex items-center gap-2 mb-4 bg-primary/10 px-3 py-2 rounded-lg border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-sm">plumbing</span>
                        <p className="text-primary text-xs font-semibold uppercase tracking-wider">Plumbing Service • Columbus, OH</p>
                    </div>
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-2">Payment Summary</h3>
                    <div className="bg-white dark:bg-[#1a2632] rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-800">
                        <div className="flex justify-between gap-x-6 py-2 border-b border-gray-100 dark:border-gray-700/50">
                            <p className="text-gray-500 dark:text-[#90adcb] text-sm font-normal leading-normal">Arrival Deposit (Due Now)</p>
                            <p className="text-sm font-bold leading-normal text-right">$50.00</p>
                        </div>
                        <div className="flex justify-between gap-x-6 py-2">
                            <div className="flex flex-col">
                                <p className="text-gray-500 dark:text-[#90adcb] text-sm font-normal leading-normal">Estimated Project Total</p>
                                <p className="text-[10px] text-gray-400 dark:text-[#506c86]">Paid upon job completion</p>
                            </div>
                            <p className="text-sm font-normal leading-normal text-right">$1,200 - $1,600</p>
                        </div>
                    </div>
                    <div className="py-6">
                        <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-primary/30 bg-primary/5 p-5 sm:flex-row sm:items-center">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">verified_user</span>
                                <div className="flex flex-col gap-1">
                                    <p className="text-base font-bold leading-tight">Escrow Protection</p>
                                    <p className="text-gray-600 dark:text-[#90adcb] text-sm font-normal leading-normal">Your $50 deposit is held in escrow and released only when the pro arrives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] pb-4">Express Checkout</h3>
                    <div className="flex flex-col gap-3 mb-8">
                        <button className="flex w-full items-center justify-center bg-black text-white rounded-lg h-12 font-medium hover:bg-gray-900 transition-colors">
                            <span className="mr-1">Pay with</span>
                            {/* Apple Pay-like Logo SVG */}
                            <svg className="h-6 w-auto" fill="currentColor" viewBox="0 0 45 18">
                                <path d="M37.51 3.51c-.65 0-1.18.53-1.18 1.18 0 .65.53 1.18 1.18 1.18s1.18-.53 1.18-1.18c0-.65-.53-1.18-1.18-1.18zM37.51 5.48c-.43 0-.78-.35-.78-.78s.35-.78.78-.78.78.35.78.78-.35.78-.78.78zM41.73 8.27l-1.31 3.23-1.32-3.23h-1.07l1.92 4.41-.45.99c-.19.42-.39.54-.73.54-.15 0-.32-.03-.41-.07v.88c.12.04.3.07.49.07.72 0 1.17-.37 1.55-1.25l2.42-5.56h-1.09z"></path>
                                <path d="M19.72 13.06c1.37 0 2.45-.48 3.14-1.24v1.07h.93V8.27h-.93v1.08c-.68-.79-1.78-1.25-3.14-1.25-2.28 0-4.14 1.83-4.14 4.48s1.86 4.48 4.14 4.48zm.27-7.98c1.86 0 3.21 1.48 3.21 3.5s-1.35 3.5-3.21 3.5c-1.85 0-3.21-1.48-3.21-3.5s1.36-3.5 3.21-3.5zM31.25 8.1c-1.37 0-2.43.51-3.11 1.3V8.27h-.93v8.52h.93v-3.32c.68.79 1.74 1.25 3.11 1.25 2.28 0 4.14-1.83 4.14-4.48S33.53 8.1 31.25 8.1zm-.27 7.98c-1.85 0-3.21-1.48-3.21-3.5s1.36-3.5 3.21-3.5 3.21 1.48 3.21 3.5-1.36 3.5-3.21 3.5zM6.29 8.27l-2.73 6.94H2.47L3.92 11H.89l-.65 1.63H.24v.2h1.12l1.24-3.11L1.44 13.5H.24v.2h2.2l3.85-8.52h-1.2l-1.42 3.66h.02l1.4-3.57zM11.64 12.87c.81 0 1.51-.31 1.94-.85v.77h.93V8.27h-.93v.85c-.43-.58-1.13-.85-1.94-.85-1.63 0-2.88 1.26-2.88 2.8s1.25 2.8 2.88 2.8zm.13-4.84c1.16 0 2.01.89 2.01 2.04s-.85 2.04-2.01 2.04-2.01-.89-2.01-2.04.85-2.04 2.01-2.04zM24.79 8.27h.93v4.66c0 1.25.75 1.83 1.76 1.83.95 0 1.63-.58 1.63-1.83V8.27h.93v4.7c0 1.79-1.1 2.68-2.56 2.68s-2.69-.89-2.69-2.68V8.27z"></path>
                            </svg>
                        </button>
                        <button class="flex w-full items-center justify-center bg-white text-gray-900 border border-gray-300 rounded-lg h-12 font-medium hover:bg-gray-50 transition-colors">
                           <img alt="Google Pay" className="h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqNKoqcAUNcz-d7p1T3uZDxjHxEj9UMLB7qbMyt30Q1BS8w1p690p-m0N4jPksNbDrhrcIelxFZT24rheqvamTA5GMPlblX3JKmAZ55XV78oMCGRKFaknpQf3y_Kmq3GqScUTenElMiela8MIFuzGWrsKGqjB9jPCRS1f38YBB69DHtKVOavX3kqFG-OMdKESSmZJdILY9Skk4Kez-6kLyOqk5TVOKJe8ENd6bpVRJmoaqyIpWRIFVb1TSLjbZyKxs1-6PcgRwONg" />
                        </button>
                    </div>
                    <div className="relative flex items-center py-4">
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-800"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-xs font-medium uppercase tracking-widest">Or pay with card</span>
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-800"></div>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-semibold text-gray-500 dark:text-[#90adcb] ml-1">Card Information</label>
                            <div className="relative">
                                <input className="w-full bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-800 rounded-lg h-12 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-gray-900 dark:text-white" placeholder="1234 5678 1234 5678" type="text" />
                                <div className="absolute right-3 top-3 flex gap-1"><span className="material-symbols-outlined text-gray-400 text-xl">credit_card</span></div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1 flex flex-col gap-1">
                                <input className="w-full bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-800 rounded-lg h-12 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-gray-900 dark:text-white" placeholder="MM / YY" type="text" />
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <input className="w-full bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-800 rounded-lg h-12 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-gray-900 dark:text-white" placeholder="CVC" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <input className="w-full bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-800 rounded-lg h-12 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-gray-900 dark:text-white" placeholder="ZIP Code" type="text" />
                        </div>
                    </div>
                    <button 
                        onClick={() => onNavigate(Screen.ProjectMilestones)}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl mt-8 shadow-lg shadow-primary/20 transition-colors flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                        <span className="material-symbols-outlined">lock</span> Confirm Escrow Deposit $50.00
                    </button>
                    <div className="mt-8 flex flex-col items-center gap-4 pb-12">
                        <div className="flex items-center gap-4 grayscale opacity-60">
                             <img alt="Stripe" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbSM6SEeH0y0O5AJcSWahzpKWX1TPVcJdKpXp9Edudzma5iRXeX0GGEFb9H-CSdwDOsTiUeLuOCt0INSh6Fj9btu_qbsO7bi7iKD_gY4I47uQcfXVpb3VutDnU4sOG8V-TMfY-OFr_szURG_UvDDQyD6keZHa3ItXAcxn652Eq-htpYZpYbbiwNVPTXU-bjruDpuYVuG_vNkD0fwqpl0bQoRAkqIpEweu0btAoR9qCPaHPqFrzT71PJdhkr9e6Qourl79p6uB2SVE" />
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-400 dark:text-[#506c86]">
                            <span className="material-symbols-outlined text-sm">security</span>
                            <p className="text-[10px] font-medium tracking-wide">SECURED BY BANK-LEVEL AES-256 ENCRYPTION</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// === Final Sign Off ===
export const FinalSignOff: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#0d141c] dark:text-slate-100 min-h-screen font-sans">
            <div className="sticky top-0 z-50 flex items-center bg-white dark:bg-[#1a2632] border-b border-slate-200 dark:border-slate-800 p-4 justify-between">
                <div onClick={() => onNavigate(Screen.ProjectMilestones)} className="flex size-10 shrink-0 items-center justify-start cursor-pointer hover:opacity-70"><span className="material-symbols-outlined text-[#0d141c] dark:text-white">arrow_back_ios</span></div>
                <h2 className="text-[#0d141c] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Final Sign-off</h2>
            </div>
            <div className="max-w-md mx-auto pb-12">
                <div className="@container">
                    <div className="@[480px]:px-4 @[480px]:py-3">
                        <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-200 dark:bg-slate-800 @[480px]:rounded-lg min-h-[180px] relative" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuASjZm_qJ2xVqaIE9NOb5tP_usZEvuY08kK-VbK9ti8JBMO4-JNGVUdMN1Q2EapCEeWNyb3NvUXtAUjzgxABNRR-e94ESaPJob6a6kSuQYgRmoURuWUAt_3FvaQcOj7K3CCct0hwLytaZQzrq1y_S-vy4QlibKobwaqT_Qwie5kgmvMzzFFbym33DeqV14D_GOPsi4XUytdTBJam5P9N8i0QL7N7WyxF4fHSSZWa0noSIylZSqJlxi9eOERKJPAMQub_oj4wGIQi1I")'}}>
                            <div className="flex p-4 flex-col">
                                <div className="bg-green-500 w-fit px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider mb-2">Verified Complete</div>
                                <p className="text-white tracking-light text-2xl font-bold leading-tight">Project Complete</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-[#0d141c] dark:text-white tracking-light text-xl font-bold leading-tight px-4 pt-6 pb-2">Financial Summary</h3>
                <div className="mx-4 mb-6 bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-4 space-y-3">
                        <div className="flex justify-between items-center"><p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Project Cost</p><p className="text-[#0d141c] dark:text-white text-sm font-bold">$4,500.00</p></div>
                        <div className="flex justify-between items-center"><p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Previous Payments</p><p className="text-[#0d141c] dark:text-white text-sm font-medium">-$3,250.00</p></div>
                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
                        <div className="flex justify-between items-center pt-1"><p className="text-primary text-sm font-bold">Escrow Release Amount</p><p className="text-primary text-lg font-extrabold">$1,250.00</p></div>
                        <div className="flex justify-between items-center pt-2">
                            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-slate-400">person</span><p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Lead Technician</p></div>
                            <p className="text-[#0d141c] dark:text-white text-xs font-semibold">Alex Rivera</p>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="flex items-center gap-2 mb-2"><h3 className="text-[#0d141c] dark:text-white text-lg font-bold tracking-[-0.015em]">Digital Sign-off</h3><span className="material-symbols-outlined text-primary text-sm">verified_user</span></div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-4">By signing below, you authorize the immediate release of held escrow funds and confirm all work is completed to satisfaction.</p>
                    <div className="relative bg-white dark:bg-[#1a2632] border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl h-40 flex items-center justify-center mb-2">
                        <span className="text-slate-300 dark:text-slate-600 font-medium">Sign Here</span>
                        <button className="absolute bottom-3 right-3 text-slate-400 text-xs font-medium uppercase tracking-wider flex items-center gap-1"><span className="material-symbols-outlined text-sm">refresh</span> Clear</button>
                    </div>
                </div>
                <div className="px-4 mt-8">
                    <h3 className="text-[#0d141c] dark:text-white text-lg font-bold tracking-[-0.015em] mb-4">Rate your Experience</h3>
                    <div className="space-y-6 bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between"><p className="text-sm font-semibold dark:text-slate-200">Work Quality</p><span className="text-xs text-slate-400 font-medium">Select stars</span></div>
                            <div className="flex gap-2">
                                <span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined text-slate-300 dark:text-slate-600">star</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold dark:text-slate-200">Punctuality</p>
                            <div className="flex gap-2"><span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined star-active">star</span></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold dark:text-slate-200">Cleanliness</p>
                            <div className="flex gap-2"><span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined star-active">star</span><span className="material-symbols-outlined text-slate-300 dark:text-slate-600">star</span><span className="material-symbols-outlined text-slate-300 dark:text-slate-600">star</span></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold dark:text-slate-200">Additional Comments</p>
                            <textarea className="w-full bg-slate-50 dark:bg-[#101922] border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary dark:text-white" placeholder="Tell us more about the technician's work..." rows={3}></textarea>
                        </div>
                    </div>
                </div>
                <div className="px-4 mt-10 space-y-4">
                    <button onClick={() => onNavigate(Screen.HomeownerDashboard)} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 active:scale-[0.98]"><span className="material-symbols-outlined">payments</span> Release Funds & Complete</button>
                    <button className="w-full flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#1a2632] text-slate-600 dark:text-slate-300 text-sm font-semibold"><span className="material-symbols-outlined text-primary">description</span> Download Final Project Log (PDF)</button>
                    <div className="flex items-center justify-center gap-2 opacity-60 pb-8"><span className="material-symbols-outlined text-xs">lock</span><p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">Secured by TradeTrust Immutable Ledger</p></div>
                </div>
            </div>
        </div>
    );
}
