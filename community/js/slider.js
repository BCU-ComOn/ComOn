window.onload = () => {
  //슬라이더 데이터
  let datajson = {
    slider_list: [
      {
        post_day: "2020-00-00",
        post_maker: {
          user_name: "이영재",
          user_img: "http://placehold.it/30x30",
        },
        post_img: "http://placehold.it/220x120",
        post_title: "1111",
        post_text: "2222",
        new: true,
      },
      {
        post_day: "2020-00-00",
        post_maker: {
          user_name: "김수진",
          user_img: "http://placehold.it/30x30",
        },
        post_img: "http://placehold.it/220x120",
        post_title: "1111",
        post_text: "2222",
        new: false,
      },
      {
        post_day: "2020-00-00",
        post_maker: {
          user_name: "신정기",
          user_img: "http://placehold.it/30x30",
        },
        post_img: "http://placehold.it/220x120",
        post_title: "1111",
        post_text: "2222",
        new: false,
      },
      {
        post_day: "2020-00-00",
        post_maker: {
          user_name: "최지연",
          user_img: "http://placehold.it/30x30",
        },
        post_img: "http://placehold.it/220x120",
        post_title: "1111",
        post_text: "2222",
        new: false,
      },
      {
        post_day: "2020-00-00",
        post_maker: {
          user_name: "이영재",
          user_img: "http://placehold.it/30x30",
        },
        post_img: "http://placehold.it/220x120",
        post_title: "1111",
        post_text: "2222",
        new: true,
      },
      {
        post_day: "2020-00-00",
        post_maker: {
          user_name: "김수진",
          user_img: "http://placehold.it/30x30",
        },
        post_img: "http://placehold.it/220x120",
        post_title: "1111",
        post_text: "2222",
        new: false,
      },
      {
        post_day: "2020-00-00",
        post_maker: {
          user_name: "신정기",
          user_img: "http://placehold.it/30x30",
        },
        post_img: "http://placehold.it/220x120",
        post_title: "1111",
        post_text: "2222",
        new: false,
      },
      {
        post_day: "2020-00-00",
        post_maker: {
          user_name: "최지연",
          user_img: "http://placehold.it/30x30",
        },
        post_img: "http://placehold.it/220x120",
        post_title: "1111",
        post_text: "2222",
        new: false,
      },
    ],
  };
  //슬라이더 내용추가 (건들X)
  let post_Slider = document.getElementsByClassName("post_Slider")[0];
  for (let i = 0; i < datajson.slider_list.length; i++) {
    let article = document.createElement("article");
    article.className = "activity-work";
    let top_info = document.createElement("div");
    top_info.className = "top_info";
    let post_day = document.createElement("span");
    post_day.className = "post_day";
    post_day.textContent = datajson.slider_list[i].post_day;
    let user_info = document.createElement("div");
    user_info.className = "user_info";
    let user_img = document.createElement("div");
    user_img.className = "user_img";
    user_img.style.background = `url("${datajson.slider_list[i].post_maker.user_img}")`;
    let user_name = document.createElement("span");
    user_name.className = "user_name";
    user_name.textContent = datajson.slider_list[i].post_maker.user_name;
    top_info.appendChild(post_day);
    user_info.appendChild(user_img);
    user_info.appendChild(user_name);
    top_info.appendChild(user_info);

    let mid_img = document.createElement("div");
    mid_img.className = "mid_img";
    if (datajson.slider_list[i].new) {
      let post_new = document.createElement("div");
      post_new.className = "post_new";
      post_new.textContent = "N";
      mid_img.appendChild(post_new);
    }

    let bottom_info = document.createElement("div");
    bottom_info.className = "bottom_info";
    let title = document.createElement("div");
    title.className = "title";
    title.textContent = datajson.slider_list[i].post_title;
    let min_content = document.createElement("div");
    min_content.className = "min_content";
    min_content.textContent = datajson.slider_list[i].post_text;
    bottom_info.appendChild(title);
    bottom_info.appendChild(min_content);

    article.appendChild(top_info);
    article.appendChild(mid_img);
    article.appendChild(bottom_info);
    post_Slider.appendChild(article);
  }

  // 슬라이더 조종
  let activitySlider = document.getElementById("activitySlider");
  let activityItems = activitySlider.getElementsByTagName("article");
  let btnPrev = document.getElementById("btnActivityPrev");
  let btnNext = document.getElementById("btnActivityNext");
  let now = 0;

  btnNext.onclick = function () {
    if (now < activityItems.length - 4) {
      now++;
    }
    for (let i = 0; i < activityItems.length; i++) {
      activityItems[i].style["transform"] = "translateX(" + -(109 * now) + "%)";
    }
  };
  btnPrev.onclick = function () {
    if (now > 0) {
      now--;
    }
    for (let i = 0; i < activityItems.length; i++) {
      activityItems[i].style["transform"] = "translateX(" + -(109 * now) + "%)";
    }
  };
};
