import LandingPageComponent from './module';

/**
 * A non resuable component primary used in the Landing Page of the application. This component
 * wraps the Landing Page component and provide data to that component.
 * This component is needed because that component is highly reusable.
 */
export default function LandingPageMain() {
    return (
        <LandingPageComponent />
    )
}
