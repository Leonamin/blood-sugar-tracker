import * as React from "react";
import type { SVGProps } from "react";
const SvgIconLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#171717"
      fillRule="evenodd"
      d="M2 12a5 5 0 0 1 5-5h2a1 1 0 0 1 0 2H7a3 3 0 1 0 0 6h2a1 1 0 1 1 0 2H7a5 5 0 0 1-5-5m12-4a1 1 0 0 1 1-1h2a5 5 0 0 1 0 10h-2a1 1 0 1 1 0-2h2a3 3 0 1 0 0-6h-2a1 1 0 0 1-1-1m-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconLink;
