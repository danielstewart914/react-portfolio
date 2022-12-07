import styles from './Project.module.css';

const Project = ( { title, img, tech, appLink, repoLink } ) => {

    // reduce array into string separated by vertical bars
    const reducer = ( prev, cur ) => prev + ' | ' + cur;

    // split the technology array in two and render in two rows
    const renderSubtitles = ( tech ) => {
        const middleIndex = Math.ceil( tech.length / 2 );
        const row1 = tech.slice( 0, middleIndex );
        const row2 = tech.slice( middleIndex );

        return (
            <>
                <div className={styles.Subtitle}>
                    {row1.reduce( reducer ) }
                </div>
                <div className={styles.Subtitle}>
                {row2.reduce( reducer ) }
                </div>
            </>
        )
    }

    return (
        <div className={styles.Column}>
            <div className={styles.ProjectCard} style={ { backgroundImage: `url(${process.env.PUBLIC_URL + img })` } }>
                <a className={styles.CardLink} href={appLink}>
                    <div className={styles.TitleCard}>
                        <h4 className={styles.Title}>{ title }</h4>
                        {renderSubtitles( tech )}
                    </div>
                </a>
                <a href={repoLink} className={styles.RepoCard}>
                    <img src={process.env.PUBLIC_URL + '/images/GitHub-Mark-120px-plus.webp'} alt='Github Logo' />
                    <div className={styles.Github}> GitHub</div>
                </a>
            </div>
        </div>
    )
}

export default Project;