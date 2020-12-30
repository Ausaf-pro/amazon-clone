import React from "react";
import {useStateValue} from './StateProvider'
import './Order.css'
import { useHistory } from 'react-router-dom'
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import { Link } from 'react-router-dom'

function Orders() {
  const history = useHistory();


  return (
    <div className="orders">
       <div className="order__container">
         <h3>Order Successful </h3>
         <h3>Thanks for shopping with us </h3>
         <h3>Delivey details <MenuOpenRoundedIcon onClick={e => history.push('/delivery')} className="orders__details" /> </h3>
         <button className="order__contaierButton">
            <Link to="/" >
               Home
            </Link>
         </button>
       </div> 
    </div>
  );
}

export default Orders;
