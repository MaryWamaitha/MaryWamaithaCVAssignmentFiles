

        
        function onFormSubmit(){
          

          validateForm();
          var inputname= document.getElementById("name");
          var inputaddress= document.getElementById("address");
          var inputEmail= document.getElementById("email");
          var inputPhone= document.getElementById("phone");
          var inputUrl= document.getElementById("Li");
          var inputGender= document.getElementById("gender");

          localStorage.setItem("fullName", inputname.value);
          localStorage.setItem("address", inputaddress.value);
          localStorage.setItem("email", inputEmail.value);
          localStorage.setItem("phone", inputPhone.value);
          localStorage.setItem("url", inputUrl.value);
          localStorage.setItem("gender", inputGender.value);

        }
/* Validating entered*/
       
function validateForm(){
            
	var name = document.forms["myForm"]["name"].value;
	var email = document.forms["myForm"]["email"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  var phoneformat = /^\d{10}$/;
  var letters = /^[A-Za-z]+$/;
	
/*Phone Validation*/
if (phone.length>1 || phone.match(phoneformat)) {
    return true;
}
    else{
        alert("You have entered an invalid phone,please try again !")
    }
/* Name Validation*/
	if (name.length>1 || name.match(letters)) {
        return true;}
        else{
        alert("You have entered an invalid name, please try again!")
    }

    /*Email Validation*/
    
        
    if(email.length>1|| email.match(mailformat))
          {

    return true;
       }
     else
      {
    alert("You have entered an invalid email address! Please reenter your details again");    
    document.form1.text1.focus();
    return false;
      }
   
}
        

    var fullName = localStorage.getItem("fullName");
    var address = localStorage.getItem("address");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var url = localStorage.getItem("url");
    var gender = localStorage.getItem("gender");

    document.getElementById("name").innerHTML = fullName;
    document.getElementById("address").innerHTML = address;
    document.getElementById("phone").innerHTML = phone;
    document.getElementById("email").innerHTML = email;
    document.getElementById("Link").innerHTML = url;
    
    


