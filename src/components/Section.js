import React from "react";
import Final from "./Final";


const Section = (props) => (
    
    <div>
        <h3> This Section.js with some props coming from Main.js also 
            coming from App.js </h3>

        {/*<Final name={props.name} age={props.age} getOld= {props.getOld} />*/}
        <Final />
        <hr/>
    </div>
);

export default Section;