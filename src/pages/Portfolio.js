import styles from './Pages.module.css';
import Project from '../components/Project';

const projects = require( '../data/projects.json' );

const Portfolio = () => {
    const displayProjects = () =>  projects.map( project => <Project {...project} /> ) 

    return (
        <div className={styles.Page}>
            <h3 className={styles.Header}>Portfolio</h3>
            <p className={styles.Text}>
                Here is a selection of my work.<br />
                Click on any title to view a live version of the application.
                Click on the GitHub logo to view the source code on GitHub.<br />
                Feedback is always welcome and I look forward to hearing from you soon.
            </p>
            <div className={styles.Container}>
                { displayProjects() }
            </div>
        </div>
    )
}

export default Portfolio;