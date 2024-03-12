import { NextFont } from 'next/dist/compiled/@next/font';
import React from 'react';

type TProps = {
  nextFont?: NextFont;
  children: React.ReactNode;
};

export const Providers = ({ nextFont, children }: TProps) => {
  return (
    <main role="main" id="__main" className={nextFont?.className}>
      {children}
    </main>
  );
};
