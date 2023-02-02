import styles from '../styles/movie-list.module.css'
import Movie from './movie'



export default function MovieList({sectionHeading}:{sectionHeading:String}) {

    function leftArrowClick () {
        alert('Left Arrow Clicked')
    }

    function rightArrowClick () {
        alert('Right Arrow Clicked')
    }



    return (

        <div>
            <p className={styles.sectionTitle}> {sectionHeading} </p>
            <div className={styles.panel}>
                <img className={styles.leftArrow} onClick={leftArrowClick} src='https://cdn-icons-png.flaticon.com/512/109/109618.png' alt='left arrow' />
                <div className={styles.movieList}>
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                </div>
                <img className={styles.rightArrow} onClick={rightArrowClick} src='https://cdn-icons-png.flaticon.com/512/109/109617.png' alt='right arrow' />
            </div>
        </div>




        // <div className={styles.movieList}>
        //     <img className={styles.leftArrow} src='https://cdn-icons-png.flaticon.com/512/109/109618.png' alt='left arrow' />
        //     <Movie />
        //     <Movie />
        //     <Movie />
        //     <Movie />
        //     <Movie />
        //     <img className={styles.rightArrow} src='https://cdn-icons-png.flaticon.com/512/109/109617.png' alt='right arrow' />
        // </div>

    )
}