/* import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Errorpage from './Errorpage';
import Menu from './Menu';


const App = () =>{
  return (
    <>
    <Menu />
    <Routes>
    <Route  exact path="/" element={<Aboutus />} />
    <Route path="/contact" element={<Contactus />} />
    <Route  path="*" element={< Errorpage />} />
    <Route path="*" element={<Navigate to ="/" />}/>
    </Routes>
    </>
  );
};

export default App; */

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const APP = () =>{
  return (
    <>
    <div className="container">
    <h1 className="text-center">Hellow</h1>
    <br />
    <div className="text-center">
    <button className="btn btn-outline-success">I done it successfully</button>
    </div>
    </div>
    </>
  );
};

export default APP;