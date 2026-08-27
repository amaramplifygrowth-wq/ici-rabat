import React, { useEffect, useState } from 'react';
import { X, Share, PlusSquare, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DISMISS_KEY = 'ici-rabat-install-dismissed';
const SHOW_DELAY_MS = 2500;

// Chrome/Android fires this before it WOULD show its own install UI; calling
// preventDefault() lets us hold onto it and trigger the native prompt later
// from our own on-brand button instead of Chrome's generic one.
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

function isIos(): boolean {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isStandalone(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    // iOS Safari's own flag — not in the standard lib.dom types
    (window.navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

export const InstallPrompt: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [platform, setPlatform] = useState<'android' | 'ios' | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (isStandalone()) return; // already installed / running as an app
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
    } catch {
      // if localStorage is unavailable, fall through and just show it once per session
    }

    if (isIos()) {
      const timer = setTimeout(() => {
        setPlatform('ios');
        setVisible(true);
      }, SHOW_DELAY_MS);
      return () => clearTimeout(timer);
    }

    // Android / Chromium: wait for the browser to tell us installation is possible.
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => {
        setPlatform('android');
        setVisible(true);
      }, SHOW_DELAY_MS);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  };

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setVisible(false);
    } else {
      dismiss();
    }
  };

  if (!visible || !platform) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 animate-[fadeInUp_0.3s_ease-out]">
      <div className="max-w-md mx-auto bg-[#141B33] border-2 border-[#141B33] rounded-none riso-shadow-orange overflow-hidden">
        <div className="flex items-start gap-3 p-4">
          <div className="flex-shrink-0 w-11 h-11 rounded-none bg-[#FFD400] border-2 border-[#141B33] flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-[#141B33]" />
          </div>

          <div className="flex-grow min-w-0">
            <p className="text-white font-heading font-bold text-sm sm:text-base leading-snug">
              {t.pwaInstallTitle}
            </p>

            {platform === 'android' ? (
              <>
                <p className="text-[#D9C9A0] text-xs sm:text-sm mt-1 mb-3 leading-snug">
                  {t.pwaInstallDesc}
                </p>
                <button
                  onClick={handleInstallClick}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF4B12] hover:bg-[#CC2E00] text-white text-xs sm:text-sm font-bold rounded-none transition-colors cursor-pointer"
                >
                  {t.pwaInstallButton}
                </button>
              </>
            ) : (
              <p className="text-[#D9C9A0] text-xs sm:text-sm mt-1 leading-snug flex flex-wrap items-center gap-1">
                <span>{t.pwaIosInstruction}</span>
                <Share className="w-3.5 h-3.5 inline text-[#FFD400]" />
                <span>→</span>
                <PlusSquare className="w-3.5 h-3.5 inline text-[#FFD400]" />
              </p>
            )}
          </div>

          <button
            onClick={dismiss}
            aria-label={t.pwaInstallDismiss}
            className="flex-shrink-0 p-1 text-[#D9C9A0] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
