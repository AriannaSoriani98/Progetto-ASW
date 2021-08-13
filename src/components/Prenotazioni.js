import {FaUmbrellaBeach, BiBed} from "react-icons/all";
import "./prenotazioni.css"
import ScriptTag from 'react-script-tag'
import React,{Component} from 'react'
import {render} from "@testing-library/react";
import Script from '@gumgum/react-script-tag'
import PropTypes from 'prop-types'


const Prenotazioni = () =>{
    const createTable = () => {
        let table = []
        let num_col = 11
        let num_row = 5
        // Outer loop to create parent
        for (let i = 0; i < num_row; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < num_col; j++) {
                children.push(<td>{`Col ${j + 1}`}</td>)
            }
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        return table
    }

    return(
        <body>
        <table>
            {createTable()}
        </table>
            {/*<table className="grid-table">
                <tbody>
                <tr className="flex-row" id="1">
                    <td className="flex-column" id="1">
                        <BiBed/>
                        <FaUmbrellaBeach/>
                        <BiBed/></td>
                    <td className="flex-column" id="2">ciao</td>
                    <td className="flex-column" id="3">ciao</td>
                    <td className="flex-column" id="4">ciao</td>
                    <td className="flex-column" id="5">ciao</td>
                    <td className="middle"></td>
                    <td className="flex-column" id="6">ciao</td>
                    <td className="flex-column" id="7">ciao</td>
                    <td className="flex-column" id="8">ciao</td>
                    <td className="flex-column" id="9">ciao</td>
                    <td className="flex-column" id="10">ciao</td>
                </tr>
                <tr className="flex-row" id="2">
                    <td className="flex-column" id="1">ciao</td>
                    <td className="flex-column" id="2">ciao</td>
                    <td className="flex-column" id="3">ciao</td>
                    <td className="flex-column" id="4">ciao</td>
                    <td className="flex-column" id="5">ciao</td>
                    <td className="middle"></td>
                    <td className="flex-column" id="6">ciao</td>
                    <td className="flex-column" id="7">ciao</td>
                    <td className="flex-column" id="8">ciao</td>
                    <td className="flex-column" id="9">ciao</td>
                    <td className="flex-column" id="10">ciao</td>
                </tr>
                <tr className="flex-row" id="3">
                    <td className="flex-column" id="1">ciao</td>
                    <td className="flex-column" id="2">ciao</td>
                    <td className="flex-column" id="3">ciao</td>
                    <td className="flex-column" id="4">ciao</td>
                    <td className="flex-column" id="5">ciao</td>
                    <td className="middle"></td>
                    <td className="flex-column" id="6">ciao</td>
                    <td className="flex-column" id="7">ciao</td>
                    <td className="flex-column" id="8">ciao</td>
                    <td className="flex-column" id="9">ciao</td>
                    <td className="flex-column" id="10">ciao</td>
                </tr>
                <tr className="flex-row" id="4">
                    <td className="flex-column" id="1">ciao</td>
                    <td className="flex-column" id="2">ciao</td>
                    <td className="flex-column" id="3">ciao</td>
                    <td className="flex-column" id="4">ciao</td>
                    <td className="flex-column" id="5">ciao</td>
                    <td className="middle"></td>
                    <td className="flex-column" id="6">ciao</td>
                    <td className="flex-column" id="7">ciao</td>
                    <td className="flex-column" id="8">ciao</td>
                    <td className="flex-column" id="9">ciao</td>
                    <td className="flex-column" id="10">ciao</td>
                </tr>
                <tr className="flex-row" id="5">
                    <td className="flex-column" id="1">ciao</td>
                    <td className="flex-column" id="2">ciao</td>
                    <td className="flex-column" id="3">ciao</td>
                    <td className="flex-column" id="4">ciao</td>
                    <td className="flex-column" id="5">ciao</td>
                    <td className="middle"></td>
                    <td className="flex-column" id="6">ciao</td>
                    <td className="flex-column" id="7">ciao</td>
                    <td className="flex-column" id="8">ciao</td>
                    <td className="flex-column" id="9">ciao</td>
                    <td className="flex-column" id="10">ciao</td>
                </tr>
                </tbody>

            </table>*/}
        </body>

    );
}

/*Prenotazioni.propTypes = {
    gridData: PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    breakOn: PropTypes.oneOf(['small','medium','large'])
}*/
export default Prenotazioni;
