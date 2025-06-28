import React, { useState } from "react";
import "./InvitationCard.css";
import {
  PiCalendarDuotone,
  PiMapPinDuotone,
  PiClockClockwiseDuotone,
} from "react-icons/pi";
import axios from "axios";
import { useParams } from "react-router-dom";
const InvitationCard = ({ event }) => {
  const [attendance, setAttendance] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [additionalGuest, setAdditionalGuest] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  const [confirmedAttendance, setConfirmedAttendance] = useState("");
  const buttonSelectedHandler = (opts) => {
    setAttendance(opts);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("es-ES", {
      dateStyle: "medium",
    }).format(new Date(date));
  };
  const getHour = (date) => {
    return new Intl.DateTimeFormat("es-ES", {
      timeStyle: "short",
      timeZone: "America/Buenos_Aires",
    }).format(new Date(date));
  };
  const formHandler = async (event) => {
    event.preventDefault();

    if (attendance === null) {
      setError("Selecciona si vas a asistir o no");
      return;
    }
    if (!name || !email) {
      setError("Ingresa nombre o email");
      return;
    }
    if (!attendance) {
      console.log("mensajito de tristesa");
    }
    try {
      const payload = {
        name: name,
        email: email,
      };
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/events/${id}/confirm`,
        payload
      );
      setConfirmedAttendance(response.statusText);
      console.log(response);
      setName("");
      setEmail("");
      setAttendance(null);
      setAdditionalGuest("");
    } catch (error) {
      console.log(error);
      setError("Error al enviar la confirmacion");
    }
  };
  if (!event) {
    return (
      <div>
        <h4>Cargando evento....</h4>
      </div>
    );
  }
  return (
    <div className="invitation-card">
      <div className="invitation-card-header">
        <img src="https://placehold.co/200" alt="#" />
        <h2>LOURFEST</h2>
        <p>Te invita {event.user_id.name}</p>
        <div className="info">
          <div className="invitation-info">
            <div className="info-data">
              <PiCalendarDuotone size={50} />
              <p>{formatDate(event.date)} </p>
            </div>
            <div className="info-data">
              <PiMapPinDuotone size={50} />
              <p>{event.place}</p>
            </div>
            <div className="info-data">
              <PiClockClockwiseDuotone size={50} />
              <p>{getHour(event.date)}</p>
            </div>
          </div>
          <div className="message">
            <p>{event.message}</p>
          </div>
        </div>
      </div>
      <div className=" bg-white p-4 rounded-xl space-y-3">
        <h2>Por favor confirma tu asistencia</h2>
        <form onSubmit={formHandler} className="flex flex-col gap-3 ">
          <div className="btns-form gap-5">
            <button
              type="button"
              className={attendance ? "yes-btn active" : "yes-btn"}
              onClick={() => buttonSelectedHandler(true)}
            >
              {" "}
              Si, ahi voy a estar
            </button>
            <button
              type="button"
              className={!attendance ? "no-btn active" : "no-btn"}
              onClick={() => buttonSelectedHandler(false)}
            >
              {" "}
              No, estoy complicado
            </button>
          </div>
          {/*Informacion del invitado */}
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nombre y Apellido"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
          {/*Informacion Adicional*/}
          <label htmlFor="">Voy acompañado</label>
          <select
            name="additionalGuest"
            id="additionalGuest"
            value={additionalGuest}
            defaultValue={"0"}
            onChange={(event) => setAdditionalGuest(event.target.value)}
          >
            <option value="0">Solo yo</option>
            <option value="1">+1 invitado</option>
            <option value="2">+2 invitados</option>
            <option value="3">+3 invitados</option>
            <option value="4">+4 invitados</option>
          </select>
          {error && <p>{error}</p>}
          {/*Submit Button */}
          <button type="submit" className="confirm-btn">
            Enviar confirmacion
          </button>
          {confirmedAttendance && <h3>Gracias por confirmar</h3>}
        </form>
      </div>
    </div>
  );
};

export default InvitationCard;
