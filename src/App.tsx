import styles from "./styles/LandingFrame.module.css";

import { Introduction } from "./components/sections/Introduction";
import { Features } from "./components/sections/Feature/Feature";
import { LaunchSection } from "./components/sections/LaunchSection";
import LaunchStatus from "./components/sections/LaunchStatus/LaunchStatus";
import { UpcomingFeatures } from "./components/sections/UpcomingFeature";
import { Footer } from "./components/sections/Footer";
import { LandingPageHeader } from "./components/header/Header";

function App() {
  return (
    <div className={styles.landingFrame}>
      <LandingPageHeader />
      <div className={styles.mainPageContainer}>
        <Introduction />
        <Features />
        {/* <LaunchSection /> */}
        <LaunchStatus />
        {/* <UpcomingFeatures /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
