window.onload = function() {
    //화면 바꾸기
    let wrapper = document.getElementById("wrapper");
    let wrapper2 = document.getElementById("wrapper2");

    let btnComp = document.getElementById("btnComp"); //기본정보
    let btnContent = document.getElementById("btnContent"); //팀원관리
    let cancelBtn = document.getElementById("cancel-btn"); //취소버튼
    let mainWindow = document.getElementById("setting-window-content"); //메인 윈도우
    let cancelBtn2 = document.getElementById("cancel"); //취소버튼
    let delete_btn = document.getElementById("delete-btn"); //프로젝트 삭제 버튼
    let commit_btn = document.getElementById("commit-btn"); //수정반영 버튼
    
    /*기본 정보*/

    let plusButton = document.getElementById("plusButton");
    let develop_ready = document.getElementById("develop-ready");
    let developing = document.getElementById("developing");
    let test = document.getElementById("test");
    let develop_finish = document.getElementById("develop-finish");
    
/*준비중 클릭시 화살표*/
    develop_ready.onclick = function(){ 
        arrow1.style.visibility = "visible";
        arrow2.style.visibility = "hidden";
        arrow3.style.visibility = "hidden";
        arrow4.style.visibility = "hidden";
    }
/*개발중 클릭시 화살표*/
    developing.onclick = function(){

        arrow1.style.visibility = "hidden";
        arrow2.style.visibility = "visible";
        arrow3.style.visibility = "hidden";
        arrow4.style.visibility = "hidden";
    }
/*테스트 클릭시 화살표*/
    test.onclick = function(){
        arrow1.style.visibility = "hidden";
        arrow2.style.visibility = "hidden";
        arrow3.style.visibility = "visible";
        arrow4.style.visibility = "hidden";
    }
/*완료 클릭시 화살표*/
    develop_finish.onclick = function(){
        arrow1.style.visibility = "hidden";
        arrow2.style.visibility = "hidden";
        arrow3.style.visibility = "hidden";
        arrow4.style.visibility = "visible";
    }



/*태그 플러스 마이너스 버튼 누르면 작동*/
    plusButton.onclick = function(){
        let article_content = document.getElementById("article-content");
        article_content.classList.add("article-content");
    
        let tagsContainer = document.getElementById("tagsContainer");
        tagsContainer.classList.add("tagsContainer");
        let tags = document.createElement("div");
        tags.classList.add("tags");
        let project_type = document.createElement("div");
        project_type.classList.add("project-type");
        let tagMinus = document.createElement("img");
        tagMinus.src = "../img/minusbtn.png";
        tagMinus.classList.add("tagMinus");
    
        article_content.appendChild(tagsContainer);
        tagsContainer.appendChild(tags);
        tags.appendChild(project_type);
        tags.appendChild(tagMinus);
    
        project_type.textContent = "JAVA";  

        tagMinus.onclick = function(){
            tags.style.display = "none";
        }
            
    }
        
    
    


    







    btnComp.onclick = function() {       //기본정보 클릭
        console.log(wrapper);
        wrapper.style.display = "block";
        wrapper2.style.display = "none";

        
        btnComp.style.background = "#309ce4";
        btnComp.style.color = "#ffffff";
        btnContent.style.backgroundColor = "#e0e0e0";
        btnContent.style.color = "#333333";


    }
    
    btnContent.onclick = function() {   //팀원관리 클릭
        console.log(wrapper2);
        wrapper.style.display = "none"; 
        wrapper2.style.display = "block"; 

    
        btnContent.style.backgroundColor = "#309ce4";
        btnContent.style.color = "#ffffff";
        btnComp.style.background = "#e0e0e0";
        btnComp.style.color = "#333333";

    }

    cancelBtn.onclick = function(){  //취소버튼 클릭
        mainWindow.style.display = "none";

    }

    cancelBtn2.onclick = function(){  //취소버튼 클릭
        mainWindow.style.display = "none";

    }
 
    /* 프로필 (+)(-) */
    var Profcount = 5;

    delete_btn.onclick = function(){  //프로젝트 삭제 클릭
        mainWindow.style.display = "none";

    }

    commit_btn.onclick = function(){  //수정반영 클릭
        mainWindow.style.display = "none";

    }
    
    var ProNAME = ['홍길동1','홍길동2','홍길동3','홍길동4','홍길동5','홍길동6','홍길동7','홍길동8','홍길동9','홍길동10'];
    var ProComent = ['코멘트1','코멘트2','코멘트3','코멘트4','코멘트5','코멘트6','코멘트7','코멘트8','코멘트9','코멘트10'];
    


    document.getElementById('Proli-top').innerHTML = '<div id = Proli-top><img src="../img/profile-igm.png"width="60px"height="60px" class="pro1"><button class="pro1Top"><img src="../img/minusbtn.png" alt="" id=Min-top></button><h3>'+ProNAME[4]+'</h3></div>'

    // 위 프로필 (-)
    for(var i=1;i<5;i++){
        document.getElementById('Proli-'+i).innerHTML = '<div id = Proli-'+i+'><img src="../img/profile-igm.png"width="60px"height="60px" class="pro1"><button class="pro1Minus"><img src="../img/minusbtn.png" alt="" id=Min-'+i+'></button><h3>'+ProNAME[i-1]+'</h3></div>'
    }

    // 아래 프로필 (+)
    for(var i=6;i<10;i++){
        document.getElementById('testT'+i).innerHTML = '<li id="Proli-'+i+'"><img src="../img/profile-igm.png"width="60px"height="60px" class="pro2"><button class="pro1Plus"><img src="../img/plusbtn.png" alt="" id="ProPlus-'+i+'"></button><div class="balloon"><h3>'+ProComent[i-1]+'</h3></div><h3>'+ProNAME[i-1]+'</h3></li>'
    }

    let ProMinus1 = document.getElementById("Min-1"); // 팀원관리 (-) 버튼
    let ProPlus1 = document.getElementById("ProPlus-1");
    let Proli1 = document.getElementById("Proli-1"); // 팀원관리 프로필
    let ProPlus6 = document.getElementById("ProPlus-6");
    let Proli6 = document.getElementById("testT6");
    let Proli7 = document.getElementById("Proli-7");

    ProMinus1.onclick = function(){  // 프로필 (-) 버튼 클릭
        Proli1.style.display = "none";
        Profcount -= 1;
        document.getElementById('testT1').innerHTML = '<li id="Proli-1"><img src="../img/profile-igm.png"width="60px"height="60px" class="pro2"><button class="pro1Plus"><img src="../img/plusbtn.png" alt="" id="ProPlus-1"></button><div class="balloon"><h3>'+ProComent[0]+'</h3></div><h3>'+ProNAME[0]+'</h3></li>'
        let ProPlus1 = document.getElementById("ProPlus-1");
        ProPlus1.onclick = function(){  // 프로필 (+) 버튼 클릭
            if ( Profcount < 5 ){
                
                Profcount += 1;
                document.getElementById('testT1').innerHTML = ''
                Proli1.style.display = "";
                }
                else{
                    alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
                }
            }   
        }
    ProPlus6.onclick = function(){  // 프로필 (+) 버튼 클릭
        if ( Profcount < 5 ){
        Proli6.style.display = "none";
        Profcount += 1;
        document.getElementById('Proli-6').innerHTML = '<div id = Proli-6><img src="../img/profile-igm.png"width="60px"height="60px" class="pro1"><button class="pro1Minus"><img src="../img/minusbtn.png" alt="" id=Min-6></button><h3>'+ProNAME[5]+'</h3></div>'
        }
        else{
            alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
        }
    }
    ProPlus7.onclick = function(){  // 프로필 (+) 버튼 클릭
        if ( Profcount < 5 ){
        Proli7.style.display = "none";
        Profcount += 1;
        }
        else{
            alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
        }
    }


   


}
