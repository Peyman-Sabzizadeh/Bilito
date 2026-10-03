import { useId } from "react";
import type { SVGProps } from "react";

export default function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  const uid = useId().replace(/:/g, "");
  const id0 = `gp-paint0-${uid}`;
  const id1 = `gp-paint1-${uid}`;
  const id2 = `gp-paint2-${uid}`;
  const id3 = `gp-paint3-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0.240992 0.185249C0.0883419 0.328712 0 0.552071 0 0.84133V11.159C0 11.4482 0.0883419 11.6716 0.240992 11.8151L0.278668 11.8466L6.71856 6.06722V5.93076L0.278668 0.151425L0.240992 0.185249Z"
        fill={`url(#${id0})`}
      />
      <path
        d="M8.863 7.99463L6.71875 6.06721V5.93075L8.8656 4.00333L8.91367 4.02841L11.4561 5.32715C12.1817 5.69573 12.1817 6.30224 11.4561 6.67314L8.91367 7.96955L8.863 7.99463Z"
        fill={`url(#${id1})`}
      />
      <path
        d="M8.9137 7.96959L6.71879 5.99902L0.241211 11.8151C0.482204 12.0425 0.875197 12.0699 1.32211 11.8425L8.9137 7.96959Z"
        fill={`url(#${id2})`}
      />
      <path
        d="M8.9137 4.02845L1.32211 0.155542C0.875197 -0.0695658 0.482204 -0.0421572 0.241211 0.185284L6.71879 5.99902L8.9137 4.02845Z"
        fill={`url(#${id3})`}
      />
      <defs>
        <linearGradient
          id={id0}
          x1="6.14678"
          y1="11.2664"
          x2="-1.63768"
          y2="2.59572"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FF" />
          <stop offset="0.0066" stopColor="#00A1FF" />
          <stop offset="0.2601" stopColor="#00BEFF" />
          <stop offset="0.5122" stopColor="#00D2FF" />
          <stop offset="0.7604" stopColor="#00DFFF" />
          <stop offset="1" stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient
          id={id1}
          x1="12.4009"
          y1="5.99833"
          x2="-0.173253"
          y2="5.99833"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE000" />
          <stop offset="0.4087" stopColor="#FFBD00" />
          <stop offset="0.7754" stopColor="#FFA500" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient
          id={id2}
          x1="7.72017"
          y1="4.92779"
          x2="-2.83619"
          y2="-6.8304"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient
          id={id3}
          x1="-1.38933"
          y1="15.2477"
          x2="3.32456"
          y2="9.99722"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32A071" />
          <stop offset="0.0685" stopColor="#2DA771" />
          <stop offset="0.4762" stopColor="#15CF74" />
          <stop offset="0.8009" stopColor="#06E775" />
          <stop offset="1" stopColor="#00F076" />
        </linearGradient>
      </defs>
    </svg>
  );
}
