import { baseUrl } from "./baseUrl";

let form= document .getElementById("form")
form.addEventListener=("submit",async ()=>{
    let title= form.text.value;
    let author=form.tex1.value;
    let category=form.text2.value;
    let cont={
        title,
        author,
        category,
        isAvailable: true,
        isVerified: false,
        borrowedDays: null,
        imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
        
          
    };
   try{
    await fetch (`${baseUrl}/books`,{
        method:"POST",
        headers:{"content-type":"application/json",
   
   },
   body:JSON.stringify(cont),
});
alert("Book added sucessfully");
   }
catch(err){
    alert("something went wrong");

}
});
