function selectTag(list, plus_ul) {
  var rel_list = document.getElementById(list);

  let selectValue = rel_list.options[rel_list.selectedIndex].innerText;

  var list_tag = document.getElementById(plus_ul);
  var list_items = list_tag.getElementsByTagName("li");

  for (let i = 0; i < list_tag.childElementCount; i++) {
    if (list_items[i].innerText === "#" + selectValue) return;
  }

  var plusTag = document.createElement("li");

  plusTag.innerText = "#" + selectValue;

  document.getElementById(plus_ul).appendChild(plusTag);
}

/*function selectTag(list, plus_ul) {
  console.log("list : " + list);
  console.log("plus_ul : " + plus_ul);
  // 관련 목록 리스트 "rel_list" 엘리먼트 선택
  var rel_list = document.getElementById(list);

  // 선택된 값 구하기
  let selectValue = rel_list.options[rel_list.selectedIndex].innerText;

  var list_tag = document.getElementById(plus_ul);
  var list_items = list_tag.getElementsByTagName("li");

  for (let i = 0; i < list_tag.childElementCount; i++) {
    //if (list_items[0].innerText === sel) return;
    if (list_items[i].innerText === "#" + selectValue) return;
  }

  // append 할 엘리먼트 만들기
  var plusTag = document.createElement("li");

  // 만들어진 엘리먼트에 innerText에 값 집어 넣기
  plusTag.innerText = "#" + selectValue;

  // 만들어진 엘리먼트를 "rel_list"에 append 시키기
  document.getElementById(plus_ul).appendChild(plusTag);

  // var plusTag = document.createElement("ul");
  // var plusTag = document.createElement("ul");
  // plusTag.innerHTML =
  //   "<li><a href='#'>#활동내역</a></li><li><a href='#'>#정보공유</a></li>";
  // document.getElementById("list_tag").appendChild(plusTag);
}
*/
