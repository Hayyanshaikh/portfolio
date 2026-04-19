// components/Image.tsx

import React from "react";

interface ImageProps {
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  size?: number;
}

const Image = ({ svg: Svg, className = "", size = 48 }: ImageProps) => (
  <Svg width={size} height={size} className={className} />
);

export default Image;
