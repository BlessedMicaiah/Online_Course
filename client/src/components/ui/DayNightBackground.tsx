import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface DayNightBackgroundProps {
  className?: string;
}

export function DayNightBackground({ className = '' }: DayNightBackgroundProps) {
  const { theme } = useTheme();
  const [stars, setStars] = useState<{ id: number; size: number; top: string; left: string; delay: number }[]>([]);
  const [sunRays, setSunRays] = useState<{ id: number; width: string; height: string; angle: number; opacity: number }[]>([]);

  // Generate stars for night sky
  useEffect(() => {
    if (theme === 'dark') {
      const generateStars = () => {
        const newStars = [];
        for (let i = 0; i < 50; i++) {
          newStars.push({
            id: i,
            size: Math.random() * 3 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: Math.random() * 3
          });
        }
        setStars(newStars);
      };
      generateStars();
    }
  }, [theme]);

  // Generate sun rays for day sky
  useEffect(() => {
    if (theme === 'light') {
      const generateSunRays = () => {
        const newRays = [];
        for (let i = 0; i < 12; i++) {
          newRays.push({
            id: i,
            width: `${4 + Math.random() * 2}px`,
            height: `${60 + Math.random() * 40}px`,
            angle: i * 30,
            opacity: 0.2 + Math.random() * 0.3
          });
        }
        setSunRays(newRays);
      };
      generateSunRays();
    }
  }, [theme]);

  if (theme === 'dark') {
    return (
      <div className={`night-sky ${className}`}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
              left: star.left,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>
    );
  }

  // Simple light background for day mode (no stars)
  return (
    <div className={`day-sky ${className}`}>
      <div className="sun" style={{ 
        top: '10%', 
        right: '10%', 
        animation: 'pulse-glow 3s infinite ease-in-out' 
      }}>
        {sunRays.map((ray) => (
          <div
            key={ray.id}
            className="sun-ray"
            style={{
              width: ray.width,
              height: ray.height,
              transform: `translateX(-50%) rotate(${ray.angle}deg)`,
              opacity: ray.opacity
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default DayNightBackground;