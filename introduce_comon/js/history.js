window.onload = function() {
  // history-img 부분의 js
    let history_image1 = {his_img:"img/his_img_1.jpg"};
    let history_image2 = {his_img:"img/his_img_2.jpg"};

    let img_list = [history_image1,history_image2];

    for (let i = 0; i < img_list.length; i++) {
        let his_img = document.createElement("div");
        his_img.classList.add("img");        
        his_img.style = `background-image : url(${img_list[i].his_img});`

        let history_img = document.getElementsByClassName("history-img")[0];
        history_img.appendChild(his_img);
      }
  
  // history-table 부분의 js     
    let history_table1 = {listed_title: "2020.07 - 어쩌구", list_items:["어쩌구 저쩌구 어쩌구 저쩌구","어쩌구 저쩌구 어쩌구 저쩌구","어쩌구 저쩌구 어쩌구 저쩌구"]};
    let history_table2 = {listed_title: "2020.10 - 어쩌구", list_items:["어쩌구 저쩌구 어쩌구 저쩌구","어쩌구 저쩌구 어쩌구 저쩌구","어쩌구 저쩌구 어쩌구 저쩌구","어쩌구 저쩌구 어쩌구 저쩌구","어쩌구 저쩌구 어쩌구 저쩌구"]};
    let history_table3 = {listed_title: "2020.11 - 어쩌구", list_items:["어쩌구 저쩌구 어쩌구 저쩌구"]};
    let history_table4 = {listed_title: "2020.12 - 어쩌구", list_items:["어쩌구 저쩌구 어쩌구 저쩌구"]};
    let history_table5 = {listed_title: "2020.12 - 어쩌구", list_items:["어쩌구 저쩌구 어쩌구 저쩌구"]};
    let history_table6 = {listed_title: "2020.12 - 어쩌구", list_items:["어쩌구 저쩌구 어쩌구 저쩌구"]};

    let table_list = [history_table1,history_table2,history_table3,history_table4,history_table5,history_table6];
    
    for (let i = 0; i < table_list.length; i++) {
      let listed_box = document.createElement("div");
      listed_box.classList.add("listed-box");
      let listed_bar = document.createElement("div");
      listed_bar.classList.add("listed-bar");
      let text_box = document.createElement("div");
      text_box.classList.add("text-box");
      let listed_title = document.createElement("div");
      listed_title.classList.add("listed-title");
      let listed_ul = document.createElement("ul");
      listed_ul.classList.add("listed-ul");
      
      listed_box.appendChild(listed_bar);
      listed_box.appendChild(text_box);
      text_box.appendChild(listed_title);
      text_box.appendChild(listed_ul);
      
      listed_title.textContent = table_list[i].listed_title;
      
      let list_items = table_list[i].list_items; 

      for (let j = 0; j < list_items.length; j++) {
        let listed_li = document.createElement("li");
        listed_li.classList.add("listed-li");
        
        listed_ul.appendChild(listed_li);
        
        listed_li.textContent = table_list[i].list_items[j]; 
      }
      
      for (let k = 0; k < list_items.length; k++) {
        listed_bar.style.height = `${90 + 17.5 * k}px`;
      }
      
      if (3 < table_list.length) {
        if (table_list.length % 2 == 0) {
          evenfunction();
        }
        else {
          oddfunction();
        }
      }
      
      if (i % 2 == 0) { 
        let history_top = document.getElementsByClassName("history-top")[0];
        history_top.appendChild(listed_box);
      }
      else {
        let history_bottom = document.getElementsByClassName("history-bottom")[0];
        history_bottom.appendChild(listed_box);
      }    

      // 함수
      function evenfunction() {
        let middle_bar = document.getElementsByClassName("middle-bar")[0];
        let history_top = document.getElementsByClassName("history-top")[0];
        let history_bottom = document.getElementsByClassName("history-bottom")[0];
        let history_table = document.getElementsByClassName("history-table")[0];
  
        history_table.style.width = `${700 + 173 * (table_list.length - 3)}px`;
        middle_bar.style.width = `${700 + 173 * (table_list.length - 3)}px`;
        history_top.style.paddingRight = `${243}px`;
        history_bottom.style.paddingRight = `${70}px`;
      }
      function oddfunction() {
        let middle_bar = document.getElementsByClassName("middle-bar")[0];
        let history_top = document.getElementsByClassName("history-top")[0];
        let history_bottom = document.getElementsByClassName("history-bottom")[0];
        let history_table = document.getElementsByClassName("history-table")[0];
  
        history_table.style.width = `${700 + 173 * (table_list.length - 3)}px`;
        middle_bar.style.width = `${700 + 173 * (table_list.length - 3)}px`;
        history_top.style.paddingRight = `${70}px`;
        history_bottom.style.paddingRight = `${243}px`;
      }
    }
}