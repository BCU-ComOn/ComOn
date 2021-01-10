let second_onload = window.onload;
window.onload = function() {
    //second_onload();
    
    let scroll_fixed = window.scrollY;
    let mainHeader = document.getElementById('header');
    mainHeader.style.backgroundColor = "rgba(0,0,0,0)";
    
    document.onscroll = function() {
        scroll_fixed = window.scrollY;
        if(mainHeader.style.backgroundColor == "rgba(0, 0, 0, 0)") {
            if(scroll_fixed > 0) {
                mainHeader.style.backgroundColor = "rgb(48, 156, 228)";
            }
        } else {
            if(scroll_fixed == 0) {
                mainHeader.style.backgroundColor = 'rgba(0,0,0,0)';
            }
        }
    }

    let comeon = document.getElementById('comeOn');

    comeon.onclick = function() {
        location.href = "../apply/apply_comon page1.html";
    }
}
