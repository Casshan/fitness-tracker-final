import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RenderHeader from './renderheader.js';
import Home from './home.js';
import Login from './login.js';
import Register from './register.js';
import Routines from './routines.js';
import MyRoutines from './myroutines.js';
import Activities from './activities.js';


const App = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ userToken, setUserToken ] = useState('');

    return (
        <>
            <RenderHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserToken={setUserToken}/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userToken={userToken} setUserToken={setUserToken}/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/routines' element={<Routines/>}></Route>
                <Route path='/myroutines' element={<MyRoutines/>}></Route>
                <Route path='/activities' element={<Activities/>}></Route>
                
            </Routes>
        </>
    )
}

export default App;