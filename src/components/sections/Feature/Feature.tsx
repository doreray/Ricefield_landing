// components/sections/Features.tsx
import styles from "./Feature.module.css";

export const Features = () => {
  return (
    <>
      <div className={styles.soHowDoesThisWork}>
        <p className={styles.headingText}>
          so, how does <br /> this work?
        </p>
      </div>

      {/* Cook Feature */}
      <div className={styles.featureContainer}>
        <div className={styles.featureText}>
          <p className={`${styles.headingText}`}>cook</p>
          <div className={styles.featureDescription}>
            Want to share dramas, complain about the communal bathrooms, or get
            help on your CSE232 assignments? Select a space and cook a post.
          </div>
        </div>
        <img
          className={styles.featureImage}
          alt=""
          src="/assets/features/cook.png"
        />
      </div>

      {/* Reply Feature */}
      <div className={styles.featureContainer}>
        <img
          className={`${styles.featureImage} ${styles.featureImageReverse}`}
          alt=""
          src="/assets/features/reply.png"
        />
        <div className={styles.featureText}>
          <p className={`${styles.headingText}`}>reply</p>
          <div className={styles.featureDescription}>
            Can’t find a clean toilet seat? Want to help your classmates because
            the prof doesn’t care? Reply and throw yourself into the discussion.
          </div>
        </div>
      </div>

      {/* Anonymous feature */}
      <div className={styles.featureContainer}>
        <div className={styles.featureText}>
          <p className={`${styles.headingText}`}>anonymous</p>
          <div className={styles.featureDescription}>
            Want to cook but don’t feel comfortable showing who you are? Switch
            on that anonymous toggle in the post box and keep cooking.
          </div>
        </div>
        <img
          className={styles.featureImage}
          alt=""
          src="/assets/features/anonymous.png"
        />
      </div>

      {/* Voting Feature */}
      <div className={styles.featureContainer}>
        <img
          className={`${styles.featureImage} ${styles.featureImageReverse}`}
          alt=""
          src="/assets/features/vote.png"
        />
        <div className={styles.featureText}>
          <p className={`${styles.headingText}`}>vote</p>
          <div className={styles.featureDescription}>
            Too tired to cook in words but still want to follow up the
            discussion? Upvote the posts! (or downvote!)
          </div>
        </div>
      </div>

      {/* Classes feature */}
      <div className={`${styles.featureContainer} ${styles.lastFeature}`}>
        <div className={styles.featureText}>
          <p className={`${styles.headingText}`}>classes</p>
          <div className={styles.featureDescription}>
            Exam prep? Assignment help? Survival tips? Professor complaints?
            It’s time to cook your classes and be as genuine as possible.
          </div>
        </div>
        <img
          className={styles.featureImage}
          alt=""
          src="/assets/features/classes.png"
        />
      </div>
    </>
  );
};
