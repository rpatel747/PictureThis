export default function landingPage() {


    return (

        <div>

            <nav>
                <div class="nav-bar">
                    <a href="#" class="#">Home</a>
                    <a href="#" className="#">Sign Up</a>
                    <a href="#" className="#">Log In</a>
                </div>
            </nav>

            <h1>Welcome to Limitless</h1>

            <div class="main-flex">

                <div class="flex-element-1">

                    <div>
                        <h2 id="landing-explore">EXPLORE</h2>
                        <h2 id="landing-share">SHARE</h2>
                        <h2 id="landing-inspire">INSPIRE</h2>
                        <h3 id="landing-blurb">Limitless is an open canvas to explore and share different interests. Upload pictures and videos, or start a blog or forum. The options are limitless.</h3>
                    </div>
                </div>

                <div class="flex-element-2">
                    <main>
                        <div class="landing-pictures">
                            <div id={"landing-picture-1"} class="tall-photo">
                                <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?cs=srgb&dl=pexels-sebastian-ervi-1763075.jpg&fm=jpg" alt="Concert" />
                            </div>
                            <div id={"landing-picture-2"}>
                                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-year-party-royalty-free-image-495479466-1541453010.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*" alt="Party" />
                            </div>
                            <div id={"landing-picture-3"}>
                                <img src="https://external-preview.redd.it/dahvsSlaAhnlvAOmy9I_CYCI2ZGfwtp8VC2q5S0EMOk.jpg?auto=webp&s=e50423186b4c52ba94abc568734864fbcc43002f" alt="Monza Celebration F1" />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <button id="sign-up-button">Sign Up!</button>
        </div>

    )



}