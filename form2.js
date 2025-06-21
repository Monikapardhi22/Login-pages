let  log =document.querySelector(".log");

function myfunction(x){


    if(x=log){
        let form=document.querySelector(".form");

        form.style .display ="none";



        // new form create 


        let form1=document.querySelector(".form1");

        form1.style .display ="flex";
        form1.style .flexDirection ="column";
        form1.style.backgroundImage ="url('cake.jpg')";
        form1.style .backgroundSize ="cover";
        form1.style .backgroundRepeat ="no-repeat";
        // form1.style .margin="100px";
        form1.style.boxShadow ="0px 0px 3px white";
        form1.style .height ="400px";
        form1.style.width ="400px";
        form1.style .padding ="10px";
         form1.style .borderRadius ="13px";

        // heading 

       let y=document.querySelector(".demo");

       y.innerText =" Write Your details here " ;
       y.style .color="white";
       y.style .fontSize ="30px";
       y.style .marginBottom ="30px";

    //    name


       let n=document.querySelector(".name");

       n.innerHTML ="<label>Name    </label>     <input type='text' placeholder='Enter the name '/>";
       n.style .margin ="10px";
       n.style .color="white";
       n.style .marginLeft ="40px";
       
       

    //    /password

    let password=document.querySelector(".password");

    password.innerHTML ="<label>Password    </label>     <input type='password' placeholder='Enter the name '/>";
       password.style .margin ="10px";
       password.style .color="white";
       password.style .marginLeft ="40px";
       
// select


      let select=document.querySelector(".select");

      select.innerHTML ="Taste you want <select> <option value=''></option><option value='mango'>mango</option> <option value='Bee sting'>Bee sting</option> <option value='kutia'>kutia</option></select>";
      select.style .margin ="10px";
      select.style .color="white";
       select.style .marginLeft ="40px";
       

       function set(){
        let thank=document.querySelector(".thank");

      

        thank .innerText=" ♡ ♥ Thank you selecting ♡ ♥ " ;
        thank.style .margin ="10px";
      thank.style .color="white";
      thank.style .marginLeft ="40px";

       }

       select.addEventListener('change',set);

    //   submit
    
    
    let sub11=document.querySelector(".submit1");
    sub11.innerHTML ="<input type='submit'>";
    sub11 .style .marginLeft ="40px";
    sub11.style.marginTop ="40px";

    function off(){
        form1.style .display="none";
        let b=document.querySelector(".b");
        b.innerText ="Bye Bye";
    }


    sub11.addEventListener('click',off);

    
     
    }

    }




    log.addEventListener('click',myfunction);