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
