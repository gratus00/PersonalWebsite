import styles from "../styles/contacts.module.css";
import buttonStyle from "../styles/button.module.css";
import React from "react";

const Contacts = () => {
    return <div className={styles.contacts}  id="contacts-section">
        <h1>Contacts</h1>
        <p>You can find me online in the following places:</p>

        <br />

        <div>
          <a href="https://www.linkedin.com/in/shakir-abd-000/">
            <img src={"/linkedin.png"} width={50} height={50}/>
          </a>

          <a href="https://github.com/gratus00">
            <img src={"/github.png"} width={50} height={50}/> 
          </a>
          <br /> <br />
        </div>

        <p>You can download my resume here!</p>

        <br />
        <div>
            <div className="invisible-spacer" />
            <a  href="/Resume.pdf" download="Abdullayev Shakir Resume.pdf">
              <button  className={buttonStyle.customButton}>Download Resume</button>
            </a>
        </div>

    </div>
};
export default Contacts;