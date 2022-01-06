import styles from "../styles/project.module.css";
import Image from "next/image";

const Projects = () => {
    return (
        <div className={styles.project} id="projects-section">
            <h1>Projects</h1>
            <span>click on projects to see more! <br /><br /></span>
            <div>
            <h2> <a href="https://github.com/gratus00/PersonalWebsite" target="_blank" rel="noreferrer">Personal Website</a></h2>
            <p> During the time I had on my winter break, I decided to explore an area I have 
                never explored: Web Development. Every cool computer science person I knew had their own personal website, except for me.
                It seemed to be a pretty low stake project and enabled me to express myself to an extent. 
                So I decided that I should make one of my own.

                <br /><br />

                To create the website I used <b>React</b> and <b>Next.js</b>. I chose Next.js, because it offloads most of the work
                to the server and gives clients a pre-rendered page, which enables for faster load 
                times for anyone that visits the web page. React was chosen because it allows for breaking the website
                down into individual components, work on them and reuse some of them. 

                <br /><br />

                Click the header to check out the repository!

                </p>

                <Image src="/react.png" title="React" alt="" width={48} height={48}/> <Image src="/nextjs.png" title = "Next.js" alt="" width={48} height={48}/>
            </div>
            
            
            <div>
                <h2><a href="https://github.com/gratus00/Notes-App" target="_blank" rel="noreferrer">Notes App</a></h2>
                <p> I created this app as practice for creating Android applications that had
                    persistent memory through the SharedPreferences interface of Android. 
                    The app is exactly what its name is: you take notes in it. These notes can then
                    be referred to in the future, and can be deleted by the user. 

                    <br /><br />

                    Click the header to check out the repository!

                </p>
                
                <Image src="/android.png" title="Android" alt="" width={48} height={48}/> <Image src="/java.png" title = "Java" alt="" width={48} height={48}/>
            </div>
            
            
        
            <div>
            <h2><a href="https://github.com/gratus00/Location-Saver" target="_blank" rel="noreferrer">Location Saver</a></h2>
            <p> Most people today have a device in their pocket that can connect 
                to satellites in space that by cooperating can give the person their location <b>anywhere in the world  </b>
                with an <a href="https://www.gps.gov/systems/gps/performance/accuracy/#how-accurate" target="_blank"  rel="noreferrer" style={{textDecoration: "underline"}}>accuracy of a 5 meter radius. </a> 
                That is one of the coolest thing that humans have achieved in history.
                <br /> <br />
                You know what&quot;s cooler? I made an app that uses that same technology to enable a user to save locations
                in that same pocket device.
                <br /> <br />
                To be more descriptive, I created an Android app that utilizes Google Maps API and Android&quot;s GPS libraries,
                to enable users to save a location on their phone by simply pressing and holding a location on a map. 
                <br /> <br />
                If there also happens to be an address allocated to that location in the Google Maps API, that address saved as the name of that location. 
                <br /><br />
                Feel free to click the header to check out the repository!

            </p>
            <Image src="/googlemaps.png" title="Google Maps" alt="" width={48} height={48}/> <Image src="/android.png" title="Android" alt="" width={48} height={48}/> <Image src="/java.png" title = "Java" alt="" width={48} height={48}/>
            </div>
        

            <div>
                <h2> <a href="https://github.com/gratus00/Your-Location-Snapshot" target="_blank"  rel="noreferrer">Your Location Snapshot</a> </h2>
                <p> This app was created with a certain scenario in mind: imagine you are stuck in a place
                    that you are not familiar with. You have low battery and you must give precise location information to your family 
                    or friends that are searching for you. 
                    <br /><br />
                    Well, with <b>Your Location Snapshot</b>, you can open the app that has the following information:
                    <ul>
                        <li>Latitude</li>
                        <li>Longitude</li>
                        <li>Accuracy of GPS data</li>
                        <li>Altitude</li>
                        <li>Address (if it exists).</li>
                    </ul> 

                    and just take a screenshot. It is fast, accessible, does not cost large battery power,
                    and does not require any taps on a screen. 
                    
                    <br /><br />
                    Open. Screenshot. 
                    <br /><br />
                    <br /><br />
                    Feel free to click the header to check out the repository!
                </p>
                <Image src="/googlemaps.png" title="Google Maps" alt="" width={48} height={48}/> <Image src="/android.png" title="Android" alt="" width={48} height={48}/> <Image src="/java.png" title = "Java" alt="" width={48} height={48}/>
            </div>
        </div>
    );
};

export default Projects;