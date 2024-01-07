import nodejsLogo from 'D:/myPortfolio/client/myapp/src/images/nodejsLogo.png'
import javaLogo from 'D:/myPortfolio/client/myapp/src/images/javaLogo.png' ;
import pythonLogo from 'D:/myPortfolio/client/myapp/src/images/pythonLogo.png' ; 
import jsLogo from 'D:/myPortfolio/client/myapp/src/images/jsLogo.png' ;
import nextLogo from 'D:/myPortfolio/client/myapp/src/images/nextLogo.png' ;
import springbootLogo from 'D:/myPortfolio/client/myapp/src/images/springbootLogo.png' ;
import dockerLogo from 'D:/myPortfolio/client/myapp/src/images/dockerLogo.png' ;
import { Element } from 'react-scroll';

const Skill = () => {
    return (
        <Element name = "skill" className= "element">
        <div className = "Card2">
        <br/>
        <br/>
          <h3 className = "card2Heading">Skills</h3>
                 <div className="card2Cards">
                     <div> 
                       <p className="card2CardPara">
                          <ul className = "frontendSet"> 
                            <li> 
                            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-F0Zo6AmLf6WuYzCsBVRSrkm2FrnovvsXA&usqp=CAU" className = "techImages"></img>
                            </li>
                            <br/>
                            <li>
                            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK39y_2sijQ5RC-mcLfKyNkhxMqJ_oWGoR9aYyG8C935_0GjilWxzs-ZejRhmrMPSCmkY&usqp=CAU" className = "techImages"></img>
                            </li>
                            <br/>
                            <li>
                              <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-_9aISSByryyHRwXZ_vC0GM8NdnZKXcuqQ&usqp=CAU" className = "techImages"></img>
                            </li>
                          </ul>  
                          <br/> 
                       </p>
                     </div>
                   </div> 
                 <div className="card2Cards">
                     <div> 
                       <p className="card2CardPara">
                          <ul className = "frontendSet"> 
                            <li> 
                            <img src = {nodejsLogo} className = "techImages"></img>
                            </li>
                            <br/>
                            <li>
                            <img src = {springbootLogo} className = "techImages"></img>
                            </li>
                            <br/>
                            <li>
                              <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uZbqPU-qYfCxFG8nh79HlaYqi_czZrVItg&usqp=CAU" className = "techImages"></img>
                            </li>
                          </ul>
                          <br/>
                        </p>
                      </div>
                  </div>     
                    <div className = "card2Cards"> 
                      <div> 
                      <p className="card2CardPara">     
                          <ul className = "frontendSet">
                          <li> 
                            <img src = "https://www.mysql.com/common/logos/logo-mysql-170x115.png" className = "techImages"></img>
                            </li>
                            <br/>
                            <li>
                            <img src = {dockerLogo} className = "techImages"></img>
                            </li>
                            <br/>
                            <li>
                              <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2azlRIhR0vhoUfToZuW16b4-2AvSToKhP1w&usqp=CAU" className = "techImages"></img>
                            </li>  
                          </ul>  
                          <br/>
                       </p>
                     </div>  
                   </div>   
                   <div className = "card2Cards"> 
                      <div> 
                      <p className="card2CardPara">     
                          <ul className = "frontendSet">
                          <li> 
                            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ496s2U24vJ6EKdYD6f1VAOnhpUv9AstkJBA&usqp=CAU" className = "techImages"></img>
                            </li>
                            <br/>
                            <li>
                            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRA1QEXEy58uCo0VDQ8xUJuOWiJKnnUOag6Q&usqp=CAU" className = "techImages"></img>
                            </li>
                            <br/>
                            <li>
                              <img src = {javaLogo} className = "techImages"></img>
                            </li>  
                          </ul>  
                          <br/>
                       </p>
                     </div>  
                   </div> 
                   <div className = "card2Cards"> 
                      <div> 
                      <p className="card2CardPara">     
                          <ul className = "frontendSet">
                          <li> 
                            <img src = {nextLogo} className = "techImages"></img>
                            </li>
                            <br/>
                            <li>
                            <img src = {jsLogo} className = "techImages"></img>
                            </li>
                            <br/>
                            <li>
                              <img src = {pythonLogo} className = "techImages"></img>
                            </li>  
                          </ul>  
                          <br/>
                       </p>
                     </div>  
                   </div> 
      </div>
      </Element>
    )
}

export default Skill ;