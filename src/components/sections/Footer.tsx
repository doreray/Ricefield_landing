// components/sections/Footer.tsx
import styles from '../../styles/LandingFrame.module.css';

export const Footer = () => {
  const handleInstaClick = () => {
    window.open('https://www.instagram.com/joinricefield/', '_blank');
  };
  
  const handleMeetFoundersClick = () => {
    window.open('https://joinricefield.notion.site/Headfarmers-Who-14e3b99ded318062a84ae848bac1cc32', '_blank');
  };

  const handleJoinWaitlistClick = () => {
    window.open('https://forms.gle/XgjRixUwhZ3ZzkLe9', '_blank');
  };

  const handleFarmersDictClick = () => {
    window.open('https://joinricefield.notion.site/Farmers-Dictionary-1043b99ded3180a68889ec80aa0bace7', '_blank');
  };
  
  const handlePrototypeClick = () => {
    window.open('https://www.figma.com/proto/XSI4ZVnYeubv5XS0fZuwvB/ricefield---editor?node-id=4225-18146&node-type=frame&t=MvhnGZxlXF5xTW4g-1&scaling=scale-down-width&content-scaling=fixed&page-id=4037%3A16555&starting-point-node-id=4248%3A15497', '_blank');
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerGroup}>
        <div>
          <img
            className={styles.footerLogo}
            alt=""
            src="./assets/Main_Logo_no_slogan_1.svg"
          />
          <svg className={styles.founderGraphic} viewBox="0 0 756 500">
            <text className={styles.founderSvgText} x="140" y="25">
              <tspan
                textAnchor="middle"
                x="140"
                className={styles.founderSvgTextTitle}
              >
                duy
              </tspan>
              <tspan
                textAnchor="middle"
                x="140"
                dy="30"
                className={styles.founderSvgTextSubtitle}
              >
                everything farmer
              </tspan>
            </text>

            <text className={styles.founderSvgText} x="330" y="70">
              <tspan
                textAnchor="middle"
                x="330"
                className={styles.founderSvgTextTitle}
              >
                minh
              </tspan>
              <tspan
                textAnchor="middle"
                x="330"
                dy="30"
                className={styles.founderSvgTextSubtitle}
              >
                operating farmer
              </tspan>
            </text>

            <text className={styles.founderSvgText} x="560" y="35">
              <tspan
                textAnchor="middle"
                x="560"
                className={styles.founderSvgTextTitle}
              >
                lâm
              </tspan>
              <tspan
                textAnchor="middle"
                x="560"
                dy="30"
                className={styles.founderSvgTextSubtitle}
              >
                technology farmer
              </tspan>
            </text>

            <image
              href="./assets/Group_202.svg"
              x="0"
              y="70"
              width="756"
              height="438"
            />
          </svg>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.furtherInformationParent}>
            <b className={styles.furtherInformation}>Further Information</b>
            <div className={styles.landingFooterButtonParent}>
              <div className={styles.landingFooterButton}>
                <div>
                  <b
                    className={styles.footerButton}
                    onClick={handleJoinWaitlistClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleJoinWaitlistClick()
                    }
                  >
                    Join the Waitlist
                  </b>
                </div>
              </div>
              <div className={styles.landingFooterButton}>
                <div>
                  <b
                    className={styles.footerButton1}
                    onClick={handleMeetFoundersClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleMeetFoundersClick()
                    }
                  >
                    Meet the Headfarmers (Founders)
                  </b>
                </div>
              </div>
              <div className={styles.landingFooterButton}>
                <div>
                  <b
                    className={styles.footerButton2}
                    onClick={handleFarmersDictClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleFarmersDictClick()
                    }
                  >
                    Farmers' Dictionary
                  </b>
                </div>
              </div>
              <div className={styles.landingFooterButton}>
                <div>
                  <b
                    className={styles.footerButton3}
                    onClick={handlePrototypeClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handlePrototypeClick()
                    }
                  >
                    View Prototype
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerBottomRight}>
            <div className={styles.footerSocialMedia}>
              <img
                className={styles.instaLogoIcon}
                alt="Instagram"
                src="/assets/insta_logo.svg"
                onClick={handleInstaClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleInstaClick()}
              />
              {/* Commented social media icons as in original code */}
              <img className={styles.xLogoIcon} alt="" src="/assets/x_logo.svg" />
            <img className={styles.tiktokLogoIcon} alt="" src="/assets/tiktok_logo.svg" />
            </div>
            <div className={styles.copyright2024RicefieldAllWrapper}>
              <div className={styles.copyright2024Ricefield}>
                Copyright 2025 Ricefield. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};