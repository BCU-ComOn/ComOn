window.onload = function() {
    let cancel_btn = document.getElementById('cancel-btn');
    let window = document.getElementById('setWindow');
    let information_btn = document.getElementById('information-btn');
    let team_btn = document.getElementById('teamMember-btn');


    cancel_btn.onclick = function(){
        window.style.display = "none";

    }

    information_btn.onclick = function(){
        information_btn.style.backgroundColor = "#309ce4";
        information_btn.style.color = "#ffffff";

        team_btn.style.backgroundColor = "#e0e0e0";
        team_btn.style.color = "#333333";
    }

    team_btn.onclick = function(){
        team_btn.style.backgroundColor = "#309ce4";
        team_btn.style.color = "#ffffff";

        information_btn.style.backgroundColor = "#e0e0e0";
        information_btn.style.color = "#333333";
    }


}