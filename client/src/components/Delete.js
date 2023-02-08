import {animated, useSpring} from "react-spring";
import moment from "moment";
import {DateRange} from "react-date-range";
import React, { useRef, useEffect, useCallback, useState} from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DatePicker} from "antd";
const {RangePicker} = DatePicker;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const ModalWrapper = styled.div`
  width: 700px;
  height: 200px;
  ;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  flex-direction: row;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 350px;
  border-right: 0.2px solid #141414;
  
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  line-height: 1.4;
  color: #141414;
  margin: auto;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    width: fit-content;
    height: fit-content;
    background: red;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  
`;



export const Delete = ({ showDelete, setShowDelete, OnDelete }) => {
    // caricamento disponibilità
    const [_id,set_id] = useState('');


    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showDelete ? 1 : 0,
        transform: showDelete ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowDelete(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showDelete) {
                setShowDelete(false);
                console.log('I pressed');
            }
        },
        [setShowDelete, showDelete]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );


    function IDHandler(event){
        set_id(event.target.value)
    }

    function SubmitHandler(){
        OnDelete(_id);
        console.log(_id);
        setShowDelete(prev => !prev);

    }



    return (
        <>
            {showDelete ? (
                <Background onClick={closeModal} ref={modalRef} className={"background"}>
                    <animated.div style={animation} className={"animation"}>
                        <ModalWrapper showModal={showDelete}>
                            <LeftBox>
                                <h1>Are you sure?</h1>
                            </LeftBox>
                            <ModalContent>
                                <form onSubmit={SubmitHandler}>
                                    <input type="text" id="_id" placeholder="Enter ID of your reservation" onChange={IDHandler}/>
                                    <br/>
                                    <button type="submit">Delete</button>
                                </form>
                            </ModalContent>

                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowDelete(prev => !prev)}
                            />

                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
};