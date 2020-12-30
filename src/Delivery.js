import React from 'react'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import { Link } from 'react-router-dom'
import './Delivery.css'

function Delivery() {
   return (
      <div className="delivery" >
         <div className="delivery__blur">
            <h3>Order Successful </h3>
            <h3>Thanks for shopping with us </h3>
            <h3>Delivey details <MenuOpenRoundedIcon className="orders__details" /> </h3>
            <button className="order__contaierButton">Home</button>
         </div>
         

         <div className="delivery__text">
            <div className="delivery__textContainer">
               <h3>This is the delivery page</h3>
               <p>Hold on{'>'}{'>'}{'>'}</p>
               <h3>Your orders will be delivered in 2 days.</h3>
               <button className="delivery__textContainerButton" >
                  <Link to="/orders">
                     Continue
                  </Link>
               </button>
            </div>
            
         </div>
      </div>
   )
}

export default Delivery
