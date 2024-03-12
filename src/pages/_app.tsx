import { Providers } from '@lib/context';
import '@styles/index.scss';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Head from 'next/head';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers nextFont={roboto}>
      <Head>
        <title>Welcome to RadioMart | RadioMart</title>
        <meta name="description" content="RadioMart is the largest e-Commerce platform in Bangladesh." />
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
