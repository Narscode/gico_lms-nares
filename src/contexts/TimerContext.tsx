"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface TimerContextType {
  timeRemaining: number;
  startTimer: (duration: number, path: string) => void;
  isRunning: boolean;
  originPath: string;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function useTimer(): TimerContextType {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
}

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [originPath, setOriginPath] = useState<string>("");

  // Load saved timer state from localStorage on mount
  useEffect(() => {
    const savedTime = localStorage.getItem("timerState");
    if (savedTime) {
      const { remaining, path, timestamp } = JSON.parse(savedTime);
      const elapsedTime = Math.floor((Date.now() - timestamp) / 1000);
      const newRemainingTime = Math.max(0, remaining - elapsedTime);

      setTimeRemaining(newRemainingTime);
      setOriginPath(path);
      setIsRunning(newRemainingTime > 0);
    }
  }, []);

  // Save timer state to localStorage whenever it changes
  useEffect(() => {
    if (timeRemaining > 0 && isRunning) {
      localStorage.setItem(
        "timerState",
        JSON.stringify({
          remaining: timeRemaining,
          path: originPath,
          timestamp: Date.now(),
        })
      );
    }
  }, [timeRemaining, isRunning, originPath]);

  // Countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            localStorage.removeItem("timerState");
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeRemaining]);

  const startTimer = (duration: number, path: string) => {
    setTimeRemaining(duration);
    setIsRunning(true);
    setOriginPath(path);
  };

  return (
    <TimerContext.Provider
      value={{ timeRemaining, startTimer, isRunning, originPath }}
    >
      {children}
    </TimerContext.Provider>
  );
}
