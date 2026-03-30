import { Heart, MessageSquare, Share2, Bookmark, MoreHorizontal, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface PostCardProps {
  author: string;
  avatar: string;
  avatarColor: string;
  time: string;
  location?: string;
  verified?: boolean;
  text: string;
  hashtags?: string[];
  mentions?: string[];
  images?: string[];
  stats: { reactions: string; comments: string; shares: string };
  isLive?: boolean;
  onToast: (msg: string) => void;
}

export default function PostCard({ 
  author, avatar, avatarColor, time, location, verified, text, hashtags, mentions, images, stats, isLive, onToast 
}: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) onToast('❤️ Liked!');
  };

  return (
    <div className="bg-surface border border-border rounded-2xl mb-4 overflow-hidden hover:border-border-hover transition-colors">
      <div className="flex items-center gap-2.5 px-4 pt-3.5 pb-2.5">
        <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center font-display font-bold text-sm flex-shrink-0 cursor-pointer relative`}>
          <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-accent3 border-2 border-surface" />
          {avatar}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[13.5px] cursor-pointer flex items-center gap-1.5">
            {author} 
            {verified && <CheckCircle2 size={12} className="text-accent" fill="currentColor" />}
            {isLive && <span className="inline-block px-1.5 py-0.5 rounded bg-accent2 text-[9.5px] font-extrabold text-white animate-pulse tracking-wider">LIVE</span>}
          </div>
          <div className="text-[11.5px] text-text-muted mt-0.5">
            {location ? `📍 ${location} · ` : ''}{time}
          </div>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-text-muted hover:bg-surface2 hover:text-white transition-all">
          <MoreHorizontal size={18} />
        </div>
      </div>

      <div className="px-4 pb-3 text-sm leading-[1.65] text-white">
        {text}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {hashtags?.map((h, i) => <span key={i} className="text-accent cursor-pointer hover:underline">#{h}</span>)}
          {mentions?.map((m, i) => <span key={i} className="text-accent3 cursor-pointer hover:underline">@{m}</span>)}
        </div>
      </div>

      {images && images.length > 0 && (
        <div className={`grid gap-0.5 ${images.length === 2 ? 'grid-cols-2' : images.length === 3 ? 'grid-cols-[2fr_1fr]' : 'grid-cols-1'}`}>
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`bg-gradient-to-br from-surface2 to-surface3 flex items-center justify-center text-white/15 ${
                images.length === 3 && i === 0 ? 'row-span-2 h-[300px]' : images.length === 3 ? 'h-[149px]' : images.length === 2 ? 'h-[240px]' : 'h-[300px]'
              }`}
            >
              <span className="text-4xl">{img}</span>
            </div>
          ))}
        </div>
      )}

      {isLive && (
        <div className="w-full h-[260px] bg-gradient-to-br from-[#1a0a0a] to-[#2a0a0a] flex items-center justify-center text-6xl text-white/12 relative">
          📺
          <div className="absolute top-3 left-3 flex gap-2 items-center">
            <span className="inline-block px-1.5 py-0.5 rounded bg-accent2 text-[9.5px] font-extrabold text-white animate-pulse tracking-wider">LIVE</span>
            <span className="text-xs text-white/70">3,241 watching</span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex gap-2">
            <div className="flex-1 bg-black/50 rounded-full px-3.5 py-1.5 text-xs text-white/60">Send a comment…</div>
            <div className="bg-accent2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white cursor-pointer" onClick={() => onToast('❤️ Reacted!')}>❤️</div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 px-4 pt-2.5 pb-2 border-t border-border text-[12.5px] text-text-muted">
        <span className="text-sm">❤️</span><span className="text-sm">😍</span><span className="text-sm">🔥</span>
        <span className="flex-1">{stats.reactions} reactions</span>
        <div className="flex gap-3">
          <span className="cursor-pointer hover:text-white hover:underline">{stats.comments} comments</span>
          <span className="cursor-pointer hover:text-white hover:underline">{stats.shares} shares</span>
        </div>
      </div>

      <div className="flex px-2 pb-2 border-t border-border">
        <div 
          className={`flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg cursor-pointer text-[13px] font-medium transition-all hover:bg-surface2 ${liked ? 'text-accent2' : 'text-text-muted hover:text-white'}`}
          onClick={handleLike}
        >
          <Heart size={16} fill={liked ? 'currentColor' : 'none'} className={liked ? 'animate-[popBounce_0.3s_ease]' : ''} />
          {liked ? 'Liked' : 'Like'}
        </div>
        <div 
          className="flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg cursor-pointer text-[13px] font-medium text-text-muted hover:bg-surface2 hover:text-white transition-all"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageSquare size={16} />
          Comment
        </div>
        <div className="flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg cursor-pointer text-[13px] font-medium text-text-muted hover:bg-surface2 hover:text-white transition-all" onClick={() => onToast('Post shared!')}>
          <Share2 size={16} />
          Share
        </div>
        <div className="flex-1 flex items-center justify-center gap-1.5 p-2 rounded-lg cursor-pointer text-[13px] font-medium text-text-muted hover:bg-surface2 hover:text-white transition-all" onClick={() => onToast('Post saved!')}>
          <Bookmark size={16} />
          Save
        </div>
      </div>

      {showComments && (
        <div className="border-t border-border">
          <div className="px-4 py-3.5 space-y-2.5">
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full av-blue flex items-center justify-center text-[10px] font-display font-bold flex-shrink-0">JK</div>
              <div className="flex-1">
                <div className="bg-surface2 rounded-tr-xl rounded-br-xl rounded-bl-xl px-3 py-2 text-[12.5px] leading-relaxed">
                  <div className="font-semibold text-xs mb-0.5">Jake Kim</div>
                  This is absolutely stunning 😍 Adding this to my bucket list!
                </div>
                <div className="flex gap-3 mt-1 text-[11.5px] text-text-muted px-1">
                  <span className="cursor-pointer hover:text-white">Like</span>
                  <span className="cursor-pointer hover:text-white">Reply</span>
                  <span>1.2K likes</span>
                  <span>1h</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center px-4 pt-2 pb-3.5 border-t border-border">
            <div className="w-7 h-7 rounded-full av-purple flex items-center justify-center text-[11px] font-display font-bold flex-shrink-0">AJ</div>
            <input 
              className="flex-1 bg-surface2 border border-border rounded-full px-3.5 py-1.5 text-[12.5px] text-white outline-none focus:border-accent transition-colors placeholder:text-text-dim" 
              placeholder="Write a comment…" 
            />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-[#8b5cf6] flex items-center justify-center cursor-pointer hover:opacity-85 transition-opacity text-sm" onClick={() => onToast('Comment sent!')}>
              ➤
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
