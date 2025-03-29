import styles from "./LaunchStatus.module.css";

export default function LaunchStatus() {
  const handleJoinWaitlistClick = () => {
    window.open("https://forms.gle/XgjRixUwhZ3ZzkLe9", "_blank");
  };

  return (
    <div>
      <div className={styles.gradient}></div>
      <div className={styles.container}>
        <div className={styles.headingText}>
          our beta <br /> is live!
        </div>

        <div className={styles.imgContainer}>
          <img src="/assets/msu-logo.svg" alt="" />
        </div>

        <div className={styles.headingText} style={{marginBottom: "10px"}}>
          <div className={styles.smallHeading} style={{marginTop: "40px"}}>Want to cook?</div>
        </div>

        <div className={styles.subHeading}>Your campus could be the next one!</div>

        <button className={styles.button} onClick={handleJoinWaitlistClick}>Join the waitlist</button>
      </div>
    </div>
  );
};
