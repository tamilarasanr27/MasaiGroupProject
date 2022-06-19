var Userdata=JSON.parse(localStorage.getItem("signupdata"))


var button=document.querySelector("button").addEventListener("click",myfun)

function myfun(){
    window.location.href="signup.html"
}

document.querySelector("#signform").addEventListener("submit",function(event){
    event.preventDefault();

    var collect={
        Mail:signform.Mymail.value,
        Password:signform.myPass.value,
    }
   

    if(collect.Mail==Userdata.Email && collect.Password == Userdata.password){
        localStorage.setItem("logindata",JSON.stringify(Userdata))
        alert("signin Successfully")
        window.location.href="index.html"
    }
    else if(collect.Mail==Userdata.Email){
        alert("Password Incorrect")
    }
    else if(collect.Password == Userdata.password){
        alert("Enter correct Mail i'd")
    }
    else{
        alert("Create an Account")
    }

})

