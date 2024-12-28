// components/sections/UpcomingFeatures.tsx
import React from 'react';
import styles from "../../styles/LandingFrame.module.css";

export const UpcomingFeatures = () => {
  return (
    <div className={styles.slide11}>
<div className={styles.frameParent9}>
            <div>
              <div>
                <span className={styles.upcomingFeaturesTxtContainer}>
                  <p className={styles.upcomingFeatures}>upcoming features</p>
                </span>
              </div>
            </div>
            <div className={styles.frameParent10}>
              <div>
                <div className={styles.eventsWrapper}>
                  <b className={styles.events}>Events</b>
                  <div>
                    <p className={styles.eventsContent}>
                      No longer missing out on cool events from clubs and orgs
                      on campus!
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.eventsWrapper}>
                  <b className={styles.events}>Anonymous</b>
                  <div>
                    <p className={styles.eventsContent}>
                      Cook your campus as a true farmer without being seen who
                      you really are.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.eventsWrapper}>
                  <b className={styles.appTitle}>App</b>
                  <div>
                    <p className={styles.appContent}>
                      Late 2025.
                      <br />
                      Faster. Cooler.
                      <br />
                      More convenient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>    </div>
  );
};