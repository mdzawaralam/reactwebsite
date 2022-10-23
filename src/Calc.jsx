import React, { useState } from 'react';
import Sresult from './Sresult';

const Calc = () =>{
    const [img, setImg] = useState(""); 
    const inputEvent = (event) =>{
        const data = event.target.value;
       // console.log(data);
       setImg(data);
    } 
   return ( <>
        <h1>
            <input type="text" placeholder="Enter search Number" 
            value={img} onChange = {inputEvent}
            />
        </h1>
        <h1>
           {img === "" ? null : <Sresult name = {img} />} 
        </h1>
    </>
   );
};

export default Calc;