window.onload = function() {

    //화면 바꾸기
    let myProject = document.getElementById("myProject");
    let myContent = document.getElementById("myContent");
    let myLove = document.getElementById("myLove");

    let btnComp = document.getElementById("btnComp");
    let btnContent = document.getElementById("btnContent");
    let btnLove = document.getElementById("btnLove");

    //내가 작성한 글
    let mycontent = {title: "제목1", created_at: "날짜1", name: "이름1", cont: "내용1"};
    let mycontent1 = {title: "제목2", created_at: "날짜2", name: "이름2", cont: "내용2"};

    let mycontents = [mycontent, mycontent1];

    for(var i = 0; i < mycontents.length; i++) {
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

        cont_today.textContent = mycontents[i].created_at;
        cont_name.textContent = mycontents[i].name;
        cont_cont.textContent = mycontents[i].cont;
        cont_title.textContent = mycontents[i].title;

        let content_list = document.getElementsByClassName("content-list")[0];
        content_list.appendChild(cont_div);
    }

    //내가 작성한 글
    let myLoveContent = {title: "제목1", created_at: "날짜1", name: "이름1", cont: "내용1"};
    let myLoveContent1 = {title: "제목2", created_at: "날짜2", name: "이름2", cont: "내용2"};
    let myLoveContent2 = {title: "제목3", created_at: "날짜3", name: "이름3", cont: "내용3"};
    let myLoveContent3 = {title: "제목4", created_at: "날짜4", name: "이름4", cont: "내용4"};

    let myLoveContents = [myLoveContent, myLoveContent1, myLoveContent2, myLoveContent3];

    for(var i = 0; i < myLoveContents.length; i++) {
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

        cont_today.textContent = myLoveContents[i].created_at;
        cont_name.textContent = myLoveContents[i].name;
        cont_cont.textContent = myLoveContents[i].cont;
        cont_title.textContent = myLoveContents[i].title;

        let content_list = document.getElementsByClassName("love-list")[0];
        content_list.appendChild(cont_div);
    

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
        var minusbtn1 = document.getElementsByClassName("minusbtn1");
        var minusbtn2 = document.getElementById("minusbtn2");
        var modifybtn = document.getElementById("modifybtn");

        
        let field_tag1 = {interest: 'Game'};
        let interest_list = [field_tag1 ];

        let field_tag2 = {interest_language: 'Java'};
        let interest_list2 = [field_tag2 ];

                plusbtn1.onclick = function() {
                    //함수 안쓸거면 이거 써~&^^
                    if(document.getElementById("field_container").childElementCount > 3){
                        return;
                    }
                    let interest_field_box = document.createElement("div");
                    interest_field_box.classList.add("combinebtns");
                    
                    // <div class="interest1"></div>
                    let interest_field_content = document.createElement("div");
                    interest_field_content.classList.add("interest1");
        
                    // <button class="minusbtn1"></button>
                    let minusbtn1 = document.createElement("button");
                    minusbtn1.classList.add("minusbtn1");
                    minusbtn1.onclick = function() {
                        let minusbtn = this;
                        parent = this.parentNode;
                        grandparent = parent.parentNode;
                        grandparent.removeChild(parent);
                    }
                    
                    interest_field_box.appendChild(interest_field_content);
                    interest_field_box.appendChild(minusbtn1);
        
                    interest_field_content.textContent = field_tag1.interest;
                    
                    let combinebtns = document.getElementById("field_container");
                    combinebtns.appendChild(interest_field_box);
                    //여기까지 
                    
                    /*add_field_tag(field_tag1);*/
                }
        
        plusbtn2.onclick = function() {
            //함수 안쓸거면 이거 써~&^^
            if(document.getElementById("container").childElementCount > 3){
                return;
            }
            let interest_language_box = document.createElement("div");
            interest_language_box.classList.add("combinebtns2");
            
            // <div class="interest1"></div>
            let interest_language_content = document.createElement("div");
            interest_language_content.classList.add("interestlang1");

            // <button class="minusbtn1"></button>
            let minusbtn2 = document.createElement("button");
            minusbtn2.classList.add("minusbtn2");
            minusbtn2.onclick = function() {
                let minusbtn = this;
                parent = this.parentNode;
                grandparent = parent.parentNode;
                grandparent.removeChild(parent);
            }
            
            interest_language_box.appendChild(interest_language_content);
            interest_language_box.appendChild(minusbtn2);

            interest_language_content.textContent = field_tag2.interest_language;
            
            let combinebtns2 = document.getElementById("container");
            combinebtns2.appendChild(interest_language_box);
            //여기까지 

            /*add_field_tag(field_tag1);*/
        }
        
        let currentpasswd = document.getElementById('currentpasswd').value
        let changepasswd = document.getElementById('changepasswd').value
        let passwdcheck = document.getElementById('passwdcheck').value

        reflectbtn.onclick = function() {
            if(changepasswd.value == passwdcheck.value) {
                currentpasswd.value = changepasswd.value
                passwdbox.style.display = "none";
            } else {
                alert("비밀번호가 일치하지 않습니다.")
            }
        }

        let role = document.getElementsByClassName('role')[0];
        let manager = '운영진';
        role.textContent = manager;

        // let role = document.getElementsByClassName('role')[0];
        // let manager = getFromServer();
        // role.textContent = manager;

        // f(field_tag) = field_tag의 interst 값 대로 태그를 만들어 표시;
        function add_field_tag(field_tag1) {
            //함수 쓰려면 주석 지우기
            
            /*let interest_field_box = document.createElement("div");
            interest_field_box.classList.add("combinebtns");
            
            // <div class="interest1"></div>
            let interest_field_content = document.createElement("div");
            interest_field_content.classList.add("interest1");

            // <button class="minusbtn1"></button>
            let minusbtn1 = document.createElement("button");
            minusbtn1.classList.add("minusbtn1");
            minusbtn1.onclick = function() {
                let minusbtn = this;
                parent = this.parentNode;
                grandparent = parent.parentNode;
                grandparent.removeChild(parent);
            }
            
            interest_field_box.appendChild(interest_field_content);
            interest_field_box.appendChild(minusbtn1);

            interest_field_content.textContent = field_tag1.interest;
            
            let combinebtns = document.getElementById("field_container");
            console.log(field_container);
            combinebtns.appendChild(interest_field_box);*/
        }

        '태그를 추가'
        // interest_list[0]
        // interest_list[1]
        // interest_list[2]

        cogwheel.onclick = function() {
            passwdbox.style.display = "block";
        }

        resetbtn.onclick = function() {
            passwdbox.style.display = "none";
        }
        modifybtn.onclick = function() {
            let profile = {
                interest_field: [],
                interest_language: [],
                url: '',
                message: ''
            } 

            profile.url = document.getElementById('url').value;
            profile.message = document.getElementById('message').value;

            console.log("프로필 주소는 " + profile.url);
            console.log("전하는 메시지는 " + profile.message);
        };
        
}
