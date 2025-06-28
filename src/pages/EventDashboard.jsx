import React, { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard/DashboardCard";
import CardHeader from "../components/CardHeader/CardHeader";
import CardBody from "../components/CardBody/CardBody";
import { CiCalendar, CiClock1, CiLocationOn } from "react-icons/ci";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import ListContainer from "../components/ListContainer/ListContainer";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventDashboard = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/events/${id}/rsvp`)
      .then(res => {
        const data = res.data.response;
        const getEvent = { id: res.data.response._id, ...data };
        setEvent(getEvent);
      })
      .catch((error) => console.log(error));
  }, [id]);
  
  if (!event) {
    return <p>cargando</p>;
  }

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("es-ES", {
      dateStyle: "long",
    }).format(new Date(date));
  };
  
  const getHour = (date) => {
    return new Intl.DateTimeFormat("es-ES", {
      timeStyle: "short",
      timeZone: "America/Buenos_Aires",
    }).format(new Date(date));
  };

  const getTotalAttendees = (attendees) => {
    return attendees.reduce((total, attendee) => {
      if (attendee.attendance === true) {
        const additionalGuests = parseInt(attendee.additionalGuests) || 0;
        return total + 1 + additionalGuests;
      }
      return total;
    }, 0);
  };
  return (
    <div className="bg-indigo-900  min-h-screen space-y-5 p-4">
      <DashboardCard>
        <CardHeader>
          <div className="rounded-full p-3 bg-violet-900">
            <LiaBirthdayCakeSolid size={"5em"} color="white" />
          </div>
          <div className=" w-full text-center">
            <h2 className="text-3xl font-bold italic">{event.user_id.name}</h2>
            <p>{event.message}</p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex items-center flex-grow gap-1 p-1">
            <CiCalendar />
            <p>{formatDate(event.date)}</p>
          </div>
          <div className="flex items-center  gap-1 p-1">
            <CiClock1 />
            <p>{getHour(event.date)}HS</p>
          </div>
          <div className=" flex items-center gap-1 flex-grow p-1 ">
            <CiLocationOn />
            <p>{event.place}3</p>
          </div>
        </CardBody>
      </DashboardCard>
      <ListContainer attendees={event.attendees}/>
      <DashboardCard>
        <div className="flex justify-between px-4">
          <h3 className="text-xl ">Total de asistentes:</h3>
          <p className="text-xl font-bold">{getTotalAttendees(event.attendees)}</p>
        </div>
      </DashboardCard>
    </div>
  );
};
export default EventDashboard;
