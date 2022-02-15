import '../styles/globals.css'
import type { AppProps } from 'next/app'

import NavigationBar from '../components/navbar';
import navbar from '../app/data/navbar.json';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar
        brandpath={navbar.brandpath}
        items={navbar.items}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
