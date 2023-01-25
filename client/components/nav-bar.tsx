import styles from '../styles/nav-bar.module.css'

export default function navBar() {


    return (
        <div className={styles.navBar}>
            <li className={styles.pictureThis}> <h2 className={styles.gradientText}>Picture This</h2> </li>
            <li className={styles.search}> <input className={styles.textBox} type='text' placeholder='Find Something Fun ...' /> </li>
            <ul className={styles.navLinks}>
                <li className={styles.link}> <h3 className='right-side'>Movies</h3></li>
                <li className={styles.link}> <h3 className='right-side'>Television</h3></li>
                <li className={styles.link}> <h3 className='right-side'>Register</h3></li>
                <li className={styles.link}> <h3 className='right-side'>Log In</h3></li>
            </ul>
        </div>
    )
}