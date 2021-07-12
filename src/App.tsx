import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/menu';
// import Profile from './pages/profile';
import Home from './pages/Home.jsx';
import Profile from './pages/profile.jsx';
import Header from './layout/Header';
import LicenseTest from './components/licenses';
import AllLicenses from './components/profileBuilder/licenses/allLicenses';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './index.css';

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane when="(max-width:40px)" contentId="main" >
          <Menu />
          <IonRouterOutlet id="main">
            <Header />
            <Route path="/home" exact={true} component={Home} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/licensetest" component={LicenseTest} exact={true} />
            <Route path="/alllicenses" component={AllLicenses} exact={true} />

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>

    </IonApp>
  );
};

export default App;
