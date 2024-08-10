var nameErorr = document.getElementById('name-error');
var phoneErorr = document.getElementById('phone-error');
var emailErorr = document.getElementById('email-error');
var messageErorr = document.getElementById('messsage-error');
var submitErorr = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.lenght == 0){
        name.innerHTML =' Name is requird';
        return false;
    }
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameErorr.innerHTML =' Write full name';
    return false;
}
    nameErorr.innerHTML = 'invalid';
    return true;
} 


function validatePhone(){
    var phone = document.getElementById('contact-number').value;


    if(phone.lenght == 0){  
        phoneErorr.innerHTML = 'phone no  is requird';
        return false;
    }
    if(phone.lenght !== 10){
        phoneErorr.innerHTML = 'phone no should  be 10 digits';
        return false;
    }
if(!phone.match(/^[0-9]{10}$/)){    
        phoneErorr.innerHTML = 'only digits please';
        return false;
} 
        phoneErorr.innerHTML = 'Correct';
        return true;
}

function validateemail(){
  var email = document.getElementById('contact-email').value;

  if(email.lenght == 0){
    emailErorr.innerHTML = 'email is required';
    return false;
}
if(!email.match(/^[A-Z a-z\._\-[0-9]*[@][A-Za-z]*[\.]*[a-z]{2,4}$/)){
    emailErorr.innerHTML = 'email is invalid';
    return false;
  }

    emailErorr.innerHTML = 'Correct';
     return true;
}

function validatemessage(){
    var message = document.getElementById('contact-message').value; 
    var required = 30;
    var left  = required - message.lenght;
    
    if(left > 0){
        messageErorr.innerHTML = left + ' more charactor required';
        return false;
    }   

        messageErorr.innerHTML = 'Correct';
        return true;
}

function validateForm(){
if(!validateName()  || !validatePhone()  ||  !validateemail()  || !validatemessage()){
    submitErorr.style.display = 'block';
    submitErorr.innerHTML = 'please fix erorr to submit';
    setTimeout(function(){submitErorr.style.display = 'none';},3000); 
    return false ;
}      
}
