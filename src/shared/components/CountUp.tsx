import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  className?: string;
}

export default function CountUp({ value, className = "" }: Props) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part
    const numericMatch = value.replace(/[^0-9.]/g, "");
    const target = parseFloat(numericMatch);
    if (isNaN(target) || target === 0) {
      setDisplay(value);
      return;
    }

    const prefix = value.substring(0, value.indexOf(numericMatch.charAt(0)));
    const suffix = value.substring(value.indexOf(numericMatch.charAt(0)) + numericMatch.length);
    const hasDecimal = numericMatch.includes(".");
    const hasCommas = value.includes(",");

    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = target * eased;

      let formatted: string;
      if (hasDecimal) {
        formatted = current.toFixed(1);
      } else {
        formatted = Math.round(current).toString();
      }

      if (hasCommas) {
        formatted = Number(formatted).toLocaleString();
      }

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (step >= steps) {
        clearInterval(timer);
        setDisplay(value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span ref={ref} className={className}>{display}</span>;
}
