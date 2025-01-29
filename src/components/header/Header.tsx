import { useState } from "react";
import { Menu } from "lucide-react";
import styles from "./Header.module.css";

export function LandingPageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleJoinWaitlistClick = () => {
    window.open("https://forms.gle/XgjRixUwhZ3ZkLe9", "_blank");
  };

  const handleFarmersDictClick = () => {
    window.open(
      "https://joinricefield.notion.site/Farmers-Dictionary-1043b99ded3180a68889ec80aa0bace7",
      "_blank"
    );
  };

  const handlePrototypeClick = () => {
    window.open(
      "https://www.figma.com/proto/XSI4ZVnYeubv5XS0fZuwvB/ricefield---editor?node-id=4225-18146&node-type=frame&t=MvhnGZxlXF5xTW4g-1&scaling=scale-down-width&content-scaling=fixed&page-id=4037%3A16555&starting-point-node-id=4248%3A15497",
      "_blank"
    );
  };

  return (
    <div className={styles.headerStretch}>
      <div className={styles.headerLanding}>
        <div className={styles.ricefieldLogo}>
          <img
            className={styles.tpMainLogoNoSloganGreen}
            alt=""
            src="./assets/tp_Main_Logo_no_slogan_green_text_1.svg"
          />
        </div>

        {/* Hamburger Menu Button - Only shows on mobile */}
        <div className={styles.hamburgerMenu}>
          <Menu
            size={24}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            color="#448d57"
          />
        </div>

        {/* Original Header Buttons */}
        <div className={styles.headerButtons}>
          <div className={styles.groupContainer}>
            <div className={styles.viewPrototype}>
              <b className={styles.b} onClick={handleFarmersDictClick}>
                Farmers' Dictionary
              </b>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.viewPrototype}>
              <b className={styles.b2} onClick={handlePrototypeClick}>
                View Prototype
              </b>
            </div>
          </div>
          <div
            className={styles.joinWaitlistButton2}
            onClick={handleJoinWaitlistClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleJoinWaitlistClick()}
          >
            <div className={styles.joinWaitlistButton1}>
              <div className={styles.joinTheWaitlist}>Join the Waitlist</div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div
              className={styles.mobileMenuItem}
              onClick={handleFarmersDictClick}
            >
              Farmers' Dictionary
            </div>
            <div
              className={styles.mobileMenuItem}
              onClick={handlePrototypeClick}
            >
              View Prototype
            </div>
            <div
              className={`${styles.mobileMenuItem} ${styles.joinWaitlistMenuItem}`}
              onClick={handleJoinWaitlistClick}
            >
              Join the Waitlist
            </div>
          </div>
        )}
      </div>
    </div>
  );
  return (
    <div className={styles.headerStretch}>
      <div className={styles.headerLanding}>
        <div className={styles.ricefieldLogo}>
          <img
            className={styles.tpMainLogoNoSloganGreen}
            alt=""
            src="./assets/tp_Main_Logo_no_slogan_green_text_1.svg"
          />
        </div>

        {/* Hamburger Menu Button - Only shows on mobile */}
        <div className={styles.hamburgerMenu}>
          <Menu
            size={24}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            color="#448d57"
          />
        </div>

        {/* Original Header Buttons */}
        <div className={styles.headerButtons}>
          <div className={styles.groupContainer}>
            <div className={styles.viewPrototype}>
              <b className={styles.b} onClick={handleFarmersDictClick}>
                Farmers' Dictionary
              </b>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.viewPrototype}>
              <b className={styles.b2} onClick={handlePrototypeClick}>
                View Prototype
              </b>
            </div>
          </div>
          <div
            className={styles.joinWaitlistButton2}
            onClick={handleJoinWaitlistClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleJoinWaitlistClick()}
          >
            <div className={styles.joinWaitlistButton1}>
              <div className={styles.joinTheWaitlist}>Join the Waitlist</div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div
              className={styles.mobileMenuItem}
              onClick={handleFarmersDictClick}
            >
              Farmers' Dictionary
            </div>
            <div
              className={styles.mobileMenuItem}
              onClick={handlePrototypeClick}
            >
              View Prototype
            </div>
            <div
              className={styles.mobileMenuItem}
              onClick={handleJoinWaitlistClick}
            >
              Join the Waitlist
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
