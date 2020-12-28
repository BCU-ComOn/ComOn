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
    var minusbtn1 = document.getElementById("minusbtn1");
    var minusbtn2 = document.getElementById("minusbtn2");

    cogwheel.onclick = function() {
        passwdbox.style.display = "block";
    }
    resetbtn.onclick = function() {
        passwdbox.style.display = "none";
    }
    reflectbtn.onclick = function() {
        passwdbox.style.display = "none";
    }
    plusbtn1.onclick = function() {
        combinebtns.style.display = "block";
    }
    plusbtn2.onclick = function() {
        combinebtns2.style.display = "block";
    }
    minusbtn1.onclick = function() {
        combinebtns.style.display = "none";
    }
};