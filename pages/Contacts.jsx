import styles from "../styles/contacts.module.css";
import buttonStyle from "../styles/button.module.css";
import React from "react";

const Contacts = () => {
    return <div className={styles.contacts} id="contacts-section">
        <h1>Contacts</h1>
        <p>You can find me online in the following places:</p>

        <br /><br />

        <div>
          <a href="https://www.linkedin.com/in/shakir-abd-000/" target="_blank">
            <img src={"/linkedin.png"} width={50} height={50}/>
          </a>

          <a href="https://github.com/gratus00" target="_blank">
            <img src={"/github.png"} width={50} height={50}/> 
          </a>
          </div>

        <br /> <br />
        <p>Download my resume here!</p>
        <br />

        <div>
            <div style={{textAlign: "center"}}>
              <a  href="/Resume.pdf" download="Abdullayev Shakir Resume.pdf">
                <button  className={buttonStyle.customButton}>Download Resume</button>
              </a>
            </div>
        </div>

    </div>
};

export default Contacts;