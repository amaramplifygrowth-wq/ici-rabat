import React, { useEffect, useState } from 'react';
import { Flame, ThumbsDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ReactionStampProps {
  slug: string;
}

type Vote = 'up' | 'down';

const STORAGE_PREFIX = 'ici-rabat-reaction:';

// Combined "riso-stamp" reaction widget: one tap (👍/👎, styled as a riso
// ink stamp) is all a reader does. That single signal is then shown back
// in two framings — a vibe ratio and a "would order again" % — so we get
// the value of three different reaction concepts without asking three
// separate questions.
export const ReactionStamp: React.FC<ReactionStampProps> = ({ slug }) => {
  const { t } = useLanguage();
  const [counts, setCounts] = useState<{ up: number; down: number } | null>(null);
  const [myVote, setMyVote] = useState<Vote | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_PREFIX + slug);
      if (stored === 'up' || stored === 'down') setMyVote(stored);
    } catch {
      // localStorage unavailable — voting still works, just not "remembered"
    }

    fetch(`/api/reactions?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.ok) setCounts({ up: data.up, down: data.down });
      })
      .catch(() => {
        // Silent fail — widget just won't render counts yet.
      });
  }, [slug]);

  const castVote = async (vote: Vote) => {
    if (myVote || loading) return;
    setLoading(true);
    setMyVote(vote); // optimistic — feels instant
    try {
      localStorage.setItem(STORAGE_PREFIX + slug, vote);
    } catch {
      // ignore
    }
    try {
      const res = await fetch('/api/reactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, vote }),
      });
      const data = await res.json();
      if (data?.ok) setCounts({ up: data.up, down: data.down });
    } catch {
      // Vote stays optimistic locally even if the network call failed.
    } finally {
      setLoading(false);
    }
  };

  const total = counts ? counts.up + counts.down : 0;
  const pctWouldOrderAgain = total > 0 && counts ? Math.round((counts.up / total) * 100) : null;

  return (
    <div className="border-2 border-[#141B33] bg-[#FBF1D8] rounded-none p-4 sm:p-5">
      <span className="text-[11px] uppercase font-bold text-[#7A6842] tracking-wider block mb-3">
        {t.reactionTitle}
      </span>

      <div className="flex items-center gap-3">
        <button
          onClick={() => castVote('up')}
          disabled={!!myVote || loading}
          className={`relative flex-1 flex flex-col items-center justify-center gap-1 py-3 border-2 border-[#141B33] rounded-none font-bold text-xs sm:text-sm uppercase tracking-wide transition-all cursor-pointer disabled:cursor-default ${
            myVote === 'up'
              ? 'bg-[#FF4B12] text-white -rotate-2 riso-shadow-sm'
              : myVote === 'down'
              ? 'bg-white text-[#B8A87A] opacity-60'
              : 'bg-white text-[#141B33] hover:bg-[#FFD400] hover:-rotate-2'
          }`}
        >
          <Flame className="w-5 h-5" />
          <span>{t.reactionUp}</span>
        </button>

        <button
          onClick={() => castVote('down')}
          disabled={!!myVote || loading}
          className={`relative flex-1 flex flex-col items-center justify-center gap-1 py-3 border-2 border-[#141B33] rounded-none font-bold text-xs sm:text-sm uppercase tracking-wide transition-all cursor-pointer disabled:cursor-default ${
            myVote === 'down'
              ? 'bg-[#141B33] text-white rotate-2 riso-shadow-sm'
              : myVote === 'up'
              ? 'bg-white text-[#B8A87A] opacity-60'
              : 'bg-white text-[#141B33] hover:bg-[#E3CE93] hover:rotate-2'
          }`}
        >
          <ThumbsDown className="w-5 h-5" />
          <span>{t.reactionDown}</span>
        </button>
      </div>

      {myVote && (
        <p className="text-[11px] text-[#7A6842] mt-2.5 text-center">{t.reactionThanks}</p>
      )}

      <div className="mt-3.5 pt-3.5 border-t-2 border-[#E3CE93]">
        {total > 0 && counts ? (
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="font-bold text-[#141B33]">
              {pctWouldOrderAgain}% {t.reactionWouldOrderAgain}
            </span>
            <span className="text-[#7A6842]">
              {counts.up} {t.reactionVibeGood} · {counts.down} {t.reactionVibeMeh}
            </span>
          </div>
        ) : (
          <p className="text-xs text-[#7A6842] text-center">{t.reactionNoVotesYet}</p>
        )}
      </div>
    </div>
  );
};
