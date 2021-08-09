import {FaUmbrellaBeach, BiBed} from "react-icons/all";
import "./prenotazioni.css"
import ScriptTag from 'react-script-tag'
import React,{Component} from 'react'
import {render} from "@testing-library/react";
import Script from '@gumgum/react-script-tag'
import PropTypes from 'prop-types'


const Prenotazioni = ({gridData, headingColumns, title, breakOn='medium'}) =>{
        return(
        <body>
        <div className="grid-container">
            <table className="grid-table">
                <tbody>
                <tr className="flex-row" id="1">
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

            </table>

        </div>
        </body>

    );
}

Prenotazioni.propTypes = {
    gridData: PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    breakOn: PropTypes.oneOf(['small','medium','large'])
}
export default Prenotazioni;


// const row = 8;
// const column = 10;
//
// const _onScriptLoad=()=>{
//
//     for(let i=0; i<=row; i++){
//         document.write("<div className=\"row\" >");
//         for(let j=0; j<=column; j++){
//             document.write("<div className=\"grid-item\" >");
//             document.write("ciao");
//             document.write("</div>")
//         }
//         document.write("</div>")
//     }
//
// };
//
//
// return (
//     <body>
//     <div className="grid-container">
//         <Script
//             type="text/javascript"
//             onLoad={_onScriptLoad()}
//         />
//     </div>
//     </body>
//
// )