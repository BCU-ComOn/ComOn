window.onload = function() {
    var clickcog = document.getElementById("cogwheel");
    var passwdbox = document.getElementById("passwdbox");

    clickcog.onclick = function() {
        passwdbox.style.display = "block";
    }
};