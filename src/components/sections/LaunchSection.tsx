// components/sections/LaunchSection.tsx
import styles from "../../styles/LandingFrame.module.css";

export const LaunchSection = () => {
  const handleJoinWaitlistClick = () => {
    window.open("https://forms.gle/XgjRixUwhZ3ZzkLe9", "_blank");
  };

  const handlePrototypeClick = () => {
    window.open(
      "https://www.figma.com/proto/XSI4ZVnYeubv5XS0fZuwvB/ricefield---editor?node-id=4225-18146",
      "_blank"
    );
  };

  return (
    <div className={styles.slide10}>
      <div className={styles.frameParent8}>
        <div className={styles.weAreLaunchingNextSemesterWrapper}>
          <div>
            <p className={styles.weAreLaunching}>
              our beta <br /> is live!
            </p>
          </div>
        </div>

        <img src="/assets/msu-logo.svg" alt="" />

        <div className={styles.itsGonnaBeLitToBeOneOfWrapper}>
          <div>
            <p className={styles.theBestWay}>
              <b className={styles.theBestWay}>
                It’s gonna be lit to be one of the{" "}
                <span className={styles.veryfirst}>very first</span> farmers on
                Ricefield, so{" "}
                <span className={styles.veryfirst}>join the ride</span> now!
              </b>
            </p>
            <p className={styles.theBestWay}>&nbsp;</p>
            <p className={styles.theBestWay}>
              In the meantime, take sometime to tour your future cooking space!
            </p>
          </div>
        </div>
        <div className={styles.joinWaitlistButtonParent}>
          <div className={styles.joinWaitlistButton}>
            <div
              className={styles.joinWaitlistButton1}
              onClick={handleJoinWaitlistClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleJoinWaitlistClick()}
            >
              <div className={styles.joinTheWaitlist}>Join the Waitlist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
