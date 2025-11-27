import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 14, minutes: 22, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <span className="text-destructive font-bold">
      {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
    </span>
  );
};
