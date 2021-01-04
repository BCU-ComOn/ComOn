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
    let Proli1 = document.getElementById("Proli-1"); // 팀원관리 프로필
    let ProMinus2 = document.getElementById("Min-2");
    let Proli2 = document.getElementById("Proli-2"); 
    let ProMinus3 = document.getElementById("Min-3");
    let Proli3 = document.getElementById("Proli-3"); 
    let ProMinus4 = document.getElementById("Min-4");
    let Proli4 = document.getElementById("Proli-4"); 

    let ProPlus6 = document.getElementById("ProPlus-6");
    let TESTBOX6 = document.getElementById("testT6")
    let ProPlus7 = document.getElementById("ProPlus-7");
    let TESTBOX7 = document.getElementById("testT7")
    let ProPlus8 = document.getElementById("ProPlus-8");
    let TESTBOX8 = document.getElementById("testT8")
    let ProPlus9 = document.getElementById("ProPlus-9");
    let TESTBOX9 = document.getElementById("testT9")
 
    var ProCdi6 = 'DOWN';
    var ProCdi7 = 'DOWN';
    var ProCdi8 = 'DOWN';
    var ProCdi9 = 'DOWN';


    ProMinus1.onclick = function(){  // 프로필 (-) 버튼 클릭
        Proli1.style.display = "none";
        Profcount -= 1;
        document.getElementById('testT1').innerHTML = '<li id="Proli-1"><img src="../img/profile-igm.png"width="60px"height="60px" class="pro2"><button class="pro1Plus"><img src="../img/plusbtn.png" alt="" id="ProPlus-1"></button><div class="balloon"><h3>'+ProComent[0]+'</h3></div><h3>'+ProNAME[0]+'</h3></li>'
        let ProPlus1 = document.getElementById("ProPlus-1");
        ProPlus1.onclick = function(){  // 프로필 (+) 버튼 클릭
            if ( Profcount < 5 ){
                TNUM = 2;
                Profcount += 1;
                document.getElementById('testT1').innerHTML = ''
                Proli1.style.display = "";
                }
                else{
                    alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
                }
            }
            let TESTBOX1 = document.getElementById("testT1")   
        }

    ProMinus2.onclick = function(){  // 프로필 (-) 버튼 클릭
            Proli2.style.display = "none";
            Profcount -= 1;
            document.getElementById('testT2').innerHTML = '<li id="Proli-2"><img src="../img/profile-igm.png"width="60px"height="60px" class="pro2"><button class="pro1Plus"><img src="../img/plusbtn.png" alt="" id="ProPlus-2"></button><div class="balloon"><h3>'+ProComent[1]+'</h3></div><h3>'+ProNAME[1]+'</h3></li>'
            let ProPlus2 = document.getElementById("ProPlus-2");
            ProPlus2.onclick = function(){  // 프로필 (+) 버튼 클릭
                if ( Profcount < 5 ){
                    
                    Profcount += 1;
                    document.getElementById('testT2').innerHTML = ''
                    Proli2.style.display = "";
                    }
                    else{
                        alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
                    }
                }   
        }

    ProMinus3.onclick = function(){  // 프로필 (-) 버튼 클릭
            Proli3.style.display = "none";
            Profcount -= 1;
            document.getElementById('testT3').innerHTML = '<li id="Proli-3"><img src="../img/profile-igm.png"width="60px"height="60px" class="pro2"><button class="pro1Plus"><img src="../img/plusbtn.png" alt="" id="ProPlus-3"></button><div class="balloon"><h3>'+ProComent[2]+'</h3></div><h3>'+ProNAME[2]+'</h3></li>'
            let ProPlus3 = document.getElementById("ProPlus-3");
            ProPlus3.onclick = function(){  // 프로필 (+) 버튼 클릭
                if ( Profcount < 5 ){
                    
                    Profcount += 1;
                    document.getElementById('testT3').innerHTML = ''
                    Proli3.style.display = "";
                    }
                    else{
                        alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
                    }
                }   
        }

    ProMinus4.onclick = function(){  // 프로필 (-) 버튼 클릭
            Proli4.style.display = "none";
            Profcount -= 1;
            document.getElementById('testT4').innerHTML = '<li id="Proli-4"><img src="../img/profile-igm.png"width="60px"height="60px" class="pro2"><button class="pro1Plus"><img src="../img/plusbtn.png" alt="" id="ProPlus-4"></button><div class="balloon"><h3>'+ProComent[3]+'</h3></div><h3>'+ProNAME[3]+'</h3></li>'
            let ProPlus4 = document.getElementById("ProPlus-4");
            ProPlus4.onclick = function(){  // 프로필 (+) 버튼 클릭
                if ( Profcount < 5 ){
                    
                    Profcount += 1;
                    document.getElementById('testT4').innerHTML = ''
                    Proli4.style.display = "";
                    }
                    else{
                        alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
                    }
                }   
        }

    ProPlus6.onclick = function(){  // 프로필 (+) 버튼 클릭
            if ( Profcount < 5 ){
                Profcount += 1;
                ProCdi6 = 'UP'
                TESTBOX6.style.display = "none";
                document.getElementById('Proli-6').innerHTML = '<div id = Proli-6><img src="../img/profile-igm.png"width="60px"height="60px" class="pro1"><button class="pro1Minus"><img src="../img/minusbtn.png" alt="" id=Min-6></button><h3>'+ProNAME[5]+'</h3></div>'
                }
                else{
                    alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
                }
                let ProMinus6 = document.getElementById("Min-6");
                ProMinus6.onclick = function(){  // 프로필 (-) 버튼 클릭
                    ProCdi6 = 'DOWN'
                    document.getElementById('Proli-6').innerHTML = ''
                    TESTBOX6.style.display = "";
                    Profcount -= 1;
            }
            

        }   

    ProPlus7.onclick = function(){  // 프로필 (+) 버튼 클릭
            if ( Profcount < 5 ){
                Profcount += 1;
                ProCdi7 = 'UP'
                TESTBOX7.style.display = "none";
                document.getElementById('Proli-7').innerHTML = '<div id = Proli-7><img src="../img/profile-igm.png"width="60px"height="60px" class="pro1"><button class="pro1Minus"><img src="../img/minusbtn.png" alt="" id=Min-7></button><h3>'+ProNAME[6]+'</h3></div>'
                }
                else{
                    alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
                }
                let ProMinus7 = document.getElementById("Min-7");
                ProMinus7.onclick = function(){  // 프로필 (-) 버튼 클릭
                    ProCdi7 = 'DOWN'
                    document.getElementById('Proli-7').innerHTML = ''
                    TESTBOX7.style.display = "";
                    Profcount -= 1;
            }
            

        }   

    ProPlus8.onclick = function(){  // 프로필 (+) 버튼 클릭
            if ( Profcount < 5 ){
                Profcount += 1;
                ProCdi8 = 'UP'
                TESTBOX8.style.display = "none";
                document.getElementById('Proli-8').innerHTML = '<div id = Proli-8><img src="../img/profile-igm.png"width="60px"height="60px" class="pro1"><button class="pro1Minus"><img src="../img/minusbtn.png" alt="" id=Min-8></button><h3>'+ProNAME[7]+'</h3></div>'
                }
                else{
                    alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
                }
                let ProMinus8 = document.getElementById("Min-8");
                ProMinus8.onclick = function(){  // 프로필 (-) 버튼 클릭
                    ProCdi8 = 'DOWN'
                    document.getElementById('Proli-8').innerHTML = ''
                    TESTBOX8.style.display = "";
                    Profcount -= 1;
            }
            

        }   

    ProPlus9.onclick = function(){  // 프로필 (+) 버튼 클릭
            if ( Profcount < 5 ){
                Profcount += 1;
                ProCdi9 = 'UP'
                TESTBOX9.style.display = "none";
                document.getElementById('Proli-9').innerHTML = '<div id = Proli-9><img src="../img/profile-igm.png"width="60px"height="60px" class="pro1"><button class="pro1Minus"><img src="../img/minusbtn.png" alt="" id=Min-9></button><h3>'+ProNAME[8]+'</h3></div>'
                }
                else{
                    alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
                }
                let ProMinus9 = document.getElementById("Min-9");
                ProMinus9.onclick = function(){  // 프로필 (-) 버튼 클릭
                    ProCdi9 = 'DOWN'
                    document.getElementById('Proli-9').innerHTML = ''
                    TESTBOX9.style.display = "";
                    Profcount -= 1;
            }
            

        }   


        

        /* 검색창 */

        let input = document.getElementById("input");
        let ProBT = document.getElementById("ProBT");

        ProBT.onclick = function(){
            var ProSr = input.value

            TESTBOX6.style.display = "none";
            TESTBOX7.style.display = "none";
            TESTBOX8.style.display = "none";
            TESTBOX9.style.display = "none";

            switch(ProSr){
                case ProNAME[0]:
                    prompt("1번");
                    TESTBOX1.style.display = "";
                    break
                case ProNAME[5]:
                    if(ProCdi6=='DOWN'){
                        prompt("6번");
                        TESTBOX6.style.display = "";
                    }
                    else{
                        prompt("실패"+ProCdi6);
                    }
                    break
                case ProNAME[6]:
                    if(ProCdi7=='DOWN'){
                        prompt("7번");
                        TESTBOX7.style.display = "";
                    }
                    break
                case ProNAME[7]:
                    if(ProCdi8=='DOWN'){
                        prompt("8번");
                        TESTBOX8.style.display = "";
                    }
                    break
                case ProNAME[8]:
                    if(ProCdi9=='DOWN'){
                        prompt("9번");
                        TESTBOX9.style.display = "";
                    }
                    break
                default:
                    TESTBOX6.style.display = "";
                    TESTBOX7.style.display = "";
                    TESTBOX8.style.display = "";
                    TESTBOX9.style.display = ""; 
                    prompt(ProCdi9)
                    break
            }
        }


   


}
