window.onload = function() {

    //화면 바꾸기
    let myProject = document.getElementById("myProject");
    let myContent = document.getElementById("myContent");
    let myLove = document.getElementById("myLove");

    let btnComp = document.getElementById("btnComp");
    let btnContent = document.getElementById("btnContent");
    let btnLove = document.getElementById("btnLove");

    btnComp.onclick = function() {        
        console.log(myProject);
        myProject.style.display = "grid";
        myContent.style.display = "none";  
        myLove.style.display = "none"; 
    }
    
    btnContent.onclick = function() {  
        console.log(myContent);
        myProject.style.display = "none"; 
        myContent.style.display = "grid"; 
        myLove.style.display = "none"; 
    }

    btnLove.onclick = function() {   
        myProject.style.display = "none"; 
        myContent.style.display = "none"; 
        myLove.style.display = "grid"; 
    }


    var cogwheel = document.getElementById("cogwheel");
    var passwdbox = document.getElementById("passwdbox");
    var favoritefield = document.getElementById("favoritefield");
    var resetbtn = document.getElementById("resetbtn");
    var reflectbtn = document.getElementById("reflectbtn");
    var combinebtns = document.getElementById("combinebtns");
    var combinebtns2 = document.getElementById("combinebtns2");
    var plusbtn1 = document.getElementById("plusbtn1");
    var plusbtn2 = document.getElementById("plusbtn2");

    cogwheel.onclick = function() {
        passwdbox.style.display = "block";
    }
    resetbtn.onclick = function() {
        passwdbox.style.display = "none";
    }
    reflectbtn.onclick = function() {
        passwdbox.style.display = "none";
    }
    plusbtn1.onclick = function() {
        combinebtns.style.display = "block";
    }
    plusbtn2.onclick = function() {
        combinebtns2.style.display = "block";
    }

};
