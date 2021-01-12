window.onload = function() {
    let mainNav = document.getElementById('mainNav');
    let mainNav_items = mainNav.getElementsByTagName('li');

    for(var i = 0; i < (mainNav_items.length-1); i++) {
        mainNav_items[i].onmouseover = function() {
            mouseoverNav(this);
        }
        mainNav_items[i].onmouseout = function() {
            mouseoutNav(this);
        }
    }

    let comoff_User = document.getElementById('comoff-font');

    comoff_User.onclick = function() {
        console.log('hello');
        comoff_User.parentNode.style.display = 'none';
        clickComOff(this);
    }
}

function mouseoverNav(parent) {
    let noneChild = parent.getElementsByTagName('a')[0];
    let displayChild = parent.getElementsByTagName('a')[1];

    noneChild.style.display = 'none';
    displayChild.style.display = 'flex';
}

function mouseoutNav(parent) {
    let displayChild = parent.getElementsByTagName('a')[0];
    let noneChild = parent.getElementsByTagName('a')[1];

    noneChild.style.display = 'none';
    displayChild.style.display = 'flex';
}

// self 매개변수를 통해 clickLogin가 실행되는 login-user 요소를 받음
function clickLogin(self) {
    let parent = self.parentNode; // login-user의 부모인 li를 parent로 설정
    
    let profile_user = parent.getElementsByClassName("profile-user")[0]; // 부모의 자식 중 선택
    let login_user = parent.getElementsByClassName("login-user")[0]; // 선택2

    // 하나는 보이게 하나는 안보이게
    login_user.style.display = 'none';
    profile_user.style.display = 'flex';
}

function clickUser(self) {
    let parent = self.parentNode;
    let comoff_box = parent.getElementsByClassName('comoff')[0];

    if(comoff_box.style.display == '' || comoff_box.style.display == 'none') {
        comoff_box.style.display = 'flex';
        return false;
    }
    if(comoff_box.style.display === 'flex') {
        comoff_box.style.display = 'none';
        return false;
    }
}

function clickComOff(self) {
    let son = self.parentNode; // login-user의 부모인 li를 parent로 설정
    let parent = son.parentNode;
    
    let profile_user = parent.getElementsByClassName("profile-user")[0]; // 부모의 자식 중 선택
    let login_user = parent.getElementsByClassName("login-user")[0]; // 선택2

    // 하나는 보이게 하나는 안보이게
    login_user.style.display = 'flex';
    profile_user.style.display = 'none';
}