import styles from './Main.module.css';

const Main = ( { renderPage } ) => {
    return (
        <main className={styles.Main}>
            <h2 className={styles.Banner}>Welcome to my Portfolio</h2>
            { renderPage() }
        </main>
    )
}

export default Main;