import React, { useEffect, useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/consultancy-logo.svg"

import Darrow from "../../assets/droparrow.svg"
import Bars from "../../assets/bars.svg"
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const Header = () => {
   

    const mobile= window.innerWidth <=768 ? true : false ;

    const [state,setState]=useState(false)
    const [opened,setOpened]=useState(false)
    const [drop,setDrop]= useState(false)

    const scrollDown=()=>{

        window.scrollY>100? setState(true) :setState(false)
       
    }
    window.addEventListener('scroll',scrollDown)

    useEffect(() => {
        const handleHashChange = () => {
          window.location.reload();
        };
    
        // Listen for hash changes and trigger a reload
        window.addEventListener('hashchange', handleHashChange);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, []);

 
  return (
    <div className={ state? css.container1 : css.container}> 
    <div className={css.wrap}> 
        <div className={css.left}>
            <img src={Logo} alt="" />
        </div>
        <div className={css.right}>
            {opened===false && mobile===true ? 
             <div  onClick={() => setOpened(true)}>
             <img  onClick={()=>setOpened(false)} className={css.bars} src={Bars} alt="" />
           </div> :
             
       
            <ul className={css.rightlist}>
             <HashLink to="/#home"> <li>Home</li> </HashLink>   
                <li>About</li>
                <div onClick={()=>setDrop(!drop)} className={css.serviceset}>  <li>Services</li>
                <img src={Darrow} alt="" /> 
                </div>
                {drop && <div onClick={()=>setDrop(false)} className={css.servicelist}>
                  <div className={css.stop}>
                  <div className={css.types}>
                        <span className={css.typehead}>Web Development</span>
                     <HashLink >  <span className={css.spans}>Static Website Development</span> </HashLink>  
                        <span className={css.spans}>Dynamic Website Development</span>
                        <span className={css.spans}>E-commerce and Web App Development</span>
                        <span className={css.spans}>Deployment Services</span>
                        <span className={css.spans}>Shopify Solutions</span>
                        <span className={css.spans}>WordPress</span>
                    </div>
                  
                    <div className={css.types}>
                        <span className={css.typehead}>Digital Branding</span>
                        <span className={css.spans}>Branding</span>
                        <span className={css.spans}>Search Engine Optimization</span>
                        <span className={css.spans}>Content Marketing</span>
                        <span className={css.spans}>Digital Marketing Trends</span>
                        <span className={css.spans}>Video Content</span>
                        <span className={css.spans}>Animation / Motion Graphics</span>
                    </div>
                    <div className={css.types}>
                        <span className={css.typehead}>UI/UX Design Service</span>
                        <span className={css.spans}>Website Design</span>
                        <span className={css.spans}>Mobile App Design</span>
                        <span className={css.spans}>Web App Design</span>
                        <span className={css.spans}>Redesigning</span>
                        <span className={css.spans}>MVP (Minimum Viable Product)</span>
                        <span className={css.spans}>Website Animation / Motion Graphics</span>
                    </div>
                  
                  </div>

                  <div className={css.sbottom}>
                  <div className={css.types}> 
                     <span className={css.typehead}>Software Development</span>
                     <HashLink  to="/swd/#csd">    <span  className={css.spans}>Custom Software Develpment</span>  </HashLink>  
                     <HashLink to="/swd/#spd">    <span className={css.spans}>Software Product Develpment</span>  </HashLink>  
                     <HashLink to="/swd/#ssm">    <span className={css.spans}>Software Support and Maintenance</span> </HashLink> 
                     <HashLink to="/swd/#sos">   <span className={css.spans}>Software Outsourcing Services</span> </HashLink>
                    </div>
                 
                  <div className={css.types}>
                        <span className={css.typehead}>IT Consulting & Services</span>
                        <span className={css.spans}>Application Maintenance</span>
                        <span className={css.spans}> IT Solutions</span>
                        <span className={css.spans}>Technology Consultancy</span>
                    </div>
                    <div className={css.types}>
                        <span className={css.typehead}>Mobile App Development</span>
                        <span className={css.spans}>Android App Development</span>
                        <span className={css.spans}>ios App Development</span>
                        <span className={css.spans}>Custom Mobile App Services</span>
                    </div>
                   

                  </div>
                    </div>}
               
                <li>Contact Us</li>
            </ul>}
        </div>
        </div>
    </div>
  )
}

export default Header
