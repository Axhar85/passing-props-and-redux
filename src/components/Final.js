import React, { useContext} from "react";
import { MyContext } from "../context/MyProvider";

const Final = () => { 

    const context = useContext(MyContext)
    
    return (
         
    <div>
        <hr/>
        <h3> This Fianl.js with some props coming from Section.js and Main.js also 
            coming from App.js </h3>
           
        <h2> Name:{context.name} </h2>
        <h3> Age:{context.age} </h3>
        <button onClick={context.getOld}>Happy Birtday</button>
        
    </div>
    )
};

export default Final;