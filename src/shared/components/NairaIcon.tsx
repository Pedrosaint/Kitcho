import { forwardRef } from "react";
import type { LucideProps } from "lucide-react";

const NairaIcon = forwardRef<SVGSVGElement, Omit<LucideProps, "ref">>(
  ({ size = 22, className = "", ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...rest}
      >
        <path d="M8 5v14" />
        <path d="M16 5v14" />
        <path d="M6 10h12" />
        <path d="M6 14h12" />
      </svg>
    );
  },
);

NairaIcon.displayName = "NairaIcon";

export default NairaIcon;
