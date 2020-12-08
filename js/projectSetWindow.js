window.onload = function() {
    //화면 바꾸기
    let wrapper = document.getElementById("wrapper");
    let wrapper2 = document.getElementById("wrapper2");

    let btnComp = document.getElementById("btnComp");
    let btnContent = document.getElementById("btnContent");

    btnComp.onclick = function() {       
        console.log(wrapper);
        wrapper.style.display = "block";
        wrapper2.style.display = "none";  
    }
    
    btnContent.onclick = function() {  
        console.log(wrapper2);
        wrapper.style.display = "none"; 
        wrapper2.style.display = "block"; 
    }
}