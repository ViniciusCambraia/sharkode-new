import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

export type ToastType = 'success' | 'info' | 'warning';

export interface ToastItem {
  id: string;
  title: string;
  message: string;
  type: ToastType;
  duration?: number;
}

// Global emitter for toast events
type ToastCallback = (toast: ToastItem) => void;
const listeners = new Set<ToastCallback>();

export const showTerminalToast = (title: string, message: string, type: ToastType = 'success', duration = 3500) => {
  const id = Math.random().toString(36).substring(2, 9);
  const toast: ToastItem = { id, title, message, type, duration };
  listeners.forEach(cb => cb(toast));
};

// Text scramble utility
const chars = '01ABCDEF#$_%*@&+-=<>[]{}';
const scrambleText = (text: string, onUpdate: (val: string) => void) => {
  const originalLength = text.length;
  let frame = 0;
  const totalFrames = 12;
  const interval = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    let result = '';
    for (let i = 0; i < originalLength; i++) {
      if (text[i] === ' ' || text[i] === '\n') {
        result += text[i];
      } else if (Math.random() < progress) {
        result += text[i];
      } else {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    onUpdate(result);
    if (frame >= totalFrames) {
      clearInterval(interval);
      onUpdate(text);
    }
  }, 30);
  return () => clearInterval(interval);
};

// Individual Toast component with animations
const Toast: React.FC<{ toast: ToastItem; onRemove: (id: string) => void }> = ({ toast, onRemove }) => {
  const [scrambledTitle, setScrambledTitle] = useState(toast.title);
  const [typedMessage, setTypedMessage] = useState('');
  const [isHiding, setIsHiding] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Scramble Title
  useEffect(() => {
    const cleanup = scrambleText(toast.title, setScrambledTitle);
    return cleanup;
  }, [toast.title]);

  // Typewriter effect for Message
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedMessage(prev => prev + toast.message.charAt(index));
      index++;
      if (index >= toast.message.length) {
        clearInterval(interval);
      }
    }, 12);
    return () => clearInterval(interval);
  }, [toast.message]);

  // Progress Bar and Auto-remove
  useEffect(() => {
    const duration = toast.duration || 3500;
    
    // Animate progress bar with CSS transition
    if (progressRef.current) {
      const el = progressRef.current;
      el.style.transition = `transform ${duration}ms linear`;
      el.style.transform = 'scaleX(1)';
      // Trigger browser paint
      requestAnimationFrame(() => {
        el.style.transform = 'scaleX(0)';
      });
    }

    const hideTimeout = setTimeout(() => {
      setIsHiding(true);
    }, duration - 400);

    const removeTimeout = setTimeout(() => {
      onRemove(toast.id);
    }, duration);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
    };
  }, [toast, onRemove]);

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <Icon icon="solar:check-circle-bold-duotone" className="text-emerald-400 text-lg" />;
      case 'warning':
        return <Icon icon="solar:danger-triangle-bold-duotone" className="text-orange-400 text-lg" />;
      case 'info':
      default:
        return <Icon icon="solar:info-circle-bold-duotone" className="text-blue-400 text-lg" />;
    }
  };

  const getPulseColor = () => {
    switch (toast.type) {
      case 'success': return 'bg-emerald-500 shadow-[0_0_8px_#10b981]';
      case 'warning': return 'bg-orange-500 shadow-[0_0_8px_#f97316]';
      case 'info':
      default:
        return 'bg-blue-500 shadow-[0_0_8px_#3b82f6]';
    }
  };

  const getToastClass = () => {
    const base = 'hud-toast show';
    const variant = toast.type === 'success' ? 'toast-success' : toast.type === 'warning' ? 'toast-warning' : 'toast-info';
    return `${base} ${variant} ${isHiding ? 'hide' : ''}`;
  };

  return (
    <div className={getToastClass()}>
      <div className="flex items-center gap-3 mb-1">
        {getIcon()}
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${getPulseColor()}`}></span>
          <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest font-semibold">
            {scrambledTitle}
          </span>
        </div>
      </div>
      <p className="text-xs text-zinc-400 font-mono mt-1 break-all leading-normal ml-7">
        {typedMessage}
      </p>
      <div ref={progressRef} className="hud-toast-progress" style={{ transform: 'scaleX(1)' }} />
    </div>
  );
};

export const TerminalToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handleToast = (newToast: ToastItem) => {
      setToasts(prev => [...prev, newToast]);
    };
    listeners.add(handleToast);
    return () => {
      listeners.delete(handleToast);
    };
  }, []);

  const handleRemove = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="hud-toast-container">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onRemove={handleRemove} />
      ))}
    </div>
  );
};
