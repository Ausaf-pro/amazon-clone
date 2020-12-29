import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
// import Order from './Order'
import { useHistory } from "react-router-dom";


function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  const history = useHistory();


  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1>Order successful</h1>

            {/* <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div> */}
            <p>Click to continue to home page..</p>
            <button className="orders__button" onClick={(e) => history.push("/")} >Redirect</button>
        </div>
    )
}

export default Orders   