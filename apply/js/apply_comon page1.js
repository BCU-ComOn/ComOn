let comeon=document.getElementById("comeon");
comeon.onclick=function() {
    var link = "apply_comon page2.html";
    location.href=link;
}

function handleOnChange(e){
    //선택된 데이터 가져오기
    const value=e.value;

    //데이터 출력
    let new_box=document.createElement('div');
    new_box.className='interest';
    new_box.textContent=value;

    let content=document.getElementsByClassName('content')[0];
    content.appendChild(new_box);
}