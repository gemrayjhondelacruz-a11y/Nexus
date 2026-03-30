interface SidebarRightProps {
  onToast: (msg: string) => void;
}

export default function SidebarRight({ onToast }: SidebarRightProps) {
  const suggestions = [
    { name: 'Kai Park', sub: 'Followed by Maya, Jake +3', av: 'KP', color: 'av-teal' },
    { name: 'Nina Morales', sub: 'Photography · 82K followers', av: 'NM', color: 'av-orange' },
    { name: 'Ryan Chen', sub: 'Mutual: Liam Rodriguez', av: 'RC', color: 'av-blue' },
    { name: 'Aria Sharma', sub: 'Design · 141K followers', av: 'AS', color: 'av-red' },
  ];

  const trends = [
    { cat: 'Technology · Trending', tag: '#AIDesign', count: '48.3K posts' },
    { cat: 'Travel · Trending in PH', tag: '#SantoriniVibes', count: '12.1K posts' },
    { cat: 'Design · Trending', tag: '#FigmaDrops', count: '9.8K posts' },
    { cat: 'Food · Trending', tag: '#StreetFoodAsian', count: '22.4K posts' },
    { cat: 'Technology', tag: '#PythonVsRust', count: '6.7K posts' },
  ];

  const onlineFriends = [
    { name: 'Maya Anderson', av: 'MA', color: 'av-pink' },
    { name: 'Jake Kim', av: 'JK', color: 'av-blue' },
    { name: 'Zara Nguyen', av: 'ZN', color: 'av-orange' },
    { name: 'Kai Park', av: 'KP', color: 'av-teal' },
    { name: 'Sofia Lee', av: 'SL', color: 'av-green' },
  ];

  const events = [
    { month: 'APR', day: '5', title: 'Design Systems Summit', sub: 'Online · 2.4K going' },
    { month: 'APR', day: '12', title: 'BGC Food Festival', sub: 'Manila · 8.9K going' },
    { month: 'APR', day: '20', title: 'PH Dev Meetup 2026', sub: 'Makati · 1.1K going' },
  ];

  const marketPicks = [
    { name: 'Mech Keyboard', price: '₱2,800', emoji: '⌨️' },
    { name: 'Vintage Camera', price: '₱7,500', emoji: '📷' },
    { name: 'LED Desk Lamp', price: '₱1,200', emoji: '💡' },
    { name: 'Vintage Sneakers', price: '₱3,600', emoji: '👟' },
  ];

  return (
    <aside className="fixed top-14 right-0 bottom-0 w-[300px] p-5 overflow-y-auto border-l border-border hidden xl:flex flex-col scrollbar-hide">
      
      {/* Suggestions */}
      <div className="bg-surface border border-border rounded-2xl p-3.5 mb-3.5">
        <div className="font-display font-bold text-[13px] text-text-muted uppercase tracking-wider mb-3">Suggested for You</div>
        {suggestions.map((s, i) => (
          <div key={i} className="flex items-center gap-2.5 mb-3 last:mb-0">
            <div className={`w-9 h-9 rounded-full ${s.color} flex items-center justify-center font-display font-bold text-[13px] flex-shrink-0`}>
              {s.av}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold truncate">{s.name}</div>
              <div className="text-[11px] text-text-muted truncate mt-0.5">{s.sub}</div>
            </div>
            <button 
              className="px-3 py-1 rounded-full bg-accent/12 text-accent text-xs font-semibold border border-accent hover:bg-accent hover:text-white transition-all flex-shrink-0"
              onClick={() => onToast(`Following ${s.name}!`)}
            >
              Follow
            </button>
          </div>
        ))}
        <div className="text-center mt-2">
          <span className="text-xs text-accent font-semibold cursor-pointer hover:underline" onClick={() => onToast('Loading more suggestions...')}>
            See more suggestions →
          </span>
        </div>
      </div>

      {/* Trending */}
      <div className="bg-surface border border-border rounded-2xl p-3.5 mb-3.5">
        <div className="font-display font-bold text-[13px] text-text-muted uppercase tracking-wider mb-3">Trending Now</div>
        {trends.map((t, i) => (
          <div key={i} className="py-2 border-b border-border last:border-b-0 cursor-pointer group" onClick={() => onToast(`Exploring ${t.tag}!`)}>
            <div className="text-[10.5px] text-text-dim mb-0.5">{t.cat}</div>
            <div className="text-[13px] font-semibold group-hover:text-accent transition-colors">{t.tag}</div>
            <div className="text-[11px] text-text-muted mt-0.5">{t.count}</div>
          </div>
        ))}
      </div>

      {/* Online Friends */}
      <div className="bg-surface border border-border rounded-2xl p-3.5 mb-3.5">
        <div className="font-display font-bold text-[13px] text-text-muted uppercase tracking-wider mb-3">Active Now</div>
        <div className="flex flex-col gap-1.5">
          {onlineFriends.map((f, i) => (
            <div key={i} className="flex items-center gap-2.5 p-1.5 rounded-lg cursor-pointer hover:bg-surface2 transition-colors" onClick={() => onToast(`Opening chat with ${f.name}...`)}>
              <div className={`w-8 h-8 rounded-full ${f.color} relative flex items-center justify-center font-display font-bold text-[11px] flex-shrink-0`}>
                <div className="absolute bottom-0 right-0 w-[9px] h-[9px] rounded-full bg-accent3 border-2 border-surface" />
                {f.av}
              </div>
              <span className="text-[12.5px] font-medium">{f.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Events */}
      <div className="bg-surface border border-border rounded-2xl p-3.5 mb-3.5">
        <div className="font-display font-bold text-[13px] text-text-muted uppercase tracking-wider mb-3">Upcoming Events</div>
        {events.map((e, i) => (
          <div key={i} className="flex gap-2.5 mb-2.5 last:mb-0">
            <div className="w-[38px] text-center flex-shrink-0 bg-accent/12 rounded-lg py-1 border border-accent/20">
              <div className="text-[9.5px] text-accent font-bold uppercase">{e.month}</div>
              <div className="text-[17px] font-extrabold font-display text-white leading-tight">{e.day}</div>
            </div>
            <div>
              <div className="text-[12.5px] font-semibold">{e.title}</div>
              <div className="text-[11px] text-text-muted mt-0.5">{e.sub}</div>
              <div className="flex gap-1.5 mt-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20 cursor-pointer hover:bg-accent hover:text-white transition-all" onClick={() => onToast('Marked as going! 🎉')}>Going</span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-surface2 text-text-muted border border-border cursor-pointer hover:bg-surface3 hover:text-white transition-all" onClick={() => onToast('Marked as interested!')}>Interested</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Marketplace */}
      <div className="bg-surface border border-border rounded-2xl p-3.5 mb-3.5">
        <div className="font-display font-bold text-[13px] text-text-muted uppercase tracking-wider mb-3">Marketplace Picks</div>
        <div className="grid grid-cols-2 gap-2">
          {marketPicks.map((p, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-surface2 border border-border cursor-pointer hover:scale-[1.03] transition-transform" onClick={() => onToast(`Opening: ${p.name}`)}>
              <div className="h-[76px] bg-gradient-to-br from-surface2 to-surface3 flex items-center justify-center text-[28px] text-white/20">
                {p.emoji}
              </div>
              <div className="p-1.5 px-2">
                <div className="text-[12.5px] font-bold text-accent3">{p.price}</div>
                <div className="text-[11px] text-text-muted truncate mt-0.5">{p.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-2.5">
          <span className="text-xs text-accent font-semibold cursor-pointer hover:underline" onClick={() => onToast('Opening Marketplace...')}>
            Browse Marketplace →
          </span>
        </div>
      </div>

      <div className="text-[11px] text-text-dim leading-[1.8] px-0.5 pb-4">
        Privacy · Terms · Advertising · Cookies · More ·<br />Nexus © 2026
      </div>
    </aside>
  );
}
