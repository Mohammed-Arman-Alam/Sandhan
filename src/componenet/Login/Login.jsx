import React from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router';
const Login = () => {
    const navigate = useNavigate();
  const handleLogin = (e) =>{
    e.preventDefault();
    const mobile = e.target.mobileNumber.value;
    const pin = e.target.pin.value;
    if(mobile.length === 11){
      if(pin == 1234){
        navigate('/workers');
        
      }
      else{
        alert("Wrong password")
      }
    }
    else{
      alert("Invalid Mobile Number");
    }
    
  }
    return (
        <div>
           <section className="max-w-md min-h-screen mx-auto bg-[#FBC7A4]">
        <header>
            <div className="flex justify-center items-center">
                <div className="relative flex justify-center items-center  w-full">
                    <img className='w-60 scale-150 -mb-10' src={logo} alt="Logo" />
                </div>
            </div>
        </header>
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                <form onSubmit={handleLogin} className="card-body">
                    <label className="fieldset-label">Mobile Number</label>
                    <input type="number" name='mobileNumber' className="rounded-3xl input" placeholder="Enter your number" required/>
                    <label className="fieldset-label">4 Digit Pin</label>
                    <input type="password" className="rounded-3xl input" placeholder="Enter 4 Digit Pin" name='pin' required/>
                    <input type="submit" value="Login" className="btn bg-[#F66B05] text-white mt-4 rounded-3xl" />
                  </form>
              </div>
            </div>
          </div>
         <footer>
            <h6 className="mx-auto w-[145px] text-4xl font-bold text-[#F66B05] mt-20">Sandhan</h6>
         </footer> 
    </section>
        </div>
    );
};

export default Login;