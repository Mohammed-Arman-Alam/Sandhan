import React, { useEffect, useState } from 'react';
import SplashScreen from '../SplashScreen/SplashScreen';
import Login from '../Login/Login';

const LoginPage = () => {
    const [showSplashScreen, setSplashScreen] = useState(true);
    useEffect (()=>{
        setTimeout (
            ()=>{
                setSplashScreen(false)
            },2000
        )
    },[]);
    return (
        <>
           {
            (showSplashScreen) ? <SplashScreen></SplashScreen> : <Login></Login>
           } 
        </>
    );
};
export default LoginPage;
