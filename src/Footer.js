import './Footer.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import React from 'react'

function Footer() {
   return (
      <div className="footer" >
         <div className="footer__content">
            <Link to="/">
               <img 
                  className="footer__logo" 
                  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <p>By signing-in you agree to 'amazon-clone' Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our
                  Intrest-Based Ads Notice.
            </p>
            <ul className="footer__socials">
               <li><a ><FacebookIcon/></a></li>
               <li><a ><GitHubIcon/></a></li>
               <li><a ><LinkedInIcon/></a></li>
               <li><a ><InstagramIcon/></a></li>
               <li><a ><YouTubeIcon/></a></li>
            </ul>
         </div>
         
         <div className="footer__bottom">
            <p>&copy; amazon-clone 2020 | Designed by Ausaf Hussain</p>
         </div>

      </div>

   )
}

export default Footer
