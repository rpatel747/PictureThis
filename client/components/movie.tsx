import styles from '../styles/movie-list.module.css'

export default function Movie() {

    return (

        <div>
            <div className={styles.movie}>
                <img className={styles.moviePoster} src='https://m.media-amazon.com/images/I/71BokibfVUL.jpg' alt='Top-Gun Maverick' />
                <p className={styles.movieTitle}>Top Gun Maverick</p>
                <p className={styles.movieTitle}>2022</p>
            </div>

        </div>


    )
}