import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedinIn,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons" ;
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons" ;
import { Element } from "react-scroll";
import MessageForm from "./MessageForm";

const Contact = () => {
  return (
   <Element name = "contact" className="element">
    <div className = "Card4">
    <h3 className = "card4Heading">
        Contact me on :- 
    </h3>
    <br/>
    <br/>
    <div className = "messageContainer">
    <MessageForm/>
    </div>
    <br/>
    <div className = "contactSet">
         <a href={"https://www.linkedin.com/in/karan-bhanushali-bb66ab225/"}  target="_blank" rel="noopener noreferrer" >
         <FontAwesomeIcon icon={faLinkedinIn} className = "icons" />
         </a>
         <a href={"https://twitter.com/karanbhanu787"}  target="_blank" rel="noopener noreferrer" >
         <FontAwesomeIcon icon={faTwitter} className = "icons" />
         </a>
         <a href={"https://www.instagram.com/karan_____787/"}  target="_blank" rel="noopener noreferrer" >
         <FontAwesomeIcon icon={faInstagram} className = "icons" /> 
         </a> 
    </div>
    <br/>
         <p className = "iconItemPara">Email :- karanbhanu787@gmail.com</p>
         <br/>
         <p className = "iconItemPara">Mobile :- +917400314066</p>
</div>
</Element> 
  )
}

export default Contact ;