"use client";

import Lottie from 'lottie-react';
import { CSSProperties } from 'react';

interface LottiePlayerProps {
  animationData: any;
  className?: string;
  style?: CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottiePlayer({ 
  animationData, 
  className = '', 
  style = {},
  loop = true,
  autoplay = true
}: LottiePlayerProps) {
  return (
    <div className={className} style={style}>
      <Lottie 
        animationData={animationData}
        autoplay={autoplay}
        loop={loop}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
