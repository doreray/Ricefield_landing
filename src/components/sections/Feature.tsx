// components/sections/Features.tsx
import React, { useState } from "react";
import styles from "../../styles/LandingFrame.module.css";

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
              so, how does this work?
            </p>
          </div>
        </div>
      </div>
      {/* Cook Feature */}
      <div className={styles.slide32}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.cookWrapper}>
              <div className={`${styles.cook} ${styles.headingText}`}>cook</div>
            </div>
            <div className={styles.wantToShareDramasComplainWrapper}>
              <div className={`${styles.wantToShare} ${styles.bodyText}`}>
                Want to share dramas, complain about the communal bathrooms, or
                get help on your CSE232 assignments? Select a space and cook a
                post.
              </div>
            </div>
          </div>
          <img
            className={styles.frameItem}
            alt=""
            src="/public/assets/Group_10.png"
          />
        </div>
      </div>
      {/* Reply Feature */}
      <div className={styles.slide321}>
        <div className={styles.groupParent}>
          <img
            className={styles.frameItem}
            alt=""
            src="/public/assets/reply_1.png"
          />
          <div className={styles.frameParent2}>
            <div className={styles.replyWrapper}>
              <div className={`${styles.cook} ${styles.headingText}`}>
                reply
              </div>
            </div>
            <div className={styles.cantFindACleanToiletSeatWrapper}>
              <div className={`${styles.cantFindA} ${styles.bodyText}`}>
                Can’t find a clean toilet seat? Want to help your classmates
                because the prof doesn’t care? Reply and throw yourself into the
                discussion.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Recook Feature */}
      <div className={styles.slide321}>
        <div className={styles.frameParent3}>
          <div className={styles.frameParent4}>
            <div className={styles.recookWrapper}>
              <div className={`${styles.cook} ${styles.headingText}`}>
                recook
              </div>
            </div>
            <div className={styles.wantToShareDramasComplainWrapper}>
              <div className={`${styles.wantToShare} ${styles.bodyText}`}>
                Want your friends to also join the discussion? Recook it in your
                own words, thoughts, or perspectives to add more tea to the
                post.
              </div>
            </div>
          </div>
          <img
            className={styles.recook3Icon}
            alt=""
            src="/public/assets/recook_3.png"
          />
        </div>
      </div>
      {/* Voting Feature */}
      <div className={styles.slide34}>
        <div className={styles.groupContainer}>
          <div className={styles.putInYourVoteParent}>
            <div className={styles.putInYour}>put in your vote!</div>
            <div className={styles.groupDiv}>
              <img
                className={styles.groupChild}
                alt=""
                src="/public/assets/Group_193.svg"
              />
              <div className={styles.vote}>
                <img
                  className={styles.upvoteIcon}
                  alt="Upvote"
                  src={
                    upvoted
                      ? "/public/assets/state_chosen.svg"
                      : upvoteHovered
                      ? "/public/assets/state_hover.svg"
                      : "/public/assets/state_default.svg"
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
                      ? "/public/assets/downvote_chosen.svg"
                      : downvoteHovered
                      ? "/public/assets/downvote_hover.svg"
                      : "/public/assets/downvote_default.svg"
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
                <span className={styles.theBestWayContainer1}>
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
    </>
  );
};
