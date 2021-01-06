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
    let commit_btn2 = document.getElementById("Apply");

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

    delete_btn.onclick = function(){  //프로젝트 삭제 클릭
        mainWindow.style.display = "none";

    }

    commit_btn.onclick = function(){  //수정반영 클릭
        mainWindow.style.display = "none";

    }

    commit_btn2.onclick = function(){  //수정반영 클릭
        mainWindow.style.display = "none";

    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* 프로필 (+)(-) */
    var Profcount = 5;
    
    var users =[
        {
            userId:'A',
            username: "홍길동1",
            userComent: "코멘트11",
            userMaster: false,
        },
        {
            userId:'B',
          username: '홍길동2',
          userComent: '코멘트22',
          userMaster: false,
        
        },
        {
            userId:'C',
            username: '홍길동3',
            userComent: '코멘트33',
            userMaster: false,
          
        },
        {
            userId:'D',
            username: '홍길동4',
            userComent: '코멘트44',
            userMaster: false,
          
        },
        {
            userId:'E',
            username: '홍길동5',
            userComent: '코멘트55',
            userMaster: true,
          
        },
        {
            userId:'F',
            username: '홍길동66',
            userComent: '코멘트66',
            userMaster: false,
          
        },
        {
            userId:'G',
            username: '홍길동77',
            userComent: '코멘트77',
            userMaster: false,
          
          },
        {
            userId:'H',
          username: '홍길동88',
          userComent: '코멘트88',
          userMaster: false,
        
        },
        {
            userId:'I',
            username: '홍길동99',
            userComent: '코멘트99',
            userMaster: false,
          
          },
    ];
    
    var teamuser =[
        {
            username: "홍길동1",
            userComent: "코멘트11",
            userMaster: false,
        },
        {
          username: '홍길동2',
          userComent: '코멘트22',
          userMaster: false,
        
        },
        {
            username: '홍길동3',
            userComent: '코멘트33',
            userMaster: false,
          
        },
        {
            username: '홍길동4',
            userComent: '코멘트44',
            userMaster: false,
          
        },
        {
            username: '홍길동5',
            userComent: '코멘트55',
            userMaster: true,
          
        },
    ];
    
    var Sruser =[
        {
            username: "홍길동1",
            userComent: "코멘트11",
            userMaster: false,
        },
        {
          username: '홍길동2',
          userComent: '코멘트22',
          userMaster: false,
        
        },
        {
            username: '홍길동3',
            userComent: '코멘트33',
            userMaster: false,
          
        },
        {
            username: '홍길동4',
            userComent: '코멘트44',
            userMaster: false,
          
        },
        {
            username: '홍길동5',
            userComent: '코멘트55',
            userMaster: true,
          
        },
    ];


    function DOWNPro(user){
        let Proli = document.createElement("li")
        Proli.className = "Proli"
        let ProDImg = document.createElement("img");
        ProDImg.className = "ProDImg"
        ProDImg.src = "../img/profile-igm.png"
        let ProDBT = document.createElement("button");
        ProDBT.className = "ProDBT"
        let ProPlImg = document.createElement("img");
        ProPlImg.className = "ProPlImg"
        ProPlImg.src = "../img/plusbtn.png"
        let balloon = document.createElement("div");
        balloon.className = "balloon"
        let ProDCm = document.createElement("h3");
        ProDCm.className = "ProDCm"
        ProDCm.textContent = user.userId + "/" + user.userComent
        let ProDNAME = document.createElement("h3");
        ProDNAME.className = "ProDNAME"
        ProDNAME.textContent = user.username

        ProDBT.onclick = function(){
            UPPro(user);

        }

        Proli.appendChild(ProDImg);
        Proli.appendChild(ProDBT);
        ProDBT.appendChild(ProPlImg);
        Proli.appendChild(balloon);
        balloon.appendChild(ProDCm);
        Proli.appendChild(ProDNAME);

        let ProfileD = document.getElementById("ProfileD");

        ProfileD.appendChild(Proli);

    }

    function UPPro(user){
        let ProUdiv = document.createElement("div");
        ProUdiv.className = "ProUdiv"
        let PrUImg = document.createElement("img");
        PrUImg.className = "PrUImg"
        PrUImg.src = "../img/profile-igm.png"
        let PrUBT = document.createElement("button");
        PrUBT.className = "PrUBT"
        let ProMiImg = document.createElement("img");
        ProMiImg.className = "ProMiImg"
        ProMiImg.src = "../img/minusbtn.png"
        let ProUNAME = document.createElement("h3");
        ProUNAME.className = "ProUNAME"
        ProUNAME.textContent = user.username

        PrUBT.onclick = function(){
            let miBT = this;
            parent = miBT.parentNode;
            grandparent = parent.parentNode;
            grandparent.removeChild(parent);

        }


        ProUdiv.appendChild(PrUImg);
        ProUdiv.appendChild(PrUBT);
        PrUBT.appendChild(ProMiImg);
        ProUdiv.appendChild(ProUNAME);

        let Profile = document.getElementById("Profile");

        Profile.appendChild(ProUdiv);
    }

    function removeElement(targetId){
        target = document.getElementById(targetId);
        while(target.hasChildNodes){
            target.removechild(target.firstChild)
        }

    }

    function addElement(){

    }


    for(let i = 0; i < teamuser.length; i++) {
        //username, userComent, userMaster
        UPPro(teamuser[i])
    }
    for(let i = 0; i < users.length; i++) {
        //username, userComent, userMaster
        DOWNPro(users[i])
    }

    let ProSrBT = document.getElementById("ProSrBT")

    ProSrBT.onclick = function(){
        for(let i = 0; i < users.length; i++) {
            //username, userComent, userMaster
            DOWNPro(users[i])
        }
    }
}