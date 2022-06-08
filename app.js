

//?===================== SELECT ==================================
    let input=document.querySelector(".input");
    let btn= document.querySelector(".btn");
    let ul = document.querySelector(".list");
    let toDo = document.querySelector("#toDo");
    let done = document.querySelector("#done");
    
//?====================== INPUT ==================================

btn.addEventListener("click", function(){
    console.log("erhan");
    if(input.value==""){
        alert("Lütfen listeye veri ekleyin!");
        btn.style.backgroundColor="blue";
        input.focus();
    }else{
        ul.innerHTML+=`
        <li class="taks">
        <i class="fa-solid fa-check fa-2x"></i>
        <p>${input.value}</p>
        <i class="fa-solid fa-trash-can fa-2x"></i></li>`
        input.value= "";
        btn.style.backgroundColor="grey";
        input.focus();
        
        
    }
})
 
//?====================== LIST CAPTURING =======================================
ul.addEventListener("click",(e)=>{

    if(e.target.classList.contains("fa-check")){
        e.target.nextElementSibling.classList.toggle("ciz");
        input.focus();

    } else if (e.target.classList.contains("fa-trash-can")) {
        
        e.target.parentElement.remove();
        input.focus();
    }
})
 

//? ====================== ENTER ====================================

    