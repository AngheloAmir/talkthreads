import type { NextPage } from 'next'
import LandingPageContainer from '../components/HomePage/landing/landingpagecontainer';
import BeamContainer from '../components/HomePage/beam/beamcontainer';

const Home: NextPage = () => {
  return (
    <div>
      <LandingPageContainer />
      <BeamContainer />
    </div>
  );
}
export default Home
