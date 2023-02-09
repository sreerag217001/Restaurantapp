import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import { RestListAction } from '../actions/restactionlist';
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {
    // const[restaurantlist,setRestaurantlist]=useState([])

    //to create a function for api call
    // const getRestaurant=async()=>{
    //     //async await
    //     await fetch('/restaurants.json')//async call
    //     .then((data)=>data.json()
    //       .then((result)=>setRestaurantlist(result.restaurants))
    //     )
    //   }
        // console.log(restaurantlist);

        const dispatch=useDispatch()

        const result=useSelector(state=>state.restReducer)
        console.log(result);//resrList:Array(10)

        

    useEffect(()=>{
    //   getRestaurant()
    dispatch(RestListAction())
    },[])
   
  return (
    <Row>
        {
           result.restList.map((item)=>(
            <Restcard restaurant={item}/>
          ))
        }
    </Row>
  )
}

export default Restaurantlist