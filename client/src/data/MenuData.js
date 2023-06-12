import React from 'react'
import {AiFillHome} from "react-icons/ai";
import {FiShoppingBag} from "react-icons/fi";
import {SiGooglemaps} from "react-icons/si";
import {TiContacts} from "react-icons/ti";

export const MenuData = [
    {
        title:'Home',
        path:'/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Prenotazioni',
        path:'/booking',
        icon: <FiShoppingBag />,
        cName: 'nav-text'
    },
    {
        title:'Schede Tecniche',
        path:'/schede',
        icon: <TiContacts />,
        cName: 'nav-text'
    },
    {
        title:'Dove Trovarci',
        path:'/luogo',
        icon: <SiGooglemaps />,
        cName: 'nav-text'
    }
]
