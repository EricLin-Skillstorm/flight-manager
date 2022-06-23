import { useRef } from "react";
import '../components/Formatting/InputForm.css';

export const CreateFlight = () => {

    const flightNum = useRef();
    const depDate = useRef();
    const depTime = useRef();
    const depPort = useRef();
    const arrDate = useRef();
    const arrTime = useRef();
    const arrPort = useRef();

    return (
        <>
            <form className="MyForm">
                
                <label htmlFor= "flight">Flight Number: </label>
                <div><input id="flight" placeholder="ex: FL1842" ref={flightNum}/></div>

                <label htmlFor="depPort">Departure Airport: </label>
                <div><input id="depPort" placeholder="Enter Departure Date" ref={depPort}/></div>

                <label htmlFor="depDate">Departure Date: </label>
                <div><input type="date" id="depDate" ref={depDate}/></div>
                
                <label htmlFor="depTime">Departure Time: </label>
                <div><input type="time" ref={depTime}/></div>
                
                <label htmlFor="arrPort">Arrival Airport: </label>
                <div><input id="arrPort" placeholder="Enter Arrival Airport" ref={arrPort}/></div>
            
                <label htmlFor="arrDate">Arrival Date: </label>
                <div><input type="date"  ref={arrDate}/></div>
                
                <label htmlFor="arrTime">Arrival Time: </label>
                <div><input type = "time" placeholder="Enter Arrival Time" ref={arrTime}/></div>
                                
                <input type="submit"/>
                
            </form>
        
        </>

    );
}