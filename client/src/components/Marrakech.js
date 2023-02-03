import styled from "styled-components";
import React, {useEffect, useState} from 'react'
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

const Marrakech = () =>{
    const [success, setSuccess] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showBooking, setShowBooking] = useState(false);

    const [requestedDates, setRequestedDates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedBookingsMarrakech, setLoadedBookingsMarrakech] = useState([]);

    const [requestedPlace, setRequestedPlace] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:3000/api/bookingsMarrakech')
            .then(response =>{
                let bookingsMarrakech= [];
                bookingsMarrakech = response.data
                /*reservations.forEach(function(umbrella) {
                    if(umbrella.poster!=null) umbrella.poster = umbrella.poster.replace("http://ia.media-imdb.com/", "https://m.media-amazon.com/")
                });*/
                setIsLoading(false);
                setLoadedBookingsMarrakech(bookingsMarrakech);
            })
    },[]);

    function OnAddedMarrakech(bookingMarrakech) {
        setIsLoading(true)
        axios.post("http://localhost:3000/api/bookingsMarrakech", bookingMarrakech)
            .then( response => {
                //console.log(response.data);
                const newList = loadedBookingsMarrakech;
                newList.push(response.data)
                setLoadedBookingsMarrakech(newList);
                setIsLoading(false);

            })
    }



    const openModal = () => {
        setShowModal(prev => !prev);
    };


    console.log(requestedDates);


    console.log(loadedBookingsMarrakech);


    return(
        <body style={{overflowX: "auto", overflowY: "auto"}}>

        {/*<BookingCalendar />*/}
        <div className={"apice"}></div>
        <Button onClick={openModal}>Scegli il periodo</Button>
        <Calendar showModal={showModal} setShowModal={setShowModal} requestedDates={requestedDates} setRequestedDates={setRequestedDates}/>

        <GlobalStyle />

        <Table bookings={loadedBookingsMarrakech} requestedDates={requestedDates} requestedPlace={requestedPlace} setRequestedPlace={setRequestedPlace}
               showBooking={showBooking} setShowBooking={setShowBooking}/>

        <Booking showBooking={showBooking} setShowBooking={setShowBooking} requestedDates={requestedDates} requestedPlace={requestedPlace} OnAddedAlbatros={OnAddedMarrakech} success={success} setSuccess={setSuccess}/>
        {success ? <Popup text="Prenotazione avvenuta con successo!" closePopup={() => setSuccess(false)} /> : null}

        </body>


    );
};
export default Marrakech;
