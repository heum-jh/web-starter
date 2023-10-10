import { useEffect, useState } from "react";

const useCountdown = (initialTime: number) => {
  const [countdown, setCountdown] = useState<number>();
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        if (countdown && countdown > 0) {
          setCountdown(countdown - 1);
        } else {
          setIsRunning(false);
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [countdown, isRunning]);

  const formatTime = (time?: number): string | null => {
    if (time == null) return null;
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const startCountdown = (): void => {
    setIsRunning(true);
    setCountdown(initialTime);
  };

  const pauseCountdown = (): void => {
    setIsRunning(false);
  };

  return {
    count: formatTime(countdown),
    start: startCountdown,
    pause: pauseCountdown,
    isRunning,
  };
};

export default useCountdown;
