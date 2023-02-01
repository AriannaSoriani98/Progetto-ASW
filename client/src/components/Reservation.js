import styled from "styled-components";
import { AppointmentPicker, DatePicker } from 'react-appointment-picker';
import ScriptTag from 'react-script-tag'
import React, {Component, useEffect, useState} from 'react'
import {render} from "@testing-library/react";
import Script from '@gumgum/react-script-tag'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars';
import BookingCalendar from 'react-booking-calendar'
import {Calendar} from "./Calendar";
import {Booking} from "./Booking";
import {Table} from "./Table";
import {GlobalStyle} from "../pages/globalStyles";
import axios from "axios";
import {Popup} from "./Popup";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  width: 180px;
  padding: 16px 20px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  cursor: pointer;
  margin: auto;
`

const Reservation = () =>{
    const [success, setSuccess] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showBooking, setShowBooking] = useState(false);

    const [requestedDates, setRequestedDates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedBookings, setLoadedBookings] = useState([]);

    const [requestedPlace, setRequestedPlace] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:3000/api/bookings')
            .then(response =>{
                let bookings= [];
                bookings = response.data
                /*reservations.forEach(function(umbrella) {
                    if(umbrella.poster!=null) umbrella.poster = umbrella.poster.replace("http://ia.media-imdb.com/", "https://m.media-amazon.com/")
                });*/
                setIsLoading(false);
                setLoadedBookings(bookings);
            })
    },[]);

    function OnAdded(booking) {
        setIsLoading(true)
        axios.post("http://localhost:3000/api/bookings", booking)
            .then( response => {
                //console.log(response.data);
                const newList = loadedBookings;
                newList.push(response.data)
                setLoadedBookings(newList);
                setIsLoading(false);

            })
    }



    const openModal = () => {
        setShowModal(prev => !prev);
    };


    console.log(requestedDates);


    console.log(loadedBookings);


    return(
        <body style={{overflowX: "auto", overflowY: "auto"}}>

        {/*<BookingCalendar />*/}
        <div className={"apice"}></div>
            <Button onClick={openModal}>Scegli il periodo</Button>
            <Calendar showModal={showModal} setShowModal={setShowModal} requestedDates={requestedDates} setRequestedDates={setRequestedDates}/>

            <GlobalStyle />

            <Table bookings={loadedBookings} requestedDates={requestedDates} requestedPlace={requestedPlace} setRequestedPlace={setRequestedPlace}
                   showBooking={showBooking} setShowBooking={setShowBooking}/>

            <Booking showBooking={showBooking} setShowBooking={setShowBooking} requestedDates={requestedDates} requestedPlace={requestedPlace} OnAdded={OnAdded} success={success} setSuccess={setSuccess}/>
            {success ? <Popup text="Prenotazione avvenuta con successo!" closePopup={() => setSuccess(false)} /> : null}

        </body>


    );
};
export default Reservation;
