window.onload = () => {
  //슬라이더 데이터
  let datajson = {
    slider_list: ["slider1"],
    slider1: [
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
  //js는 슬라이더 데이터 즉 datajson만 수정해주면 됩니다!
  for (let i = 0; i < datajson.slider_list.length; i++) {
    createSlider(datajson.slider_list[i], datajson[datajson.slider_list[i]]);
  }
};

const createSlider = (GiveMeElementId, data) => {
  console.log(GiveMeElementId, data);
  const target = GiveMeElementId;

  const Slider_Container = document.getElementById(target); // class="post_list"

  const Button_Left = document.createElement("div"); // class="btn_left"
  Button_Left.className = "btn_left btn";

  Slider_Container.appendChild(Button_Left);

  const Section = document.createElement("section"); // class="post_slider"
  Section.className = "post_Slider";
  for (let i = 0; i < data.length; i++) {
    let article = document.createElement("article");
    article.className = "activity-work";
    let top_info = document.createElement("div");
    top_info.className = "top_info";
    let post_day = document.createElement("span");
    post_day.className = "post_day";
    post_day.textContent = data[i].post_day;
    let user_info = document.createElement("div");
    user_info.className = "user_info";
    let user_img = document.createElement("div");
    user_img.className = "user_img";
    user_img.style.background = `url("${data[i].post_maker.user_img}")`;
    let user_name = document.createElement("span");
    user_name.className = "user_name";
    user_name.textContent = data[i].post_maker.user_name;
    top_info.appendChild(post_day);
    user_info.appendChild(user_img);
    user_info.appendChild(user_name);
    top_info.appendChild(user_info);

    let mid_img = document.createElement("div");
    mid_img.className = "mid_img";
    if (data[i].new) {
      let post_new = document.createElement("div");
      post_new.className = "post_new";
      post_new.textContent = "N";
      mid_img.appendChild(post_new);
    }

    let bottom_info = document.createElement("div");
    bottom_info.className = "bottom_info";
    let title = document.createElement("div");
    title.className = "title";
    title.textContent = data[i].post_title;
    let min_content = document.createElement("div");
    min_content.className = "min_content";
    min_content.textContent = data[i].post_text;
    bottom_info.appendChild(title);
    bottom_info.appendChild(min_content);

    article.appendChild(top_info);
    article.appendChild(mid_img);
    article.appendChild(bottom_info);
    Section.appendChild(article);
  }
  Slider_Container.appendChild(Section);

  let activityItems = Section.getElementsByTagName("article");
  let now = 0;
  Button_Left.onclick = function () {
    // 왼쪽 버튼 클릭 로직
    console.log(GiveMeElementId);
    if (now > 0) {
      now--;
    }
    for (let i = 0; i < activityItems.length; i++) {
      activityItems[i].style["transform"] = "translateX(" + -(109 * now) + "%)";
    }
  };

  const Button_Right = document.createElement("div"); // class="btn_right"
  Button_Right.className = "btn_rigth btn";
  Button_Right.onclick = function () {
    // 오른쪽 버튼 클릭 로직
    if (now < activityItems.length - 4) {
      now++;
    }
    for (let i = 0; i < activityItems.length; i++) {
      activityItems[i].style["transform"] = "translateX(" + -(109 * now) + "%)";
    }
  };
  Slider_Container.appendChild(Button_Right);
};
