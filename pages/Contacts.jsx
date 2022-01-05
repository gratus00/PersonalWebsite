import styles from "../styles/contacts.module.css";
import buttonStyle from "../styles/button.module.css";
import React from "react";

const Contacts = () => {
    return (
      <div className={styles.contacts} id="contacts-section">
          <h1>Contacts</h1>
          <h2>You can find me online in the following places:</h2>
          <div style={{textAlign: 'left'}}>
            <a href="https://www.linkedin.com/in/shakir-abd-000/"  target="_blank">
              <img src={"/linkedin.png"}/>
            </a>
            <a href="https://github.com/gratus00" target="_blank">
              <img src={"/github.png"}/> 
            </a>
          </div>

          <p></p>
          
          <h2>Here is a copy of my
            <a  href="/Resume.pdf" download="Abdullayev Shakir Resume.pdf">Resume</a>
          </h2>


      </div>
    );
};

export default Contacts;