let comeon = document.getElementById("comeon");
comeon.onclick = function() {
    var link = "apply_comon page2.html";
    location.href=link;
}



function handleOnChange(e){
  //선택된 데이터 가져오기
  const value = e.value;
  console.log(value);
  
  if(value == 'Dropdown') { // Dropdown을 선택했을때, 생성 안되도록 바로 함수를 탈출함.
    return false;
  }
  //데이터 출력
  let checkbox = document.getElementsByClassName('interest');
  
  // 생성전, 중복 되었는가를 판단. 
  for(var i = 0; i < checkbox.length; i++) {
    if(checkbox[i].textContent == value) { // 중복이라면, 기존에 존재하는 interest 제거.
      checkbox[i].parentNode.removeChild(checkbox[i]);
      return false;
    }
  }
  // 위의 for문을 정상적으로 끝내고 나면 생성함.
  let new_box = document.createElement('div');
  new_box.className = 'interest';
  new_box.textContent = value;

  let content = document.getElementsByClassName('content')[0];
  content.appendChild(new_box);
}

function handleOnChang(th){
  //선택된 데이터 가져오기
  const value = th.value;
  console.log(value);
  
  if(value == 'Dropdown') { // Dropdown을 선택했을때, 생성 안되도록 바로 함수를 탈출함.
    return false;
  }
  //데이터 출력
  let checkbox = document.getElementsByClassName('interest');
  
  // 생성전, 중복 되었는가를 판단. 
  for(var i = 0; i < checkbox.length; i++) {
    if(checkbox[i].textContent == value) { // 중복이라면, 기존에 존재하는 interest 제거.
      checkbox[i].parentNode.removeChild(checkbox[i]);
      return false;
    }
  }
  // 위의 for문을 정상적으로 끝내고 나면 생성함.
  let new_box = document.createElement('div');
  new_box.className = 'interest';
  new_box.textContent = value;

  let content = document.getElementsByClassName('content')[1];
  content.appendChild(new_box);
}