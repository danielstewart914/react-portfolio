import styles from './Navigation.module.css';

const Navbar = ( { currentPage, changePage } ) => {
    return (
        <nav className={styles.Nav}>
            <button 
                className={ currentPage === 'about' ? styles.Selected : styles.Button} 
                onClick={ () => changePage( 'about' ) }
            >
                About Me
            </button>
            <button 
                className={ currentPage === 'portfolio' ? styles.Selected : styles.Button} 
                onClick={ () => changePage( 'portfolio' ) }
            >
                Portfolio
            </button>
            <button 
                className={ currentPage === 'contact' ? styles.Selected : styles.Button} 
                onClick={ () => changePage( 'contact' ) }
            >
                Contact Me
            </button>
            <button 
                className={ currentPage === 'resume' ? styles.Selected : styles.Button}
                onClick={ () => changePage( 'resume' ) } 
                title='Resumé'
            >
                Resumé
            </button>
        </nav>
    )
}

export default Navbar;