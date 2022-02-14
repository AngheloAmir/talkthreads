import '../styles/globals.css'
import type { AppProps } from 'next/app'

import NavigationBar from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar
        brandpath='brandtitle.png'
        items={[
          {
            name: 'Home',
            icon: 'app/navbar/home.png',
            path: '/'
          },
          {
            name: 'Messages',
            icon: 'app/navbar/message.png',
            path: '/'
          },
          {
            name: 'Notification',
            icon: 'app/navbar/notification.png',
            path: '/'
          },
          {
            name: 'Freinds',
            icon: 'app/navbar/freinds.png',
            path: '/'
          },
          {
            name: 'Setting',
            icon: 'app/navbar/setting.png',
            path: '/',
          }
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
