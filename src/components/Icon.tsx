import icons from "../assets/icons/bootstrap-icons.svg"
import { forwardRef } from "react";

type Props = {
  icon: string;
  height?: number;
  width?: number;
  className?: string;
};

const Icon = forwardRef<SVGSVGElement, Props>(
  ({ icon, height = 20, width = 20, className, ...props }: Props, ref) => {
    return (
      <svg
        role="img"
        fill="currentColor"
        ref={ref}
        height={height}
        width={width}
        className={className}
        {...props}
      >
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    );
  }
);

export default Icon;
