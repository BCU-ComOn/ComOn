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
}