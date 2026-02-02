import React, { useState } from 'react';
import { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export const ContactForm: React.FC<Props> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors: {[key: string]: string} = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.message) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
      }, 500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  if (isSubmitted) {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <div className="size-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_ease-out]">
                <span className="material-symbols-outlined text-4xl text-green-600 dark:text-green-400">check_circle</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs">We've received your inquiry and will get back to you shortly.</p>
            <button 
                onClick={() => onNavigate(Screen.HomeownerDashboard)} 
                className="w-full max-w-sm bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg"
            >
                Return Home
            </button>
        </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-sans flex flex-col">
      <header className="sticky top-0 z-50 bg-white dark:bg-[#1a2632] border-b border-slate-200 dark:border-slate-800 p-4 flex items-center justify-between">
        <div onClick={() => onNavigate(Screen.HomeownerDashboard)} className="flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
            <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back</span>
        </div>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Contact Support</h2>
        <div className="size-10"></div>
      </header>

      <main className="flex-1 max-w-md mx-auto w-full p-6">
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">How can we help?</h1>
            <p className="text-slate-500 dark:text-slate-400">Send us a message and we'll respond within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white dark:bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white transition-colors`}
                    placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white dark:bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white transition-colors`}
                    placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full bg-white dark:bg-slate-800 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white transition-colors resize-none`}
                    placeholder="Describe your issue..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
            >
                <span className="material-symbols-outlined">send</span>
                Send Message
            </button>
        </form>
      </main>
    </div>
  );
};
