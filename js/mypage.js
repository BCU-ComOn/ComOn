window.onload = function() {
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

    // 각 개인마다의 설정값을 불러와 화면에 반영

    plusbtn1.onclick = function() {
        // 객체
        // interest라는 변수를 가지고있어야 됨
        let field_tag1 = {interest: 'Game'};
        add_field_tag(field_tag1);
    }
    
    let field_tag1 = {interest: 'Game'};
    let interest_list = [field_tag1, ];

    // f(field_tag) = field_tag의 interst 값 대로 태그를 만들어 표시;
    function add_field_tag(field_tag1) {
        // <div class="combinebtns"></div>
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
    }

    // '태그를 추가'
    // interest_list[0]
    // interest_list[1]
    // interest_list[2]
    for(let i=0; i<interest_list.length; i++) {
        add_field_tag(interest_list[i]);
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
    plusbtn2.onclick = function() {
        combinebtns2.style.display = "block";
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
        console.log("전하는 메시지는 " + profile.message)
    }
    
};