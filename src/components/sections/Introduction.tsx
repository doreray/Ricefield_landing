// components/sections/Introduction.tsx
import styles from "../../styles/LandingFrame.module.css";

export const Introduction = () => {
  return (
    <>
      <div className={styles.slide7}>
        <div className={styles.frameParent}>
          <div className={styles.whatsCookingOnCampusWrapper}>
            <div className={`${styles.whatsCookingOn} ${styles.headingText}`}>
              what's cooking on campus?
            </div>
          </div>
          <div className={styles.fromClassesToClubsFromDoWrapper}>
            <div
              className={styles.fromClassesTo}
            >{`From classes to clubs, from dorms to dining halls, from gyms to stadiums, Ricefield is a space for you, college students, to see and get updated on what the heck is happening in your college. You can cook (or get cooked?) everything and anything however you want. `}</div>
          </div>
        </div>
      </div>
      <div className={styles.slide8}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.whatTheHeckIsRicefieldWrapper}>
              <div className={styles.whatTheHeck}>
                what the heck is ricefield?
              </div>
            </div>
            <div className={styles.theBestWayToThinkOfRicefWrapper}>
              <div className={styles.theBestWayContainer}>
                <span className={styles.theBestWayContainer1}>
                  <p className={styles.theBestWay}>
                    The best way to think of Ricefield is that: if X and Reddit
                    decided to have a baby together, that would be us :)
                  </p>
                  <p className={styles.theBestWay}>&nbsp;</p>
                  <p className={styles.theBestWay}>
                    Well, Elon obviously ain't interested in that, so three
                    college students decided to build Ricefield instead.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <img
            className={styles.frameChild}
            alt=""
            src="/assets/Group_1.png"
          />
        </div>
      </div>
    </>
  );
};
