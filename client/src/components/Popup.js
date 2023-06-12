import React from "react";
import "./popup.css";
import styled from "styled-components";
import {MdClose, MdErrorOutline} from "react-icons/md";
import {IoCheckmarkDoneCircleOutline} from "react-icons/io5";

const CloseBookingButton = styled(MdClose)`
  cursor: pointer;
  top: 10px;
  right: 20px;
  width: 32px;
  height: 32px;

  padding-left: 10px;
  z-index: 10;
  
`;
export const Popup = ({ text, closePopup, esito }) => {
    return (
        <div className="popup-container">
            <div className="popup-body">
                {esito ? (
                    <IoCheckmarkDoneCircleOutline size={30} color="green"/>
                ) : (
                    <MdErrorOutline size={30} color="red"/>
                )}
                    <h2>{text} </h2>
                    <CloseBookingButton
                        aria-label='Close booking'
                        onClick={closePopup}
                    />






            </div>
        </div>
    );
};