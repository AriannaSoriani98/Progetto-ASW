import {FaUmbrellaBeach, IoManOutline, IoMan} from "react-icons/all";
import "./prenotazioni.css"
import ScriptTag from 'react-script-tag'
import React,{Component} from 'react'
import {render} from "@testing-library/react";
import Script from '@gumgum/react-script-tag'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars';


const Prenotazioni = () =>{
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
        <body style={{overflowX: "auto", overflowY: "auto"}} >

        <table className="Table">
            {createTable()}
        </table>

        </body>

    );
}
export default Prenotazioni;
