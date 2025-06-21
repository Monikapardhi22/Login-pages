// head of sign 


let head=document.querySelector(".sec");

head.onclick=()=>{
    let x=document.querySelector(".dis");
    x.innerText ="welcome for Sign in";
    x.style .color="black";
    x.style.margin ="10px";
    x.style .padding="10px";
    x.style. borderStyle="solid";
    x.style. boder ="1px black";
    x.style.fontSize ="23px";
    x.style .fontWeight ="700";
    head.style .display="none";

}


// after submission 

function info(){
    let i=document.querySelector("#correct");
    if(i){
        let sub=document.querySelector(".submit ");

        sub.onclick=()=>{
    
      let form=document.querySelector("form");
      form.style .backgroundColor="brown";
      form.style .fontSize="25px";

      form.innerText ="Thank you For coming";
}
}}

let i1=document.querySelector("#correct");
i1.addEventListener('click',info);



// when click color of background will be changed of form 


let  sec1=document.querySelector(".sec1");

sec1.onclick=()=>{
//  let i=document.querySelector(".sec");
 sec1.style .backgroundColor ="white";
}





