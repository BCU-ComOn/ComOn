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
    
    let Nav_login = mainNav_items.getElementsByTagName('a');
    mainNav_login[0].onclick = function() {
        mouseClickNav(this);
    }
    mainNav_login[1].onclick = function() {
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

function mouseClickNav(parent) {
    let noneChild = parent.getElementsByTagName('a')[0];
    let displayChild = parent.getElementsByTagName('a')[1];

    noneChild.style.display = 'none';
    displayChild.style.display = 'flex';
}