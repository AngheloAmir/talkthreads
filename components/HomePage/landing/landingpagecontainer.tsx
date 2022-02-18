import LandingPageComponent from './module';
import landingpagejson from '../../../app/data/landingpage.json';

/**
 * @summary
 * A non resuable component primary used in the Landing Page of the application. This component
 * wraps the Landing Page component (the initial component to seen by the user)
 * and provide data and functionality to that component.
 * This component is needed because the module is reusable.
 * Edit the landingpagecontainer.tsx to change the text
 */
export default function LandingPageContainer() {
    return (
        <LandingPageComponent
            imgsrc={landingpagejson.welcome.image}
            title={landingpagejson.welcome.heading}
            text={landingpagejson.welcome.text}
            btnaction1={landingpagejson.welcome.btn}
            btnaction1cb={() => alert('pressed')}
        />
    )
}
