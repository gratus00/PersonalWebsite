import styles from "../styles/project.module.css";

const Projects = () => {
    return (
        <div className={styles.project} id="projects-section">
            <h1>Projects</h1>
            <span>click on project titles to see more! <br /><br /></span>
            <div>
                <h2> <a href="https://devpost.com/software/exchange-guardian" target="_blank" rel="noreferrer">Exchange Guardian</a></h2>
                <p> This was a project I designed for UTM&apos;s PyJaC competition using UiPath Studio. 
                    I automated the process that bothered me quite a bit: checking all Canadian banks for USD-CAD exchange 
                    rates to get the best rate as an international student that has to work with USD. 
                    <br /><br />
                    Using UiPath Studio, UiPath web-scraping package, and the UiPath Forms I scraped data from major canadian 
                    banks, used the <a href="https://www.bankofcanada.ca/valet/docs" target="_blank"  rel="noreferrer" style={{textDecoration: "underline"}}>ValetAPI</a> of the Central Bank of Canada, got the best rates for both buying and selling USD. 
                    After making the adequate comparison, I used UiPath Forms to display the appropriate information. And by that 
                    I mean &quot;If you want to buy/sell USD, go to ____(bankname)&quot;.
                    <br /><br />
                    <b>I ended up being one of the winners for the project!</b>  
                    <br /><br />
                    Click the header to check out the devpost submission!
                    </p>
                    <img src="/uipath-vector-logo.svg" title="UiPath" alt=""  style={{width: "6rem", height: "6rem"}} />
            </div>
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

                <img src="/react.png" title="React" alt=""/> <img src="/nextjs.png" title = "Next.js" alt=""/>
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
                
                <img src="/android.png" title="Android" alt=""/> <img src="/java.png" title = "Java" alt=""/>
            </div>
            
            
        
            <div>
            <h2><a href="https://github.com/gratus00/Location-Saver" target="_blank" rel="noreferrer">Location Saver</a></h2>
            <p> Most people today have a device in their pocket that can connect 
                to satellites in space that by cooperating can give the person their location <b>anywhere in the world  </b>
                with an <a href="https://www.gps.gov/systems/gps/performance/accuracy/#how-accurate" target="_blank"  rel="noreferrer" style={{textDecoration: "underline"}}>accuracy of a 5 meter radius. </a> 
                That is one of the coolest thing that humans have achieved in history.
                <br /> <br />
                You know what&apos;s cooler? I made an app that uses that same technology to enable a user to save locations
                in that same pocket device.
                <br /> <br />
                To be more descriptive, I created an Android app that utilizes Google Maps API and Android&apos;s GPS libraries,
                to enable users to save a location on their phone by simply pressing and holding a location on a map. 
                <br /> <br />
                If there also happens to be an address allocated to that location in the Google Maps API, that address saved as the name of that location. 
                <br /><br />
                Feel free to click the header to check out the repository!

            </p>
            <img src="/googlemaps.png" title="Google Maps" alt=""/> <img src="/android.png" title="Android" alt=""/> <img src="/java.png" title = "Java" alt=""/>
            </div>
        

            <div>
                <h2> <a href="https://github.com/gratus00/Your-Location-Snapshot" target="_blank"  rel="noreferrer">Your Location Snapshot</a> </h2>
                <p> This app was created with a certain scenario in mind: imagine you are stuck in a place
                    that you are not familiar with. You have low battery and you must give precise location information to your family 
                    or friends that are searching for you. 
                    <br /><br />
                    Well, with <b>Your Location Snapshot</b>, you can open the app that has the following information:
                </p>
                    <ul>
                        <li>Latitude</li>
                        <li>Longitude</li>
                        <li>Accuracy of GPS data</li>
                        <li>Altitude</li>
                        <li>Address (if it exists).</li>
                    </ul> 
                <p>
                    and just take a screenshot. It is fast, accessible, does not cost large battery power,
                    and does not require any taps on a screen. 
                    
                    <br /><br />
                    Open. Screenshot. 
                    <br /><br />
                    <br /><br />
                    Feel free to click the header to check out the repository!
                </p>
                <img src="/googlemaps.png" title="Google Maps" alt=""/> <img src="/android.png" title="Android" alt=""/> <img src="/java.png" title = "Java" alt=""/>
            </div>
        </div>
    );
};

export default Projects;