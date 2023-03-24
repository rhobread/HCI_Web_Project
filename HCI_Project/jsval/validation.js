function validate(){
    const name = form['name'].value;
    const email = form['email'].value;
    const phone = form['phone'].value;
    const country = form['country'].value

    let errormsg = ''

    if(name == ""){
        errormsg = "Name can't be empty!"
    }
    if(email == ""){
        errormsg = "Email can't be empty";
    }
    if(phone.length > 12 && phone.length < 11){
        errormsg = "Phone Number must atleast contains 11 character and cant be more than 12"
    }
    if(country == 'null'){
        errormsg = "Please choose your country"
    }

    if(errormsg){
        document.getElementById('error').innerHTML = errormsg
        return false
    }

}

