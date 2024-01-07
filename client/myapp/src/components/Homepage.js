import {Link} from 'react-router-dom' ;
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedinIn,faTwitter,faInstagram,faReact,faNodeJs,faGithub,faPython} from "@fortawesome/free-brands-svg-icons" ;
import {faDatabase} from "@fortawesome/free-solid-svg-icons" ;
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons"
import Header from './Header' ;
import About from './About' ;
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
const Homepage = () => {
  const [visible,setVisible] = useState(false) ;

    return (
        <div className = "Homepage">
          <Header/>
          <main>  
          <About/>
          <Skill/>
          <Project/>
          <Contact />
          </main>
        </div>
    )
}

export default Homepage ;