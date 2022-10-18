import type { AppProps } from 'next/app';
import { globalStyles } from '@/styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
