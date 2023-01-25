import "./table.css"
import {FaUmbrellaBeach, IoMan, CgUnavailable} from "react-icons/all";
import moment from 'moment';
import {useState} from 'react';

export const Table = ({requestedDates, bookings}) =>{
    const [click, setClick] = useState(false);

    const createTable = () => {
        let table = []
        let num_col = 11
        let num_row = 8
        let middle = num_col/2 - 0.5
        let bookings_length = bookings.length;
        let no_available = [];
        console.log(bookings_length);

        for(let z=0; z<bookings_length;z++){
            if( ((requestedDates[0]>=bookings[z].dataInizio) && (requestedDates[0] <=bookings[z].dataFine)) ||
                ((requestedDates[0]<=bookings[z].dataInizio) && (requestedDates[1] <=bookings[z].dataFine) && requestedDates[1] >=bookings[z].dataInizio) ||
                ((requestedDates[0]<=bookings[z].dataInizio) && (requestedDates[1] >=bookings[z].dataFine))) {
                no_available.push(bookings[z]);
            }



        }
        console.log(bookings);
        console.log(no_available);
        let no_available_length = no_available.length;

        //RIGHE
        for (let i = 0; i < num_row; i++) {
            let children = [];

            //COLONNE
            for (let j = 0; j < num_col; j++) {
                let prenotato = false;
                if(j==middle){
                    children.push(<td className="col" style={{border: "none", background: "none", flexWrap: "nowrap"}}></td>)
                }
                else{
                    for(let z=0;z<no_available_length;z++){
                        if((i==no_available[z].fila) && (j==no_available[z].postazione)){
                            prenotato = true;
                        }
                    }
                    if(prenotato){
                        children.push(<td className="col" style={{flexWrap:"nowrap"}}>
                            {/*{<IoMan size={20}/>}
                            {<FaUmbrellaBeach size={24}/>}
                            {<IoMan size={20}/>}*/}
                            {<IoMan size={20} />}
                            {<CgUnavailable size={24} color={'red'}/>}
                            {<IoMan size={20}/>}
                        </td>)
                    }
                    else{
                        children.push(<button className="col" style={{flexWrap:"nowrap"}} onClick={()=> setClick(prev => !prev)}>
                            {/*{`Col ${j + 1}`}*/}
                            {<IoMan size={20}/>}
                            {<FaUmbrellaBeach size={24}/>}
                            {<IoMan size={20}/>}
                        </button>)
                    }
                }

            }
            //Create the parent and add the children
            table.push(<tr className="row" style={{flexWrap:"nowrap"}}>{children}</tr>)
        }

        return table
    }
    return (
        <table className="Table">
            {createTable()}
        </table>
    );
};