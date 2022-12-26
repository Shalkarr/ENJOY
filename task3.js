const btn = document.querySelector('#button');
const out = document.querySelector(".local");
var n=0;
var  n=0, x=1, num;
function formValidation(){
    var userName = document.registration.username;
    var userLastname= document.registration.surname;
    var userGender = document.registration.gender;
    var userEmail = document.registration.useremail;
    var userPhone = document.registration.userphone;
    var userPassword = document.registration.userpassword;
    allLetter(userName);
    LastNameLetter(userLastname);
    gender(userGender);
    emailValidate(userEmail);
    passwordValidate(userPassword);
    phoneValidate(userPhone);
    // if(allLetter(userName)){
    //     if(LastNameLetter(userLastname)){
    //         if(gender(userGender)){
    //             if(emailValidate(userEmail)){
    //                 if(passwordValidate(userPassword)){
    //                     if(phoneValidate(userPhone)){

    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
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
            document.getElementById('valid2').innerHTML = 'Username must have alphabetcharactersonly';
            return false;
        }
    }
    function gender(userGender){
        if(userGender.value == "Male" || userGender.value == "Female"){
            return true;
        }
        else{
            document.getElementById('valid3').innerHTML = "Choice is required";
            return false;
        }
    }
    function emailValidate(userEmail){
        var mailformat = /^W+([.-]?W+)*@W+([.-]?W+)*(.W{2,3})+$/;
        if (userEmail.value.match(mailformat)){
            return true;
        }
        else{
            document.getElementById('valid4').innerHTML = "You have entered an invalid email address!";
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
            document.getElementById("valid5").innerHTML="Phone number empty or wrong format";
            result = false;
            
        }
        
    }
    function passwordValidate(userPassword){
        var mx=15;
        var my=8;
        var passid_len = userPassword.value.length;
        if(passid_len == 0 || passid_len>= my || passid_len<mx){
            document.getElementById('valid6').innerHTML = "Password should not be empty / length be between 8 and 15";
            userPassword.focus();
            return false;
        }
        else{
            return true;
        }
    }

    function store(){
        formValidation()

        function number(){
            num=n+1;
            x+=num;
            console.log(x);
        }
    var a = document.getElementById('name').value;
    console.log(a);
    var b = document.getElementById('surname').value;
    console.log(b);
    var c = document.getElementById('email').value;
    console.log(c);
    var d = document.getElementById('number').value;
    console.log(d);
    var e = document.getElementById('gender').value;
    console.log(e);
    var f = document.getElementById('password').value;
    console.log(f);
    
    const object = {
        Name : a,
        Surname : b,
        Email : c,
        Telephone: d,
        Gender: e,
        Password: f
    };


   
    localStorage.setItem('person'+x, JSON.stringify(object));
    let users = localStorage.getItem('person'+x);
    users = JSON.parse(users);
    console.log(users.Name);
    
    document.getElementById('name').value="";
    document.getElementById('surname').value="";
    document.getElementById('email').value="";
    document.getElementById('number').value="";
    document.getElementById('password').value="";
    console.log(users)
    number();





        // localStorage.setItem("Name", a);
        // localStorage.setItem("Surname", b);
        // localStorage.setItem("Email", c);
        // localStorage.setItem("Telephone", d);
        // localStorage.setItem("Gender", e);
        // localStorage.setItem("Password", f);

}
const list = document.querySelector('table');
console.log(localStorage.getItem(JSON.stringify('person'+0)));
function show(){
    // users = JSON.parse(users);
    // console.log('foijvgin');
    for(var i = 1; i<=x; i++){
    
        const row= localStorage.getItem('person'+i);
        const users = JSON.parse(row);
        
        console.log(users);
        
        const box = document.createElement('input');
        box.type="checkbox";
        
        const listItem = document.createElement('tr');
        const listNumber = document.createElement('td');
        listNumber.textContent=i;
        const personName  = document.createElement('td');
        personName.textContent= users.Name;
        const surname = document.createElement('td');
        surname.textContent= users.Surname;
        
        const email = document.createElement('td');
        email.textContent= users.Email;
        const telephone = document.createElement('td');
        telephone.textContent= users.Telephone;
        const gender = document.createElement('td');
        gender.textContent= users.Gender;
        const password = document.createElement('td');
        password.textContent= users.Password;
        const listUpdate = document.createElement('td');
        const listDelete =document.createElement('td');
        const updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        listUpdate.appendChild(updateBtn);
        listDelete.appendChild(deleteBtn);
        listItem.appendChild(box);
        listItem.appendChild(listNumber);
        listItem.appendChild(personName);
        listItem.appendChild(surname);
        listItem.appendChild(email);
        listItem.appendChild(telephone);
        listItem.appendChild(gender);
        listItem.appendChild(password);
        listItem.appendChild(listUpdate);
        listItem.appendChild(listDelete);
       
        list.appendChild(listItem);
        
        deleteBtn.onclick = function(e) {
            list.removeChild(listItem);
            console.log(listItem.childElementCount(listNumber));
            localStorage.removeItem('person'+i)
        }
        updateBtn.addEventListener("click", function(){
            
            listItem.Name.contentEditable = true;
            listItem.style.backgroundColor = "#fff";
        });
        
    }
    
    // const listNumber = 
 }

    function upda(){
        console.log(123456);
        const updateRow = listItem.listNumber;
        console.log(updateRow);
        // if(updateRow.box = 'cheked'){
        //     const 
        // }
    }
    function mydelete(){
            
    }
    
   // var b = document.forms.RegistrationPage.surname.value;
   // var t = document.forms.RegistrationPage.name.value;
   // var c = document.forms.RegistrationPage.password.value;