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
function displayData(ele){
    let cont =document.getElementById("cont")
    cont.innerHTML=" ";
ele.map((obj,i)=>{
    let card=document.createElement("div")
    let title=document.createElement("h3")
    title.textContent=`{obj.title}`;
   let author=document.createElement("h3")
    author.textContent=`{obj.author}`;
    let category=document.createElement("h3")
    category.textContent=`{obj.title}`;


});
card.append(
    title,
    author,
    category,
);
cont.append(card);


}
