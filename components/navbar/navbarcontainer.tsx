import NavigationBar from './module';
import navbar from '../../app/data/navbar.json';
import landingpage from '../../app/data/landingpage.json';
import { useRouter } from 'next/router';

/**
 * A non resuable component. This component handles the data that the navbar will be displayed.
 * If the user is in home page (landing page), display only home, about, login....
 * otherwise display user option
 */
export default function NavbarContainer() {
    const router = useRouter();

    return (
      <>
      { router.pathname == '/' ?
        <NavigationBar
          brandpath={navbar.brandpath}
          items={landingpage.items}
        />
        :
        <NavigationBar
          brandpath={navbar.brandpath}
          items={navbar.items}
        />
      }
      </>
    )
}