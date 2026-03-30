import { Home, Search, Video, MessageSquare, Bell, Monitor, ShoppingBag, Users, Flag, Gamepad2, Palette, Leaf, Zap, Waves, Settings, HelpCircle, Plus } from 'lucide-react';

interface SidebarLeftProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  onToast: (msg: string) => void;
}

export default function SidebarLeft({ activeItem, setActiveItem, onToast }: SidebarLeftProps) {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home Feed', fill: true },
    { id: 'explore', icon: Search, label: 'Explore' },
    { id: 'reels', icon: Video, label: 'Reels' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', count: 5 },
    { id: 'notifications', icon: Bell, label: 'Notifications', count: 12 },
    { id: 'watch', icon: Monitor, label: 'Watch' },
    { id: 'market', icon: ShoppingBag, label: 'Marketplace' },
    { id: 'friends', icon: Users, label: 'Friends', count: 2, countColor: 'green' },
    { id: 'events', icon: Flag, label: 'Events' },
  ];

  const shortcuts = [
    { label: 'Gaming Lounge', emoji: '🎮', color: 'rgba(108,99,255,0.15)' },
    { label: 'Design Hub', emoji: '🎨', color: 'rgba(255,101,132,0.15)' },
    { label: 'Nature Lovers', emoji: '🌿', color: 'rgba(67,224,173,0.15)' },
    { label: 'Tech Talks', emoji: '⚡', color: 'rgba(240,180,41,0.15)' },
    { label: 'Travel Diaries', emoji: '🌊', color: 'rgba(56,189,248,0.15)' },
  ];

  return (
    <aside className="fixed top-14 left-0 bottom-0 w-[260px] p-4 overflow-y-auto border-r border-border flex flex-col gap-1 hidden lg:flex scrollbar-hide">
      <div 
        className="flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer hover:bg-surface2 transition-colors mb-2"
        onClick={() => onToast('Opening profile...')}
      >
        <div className="w-9 h-9 rounded-full av-purple flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
          AJ
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[13.5px] leading-tight">Alex Jordan</span>
          <span className="text-[11.5px] text-text-muted">@alexjordan</span>
        </div>
      </div>

      <button 
        className="flex items-center justify-center gap-2 m-1.5 p-2.5 rounded-xl bg-gradient-to-br from-accent to-[#8b5cf6] text-white font-semibold text-[13.5px] cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => onToast('Create Post opened!')}
      >
        <Plus size={16} strokeWidth={2.5} />
        Create Post
      </button>

      <div className="h-px bg-border my-2 mx-1.5" />

      {menuItems.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveItem(item.id)}
          className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer font-medium text-[13.5px] transition-all relative ${
            activeItem === item.id 
              ? 'bg-accent/12 text-accent' 
              : 'text-text-muted hover:bg-surface2 hover:text-white'
          }`}
        >
          <item.icon size={18} strokeWidth={2} fill={item.fill && activeItem === item.id ? 'currentColor' : 'none'} />
          <span>{item.label}</span>
          {item.count && (
            <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
              item.countColor === 'green' ? 'bg-accent3 text-bg' : 'bg-accent2 text-white'
            }`}>
              {item.count}
            </span>
          )}
        </div>
      ))}

      <div className="h-px bg-border my-2 mx-1.5" />
      <div className="text-[11px] font-bold text-text-dim uppercase tracking-[1.2px] px-3 pt-2 pb-1">
        Your Shortcuts
      </div>

      {shortcuts.map((shortcut, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2.5 p-2 rounded-xl cursor-pointer text-text-muted hover:bg-surface2 hover:text-white transition-colors text-[13px]"
          onClick={() => onToast(`Opening ${shortcut.label}...`)}
        >
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={{ background: shortcut.color }}>
            {shortcut.emoji}
          </div>
          <span>{shortcut.label}</span>
        </div>
      ))}

      <div className="h-px bg-border my-2 mx-1.5" />

      <div className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer text-text-muted hover:bg-surface2 hover:text-white transition-colors text-[13.5px] font-medium">
        <Settings size={18} strokeWidth={2} />
        <span>Settings</span>
      </div>
      <div className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer text-text-muted hover:bg-surface2 hover:text-white transition-colors text-[13.5px] font-medium">
        <HelpCircle size={18} strokeWidth={2} />
        <span>Help & Support</span>
      </div>
    </aside>
  );
}
