import { Search, Home, Users, Monitor, ShoppingBag, Video, MessageSquare, Bell } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onToast: (msg: string) => void;
}

export default function Navbar({ activeTab, setActiveTab, onToast }: NavbarProps) {
  const tabs = [
    { id: 'home', icon: Home, fill: true },
    { id: 'friends', icon: Users, badge: 3 },
    { id: 'watch', icon: Monitor },
    { id: 'market', icon: ShoppingBag },
    { id: 'reels', icon: Video },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-14 bg-bg/85 backdrop-blur-xl border-b border-border flex items-center px-4 gap-3">
      <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer" onClick={() => onToast('Welcome to Nexus Social!')}>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent2 font-display font-extrabold text-lg text-white shadow-[0_2px_12px_rgba(108,99,255,0.45)]">
          N
        </span>
        <span className="font-display font-extrabold text-2xl bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent tracking-tighter">
          Nexus
        </span>
      </div>

      <div className="flex-1 max-w-[320px] flex items-center gap-2 bg-surface2 border border-border rounded-full px-3.5 py-1.5 focus-within:border-accent transition-colors">
        <Search className="text-text-muted flex-shrink-0" size={14} strokeWidth={2.5} />
        <input 
          type="text" 
          placeholder="Search Nexus…" 
          className="bg-transparent border-none outline-none text-white font-sans text-[13.5px] w-full placeholder:text-text-muted"
          onKeyDown={(e) => e.key === 'Enter' && onToast(`Searching for "${(e.target as HTMLInputElement).value}"...`)}
        />
      </div>

      <div className="flex-1 flex justify-center gap-1">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center w-[92px] h-10 rounded-xl cursor-pointer transition-all border border-transparent relative group ${
              activeTab === tab.id ? 'text-accent' : 'text-text-muted hover:bg-surface2 hover:text-white'
            }`}
          >
            <tab.icon size={20} strokeWidth={2} fill={tab.fill && activeTab === tab.id ? 'currentColor' : 'none'} />
            {tab.badge && (
              <div className="absolute top-1.5 right-4 w-4 h-4 rounded-full bg-accent2 text-[9px] font-bold flex items-center justify-center text-white">
                {tab.badge}
              </div>
            )}
            {activeTab === tab.id && (
              <div className="absolute -bottom-[9px] left-[20%] right-[20%] h-0.5 bg-accent rounded-full" />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-surface2 border border-border flex items-center justify-center cursor-pointer text-text-muted hover:bg-surface3 hover:text-white transition-all relative" onClick={() => onToast('Opening messages...')}>
          <MessageSquare size={16} strokeWidth={2} />
          <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent2 border-2 border-bg" />
        </div>
        <div className="w-9 h-9 rounded-full bg-surface2 border border-border flex items-center justify-center cursor-pointer text-text-muted hover:bg-surface3 hover:text-white transition-all relative" onClick={() => onToast('Opening notifications...')}>
          <Bell size={16} strokeWidth={2} />
          <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent2 border-2 border-bg" />
        </div>
        <div className="w-9 h-9 rounded-full border-2 border-accent flex items-center justify-center font-display font-bold text-[13px] bg-gradient-to-br from-accent to-accent2 cursor-pointer flex-shrink-0" onClick={() => onToast('Opening profile settings...')}>
          AJ
        </div>
      </div>
    </nav>
  );
}
