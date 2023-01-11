import React, { useRef, useEffect, useCallback, useState} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import axios from "axios";

import { DateRangePicker, DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

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
  height: max-content;
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
  border-right: 0.2px solid #141414;
  justify-content: flex-start;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  color: #141414;
  margin: auto;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
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

export const Calendar = ({ showModal, setShowModal }) => {

    // caricamento disponibilità
    const [isLoading, setIsLoading] = useState(true);
    const [loadedReservation, setLoadedReservation] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/api/reservations')
            .then(response =>{
                let reservations = []
                reservations = response.data
                /*reservations.forEach(function(umbrella) {
                    if(umbrella.poster!=null) umbrella.poster = umbrella.poster.replace("http://ia.media-imdb.com/", "https://m.media-amazon.com/")
                });*/
                setIsLoading(false);
                setLoadedReservation(reservations);
            })
    },[]);

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );


    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    function calculate(event){
        event.preventDefault();
        const range = {
            /*initial:initial,
            final:final,*/
        }


    };


    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef} className={"background"}>
                    <animated.div style={animation} className={"animation"}>
                        <ModalWrapper showModal={showModal}>
                            <LeftBox>
                            <DateRange
                                style={{position:"initial"}}
                                editableDateInputs={true}
                                onChange={item => setState([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={state}
                                minDate={addDays(new Date(), 0)}
                                // maxDate={addDays(new Date(), 30)}
                            />
                            </LeftBox>
                            <ModalContent>
                                <h1>Are you ready?</h1>
                                <button onClick={calculate}>Search</button>
                            </ModalContent>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowModal(prev => !prev)}
                            />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
};