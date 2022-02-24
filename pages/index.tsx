import type { NextPage } from 'next'
import LandingPageContainer from '../components/HomePage/landing/landingpagecontainer';
import BeamContainer from '../components/HomePage/beam/beamcontainer';


const Home: NextPage = () => {
  return (
    <div>
      <LandingPageContainer />
      <BeamContainer />

      <div style={{
        position: 'relative',
        border: '1px solid red'
      }}>
      <img
        src='home/join.jpg'
        style={{
          width: '100vw',
          height: '100vh',
          
          
          
      
        }}
      />
      <div style={{
        position: 'absolute',
        top: '10vh',
        left: '50vh',
        border: '2px solid white',
        backgroundColor: 'rgba(50,50,50, 0.5)',
        color: 'white',
        padding: '3rem',
        borderRadius: '1rem'
      }}>
        <h1>JOIN NOW</h1>
      <h3>3000 miliosn of people are enjoying our service!</h3>
        <h3>dont be shy and it is FREE! Start now</h3>
        <button>Register!</button>
      </div>
        
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
