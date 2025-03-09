// components/sections/Features.tsx
import { useState } from "react";
import styles from "../../styles/LandingFrame.module.css";
import newStyles from "../../styles/refactored.module.css";

export const Features = () => {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [upvoteHovered, setUpvoteHovered] = useState(false);
  const [downvoteHovered, setDownvoteHovered] = useState(false);
  const votenum = 23;

  const handleUpvoteClick = () => {
    setUpvoted(!upvoted);
    if (downvoted) setDownvoted(false);
  };

  const handleDownvoteClick = () => {
    setDownvoted(!downvoted);
    if (upvoted) setUpvoted(false);
  };

  return (
    <>
      <div className={styles.slide31}>
        <div className={styles.soHowDoesThisWorkWrapper}>
          <div className={styles.soHowDoesContainer}>
            <p className={`${styles.soHowDoes} ${styles.headingText}`}>
              so, how does <br /> this work?
            </p>
          </div>
        </div>
      </div>

      {/* Cook Feature */}
      <div className={newStyles.featureContainer}>
        <div className={newStyles.featureText}>
          <p className={`${newStyles.headingText}`}>cook</p>
          <div className={newStyles.featureDescription}>
            Want to share dramas, complain about the communal bathrooms, or get
            help on your CSE232 assignments? Select a space and cook a post.
          </div>
        </div>
        <img
          className={newStyles.featureImage}
          alt=""
          src="/assets/features/cook.png"
        />
      </div>

      {/* Reply Feature */}
      <div className={newStyles.featureContainer}>
        <img
          className={`${newStyles.featureImage} ${newStyles.featureImageReverse}`}
          alt=""
          src="/assets/features/reply.png"
        />
        <div className={newStyles.featureText}>
          <p className={`${newStyles.headingText}`}>reply</p>
          <div className={newStyles.featureDescription}>
            Can’t find a clean toilet seat? Want to help your classmates because
            the prof doesn’t care? Reply and throw yourself into the discussion.
          </div>
        </div>
      </div>

      {/* Voting Feature */}
      <div className={newStyles.featureContainer}>
        <img
          className={`${newStyles.featureImage} ${newStyles.featureImageReverse}`}
          alt=""
          src="/assets/features/vote.png"
        />
        <div className={newStyles.featureText}>
          <p className={`${newStyles.headingText}`}>vote</p>
          <div className={newStyles.featureDescription}>
            Too tired to cook in words but still want to follow up the
            discussion? Upvote the posts! (or downvote!)
          </div>
        </div>
      </div>

      {/* Classes feature */}
      <div className={newStyles.featureContainer}>
        <div className={newStyles.featureText}>
          <p className={`${newStyles.headingText}`}>classes</p>
          <div className={newStyles.featureDescription}>
            Exam prep? Assignment help? Survival tips? Professor complaints?
            It’s time to cook your classes and be as genuine as possible.
          </div>
        </div>
        <img
          className={newStyles.featureImage}
          alt=""
          src="/assets/features/classes.png"
        />
      </div>
    </>
  );
};
