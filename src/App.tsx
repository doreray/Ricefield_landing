import styles from "./styles/LandingFrame.module.css";
import { Header } from "./components/sections/Header";
import { Introduction } from "./components/sections/Introduction";
import { Features } from "./components/sections/Feature";
import { ClassFeature } from "./components/sections/ClassFeature";
import { LaunchSection } from "./components/sections/LaunchSection";
import { UpcomingFeatures } from "./components/sections/UpcomingFeature";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className={styles.landingFrame}>
      <Header />
      <div className={styles.slide7Parent}>
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
