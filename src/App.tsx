import { useState } from 'react';
import styles from './LandingFrame.module.css';

function App() {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  // States for hover effects
  const [upvoteHovered, setUpvoteHovered] = useState(false);
  const [downvoteHovered, setDownvoteHovered] = useState(false);

  const votenum = 23;

  // Handlers for upvote and downvote clicks
  const handleUpvoteClick = () => {
    setUpvoted(!upvoted); // Toggle the upvote state
    if (downvoted) setDownvoted(false); // Reset downvote if upvoted
  };

  const handleDownvoteClick = () => {
    setDownvoted(!downvoted); // Toggle the downvote state
    if (upvoted) setUpvoted(false); // Reset upvote if downvoted
  };
  const handleJoinWaitlistClick = () => {
    window.open('https://forms.gle/XgjRixUwhZ3ZzkLe9', '_blank');
  };
  const handleInstaClick = () => {
    window.open('https://www.instagram.com/joinricefield/', '_blank');
  }
  const handleFarmersDictClick = () => {
    window.open('https://joinricefield.notion.site/Farmers-Dictionary-1043b99ded3180a68889ec80aa0bace7', '_blank');
  }
  const handlePrototypeClick = () => {
    window.open('https://www.figma.com/proto/XSI4ZVnYeubv5XS0fZuwvB/ricefield---editor?node-id=4225-18146&node-type=frame&t=MvhnGZxlXF5xTW4g-1&scaling=scale-down-width&content-scaling=fixed&page-id=4037%3A16555&starting-point-node-id=4248%3A15497', '_blank');
  }
  const handleMeetFoundersClick = () => {
    window.open('https://joinricefield.notion.site/Headfarmers-Who-14e3b99ded318062a84ae848bac1cc32', '_blank');
  }
  return (
    <div className={styles.landingFrame}>
      <div className={styles.headerStretch}>
        <div className={styles.headerLanding}>
          <div className={styles.ricefieldLogo}>
            <img className={styles.tpMainLogoNoSloganGreen} alt="" src="/public/assets/tp_Main_Logo_no_slogan_green_text_1.svg"/>
          </div>
          <div className={styles.headerButtons}>
            <div className={styles.groupContainer}>
              <div className={styles.viewPrototype}>
                <b className={styles.b}
                onClick={handleFarmersDictClick}>Farmers' Dictionary</b>
              </div>
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.viewPrototype}>
                <b className={styles.b2}
                onClick={handlePrototypeClick}>View Prototype</b>
              </div>
            </div>
            <div 
            className={styles.joinWaitlistButton2}
            onClick={handleJoinWaitlistClick}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleJoinWaitlistClick()}>
              <div className={styles.joinWaitlistButton1}>
                <div className={styles.joinTheWaitlist}>Join the Waitlist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slide7Parent}>
        <div className={styles.slide7}>
          <div className={styles.frameParent}>
            <div className={styles.whatsCookingOnCampusWrapper}>
              <div className={styles.whatsCookingOn}>what’s cooking on campus?</div>
            </div>
            <div className={styles.fromClassesToClubsFromDoWrapper}>
              <div className={styles.fromClassesTo}>{`From classes to clubs, from dorms to dining halls, from gyms to stadiums, Ricefield is a space for you, college students, to see and get updated on what the heck is happening in your college. You can cook (or get cooked?) everything and anything however you want. `}</div>
            </div>
          </div>
        </div>
        <div className={styles.slide8}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.whatTheHeckIsRicefieldWrapper}>
                <div className={styles.whatTheHeck}>what the heck is ricefield?</div>
              </div>
              <div className={styles.theBestWayToThinkOfRicefWrapper}>
                <div className={styles.theBestWayContainer}>
                  <span className={styles.theBestWayContainer1}>
                    <p className={styles.theBestWay}>The best way to think of Ricefield is that: if X and Reddit decided to have a baby together, that would be us :)</p>
                    <p className={styles.theBestWay}>&nbsp;</p>
                    <p className={styles.theBestWay}>Well, Elon obviously ain’t interested in that, so three college students decided to build Ricefield instead.</p>
                  </span>
                </div>
              </div>
            </div>
            <img className={styles.frameChild} alt="" src="/public/assets/Group_1.png" />
          </div>
        </div>
        <div className={styles.slide31}>
          <div className={styles.soHowDoesThisWorkWrapper}>
            <div className={styles.soHowDoesContainer}>
              <p className={styles.soHowDoes}>so, how does this work?</p>
            </div>
          </div>
        </div>
        <div className={styles.slide32}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.cookWrapper}>
                <div className={styles.cook}>cook</div>
              </div>
              <div className={styles.wantToShareDramasComplainWrapper}>
                <div className={styles.wantToShare}>Want to share dramas, complain about the communal bathrooms, or get help on your CSE232 assignments? Select a space and cook a post.</div>
              </div>
            </div>
            <img className={styles.frameItem} alt="" src="/public/assets/Group_10.png" />
          </div>
        </div>
        <div className={styles.slide321}>
          <div className={styles.groupParent}>
            <img className={styles.frameItem} alt="" src="/public/assets/reply_1.png" />
            <div className={styles.frameParent2}>
              <div className={styles.replyWrapper}>
                <div className={styles.cook}>reply</div>
              </div>
              <div className={styles.cantFindACleanToiletSeatWrapper}>
                <div className={styles.cantFindA}>Can’t find a clean toilet seat? Want to help your classmates because the prof doesn’t care? Reply and throw yourself into the discussion.</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.slide321}>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.recookWrapper}>
                <div className={styles.cook}>recook</div>
              </div>
              <div className={styles.wantToShareDramasComplainWrapper}>
                <div className={styles.wantToShare}>Want your friends to also join the discussion? Recook it in your own words, thoughts, or perspectives to add more tea to the post.</div>
              </div>
            </div>
            <img className={styles.recook3Icon} alt="" src="/public/assets/recook_3.png" />
          </div>
        </div>
        <div className={styles.slide34}>
          <div className={styles.groupContainer}>
            <div className={styles.putInYourVoteParent}>
              <div className={styles.putInYour}>put in your vote!</div>
              <div className={styles.groupDiv}>
                <img className={styles.groupChild} alt="" src="/public/assets/Group_193.svg" />
                <div className={styles.vote}>
                  <img
                    className={styles.upvoteIcon}
                    alt="Upvote"
                    src={upvoted ? "/public/assets/state_chosen.svg" : (upvoteHovered ? "/public/assets/state_hover.svg" : "/public/assets/state_default.svg")}
                    onMouseEnter={() => setUpvoteHovered(true)} // Set hover state to true
                    onMouseLeave={() => setUpvoteHovered(false)} // Reset hover state to false
                    onClick={handleUpvoteClick}
                  />
                  <b className={styles.num}>{upvoted ? votenum + 1 : (downvoted ? votenum - 1 : votenum)}</b>
                  <img
                    className={styles.downvoteIcon}
                    alt="Downvote"
                    src={downvoted ? "/public/assets/downvote_chosen.svg" : (downvoteHovered ? "/public/assets/downvote_hover.svg" : "/public/assets/downvote_default.svg")}
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
                  <div className={styles.votes}>upvote?</div>
                  <div className={styles.votes}>downvote!</div>
                </div>
              </div>
              <div className={styles.tooTiredToCookInWordsButWrapper}>
                <div className={styles.tooTiredToContainer}>
                  <span className={styles.theBestWayContainer1}>
                    <p className={styles.theBestWay}>Too tired to cook in words but still</p>
                    <p className={styles.theBestWay}>want to follow up on the discussion?</p>
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
        <div className={styles.slide35}>
          <div className={styles.frameParent6}>
            <div className={styles.frameParent7}>
              <div>
                <div>
                  <p className={styles.cookClasses}>cook your classes!</p>
                </div>
              </div>
              <div className={styles.wantToShareDramasComplainWrapper}>
                <div className={styles.examPrepAssignment}>Exam prep? Assignment help? Survival tips? Professor complaints? It’s your chance to cook these classes communities!</div>
              </div>
            </div>
            <img className={styles.frameItem} alt="" src="/public/assets/Group_197.png" />
          </div>
        </div>
        <div className={styles.slide10}>
          <div className={styles.frameParent8}>
            <div className={styles.weAreLaunchingNextSemesterWrapper}>
              <div>
                <p className={styles.weAreLaunching}>we are launching next semester!</p>
              </div>
            </div>
            <div className={styles.itsGonnaBeLitToBeOneOfWrapper}>
              <div>
                <p className={styles.theBestWay}>
                  <b className={styles.theBestWay}>It’s gonna be lit to be one of the <span className={styles.veryfirst}>very first</span> farmers on Ricefield, so <span className={styles.veryfirst}>join the ride</span> now!</b>
                </p>
                <p className={styles.theBestWay}>&nbsp;</p>
                <p className={styles.theBestWay}>In the meantime, take sometime to tour your future cooking space!</p>
              </div>
            </div>
            <div className={styles.joinWaitlistButtonParent}>
              <div className={styles.joinWaitlistButton}>
                <div className={styles.joinWaitlistButton1}
                onClick={handleJoinWaitlistClick}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleJoinWaitlistClick()}>
                  <div className={styles.joinTheWaitlist}>Join the Waitlist</div>
                </div>
              </div>
              <div className={styles.viewPrototypeButton}
              onClick={handlePrototypeClick}>
                <div className={styles.viewPrototypeButton1}>
                  <div className={styles.joinTheWaitlist}>View Prototype</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <p className={styles.eventsContent}>No longer missing out on cool events from clubs and orgs on campus!</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.eventsWrapper}>
                  <b className={styles.events}>Anonymous</b>
                  <div>
                    <p className={styles.eventsContent}>Cook your campus as a true farmer without being seen who you really are.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.eventsWrapper}>
                  <b className={styles.appTitle}>App</b>
                  <div>
                    <p className={styles.appContent}>Late 2025.<br />Faster. Cooler.<br />More convenient.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div>
            <div className={styles.duyEverythingFarmerParent}>
              <div className={styles.duyEverythingFarmerContainer}>
                <p className={styles.duy}>duy</p>
                <p className={styles.theBestWay}>
                  <i>everything farmer</i>
                </p>
              </div>
              <div className={styles.minhOperatingFarmerContainer}>
                <p className={styles.duy}>minh</p>
                <p className={styles.theBestWay}>
                  <i>operating farmer</i>
                </p>
              </div>
              <div className={styles.lamTechnologyFarmerContainer}>
                <p className={styles.duy}>lâm</p>
                <p className={styles.theBestWay}>
                  <i>technology farmer</i>
                </p>
              </div>
              <img className={styles.groupItem} alt="" src="/public/assets/Group_202.svg" />
            </div>
            <img className={styles.mainLogoNoSlogan1} alt="" src="/public/assets/Main_Logo_no_slogan_1.svg" />
          </div>
          <div className={styles.footerRight}>
            <div className={styles.furtherInformationParent}>
              <b className={styles.furtherInformation}>Further Information</b>
              <div className={styles.landingFooterButtonParent}>
                <div className={styles.landingFooterButton}>
                  <div>
                    <b className={styles.footerButton}
                    onClick={handleJoinWaitlistClick}>Join the Waitlist</b>
                  </div>
                </div>
                <div className={styles.landingFooterButton}>
                  <div>
                    <b className={styles.footerButton1}
                    onClick={handleMeetFoundersClick}>Meet the Headfarmers (Founders)</b>
                  </div>
                </div>
                <div className={styles.landingFooterButton}>
                  <div>
                    <b className={styles.footerButton2}
                    onClick={handleFarmersDictClick}>Farmers' Dictionary</b>
                  </div>
                </div>
                <div className={styles.landingFooterButton}>
                  <div>
                    <b className={styles.footerButton3}
                    onClick={handlePrototypeClick}>View Prototype</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerBottomRight}>
              <div className={styles.footerSocialMedia}>
                <img className={styles.instaLogoIcon} alt="" src="/public/assets/insta_logo.svg" onClick={handleInstaClick}/>
                {/* <img className={styles.xLogoIcon} alt="" src="/public/assets/x_logo.svg" />
                <img className={styles.tiktokLogoIcon} alt="" src="/public/assets/tiktok_logo.svg" /> */}
              </div>
              <div className={styles.copyright2024RicefieldAllWrapper}>
                <div className={styles.copyright2024Ricefield}>Copyright 2024 Ricefield. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default App
