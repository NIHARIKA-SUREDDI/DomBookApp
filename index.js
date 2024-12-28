let form =document.getElementById("form")
form.addEventListener("submit",function(){
    event.preventDefault();
     
    let email=form.email.value;
    let password=form.password.value;

     email="admin@empher.com";
     password="empher@123";

     if (email="admin@empher.com" && password=="empher@123"){
        alert("logged in as Admin"),
        window.location.href="admin.html"
     }
})