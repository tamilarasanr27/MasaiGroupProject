document.querySelector("#form").addEventListener("submit",function(event){
    event.preventDefault()

    var data={
        FirstName:form.fname.value,
        LastName:form.lname.value,
        Email:form.FEmail.value,
        password:form.Fpass.value,
        conPass:form.lpass.value,
        MobileNum:form.mobiles.value,
        RefferEmail:form.Reffer.value,
          
    }
    
    if(data.password!=data.conPass){
        alert("Your Password Confirmation is Incorrect")
    }
   

    else {
        localStorage.setItem("signupdata",JSON.stringify(data))
        window.location.href="signin.html"   
    }
    

})