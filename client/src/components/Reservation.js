import styled from "styled-components";
import { AppointmentPicker, DatePicker } from 'react-appointment-picker';
import ScriptTag from 'react-script-tag'
import React,{Component, useState} from 'react'
import {render} from "@testing-library/react";
import Script from '@gumgum/react-script-tag'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars';
import BookingCalendar from 'react-booking-calendar'
import {Calendar} from "./Calendar";
import {Table} from "./Table";
import {GlobalStyle} from "../pages/globalStyles";

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
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };




    return(
        <body style={{overflowX: "auto", overflowY: "auto"}}>

        {/*<BookingCalendar />*/}
        <div className={"apice"}></div>
            <Button onClick={openModal}>Scegli il periodo</Button>

            <Calendar showModal={showModal} setShowModal={setShowModal} />
            <GlobalStyle />

            <Table/>

        </body>


    );
}
export default Reservation;
