import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';
function Viewrest() {
    const urlParams=useParams()
    console.log(urlParams.id)
    const[restaurantlist,setRestaurantlist]=useState([])

    //to create a function for api call
    const getRestaurant=async()=>{
        //async await
        await fetch('/restaurants.json')//async call
        .then((data)=>data.json()
          .then((result)=>setRestaurantlist(result.restaurants))
        )
      }
        console.log(restaurantlist);

    useEffect(()=>{
      getRestaurant()
    },[])

    const viewrest=restaurantlist.find(item=>item.id==urlParams.id)
    console.log(viewrest)
  return (
    <div>
        {
            viewrest?(
               <Row className='m-4'>
                <Col md={4}>
                <Image src={viewrest.photograph}style={{width:'550px',height:'650px'}} fluid/>
                </Col>
                <Col md={7} >
                <h2>{viewrest.name}</h2>
                <ListGroup>
      <ListGroup.Item varient="dark">Id : {viewrest.id}</ListGroup.Item>
      <ListGroup.Item varient="dark">Name: {viewrest.name}</ListGroup.Item>
      <ListGroup.Item varient="dark">address:{viewrest.address}</ListGroup.Item>
      <ListGroup.Item varient="dark"> cuisine_type:{viewrest.cuisine_type}</ListGroup.Item>
      <ListGroup.Item varient="dark"> neighborhood:{viewrest.neighborhood}</ListGroup.Item>
     </ListGroup>
     <><Restop op={viewrest.operating_hours}/></>
      < ><Restreview review={viewrest.reviews}/> </>
                </Col>
            </Row>
            ):'null'
            
        }
    </div>
  )
}

export default Viewrest