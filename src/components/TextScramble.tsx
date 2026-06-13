import React, { useState, useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  delay?: number;
}

const chars = '01ABCDEF#$_%*@&+-=<>[]{}';

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = '',
  triggerOnHover = true,
  delay = 0
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const startScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    const originalLength = text.length;
    let frame = 0;
    const totalFrames = 15;
    
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
      
      setDisplayText(result);
      
      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 30);
  };

  useEffect(() => {
    if (delay > 0) {
      const t = setTimeout(() => {
        startScramble();
      }, delay);
      return () => clearTimeout(t);
    } else {
      startScramble();
    }
  }, [text, delay]);

  return (
    <span
      className={`${className} cursor-default select-none`}
      onMouseEnter={triggerOnHover ? startScramble : undefined}
    >
      {displayText}
    </span>
  );
};
