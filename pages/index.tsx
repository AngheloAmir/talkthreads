import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPageContainer from '../components/landing/landingpagecontainer';

const Home: NextPage = () => {
  return (
    <div>
      <LandingPageContainer />
    </div>
  );
}
export default Home
