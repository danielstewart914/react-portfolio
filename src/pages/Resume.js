import styles from './Pages.module.css';

const Resume = () => {
    return (
        <div className={styles.Page}>
            <h3  className={styles.Header}>Resumé</h3>
            <div>
                <h4>Front-End Proficiencies</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Handlebars</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>Materialize</li>
                </ul>
            </div>
            <div>
            <h4>Back-End Proficiencies</h4>
                <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>REST APIs</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>GraphQL</li>
                </ul>
            </div>
            <a className='Button' href="https://docs.google.com/document/d/1_bgLvFgLEJa_7i7W_jyyEYFnE18nEYasB5B036jXT-8/edit?usp=sharing"  title="Resumé" target="_blank" rel="noreferrer">Download My Resumé</a>
        </div>
    )
}

export default Resume;