import React from 'react';
import logo from '../../assets/logo.png'
const SplashScreen = () => {
    return (
        <div>
            <section className="max-w-md min-h-screen mx-auto mt-[10%]"> 
                <div className="flex justify-center items-center">
                    <div className="relative flex justify-center items-center  w-full">
                        <img className='w-60 scale-150' src={logo} alt="Logo" />
                    </div>
                </div>
                <footer className='mb-10'>
                    <h6 className="mx-auto w-[145px] text-4xl font-bold text-[#F66B05]">Sandhan</h6>
                </footer> 
            </section>
                </div>
    );
};

export default SplashScreen;