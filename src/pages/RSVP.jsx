import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InvitationCard from '../components/InvitationCard/InvitationCard'
import axios from 'axios'
import "./RSVP.css"
const RSVP = () => {
    const [event , setEvent]= useState(null)
    const {id} = useParams();
    useEffect(()=>{
        axios(`http://localhost:8000/events/${id}/rsvp`)
        .then(res =>{
            const data = res.data.response;
            const getEvent = {id:res.data.response._id, ...data}
            setEvent(getEvent);
        })
        .catch(err => console.log(err))
    },[id])
    if (!event) {
        return <p>cargando</p>
    }
  return (
    <div className='p-4 bg-indigo-900  min-h-screen'>
        <InvitationCard event={event}/>
    </div>
  )
}

export default RSVP