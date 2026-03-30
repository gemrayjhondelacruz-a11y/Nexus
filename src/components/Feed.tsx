import { Camera, Smile, MapPin, Radio, Plus, Play } from 'lucide-react';
import PostCard from './PostCard';

interface FeedProps {
  onToast: (msg: string) => void;
}

export default function Feed({ onToast }: FeedProps) {
  const stories = [
    { name: 'Maya', av: 'M', color: 'av-pink', emoji: '🌸' },
    { name: 'Jake', av: 'J', color: 'av-blue', emoji: '🏄' },
    { name: 'Sofia', av: 'S', color: 'av-orange', emoji: '🍕' },
    { name: 'Liam', av: 'L', color: 'av-green', emoji: '🎸' },
    { name: 'Zara', av: 'Z', color: 'av-orange', emoji: '✈️' },
    { name: 'Chris', av: 'C', color: 'av-purple', emoji: '🎮' },
  ];

  const reels = [
    { author: '@wanderlust', views: '2.4M views', emoji: '🌅' },
    { author: '@chefmike', views: '891K views', emoji: '🍜' },
    { author: '@fitlife', views: '3.1M views', emoji: '💪' },
    { author: '@techdrops', views: '568K views', emoji: '⚡' },
    { author: '@petlovers', views: '1.7M views', emoji: '🐶' },
  ];

  const posts = [
    {
      author: 'Maya Anderson',
      avatar: 'MA',
      avatarColor: 'av-pink',
      time: '2 hours ago',
      location: 'Santorini, Greece',
      verified: true,
      text: "Golden hour hits different when you're watching the sun melt into the Aegean Sea 🌊✨",
      hashtags: ['Santorini', 'GoldenHour', 'TravelDiaries'],
      mentions: ['TravelEurope'],
      images: ['🌅', '🏛️'],
      stats: { reactions: '4,829', comments: '312', shares: '89' },
    },
    {
      author: 'Liam Rodriguez',
      avatar: 'LR',
      avatarColor: 'av-green',
      time: '4 hours ago',
      text: "Hot take: The best programming language is the one your team already knows. Fight me. 🔥 Actually curious — drop a vote:",
      stats: { reactions: '1,204', comments: '87', shares: '45' },
      poll: true,
    },
    {
      author: 'Zara Nguyen',
      avatar: 'ZN',
      avatarColor: 'av-red',
      time: 'Live now',
      text: "Street food tour in Ho Chi Minh City 🍜🇻🇳 Come eat with me!",
      stats: { reactions: '3,241', comments: '0', shares: '0' },
      isLive: true,
    },
    {
      author: 'Chris Wang',
      avatar: 'CW',
      avatarColor: 'av-blue',
      time: 'Yesterday at 11:30 PM',
      verified: true,
      text: "New UI kit just dropped — 200+ components, dark mode first, fully accessible 🎨",
      hashtags: ['UIDesign', 'Figma', 'DesignSystems', 'OpenSource'],
      images: ['🎨', '📱', '💻'],
      stats: { reactions: '6,102', comments: '429', shares: '1.2K' },
    },
  ];

  return (
    <main className="flex-1 ml-0 lg:ml-[260px] xl:mr-[300px] flex flex-col items-center min-h-screen">
      <div className="w-full max-w-[620px] px-4 py-5 pb-10">
        
        {/* Stories */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="font-display font-bold text-[15px]">Stories & Status</div>
          <div className="text-[12.5px] text-accent font-semibold cursor-pointer hover:underline" onClick={() => onToast('See all stories...')}>See all</div>
        </div>
        <div className="flex gap-2.5 overflow-x-auto pb-1 mb-5 scrollbar-hide">
          <div className="flex-shrink-0 w-24 h-40 rounded-2xl bg-surface2 border border-border flex flex-col items-center justify-end pb-3.5 cursor-pointer hover:scale-[1.03] transition-transform">
            <div className="flex-1 w-full bg-surface3 flex items-center justify-center text-[28px] text-accent">＋</div>
            <div className="text-[11px] font-semibold text-white mt-2 text-center px-1.5">Add Story</div>
          </div>
          {stories.map((s, i) => (
            <div key={i} className="flex-shrink-0 w-24 h-40 rounded-2xl bg-surface2 border border-border relative overflow-hidden cursor-pointer hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all group" onClick={() => onToast(`Viewing ${s.name}'s story...`)}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-accent/20 flex items-center justify-center text-6xl text-white/20">
                {s.emoji}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className={`absolute top-2.5 left-2.5 w-[34px] h-[34px] rounded-full border-[3px] border-accent2 ${s.color} flex items-center justify-center font-display font-bold text-[11px]`}>
                {s.av}
              </div>
              <div className="absolute bottom-2.5 left-0 right-0 text-center text-[11px] font-semibold text-white px-1">{s.name}</div>
            </div>
          ))}
        </div>

        {/* Create Post */}
        <div className="bg-surface border border-border rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full av-purple flex items-center justify-center font-display font-bold text-[13px] flex-shrink-0">AJ</div>
            <div 
              className="flex-1 bg-surface2 border border-border rounded-full px-4.5 py-2.5 text-text-muted font-sans text-[13.5px] cursor-pointer hover:border-border-hover hover:text-white transition-all"
              onClick={() => onToast('Post composer opened!')}
            >
              What's happening, Alex?
            </div>
          </div>
          <div className="flex gap-1">
            {[
              { icon: Camera, label: 'Photo/Video', emoji: '📷' },
              { icon: Smile, label: 'Feeling', emoji: '😊' },
              { icon: MapPin, label: 'Check In', emoji: '📍' },
              { icon: Radio, label: 'Go Live', emoji: '🔴' }
            ].map((action, i) => (
              <div 
                key={i} 
                className="flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg cursor-pointer text-[12.5px] font-medium text-text-muted hover:bg-surface2 hover:text-white transition-all"
                onClick={() => onToast(`${action.label} ready!`)}
              >
                <span className="text-base">{action.emoji}</span>
                <span className="hidden sm:inline">{action.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reels */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="font-display font-bold text-[15px]">Reels for You</div>
          <div className="text-[12.5px] text-accent font-semibold cursor-pointer hover:underline" onClick={() => onToast('Browse all reels...')}>Browse all</div>
        </div>
        <div className="flex gap-2.5 overflow-x-auto pb-1 mb-5 scrollbar-hide">
          {reels.map((r, i) => (
            <div key={i} className="flex-shrink-0 w-[110px] h-48 rounded-2xl bg-surface2 border border-border relative overflow-hidden cursor-pointer hover:scale-[1.04] transition-transform group" onClick={() => onToast(`Playing reel by ${r.author}!`)}>
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-white/15">{r.emoji}</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/15 border-2 border-white/50 flex items-center justify-center text-sm">
                <Play size={14} fill="currentColor" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2.5">
                <div className="text-[11px] font-semibold text-white">{r.author}</div>
                <div className="text-[10px] text-white/70 mt-0.5">{r.views}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Posts */}
        {posts.map((post, i) => (
          <div key={i}>
            {post.poll ? (
              <div className="bg-surface border border-border rounded-2xl mb-4 overflow-hidden hover:border-border-hover transition-colors">
                <div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
                  <div className={`w-10 h-10 rounded-full ${post.avatarColor} flex items-center justify-center font-display font-bold text-sm flex-shrink-0 cursor-pointer`}>{post.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-[13.5px] cursor-pointer">{post.author}</div>
                    <div className="text-[11.5px] text-text-muted mt-0.5">Tech Talks Group · {post.time}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-text-muted hover:bg-surface2 hover:text-white transition-all">
                    <MoreHorizontal size={18} />
                  </div>
                </div>
                <div className="px-4 pb-3 text-sm leading-[1.65] text-white">{post.text}</div>
                <div className="px-4 pb-4 space-y-2">
                  {[
                    { emoji: '🐍', label: 'Python', pct: '65%' },
                    { emoji: '☕', label: 'JavaScript', pct: '21%' },
                    { emoji: '🦀', label: 'Rust', pct: '9%' },
                    { emoji: '🔷', label: 'TypeScript', pct: '5%' }
                  ].map((opt, idx) => (
                    <div 
                      key={idx} 
                      className="bg-surface2 border border-border rounded-xl p-2.5 px-3.5 cursor-pointer flex items-center gap-2.5 hover:border-accent hover:bg-accent/8 transition-all"
                      onClick={() => onToast(`Vote cast! (${opt.pct} of total votes)`)}
                    >
                      <span className="text-base">{opt.emoji}</span>
                      <span className="flex-1 text-[13.5px] font-medium">{opt.label}</span>
                      <span className="text-xs text-text-muted">{opt.pct}</span>
                    </div>
                  ))}
                  <div className="text-[11.5px] text-text-muted mt-2.5">2,341 votes · 18 hours left</div>
                </div>
                <div className="flex items-center gap-2 px-4 pt-2.5 pb-2 border-t border-border text-[12.5px] text-text-muted">
                  <span className="text-sm">🔥</span><span className="text-sm">😂</span><span className="text-sm">💡</span>
                  <span className="flex-1">{post.stats.reactions} reactions</span>
                  <div className="flex gap-3">
                    <span>{post.stats.comments} comments</span>
                    <span>{post.stats.shares} shares</span>
                  </div>
                </div>
                <div className="flex px-2 pb-2 border-t border-border">
                  <div className="flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg cursor-pointer text-[13px] font-medium text-text-muted hover:bg-surface2 hover:text-white transition-all" onClick={() => onToast('❤️ Liked!')}>
                    <Heart size={16} /> Like
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg cursor-pointer text-[13px] font-medium text-text-muted hover:bg-surface2 hover:text-white transition-all">
                    <MessageSquare size={16} /> Comment
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg cursor-pointer text-[13px] font-medium text-text-muted hover:bg-surface2 hover:text-white transition-all" onClick={() => onToast('Shared!')}>
                    <Share2 size={16} /> Share
                  </div>
                </div>
              </div>
            ) : (
              <PostCard {...post} onToast={onToast} />
            )}
          </div>
        ))}

        {/* Watch Now Section */}
        <div className="flex items-center justify-between mb-3 px-1 mt-6">
          <div className="font-display font-bold text-[15px]">Watch Now</div>
          <div className="text-[12.5px] text-accent font-semibold cursor-pointer hover:underline" onClick={() => onToast('See all videos...')}>See all videos</div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          {[
            { emoji: '✈️', title: 'Top 10 Travel Hacks', author: '@wanderlust', views: '1.2M views' },
            { emoji: '💻', title: 'Full Stack App in 1hr', author: '@techdrops', views: '892K views' },
            { emoji: '🍝', title: 'Easy Pasta Recipes', author: '@chefmike', views: '3.4M views' },
            { emoji: '🏋️', title: 'Morning Workout Routine', author: '@fitlife', views: '5.1M views' }
          ].map((v, i) => (
            <div key={i} className="bg-surface2 rounded-xl overflow-hidden border border-border cursor-pointer hover:border-border-hover transition-colors group" onClick={() => onToast(`Playing: ${v.title}!`)}>
              <div className="h-24 bg-gradient-to-br from-surface2 to-surface3 flex items-center justify-center text-3xl text-white/18 relative">
                {v.emoji}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 border-2 border-white/40 flex items-center justify-center text-xs">
                  <Play size={12} fill="currentColor" />
                </div>
              </div>
              <div className="p-2 px-2.5">
                <div className="text-[12.5px] font-semibold truncate group-hover:text-accent transition-colors">{v.title}</div>
                <div className="text-[11px] text-text-muted mt-0.5">{v.author} · {v.views}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

import { Heart, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
