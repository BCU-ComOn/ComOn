let second_onload = window.onload;
window.onload = function() {
    second_onload();
    let scroll_fixed = window.scrollY;
    let mainHeader = document.getElementsByTagName('header')[0];
    
    document.onscroll = function() {
        scroll_fixed = window.scrollY;
        if(mainHeader.classList[1] == 'HeaderBackground-none') {
            if(scroll_fixed > 0) {
                mainHeader.classList.toggle('HeaderBackground-none');
            }
        } else {
            if(scroll_fixed == 0) {
                mainHeader.classList.toggle('HeaderBackground-none');
            }
        }
    }
}