import styles from '../styles/contact-form.module.css'


export default function ContactForm() {

    return (

        <>
            <form className={styles.contactForm}>
                <label>
                    Title:
                    <input type="text" name="title" />
                </label>
                <br/>
                <label>
                    Type:
                    <select name="media-type">
                        <option value="Movie">Movie</option>
                        <option value="Television">Television</option>
                    </select>
                </label>
                <br />
                <label>
                    Release Year:
                    <input type="text" name="release-year" />
                </label>
                <br />
                <label>
                    Genre:
                    <input type="text" name="genre" />
                </label>


            </form>



        </>


    )




}