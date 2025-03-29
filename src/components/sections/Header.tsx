// components/sections/Header.tsx
import styles from "../../styles/LandingFrame.module.css";

export const Header = () => {
  // const handleJoinWaitlistClick = () => {
  //   window.open("https://forms.gle/XgjRixUwhZ3ZzkLe9", "_blank");
  // };

  const visitRicefield = () => {
    window.open("https://www.joinricefield.com/");
  }

  /*************  ✨ Codeium Command ⭐  *************/
  /******  2f9f311b-6871-4afc-bb05-7c8a695f8b2e  *******/ const handleFarmersDictClick =
    () => {
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
            src="/assets/tp_Main_Logo_no_slogan_green_text_1.svg"
          />
        </div>
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
            onClick={visitRicefield}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && visitRicefield()}
          >
            <div className={styles.joinWaitlistButton1}>
              <div className={styles.joinTheWaitlist}>Visit Ricefield</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
