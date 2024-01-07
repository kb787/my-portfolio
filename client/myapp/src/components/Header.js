import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (  
    <div className = "Header">
        <nav className = "navElements">
            <ScrollLink to = "about" className = "linkingHeader" smooth = {true} duration = {600}>
             <p className = "navItem">About</p>
             </ScrollLink>
             <ScrollLink to = "skill" className = "linkingHeader" smooth = {true} duration = {600} >
             <p className = "navItem">Skills</p>
             </ScrollLink>
             <ScrollLink to = "project" className = "linkingHeader" smooth = {true} duration = {600}>
             <p className = "navItem">Projects</p>
             </ScrollLink>
             <ScrollLink to = "contact" className = "linkingHeader" smooth = {true} duration = {600}>
             <p className = "navItem">Contact</p>
             </ScrollLink>
        </nav>
    </div>
  )  
}

export default Header ;