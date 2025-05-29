document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const MobileNumber = document.getElementById('Mobile-number').value;
    const PinNumber = document.getElementById('Pin-number').value;
    
    if(MobileNumber.length == 11){
        if(PinNumber == 1234){
            window.location.href ="Home.html"
        }
        else{
            alert("Invalid Pin");
        }
    }
    else{
        alert('Mobile Number is not valid');
    }
});

