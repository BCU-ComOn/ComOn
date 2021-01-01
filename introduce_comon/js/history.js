window.onload = function() {
  // his_img 부분의 js
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
}