import {Link as ScrollLink,Element} from 'react-scroll'


const About = () => {
   return (
   <Element name = "about" className= "element"> 
    <div className="Card1">
    <ul className = "cardSet">
        <li className = "container1">
           <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtd0soCSRdpo8Y5klekJdABh4emG2P29jwg&usqp=CAU" className = "containerImage"></img>
        </li>              
        <li className = "container2"> 
          <h3 className="containerTitle">Karan Bhanushali</h3>
             <p className="containerPara">
             Hello everyone, I am Karan Bhanushali
             an enthusiastic software developer.I hold an
             expertise in full stack development aiming for implementing my technical knowledge
             for creating a robust and a problem solving product 
             <br/>
             <br/>
             Education :- B.E in Computer Engineering(University of Mumbai)
             </p>
        </li>
    </ul> 
  </div>
  </Element> 
   ) 
}

export default About ;