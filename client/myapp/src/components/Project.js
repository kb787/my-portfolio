import ExternalLinks from './ExternalLinks';
import projectImage1 from 'D:/myPortfolio/client/myapp/src/images/projectImage1.png' ;
import projectImage2 from 'D:/myPortfolio/client/myapp/src/images/projectImage2.png' ;
import projectImage3 from 'D:/myPortfolio/client/myapp/src/images/projectImage3.png' ;
import projectImage4 from 'D:/myPortfolio/client/myapp/src/images/projectImage4.png' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact,faNodeJs,faGithub,faPython} from "@fortawesome/free-brands-svg-icons" ;
import {faDatabase} from "@fortawesome/free-solid-svg-icons" ;
import { Element } from 'react-scroll';
const Project = () => {
    return (
        <Element name = "project" className= "element">
        <div className = "Card3">
        <h3 className = "card3Heading">
              My Personal projects
       </h3>      
              <br/>
              <br/>
           <ul className = "projectInformationSet">
               <li className = "informationSetItem">
                   <img className = "projectInfoImage" src = {projectImage1}></img> 
               </li>
               <li className = "informationSetItem">
                  <div className = "informationCard">
                       <p className = "cardInfoHeading">SkillHive</p>
                       <p className = "cardInfoDescription">A platform made for empowering talents worldwide, and connecting skilled professionals with diverse opportunities, fostering a global community of innovation and success</p>
                       <ul className = "iconCollection">
                          <li className = "iconCollectionItem">
                              <p className = "infoSubPara">TechStack :-</p>
                          </li>
                          <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faReact}  className = "techIcon" /> 
                           </li> 
                           <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faNodeJs}  className = "techIcon" /> 
                           </li>
                           <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faDatabase}  className = "techIcon" /> 
                           </li>
                           <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faPython}  className = "techIcon" /> 
                           </li>
                       </ul>
                       <div className = "linkSet">
                           <FontAwesomeIcon icon = {faGithub} className = "linkIconStyling" />
                           <ExternalLinks url = "https://github.com/kb787/SkillHive" label = "Github" className = "projectLinking" /> 
                       </div>
                   </div>      
               </li>
           </ul>
           <br/>
           <ul className = "projectInformationSet">
               <li className = "informationSetItem">
                   <img className = "projectInfoImage" src = {projectImage2}></img> 
               </li>
               <li className = "informationSetItem">
                  <div className = "informationCard">
                       <p className = "cardInfoHeading">Stellenangebot</p>
                       <p className = "cardInfoDescription">An Application made for meaningful connections, land your dream job, showcase your expertise, and communicate effortlessly  for seamless networking, job applications, profile creation, and messaging</p>
                       <ul className = "iconCollection">
                          <li className = "iconCollectionItem">
                              <p className = "infoSubPara">TechStack :-</p>
                          </li>
                          <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faReact}  className = "techIcon" /> 
                           </li> 
                           <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faNodeJs}  className = "techIcon" /> 
                           </li>
                           <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faDatabase}  className = "techIcon" /> 
                           </li>
                           <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faPython}  className = "techIcon" /> 
                           </li>
                       </ul>
                       <div className = "linkSet">
                           <FontAwesomeIcon icon = {faGithub} className = "linkIconStyling" />
                           <ExternalLinks url = "https://github.com/kb787/Stellenangebot" label = "Github" className = "projectLinking" /> 
                       </div>
                   </div>      
               </li>
           </ul>
           <br/>
           <ul className = "projectInformationSet">
               <li className = "informationSetItem">
                   <img className = "projectInfoImage" src = {projectImage3}></img> 
               </li>
               <li className = "informationSetItem">
                  <div className = "informationCard">
                       <p className = "cardInfoHeading">E-Learning Portal</p>
                       <p className = "cardInfoDescription">Unlock new opportunities behind bars with the e-learning portal, providing incarcerated individuals a transformative educational experience for personal growth and skill development</p>
                       <ul className = "iconCollection">
                          <li className = "iconCollectionItem">
                              <p className = "infoSubPara">TechStack :-</p>
                          </li>
                          <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faReact}  className = "techIcon" /> 
                           </li> 
                           <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faNodeJs}  className = "techIcon" /> 
                           </li>
                           <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faDatabase}  className = "techIcon" /> 
                           </li>
                       </ul>
                       <div className = "linkSet">
                           <FontAwesomeIcon icon = {faGithub} className = "linkIconStyling" />
                           <ExternalLinks url = "https://github.com/kb787/E-Learning-Portal" label = "Github" className = "projectLinking" /> 
                       </div>
                   </div>      
               </li>
           </ul>
           <br/>
           <ul className = "projectInformationSet">
               <li className = "informationSetItem">
                   <img className = "projectInfoImage" src = {projectImage4}></img> 
               </li>
               <li className = "informationSetItem">
                  <div className = "informationCard">
                       <p className = "cardInfoHeading">Chatbot</p>
                       <p className = "cardInfoDescription">Empowering seamless interaction through a versatile AI chatbot, adept at answering text queries and crafting dynamic visual responses.</p>
                       <ul className = "iconCollection">
                          <li className = "iconCollectionItem">
                              <p className = "infoSubPara">TechStack :-</p>
                          </li>
                          <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faReact}  className = "techIcon" /> 
                           </li> 
                           <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faNodeJs}  className = "techIcon" /> 
                           </li>
                           <li className = "iconCollectionItem">
                                 <FontAwesomeIcon icon = {faDatabase}  className = "techIcon" /> 
                           </li>
                       </ul>
                       <div className = "linkSet">
                           <FontAwesomeIcon icon = {faGithub} className = "linkIconStyling" />
                           <ExternalLinks url = "https://github.com/kb787/Chatbot-Using-MERN" label = "Github" className = "projectLinking" /> 
                       </div>
                   </div>      
               </li>
           </ul>  
   </div>
   </Element>
    )
    
}

export default Project ;