/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Feed from './components/Feed';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeSidebar, setActiveSidebar] = useState('home');
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    // Initial load animation or logic
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent/30 selection:text-white">
      {/* Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onToast={showToast} />

      <div className="flex pt-14 max-w-[1600px] mx-auto relative">
        {/* Left Sidebar */}
        <SidebarLeft activeItem={activeSidebar} setActiveItem={setActiveSidebar} onToast={showToast} />

        {/* Main Content (Feed) */}
        <Feed onToast={showToast} />

        {/* Right Sidebar */}
        <SidebarRight onToast={showToast} />
      </div>

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-2xl bg-surface border border-accent/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center gap-3 backdrop-blur-xl"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[13.5px] font-medium text-white tracking-wide">{toast}</span>
            <button 
              onClick={() => setToast(null)}
              className="ml-2 text-text-muted hover:text-white transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (Mobile) */}
      <button 
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-[#8b5cf6] shadow-[0_8px_24px_rgba(108,99,255,0.4)] flex items-center justify-center text-white lg:hidden z-50 active:scale-95 transition-transform"
        onClick={() => showToast('Post composer opened!')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
      </button>
    </div>
  );
}
