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
    let ProMinus5 = document.getElementById("Min-5");
    
    let Proli1 = document.getElementById("Proli-1"); // 팀원관리 프로필
    let Proli2 = document.getElementById("Proli-2");
    let Proli3 = document.getElementById("Proli-3");
    let Proli4 = document.getElementById("Proli-4");
    let Proli5 = document.getElementById("Proli-5");



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



    ProMinus1.onclick = function(){  // 프로필 (-) 버튼 클릭
        Proli1.style.display = "none";
    }
    ProMinus2.onclick = function(){  
        Proli2.style.display = "none";
    }
    ProMinus3.onclick = function(){  
        Proli3.style.display = "none";
    }
    ProMinus4.onclick = function(){  
        Proli4.style.display = "none";
    }
    ProMinus5.onclick = function(){  
        Proli5.style.display = "none";
    }







}
