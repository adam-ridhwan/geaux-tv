'use client';

import { useEffect } from 'react';
import { cn } from '@/util/cn';

import { Channel, useTvStore } from '@/store/useTvStore';

const PlayingIcon = ({ channel }: { channel: Channel }) => {
  const [currentChannel] = useTvStore(state => [state.currentChannel]);

  return (
    <>
      {currentChannel?.episodes[0].videoId === channel.episodes[0].videoId && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          style={{
            margin: 'auto',
            background: 'transparent',
            display: 'block',
            shapeRendering: 'auto',
          }}
          width='25px'
          height='25px'
          viewBox='0 0 100 100'
          preserveAspectRatio='xMidYMid'
        >
          <g transform='rotate(180 50 50)'>
            <rect x='11.5' y='15' width='17' height='40' fill='#e10098'>
              <animate
                attributeName='height'
                values='50;70;30;50'
                keyTimes='0;0.33;0.66;1'
                dur='1.5873015873015872s'
                repeatCount='indefinite'
                calcMode='spline'
                keySplines='0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1'
                begin='-0.634920634920635s'
              />
            </rect>
            <rect x='31.5' y='15' width='17' height='40' fill='#e10098'>
              <animate
                attributeName='height'
                values='50;70;30;50'
                keyTimes='0;0.33;0.66;1'
                dur='1.5873015873015872s'
                repeatCount='indefinite'
                calcMode='spline'
                keySplines='0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1'
                begin='-0.3174603174603175s'
              />
            </rect>
            <rect x='51.5' y='15' width='17' height='40' fill='#e10098'>
              <animate
                attributeName='height'
                values='50;70;30;50'
                keyTimes='0;0.33;0.66;1'
                dur='1.5873015873015872s'
                repeatCount='indefinite'
                calcMode='spline'
                keySplines='0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1'
                begin='-0.9523809523809523s'
              />
            </rect>
            <rect x='71.5' y='15' width='17' height='40' fill='#e10098'>
              <animate
                attributeName='height'
                values='50;70;30;50'
                keyTimes='0;0.33;0.66;1'
                dur='1.5873015873015872s'
                repeatCount='indefinite'
                calcMode='spline'
                keySplines='0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1'
                begin='-1.5873015873015872s'
              />
            </rect>
          </g>
        </svg>
      )}
    </>
  );
};

export default PlayingIcon;
