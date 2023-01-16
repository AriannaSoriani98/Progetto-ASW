import {FaUmbrellaBeach, IoManOutline, IoMan} from "react-icons/all";
import "./table.css"
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

    const createTable = () => {
        let table = []
        let num_col = 11
        let num_row = 8
        let middle = num_col/2 - 0.5
        // Outer loop to create parent
        for (let i = 0; i < num_row; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < num_col; j++) {
                if(j==middle){
                    children.push(<td className="col" style={{border: "none", background: "none", flexWrap: "nowrap"}}></td>)
                }
                else{
                    children.push(<td className="col" style={{flexWrap:"nowrap"}}>
                        {/*{`Col ${j + 1}`}*/}
                        {<IoMan size={20}/>}
                        {<FaUmbrellaBeach size={24}/>}
                        {<IoMan size={20}/>}

                    </td>)
                }

            }
            //Create the parent and add the children
            table.push(<tr className="row" style={{flexWrap:"nowrap"}}>{children}</tr>)
        }
        return table
    }


    return(
        <body style={{overflowX: "auto", overflowY: "auto"}}>

        {/*<BookingCalendar />*/}
        <div className={"apice"}></div>
            <Button onClick={openModal}>Scegli il periodo</Button>

            <Calendar showModal={showModal} setShowModal={setShowModal} />
            <GlobalStyle />

            <table className="Table">
                {createTable()}
            </table>

        </body>


    );
}
export default Reservation;
