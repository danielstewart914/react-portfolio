import styles from './Pages.module.css';

const Resume = () => {
	return (
		<div className={styles.PageCol}>
			<h3 className={styles.Header}>Resumé</h3>
			<a
				className='Button'
				href='https://docs.google.com/document/d/1TP-hMAzE4rgEmGpgLo7xNRkmcjwgOkyykAdrzLWO86o/edit?usp=sharing'
				title='Resumé'
				target='_blank'
				rel='noreferrer'
			>
				Download My Resumé
			</a>
      <h4 className={styles.Subheader}>Proficiencies</h4>
      <div className={styles.Group}>
        <h5 className={styles.GroupTitle}>Languages</h5>
        <ul className={styles.ResumeList}>
        <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/html5.svg'}
              alt='HTML5 Icon'
              className={styles.Icon}
            />
            <p>HTML5</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/css3.svg'}
              alt='CSS3 Icon'
              className={styles.Icon}
            />
            <p>CSS3</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/javascript.svg'}
              alt='Javascript Icon'
              className={styles.Icon}
            />
            <p>JavaScript</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/typescript.svg'}
              alt='TypeScript Icon'
              className={styles.Icon}
            />
            <p>TypeScript</p>
          </li>
        </ul>
      </div>
      <div className={styles.Group}>
        <h5 className={styles.GroupTitle}>Front-End</h5>
        <ul className={styles.ResumeList}>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/react.svg'}
              alt='React Icon'
              className={styles.Icon}
            />
            <p>React</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/handlebarsdotjs.svg'}
              alt='Handlebars Icon'
              className={styles.Icon}
            />
            <p>Handlebars.js</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/bootstrap.svg'}
              alt='Bootstrap Icon'
              className={styles.Icon}
            />
            <p>Bootstrap</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/jquery.svg'}
              alt='jQuery Icon'
              className={styles.Icon}
            />
            <p>jQuery</p>
          </li>
        </ul>
      </div>
      <div className={styles.Group}>
        <h5 className={styles.GroupTitle}>Back-End</h5>
        <ul className={styles.ResumeList}>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/nodedotjs.svg'}
              alt='Node.js Icon'
              className={styles.Icon}
            />
            <p>Node.js</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/express.svg'}
              alt='Express Icon'
              className={styles.Icon}
            />
            <p>Express</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/rest.svg'}
              alt='Rest Icon'
              className={styles.Icon}
            />
            <p>RESTful APIs</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/mysql.svg'}
              alt='MySQL Icon'
              className={styles.Icon}
            />
            <p>MySQL</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/mongodb.svg'}
              alt='MongoDB Icon'
              className={styles.Icon}
            />
            <p>MongoDB</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/mongoose.svg'}
              alt='Mongoose Icon'
              className={styles.Icon}
            />
            <p>Mongoose</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + '/images/icons/graphql.svg'}
              alt='GraphQL Icon'
              className={styles.Icon}
            />
            <p>GraphQL</p>
          </li>
        </ul>
      </div>
    </div>
	);
};

export default Resume;
