import styled from "styled-components";
import React, {useEffect, useState} from 'react'
import {Calendar} from "./Calendar";
import {Booking} from "./Booking";
import {Table} from "./Table";
import {Delete} from "./Delete";
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
  border-width: 2px;
  background: cornflowerblue;
  color: #fff;
  cursor: pointer;
  margin: auto;
`

const Button2 = styled.button`
  width: 210px;
  padding: 16px 20px;
  border-radius: 4px;
  border-width: 2px;
  background: indianred;
  color: #fff;
  cursor: pointer;
  margin: auto;
`

const Selezione = styled.span`
  display: flex;
  text-align: right;
  padding-left: 20%;
  padding-right: 20%;
`

export const General = ({title})=> {
    const [success, setSuccess] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const [esito, setEsito] = useState(false);

    const [requestedDates, setRequestedDates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedBookings, setLoadedBookings] = useState([]);
    const [text, setText]=useState(" ");
    const [requestedPlace, setRequestedPlace] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:3000/api/bookings'+title)
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
        axios.post("http://localhost:3000/api/bookings"+title, booking)
            .then( response => {
                //console.log(response.data);
                const newList = loadedBookings;
                newList.push(response.data)
                setLoadedBookings(newList);
                setIsLoading(false);
                setSuccess(prev => !prev);
                setEsito(true);
                setText("Prenotazione avvenuta con successo!");
            }).catch(error => {
            console.log(error);
            setText('Qualcosa è andato storto. Riprova più tardi.');
        })
    }

    function OnDelete(_id){
        axios.delete('http://localhost:3000//api/bookings'+title+'/${_id}')
            .then(response=>{

                    if(response.status==404){
                        console.log('Not Found');
                        setText('Prenotazione non trovata!');
                        setEsito(false);
                    }
                    else{
                        console.log('Deleted');
                        console.log(response.status);
                        setEsito(true);
                        setText("Eliminazione avvenuta con successo!");

                    }
                }
            ).catch(error =>{
            console.log(error);
            setText('Not Found');

        })
        setSuccessDelete(prev => !prev);
        console.log(_id);

    }

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const openDelete = () => {
        setShowDelete(prev => !prev);
    };


    return(
        <body style={{overflowX: "auto", overflowY: "auto"}}>

        {/*<BookingCalendar />*/}
        <div className={"apice"}></div>
        <Selezione>
            <Button onClick={openModal}>Scegli il periodo</Button>
            <Button2 onClick={openDelete}> Cancella prenotazione </Button2>
        </Selezione>

        <Calendar showModal={showModal} setShowModal={setShowModal} requestedDates={requestedDates} setRequestedDates={setRequestedDates}/>
        <Delete showDelete={showDelete} setShowDelete={setShowDelete} OnDelete={OnDelete} done={successDelete} setDone={setSuccessDelete}/>
        {successDelete ? <Popup text={text} esito={esito} closePopup={() => setSuccessDelete(false)} /> : null}

        <GlobalStyle />

        <Table bookings={loadedBookings} requestedDates={requestedDates} requestedPlace={requestedPlace} setRequestedPlace={setRequestedPlace}
               showBooking={showBooking} setShowBooking={setShowBooking}/>

        <Booking showBooking={showBooking} setShowBooking={setShowBooking} requestedDates={requestedDates} requestedPlace={requestedPlace} OnAddedAlbatros={OnAdded} success={success} setSuccess={setSuccess}/>
        {success ? <Popup text={text} esito={esito} closePopup={() => setSuccess(false)} /> : null}

        </body>


    );
};
