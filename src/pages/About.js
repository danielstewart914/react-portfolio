import styles from './Pages.module.css';
import GitHubCalendar from 'react-github-calendar';

const About = () => {
  const calendarTheme = {
    level0: "#161b22",
    level1: "#0e4429",
    level2: "#006d32",
    level3: "#26a641",
    level4: "#39d353"
  };

  return (
    <div className={styles.Page}>
      <img className={styles.Img} src={process.env.PUBLIC_URL + '/images/profile-1.webp'} alt='Daniel Stewart' title='Daniel Stewart' />
      <h3 className={styles.Header}>About Me</h3>
      <div className={styles.Info}>
        <p style={{paddingBottom: '1rem'}}>
          My name is Daniel Stewart. I am a recent graduate from the University of Washington Full Stack Coding Bootcamp and a Full-Stack Web Developer.<br />
          My background in providing exceptional customer service in a retail environment, has instilled in me a passion for delivering intuitive, user-centric solutions.
          As a highly motivated web developer with a lifelong passion for science and technology, I bring a unique blend of technical expertise, creativity, and strong problem-solving abilities to every project I work on.<br />
          I am dedicated to continuously learning new tools and techniques to deliver high-quality and intuitive products. My ability to work well in a team setting, and drive success with collaboration and active participation make me an asset to any organization.
          I am confident in my ability to quickly become a valuable contributor and make a meaningful impact on your company.
        </p>
        <p style={{paddingBottom: '1rem'}}>
          TLDR: I build websites.
        </p>
        <p>
          In my free time I enjoy hiking, gourmet cooking, and nature photography.
        </p>
        <div>
          <h4 className={styles.ActivityTitle}>Coding Activity</h4>
          <GitHubCalendar style={{marginTop: '2rem', marginInline: 'auto'}} username='danielstewart914' theme={calendarTheme} />
        </div>
      </div>
    </div>
  )
}

export default About;