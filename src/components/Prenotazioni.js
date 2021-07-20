import {FaUmbrellaBeach, BiBed} from "react-icons/all";
import "./prenotazioni.css"
import ScriptTag from 'react-script-tag'
import React,{Component} from 'react'
import {render} from "@testing-library/react";
import Script from '@gumgum/react-script-tag'


const Prenotazioni =() =>{

    const _onMyScriptLoad=()=>{
        const row = 8;
        const column = 10;

        for(let i=0; i<=row; i++){
            document.write("<div className=\"row\" id=i>");
            for(let j=0; j<=column; j++){
                document.write("<div className=\"grid-item\" id=j>");
                document.write("ciao");
                document.write("</div>")
            }
            document.write("</div>")
        }

    };


    return (
        <body>
        <div className="grid-container">
            <Script
                type="text/javascript"
                onLoad={_onMyScriptLoad()}
            />
        </div>
        </body>

    )


}

export default Prenotazioni;