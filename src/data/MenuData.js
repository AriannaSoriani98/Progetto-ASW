import React from 'react'
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
