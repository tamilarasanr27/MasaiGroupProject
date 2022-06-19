document.querySelector("form").addEventListener("submit",completpayment)

function completpayment(){
      event.preventDefault()
      var paymentdataobj={
            firstname:form.fname.value,
            lastname:form.lname.value,
            email:form.mail.value,
            atm:form.atmno.value,
            yearmonth:form.month.value,
            cvv:form.cvvpin.value,
            country:form.contry.value,
            totalprize:form.payamount.value,
            checkit:form.check.value,
      }
      
 localStorage.setItem("Paymentdata",JSON.stringify(paymentdataobj))
 alert("Payment Sucessful")
     window.location.href="successfully.html" 
}

var getdata=localStorage.getItem("paydata")
document.querySelector("#payamount").value=getdata