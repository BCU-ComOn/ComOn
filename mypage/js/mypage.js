window.onload = function() {

    //화면 바꾸기
    let myProject = document.getElementById("myProject");
    let myContent = document.getElementById("myContent");
    let myLove = document.getElementById("myLove");

    let btnComp = document.getElementById("btnComp");
    let btnContent = document.getElementById("btnContent");
    let btnLove = document.getElementById("btnLove");

    //객체 만들어서 게시글 올리기
    let article = {title: "제목1", created_at: "날짜1", name: "이름1", cont: "내용1"};
    let article2 = {title: "제목2", created_at: "날짜2", name: "이름2", cont: "내용2"};
    let article3 = {title: "제목2", created_at: "날짜2", name: "이름2", cont: "내용2"};

    let articles = [article, article2, article3];

    for(var i = 0; i < articles.length; i++) {
        let cont_div = document.createElement("div");
        cont_div.classList.add("div");
        let cont_divHeader = document.createElement("div");
        cont_divHeader.classList.add("myContentHeader");
        let cont_today = document.createElement("p");
        cont_today.classList.add("today");
        let cont_section = document.createElement("section");
        cont_section.classList.add("right-align");
        let cont_image = document.createElement("div");
        cont_image.classList.add("myImage");
        let cont_name = document.createElement("p");
        cont_name.classList.add("myName");
        let cont_divBody = document.createElement("div");
        cont_divBody.classList.add("myContentBody");
        let cont_contImage = document.createElement("div");
        let cont_title = document.createElement("h2");
        // cont_title.classList.add()
        let cont_cont = document.createElement("p");

        cont_div.appendChild(cont_divHeader);
        cont_div.appendChild(cont_divBody);
        cont_divHeader.appendChild(cont_today);
        cont_divHeader.appendChild(cont_section);
        cont_section.appendChild(cont_image);
        cont_section.appendChild(cont_name);
        cont_divBody.appendChild(cont_contImage);
        cont_divBody.appendChild(cont_title);
        cont_divBody.appendChild(cont_cont);

        cont_today.textContent = articles[i].created_at;
        cont_name.textContent = articles[i].name;
        cont_cont.textContent = articles[i].cont;
        cont_title.textContent = articles[i].title;

        let content_list = document.getElementsByClassName("content-list")[0];
        content_list.appendChild(cont_div);
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
    

    btnComp.onclick = function() {        
        console.log(myProject);
        myProject.style.display = "grid";
        myContent.style.display = "none";  
        myLove.style.display = "none"; 
    }
    
    btnContent.onclick = function() {  
        myProject.style.display = "none"; 
        myContent.style.display = "block"; 
        myLove.style.display = "none"; 
    }

    btnLove.onclick = function() {   
        myProject.style.display = "none"; 
        myContent.style.display = "none"; 
        myLove.style.display = "block"; 
    }

    cogwheel.onclick = function() {
        passwdbox.style.display = "block";
    }
    resetbtn.onclick = function() {
        passwdbox.style.display = "none";
    }

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
