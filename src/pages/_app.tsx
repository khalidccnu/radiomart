import LandingLayout from '@base/layouts/LandingLayout';
import { publicPaths } from '@lib/constant';
import { Providers } from '@lib/context';
import '@styles/index.scss';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const App = ({ router, Component, pageProps }: AppProps) => {
  return (
    <Providers nextFont={roboto}>
      <Head>
        <title>Welcome to RadioMart | RadioMart</title>
        <meta name="description" content="RadioMart is the largest e-Commerce platform in Bangladesh." />
      </Head>
      <NextNProgress color="var(--color-primary)" height={3} options={{ showSpinner: false }} />
      {publicPaths.includes(router.pathname) ? (
        <LandingLayout>
          <Component {...pageProps} />
        </LandingLayout>
      ) : null}
    </Providers>
  );
};

export default App;
