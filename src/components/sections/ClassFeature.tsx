// components/sections/ClassFeature.tsx
import React from "react";
import styles from "../../styles/LandingFrame.module.css";

export const ClassFeature = () => {
  return (
    <div className={styles.slide35}>
      <div className={styles.frameParent6}>
        <div className={styles.frameParent7}>
          <div>
            <div>
                <p className={`${styles.cookClasses} ${styles.headingText}`}>cook your classes!</p>
            </div>
          </div>
          <div className={styles.wantToShareDramasComplainWrapper}>
            <div className={`${styles.examPrepAssignment} ${styles.bodyText}`}>
              Exam prep? Assignment help? Survival tips? Professor complaints?
              It’s your chance to cook these classes communities!
            </div>
          </div>
        </div>
        <img
          className={styles.frameItem}
          alt=""
          src="/public/assets/Group_197.png"
        />
      </div>
    </div>
  );
};
