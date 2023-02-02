import styles from '../styles/large-frame.module.css'

export default function LargeFrame({wallpaper,coverImage,description}: {wallpaper:string, coverImage:string, description:string}) {

    return (

        <div>
            <img className={styles.mainPicture} src={wallpaper} alt='picture' />
            <div className={styles.informationSection}>
                <img className={styles.coverImage} src={coverImage} alt='cover' />
                <div className={styles.movieInformation}>
                    <p className={styles.movieTitle}>All Quiet on the Western Front (2022)</p>
                    <p>{description}</p>
                    <button type="button">More Information</button>
                </div>
            </div>
        </div>



    )

}
