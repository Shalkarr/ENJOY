function formValidation(){
    var userName = document.registration.username;
    var userLastname = document.registration.userlastname;
    var userMonth = document.registration.Month;
    var userDay = document.registration.Day;
    var userYear = document.registration.Year;
    var userGender = document.registration.gender;
    var userEmail = document.registration.useremail;
    var userPhone = document.registration.userphone;
    var userPassword = document.registration.userpassword;
    var userRePassword = document.registration.repassword;
    allLetter(userName);
    LastNameLetter(userLastname);
    Select(userMonth,userYear,userDay);
    gender(userGender);
    emailValidate(userEmail);
    phoneValidate(userPhone);
    passwordValidate(userPassword);
    repasswordValidate(userRePassword, userPassword);
    if(allLetter(userName)){
        if(allLetterLastName(userLastname)){
            if(Select(userMonth,userYear,userDay)){
                if(gender(userGender)){
                    if(emailValidate(userEmail)){
                        if(phoneValidate(userPhone)){
                            if(passwordValidate(userPassword)){
                                if(repasswordValidate(userRePassword, userPassword)){
                                
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
    function allLetter(userName){
        var letters = /^[A-Za-z]+$/;
        if(userName.value.match(letters)){
            return true;
        }
        else{
            document.getElementById('valid1').innerHTML = 'Username must have alphabetcharactersonly';
            return false;
        }
    }
    function  LastNameLetter(userLastname){
        console.log(1234);
        var letter = /^[A-Za-z]+$/;
        if(userLastname.value.match(letter)){
            return true;
        }
        else{
            document.getElementById('valid3').innerHTML = 'Username must have alphabetcharactersonly';
            return false;
        }
    }
    function Select(userMonth,userYear,userDay){
        if(userMonth.value !== "Default"){
            if(userDay.value !== "Default"){
                if(userYear.value !== "Default"){
                    return true;
                }
            }
        }
        else{
            document.getElementById('valid3').innerHTML = "Select your date of birth from the list";
            return false;
        }
    }
    function gender(userGender){
        if(userGender.value == "Male" || userGender.value == "Female"){
            return true;
        }
        else{
            document.getElementById('valid4').innerHTML = "Choice is required";
            return false;
        }
    }
    function emailValidate(userEmail){
        var mailformat = /^W+([.-]?W+)*@W+([.-]?W+)*(.W{2,3})+$/;
        if (userEmail.value.match(mailformat)){
            return true;
        }
        else{
            document.getElementById('valid5').innerHTML = "You have entered an invalid email address!";
            userEmail.focus();
            return false;
        }
    }
    function phoneValidate(userPhone){
        var phone_v=/^[\+]?[7,8]{1}[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (userPhone.value.match(phone_v)) { 
            result = true;
        }
        else{
            document.getElementById("valid6").innerHTML="Phone number empty or wrong format";
            result = false;
            
        }
        
    }
    function passwordValidate(userPassword){
        var mx=15;
        var my=8;
        var passid_len = userPassword.value.length;
        if(passid_len == 0 || passid_len>= my || passid_len<mx){
            document.getElementById('valid7').innerHTML = "Password should not be empty / length be between 8 and 15";
            userPassword.focus();
            return false;
        }
        else{
            return true;
        }
    }
    function repasswordValidate(userRePassword, userPassword){
        if(userRePassword == userPassword){
            return true;
        }
        else{
            document.getElementById('valid8').innerHTML = "Does not match the password";
            return false;
        }
    }


