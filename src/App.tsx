import styles from "./styles/LandingFrame.module.css";

import { Introduction } from "./components/sections/Introduction";
import { Features } from "./components/sections/Feature";
import { ClassFeature } from "./components/sections/ClassFeature";
import { LaunchSection } from "./components/sections/LaunchSection";
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
        <ClassFeature />
        <LaunchSection />
        <UpcomingFeatures />
        <Footer />
      </div>
    </div>
  );
}

export default App;
