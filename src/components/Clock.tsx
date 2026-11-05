"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function Clock({ className, showCity = true }: { className?: string; showCity?: boolean }) {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: site.timeZone, hour: "2-digit", minute: "2-digit", hour12: false });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className}>
      {showCity && <><span className="clock__city">{site.city.toUpperCase()}</span> </>}<time suppressHydrationWarning>{time}</time>
    </span>
  );
}
