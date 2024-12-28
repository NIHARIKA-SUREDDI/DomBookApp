let form =document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
     
    let email=form.email.value;
    let password=form.password.value;

     

     if (email="admin@empher.com" && password=="empher@123"){
        
        window.location.href="admin.html";
        alert("logged in as Admin")
     }

     if (email="user@empher.com"&& password=="user@123"){
      window.location.href="books.html";
     }
     else{
      alert(" user credential are incorrect");
     }
})