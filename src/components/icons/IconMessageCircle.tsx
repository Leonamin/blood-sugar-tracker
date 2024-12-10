import * as React from "react";
import type { SVGProps } from "react";

interface IconMessageCircleProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgIconMessageCircle = ({
  size = 24,
  color = "#171717",
  ...props
}: IconMessageCircleProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M2.052 11.474C2.052 5.689 6.742 1 12.526 1 18.311 1 23 5.69 23 11.474s-4.69 10.473-10.474 10.473c-1.395 0-2.728-.273-3.948-.77-.327-.133-.636-.144-.88-.061l-3.451 1.175c-1.572.535-3.074-.966-2.538-2.538l1.175-3.45c.083-.245.071-.554-.062-.881a10.45 10.45 0 0 1-.77-3.948M12.526 3a8.474 8.474 0 0 0-8.474 8.474c0 1.131.222 2.21.623 3.194.277.681.37 1.493.102 2.279l-1.175 3.451 3.45-1.175c.787-.268 1.599-.175 2.28.102.985.401 2.062.622 3.194.622a8.474 8.474 0 1 0 0-16.947"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgIconMessageCircle;
