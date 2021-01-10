window.addEventListener('DOMContentLoaded', function() {
    // html 파일의 body에 header, footer 자동 생성
    let docuBody = document.getElementsByTagName('body')[0];
    let docuHeader = document.createElement('header');
    let docuFooter = document.createElement('footer');

    docuHeader.className = "mainPage-Header";
    docuHeader.id = 'header';
    docuFooter.className = "mainPage-footer";
    docuFooter.id = 'footer';

    docuBody.prepend(docuHeader);
    docuBody.appendChild(docuFooter);

    // <body>안의 <header>와 <footer>에 코드 생성.

    let headerNav = document.createElement('nav');
    let headerUl = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');

    docuHeader.innerHTML = [
        "<a href=''>",
        "<h1 class='MainHeader'>Com;On</h1>",
        "</a>"
    ].join("");
    li1.innerHTML = '<a href="">Comee</a><a href="">컴온들</a>';
    li2.innerHTML = '<a href="">ComWith</a><a href="">함께 프로젝트</a>';
    li3.innerHTML = '<a href="">Community</a><a href="">게시판</a>';
    li4.innerHTML = [
        '<a href="">',
            '<span>Comeest</span>',
            '<img src="img/comeest_basic.png" alt="트로피" onerror="imgError(this)"></img>',
        '</a>',
        '<a href="">',
            '<span>명예의전당</span>',
            '<img src="img/comeest_basic.png" alt="트로피" onerror="imgError(this)"></img>',
        '</a>'
    ].join("");
    li5.innerHTML = [
        '<a href="#" class="login-user" onclick="clickLogin(this); return false;">',
            '<img src="img/profile-igm.png" alt="유저" id="header-user" onerror="imgError(this)">',
            '<span class="profile-text">Login</span>',
        '</a>',
        '<div class="comoff">',
            '<span id="comoff-font">Com;Off</span>',
        '</div>',
        '<a href="#" class="profile-user" onclick="clickUser(this); return false;">',
            '<img src="img/profile-igm.png" alt="유저" id="header-user" onerror="imgError(this)">',
            '<span class="profile-text">홍길동</span>',
        '</a>'
    ].join("");
    headerNav.className = "mainPage-nav";
    headerUl.id = "mainNav";

    docuHeader.appendChild(headerNav);
    headerNav.appendChild(headerUl);
    headerUl.appendChild(li1);
    headerUl.appendChild(li2);
    headerUl.appendChild(li3);
    headerUl.appendChild(li4);
    headerUl.appendChild(li5);

    // <body> 안에 footer의 id 값을 받아와, footer생성.

    let footerSpan = document.createElement('span');
    let footerUl = document.createElement('ul');
    let footli1 = document.createElement('li');
    let footli2 = document.createElement('li');
    let footli3 = document.createElement('li');

    footerSpan.className = 'footer-font';
    footerSpan.textContent = '부천대학교 컴퓨터소프트웨어과 전공동아리';
    footerUl.className = 'footer-list';
    footli1.innerHTML = '@2020-2020 Com;On';
    footli2.innerHTML = '부천대학교 소사캠퍼스 공학강의동 5층';
    footli3.innerHTML = 'Developed By Comee';

    docuFooter.appendChild(footerSpan);
    docuFooter.appendChild(footerUl);
    footerUl.appendChild(footli1);
    footerUl.appendChild(footli2);
    footerUl.appendChild(footli3);
    docuFooter.innerHTML += [
        '<a href="mailto:test@test.com">',
            '<input type="button" value="contact" class="email-contact">',
        '</a>'
    ].join("");

    // css 코드 생성.

    let head = document.getElementsByTagName('head')[0];
    let style1 = document.createElement('style');

    style1.innerHTML = [
        '@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");',
        '@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");',
        'a {',
            'text-decoration: none;',
            'outline: 0;',
        '}',
        'body {',
            'font-family: "Noto Sans KR";',
        '}',
        '.mainPage-Header {',
            'display: flex;',
            'height: 100px;',
            'background-color: #309ce4;',
            'justify-content: center;',
            'align-items: center;',
        '}',
        '.MainHeader {',
            'font-family: "Fredoka One";',
            'justify-content: center;',
            'align-items: center;',
            'width: 140px;',
            'font-size: 36px;',
            'font-weight: bold;',
            'color: #ffffff;',
            'text-shadow: 3px 3px 3px black;',
            'letter-spacing: 2px;',
        '}',
        '#mainNav {',
            'display: flex;',
            'height: 100px;',
            'list-style: none;',
            'justify-content: space-evenly;',
        '}',
        '#mainNav li {',
            'display: flex;',
            'justify-content: center;',
            'align-items: center;',
            'width: 140px;',
            'margin: 0px 15px;',
        '}',
        '#mainNav li a {',
            'display: flex;',
            'font-size: 20px;',
            'color: #ffffff;',
        '}',
        '#mainNav li:last-child a {',
            'font-size: 18px;',
            'text-shadow: 2px 2px 3px black;',
        '}',
        '#mainNav li a:last-child {',
            'display: none;',
        '}',
        '#mainNav li:nth-child(4) img {',
            'width: 40px;',
            'height: 40px;',
    '}',
        '#mainNav li:nth-child(5) img {',
            'width: 45px;',
            'height: 45px;',
        '}',
        '#mainNav span {',
            'align-items: center;',
            'display: flex;',
        '}',
        '.comeest-text {',
            'margin: auto 0;',
            'width: 100px;',
        '}',
        '.comeest-text span {',
            'justify-content: center;',
        '}',
        '.profile-text {',
            'margin: auto 0;',
            'margin-left: 10px;',
            'width: 85px;',
        '}',
        '.mainPage-footer {',
            'margin-top: 50px;',
            'padding: 25px;',
            'display: flex;',
            'flex-direction: column;',
            'background-color: #e0e0e0;',
            'justify-content: center;',
            'align-items: center;',
            'font-size: 14px;',
        '}',
        '.footer-list {',
            'margin: 20px 0px;',
            'line-height: 18px;',
            'text-align: center;',
            'list-style: none;',
        '}',
        '.email-contact {',
            'width: 60px;',
            'height: 25px;',
            'background-color: #309ce4;',
            'color: #ffffff;',
            'border: #309ce4;',
            'border-radius: 4px;',
        '}',
        '.comoff {',
            'display: none;',
            'background-color: #309ce4;',
            'position: absolute;',
            'top: 100px;',
            'width: 100px;',
            'height: 50px;',
            'font-size: 14px;',
            'color: #ffffff;',
            'justify-content: center;',
            'border-radius: 0px 0px 8px 8px;',
        '}',
        '#comoff-font {',
            'cursor: pointer;',
        '}',
        'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,',
        'p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,',
        'em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,',
        'i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,',
        'tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,',
        'figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,',
        'mark,audio,video {',
            'margin: 0;',
            'padding: 0;',
            'border: 0;',
            'font-size: 100%;',
            'font: inherit;',
            'vertical-align: baseline;',
        '}',
    /* HTML5 display-role reset for older browsers */
        'article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {',
            'display: block;',
        '}',
        'body {',
            'line-height: 1;',
        '}',
        'blockquote,q {',
            'quotes: none;',
        '}',
        'blockquote:before,blockquote:after,q:before,q:after {',
            'content: "";',
            'content: none;',
        '}',
        'table {',
            'border-collapse: collapse;',
            'border-spacing: 0;',
        '}'
    ].join("");
    head.appendChild(style1);

    // js 코드 불러오기.
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

    let Allimg = docuHeader.getElementsByTagName('img');
    
    //findImage(imgTrophy.src);
})
/*
function findImage(img, imgHeight) {
    if(imgHeight == 0) {
        img.src = "../" + img.getAttribute('src');
        console.log(img.width);
    } else {
        return false;
    }
}

function findImage(imgsrc) {
    console.log(imgsrc);
    let files = new Image;
    files.src = imgsrc;
    console.log(files.src);
    for(var i = 0; i < 5; i++) {
        if(!files.complete) {
            files.src = "../" + imgsrc;
            console.log(files.src);
        } else {
            return false;
        }
    }
}
*/
// 사진이 나오지 않을 시, 상위의 폴더로 넘어가서 검색한다.
function imgError(img) {
    img.src = "../"+ img.getAttribute('src');
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
