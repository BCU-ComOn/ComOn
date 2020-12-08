document.getElementsByClassName("cogwheel").onclick = function() {
    let cogwheel = document.getElementsByClassName("cogwheel");
    cogwheel.onclick = function() {
        document.getElementsByClassName("passwdbox").style.display='inline';
    }
}