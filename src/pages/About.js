import styles from './Pages.module.css';

const About = () => {
    return (
        <div className={styles.Page}>
            <img className={styles.Img} src={process.env.PUBLIC_URL + '/images/profile-1.webp'} alt='Daniel Stewart' title='Daniel Stewart' />
            <h3 className={styles.Header}>About Me</h3>
            <p className={styles.Text}>
                    My name is Daniel Stewart. I am a Full stack Web Developer and recent Graduate from the University of Washington Full Stack Coding Boot Camp.
                    <br />
                    My career so far has primarily consisted of working in a retail environment, where I gained a passion for providing great Customer Service.
                    I have always had a deep love of computers, electronics, and software. I love analyzing problems and creating novel solutions.
                    I strive to meet or exceed expectations, whether they are the expectations of a customer, a supervisor, or even my own.
                    I'm passionate about learning new things and gaining a new perspective, allowing me to solve complex and everyday problems. I consider myself to be a self-starter, who is highly motivated
                    and able to succeed working alone or on a team. 
                    <br />
                    In my free time I enjoy hiking, gourmet cooking, and nature photography.
            </p>
        </div>
    )
}

export default About;