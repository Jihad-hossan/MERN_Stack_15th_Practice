// Get elements
const age_form = document.getElementById('age_form');
const msg = document.querySelector('.msg');
const msgLong = document.querySelector('.msg-long');

// Submit form
age_form.onsubmit = (events) => {
    events.preventDefault();
    // get fields name
    let name = age_form.querySelector('input[name="name"]');
    let age = age_form.querySelector('input[name="age"]');
    let gender = age_form.querySelectorAll('input[name="gender"]');
    
    // get gender name
    let gender_name = '';
    gender.forEach( item => {
        if(item.checked){
            gender_name = item.value;
        }
    });

    // form validation
    let agePattern = /^[0-9]{1,3}$/;
    if( name.value == '' || age == '' || gender_name == '' ){
        msg.innerHTML = setAlert('All fields are required');
    }else if ( agePattern.test(age.value) == false) {
        msg.innerHTML = setAlert('Your age is invalid');
    }
    else{
        // Marriage Age function
        if(gender_name == 'Male'){
            if(age.value >= 21 && age.value <= 39 ){
                msgLong.innerHTML = `Hi <strong>${ name.value }</strong>, You are in perfect age to marry.`;
            }else if(age.value > 40){
                msgLong.innerHTML = `Hi <strong>${ name.value }</strong>, You are too late being married.`;
            }else{
                msgLong.innerHTML = `Hi <strong>${ name.value }</strong>, you have to wait for ${ 21 - age.value} years.`;
            }
        }else{
            if(age.value >= 18 && age.value <= 39){
                msgLong.innerHTML = `Hi <strong>${ name.value }</strong>, You are in perfect age to marry.`;
            }else if(age.value > 40){
                msgLong.innerHTML = `Hi <strong>${ name.value }</strong>, You are too late being married.`;
            }else{
                msgLong.innerHTML = `Hi <strong>${ name.value }</strong>, you have to wait for ${ 18 - age.value} years.`;
            }
        }
    }
}


