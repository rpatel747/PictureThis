import NavBar from '../components/nav-bar'
import LargeFrame from '../components/large-frame'
import MovieList from '../components/movie-list'
import ContactForm from '../components/contact-form'

export default function Home() {


    return (
        <>
            <NavBar />
            <LargeFrame
            wallpaper='https://www.gannett-cdn.com/presto/2022/10/18/USAT/c090a175-75ac-40cc-b52f-5607ee5e1419-Quiet.jpeg?crop=6047,3402,x0,y303&width=3200&height=1801&format=pjpg&auto=webp'
            coverImage='https://m.media-amazon.com/images/M/MV5BYTE1MmZiMWYtYTFmZi00YjA3LWI2ODgtMWFlNWYxZjdmNGE3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_FMjpg_UX1000_.jpg'
            description='War breaks out in Germany in 1914. Paul Bäumer and his classmates quickly enlist in the army to serve their fatherland. No sooner are they drafted than the first images from the battlefield show them the reality of war.'
            />
            <MovieList
            sectionHeading='Trending'
            />
            <MovieList
            sectionHeading='New'
            />
            <ContactForm />
        </>
    )




}