import '../styles/globals.css'
import type { AppProps } from 'next/app'

import NavigationBar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar
        brandpath='brandtitle.png'
        items={[
          {
            name: 'one',
            path: '/'
          },
          {
            name: 'two',
            path: '/'
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
