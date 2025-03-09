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
      <div className={styles.slide34}>
        <div className={`${styles.groupContainer} ${styles.featureFrame}`}>
          <div className={styles.putInYourVoteParent}>
            <div className={styles.putInYour}>put in your vote!</div>
            <div className={styles.groupDiv}>
              <img
                className={styles.groupChild}
                alt=""
                src="/assets/Group_193.svg"
              />
              <div className={styles.vote}>
                <img
                  className={styles.upvoteIcon}
                  alt="Upvote"
                  src={
                    upvoted
                      ? "/assets/state_chosen.svg"
                      : upvoteHovered
                      ? "/assets/state_hover.svg"
                      : "/assets/state_default.svg"
                  }
                  onMouseEnter={() => setUpvoteHovered(true)} // Set hover state to true
                  onMouseLeave={() => setUpvoteHovered(false)} // Reset hover state to false
                  onClick={handleUpvoteClick}
                />
                <b className={styles.num}>
                  {upvoted ? votenum + 1 : downvoted ? votenum - 1 : votenum}
                </b>
                <img
                  className={styles.downvoteIcon}
                  alt="Downvote"
                  src={
                    downvoted
                      ? "/assets/downvote_chosen.svg"
                      : downvoteHovered
                      ? "/assets/downvote_hover.svg"
                      : "/assets/downvote_default.svg"
                  }
                  onMouseEnter={() => setDownvoteHovered(true)} // Set hover state to true
                  onMouseLeave={() => setDownvoteHovered(false)} // Reset hover state to false
                  onClick={handleDownvoteClick}
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.upvoteDownvoteWrapper}>
              <div className={styles.cook}>
                <div className={`${styles.votes} ${styles.headingText}`}>
                  upvote?
                </div>
                <div className={`${styles.votes} ${styles.headingText}`}>
                  downvote!
                </div>
              </div>
            </div>
            <div className={styles.tooTiredToCookInWordsButWrapper}>
              <div className={styles.tooTiredToContainer}>
                <span
                  className={`${styles.theBestWayContainer1} ${styles.bodyText}`}
                >
                  <p className={styles.theBestWay}>
                    Too tired to cook in words but still
                  </p>
                  <p className={styles.theBestWay}>
                    want to follow up on the discussion?
                  </p>
                  <p className={styles.theBestWay}>&nbsp;</p>
                  <p className={styles.theBestWay}>
                    <span>{`Pineapple on pizza! `}</span>
                    <b className={styles.agree}>Agree?</b>
                  </p>
                </span>
              </div>
            </div>
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
