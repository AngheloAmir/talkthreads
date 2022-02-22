import type { NextPage } from 'next'
import LandingPageContainer from '../components/HomePage/landing/landingpagecontainer';
import BeamContainer from '../components/HomePage/beam/beamcontainer';

const Home: NextPage = () => {
  return (
    <div>
      <LandingPageContainer />
      <BeamContainer />

      <div>
        <h3>3000 miliosn of people are enjoying our service!</h3>
        <h3>dont be shy and it is FREE! Start now</h3>
        <button>Register!</button>
      </div>

      <div style={{
        width: '100%',
        height: '3rem',
        textAlign: 'center',
        backgroundColor: 'lightblue',
        paddingTop: '1rem'
      }}>
          Created by: Amir. A Next.js Forum application
      </div>
    </div>
  );
}
export default Home
