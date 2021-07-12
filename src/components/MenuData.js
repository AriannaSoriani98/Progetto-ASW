import React from 'react'
import {FaBars} from "react-icons/fa"
import {AiFillHome, FiShoppingBag, SiGooglemaps, TiContacts} from "react-icons/all";

export const MenuData = [
    {
        title:'Home',
        path:'/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Prenotazioni',
        path:'/prenotazioni',
        icon: <FiShoppingBag />,
        cName: 'nav-text'
    },
    {
        title:'Contatti',
        path:'/contatti',
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
