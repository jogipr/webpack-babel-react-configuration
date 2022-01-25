import React from 'react';
import {render} from 'react-dom'

export const  Hello=()=>{
    return (<div>Hello from React bundle using webpack</div>);
}


render(<Hello/>,document.getElementById("root"));