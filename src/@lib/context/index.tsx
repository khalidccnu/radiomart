import type { ThemeConfig } from 'antd';
import { ConfigProvider } from 'antd';
import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

type TProps = {
  nextFont?: NextFont;
  children: React.ReactNode;
};

export const Providers = ({ nextFont, children }: TProps) => {
  const theme: ThemeConfig = {
    token: {
      fontFamily: 'var(--font-roboto)',
      fontSize: 16,
      colorPrimary: '#25537d',
      colorPrimaryActive: '#242021',
      colorPrimaryBorder: '#25537d',
      colorPrimaryHover: '#242021',
      colorLinkActive: '#242021',
      colorLinkHover: '#242021',
      screenXSMax: 639,
      screenSMMin: 640,
      screenSM: 640,
      screenMDMax: 1023,
      screenLGMin: 1024,
      screenLG: 1024,
      screenLGMax: 1279,
      screenXLMin: 1280,
      screenXL: 1280,
      screenXLMax: 1535,
      screenXXLMin: 1536,
      screenXXL: 1536,
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <main role="main" id="__main" className={nextFont?.className}>
        {children}
      </main>
    </ConfigProvider>
  );
};
