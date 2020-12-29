window.onload = function() {
    //화면 바꾸기
    let wrapper = document.getElementById("wrapper");
    let wrapper2 = document.getElementById("wrapper2");

    let btnComp = document.getElementById("btnComp"); //기본정보
    let btnContent = document.getElementById("btnContent"); //팀원관리


    let cancelBtn = document.getElementById("cancel-btn"); //취소버튼

    let mainWindow = document.getElementById("setting-window-content"); //메인 윈도우

    let cancelBtn2 = document.getElementById("cancel"); //취소버튼
    
    /* 팀원 관리 */
    let ProMinus1 = document.getElementById("Min-1"); // 팀원관리 (-) 버튼
    let ProMinus2 = document.getElementById("Min-2");
    let ProMinus3 = document.getElementById("Min-3");
    let ProMinus4 = document.getElementById("Min-4");
    let ProPlus6 = document.getElementById("ProPlus-6");
    let ProPlus7 = document.getElementById("ProPlus-7");
    let ProPlus8 = document.getElementById("ProPlus-8");
    let ProPlus9 = document.getElementById("ProPlus-9");
    
    let Proli1 = document.getElementById("Proli-1"); // 팀원관리 프로필
    let Proli2 = document.getElementById("Proli-2");
    let Proli3 = document.getElementById("Proli-3");
    let Proli4 = document.getElementById("Proli-4");
    let Proli6 = document.getElementById("Proli-6");
    let Proli7 = document.getElementById("Proli-7");
    let Proli8 = document.getElementById("Proli-8");
    let Proli9 = document.getElementById("Proli-9");



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

    ProMinus1.onclick = function(){  // 프로필 (-) 버튼 클릭
        Proli1.style.display = "none";
        Profcount -= 1;
    }
    ProMinus2.onclick = function(){  
        Proli2.style.display = "none";
        Profcount -= 1;
    }
    ProMinus3.onclick = function(){  
        Proli3.style.display = "none";
        Profcount -= 1;
    }
    ProMinus4.onclick = function(){  
        Proli4.style.display = "none";
        Profcount -= 1;
    }

    ProPlus6.onclick = function(){  // 프로필 (+) 버튼 클릭
        if ( Profcount < 5 ){
        Proli6.style.display = "none";
        Profcount += 1;
        }
        else{
            alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
        }
    }
    ProPlus7.onclick = function(){  
        if ( Profcount < 5 ){
            Proli6.style.display = "none";
            Profcount += 1;
            }
            else{
                alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
            }
    }
    ProPlus8.onclick = function(){  
        if ( Profcount < 5 ){
            Proli6.style.display = "none";
            Profcount += 1;
            }
            else{
                alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
            }
    }
    ProPlus9.onclick = function(){  
        if ( Profcount < 5 ){
            Proli6.style.display = "none";
            Profcount += 1;
            }
            else{
                alert("상단에 고정되어 있는 인원수가 너무 많습니다 .\n\n 최대 인원 5명 ");
            }
    }






}
