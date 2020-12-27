function createProjectContent(pjlist) {
  let projectContent = document.createElement("div");
  let projectImage = document.createElement("div");
  let generation = document.createElement("div");
  let projectExplain = document.createElement("div");
  let teamType = document.createElement("div");
  let teamName = document.createElement("span");
  let projectType = document.createElement("div");
  let projectName = document.createElement("div");
  let projectTitle = document.createElement("span");
  let progressBar = document.createElement("progress");

  projectContent.className = "project-content";
  projectImage.className = "project-img";
  generation.className = "generation";
  projectExplain.className = "project-explain";
  teamType.className = "team-type";
  teamName.className = "team-name";
  projectType.className = "project-type";
  projectName.className = "project-name";
  projectTitle.className = "project-title";

  generation.textContent = "1기";
  teamName.textContent = "1팀명";
  projectType.textContent = "C++";
  projectTitle.textContent = "어떤거 진행중";

  teamType.appendChild(teamName);
  teamType.appendChild(projectType);
  projectName.appendChild(projectTitle);
  projectName.appendChild(progressBar);

  projectImage.appendChild(generation);
  projectExplain.appendChild(teamType);
  projectExplain.appendChild(projectName);

  projectContent.appendChild(projectImage);
  projectContent.appendChild(projectExplain);

  pjlist.appendChild(projectContent);
}

window.onload = function () {
  select_left_right();
};

function select_left_right() {
  let select_left = document.getElementById("select_left");
  let select_right = document.getElementById("select_right");

  let onegi_web = document.getElementById("onegi_web");
  let onegi_cpp = document.getElementById("onegi_cpp");
  let onegi_game = document.getElementById("onegi_game");

  let twogi_web = document.getElementById("twogi_web");
  let twogi_cpp = document.getElementById("twogi_cpp");
  let twogi_game = document.getElementById("twogi_game");
  select_left.onchange = function () {
    let option_left = select_left.options[select_left.selectedIndex].value;
    if (option_left == "first") {
      onegi_web.style.display = "block";
      onegi_cpp.style.display = "block";
      onegi_game.style.display = "block";
      twogi_web.style.display = "none";
      twogi_cpp.style.display = "none";
      twogi_game.style.display = "none";
    } else if (option_left == "second") {
      onegi_web.style.display = "none";
      onegi_cpp.style.display = "none";
      onegi_game.style.display = "none";
      twogi_web.style.display = "block";
      twogi_cpp.style.display = "block";
      twogi_game.style.display = "block";
    } else {
      onegi_web.style.display = "block";
      onegi_cpp.style.display = "block";
      onegi_game.style.display = "block";
      twogi_web.style.display = "block";
      twogi_cpp.style.display = "block";
      twogi_game.style.display = "block";
    }

    select_right.onchange = function () {
      let option_right = select_right.options[select_right.selectedIndex].value;
      if (option_left == "first" && option_right == "web") {
        onegi_web.style.display = "block";
        onegi_cpp.style.display = "none";
        onegi_game.style.display = "none";
        twogi_web.style.display = "none";
        twogi_cpp.style.display = "none";
        twogi_game.style.display = "none";
      } else if (option_left == "first" && option_right == "cpp") {
        onegi_web.style.display = "none";
        onegi_cpp.style.display = "block";
        onegi_game.style.display = "none";
        twogi_web.style.display = "none";
        twogi_cpp.style.display = "none";
        twogi_game.style.display = "none";
      } else if (option_left == "first" && option_right == "game") {
        onegi_web.style.display = "none";
        onegi_cpp.style.display = "none";
        onegi_game.style.display = "block";
        twogi_web.style.display = "none";
        twogi_cpp.style.display = "none";
        twogi_game.style.display = "none";
      } else if (option_left == "first" && option_right == "all") {
        onegi_web.style.display = "block";
        onegi_cpp.style.display = "block";
        onegi_game.style.display = "block";
        twogi_web.style.display = "none";
        twogi_cpp.style.display = "none";
        twogi_game.style.display = "none";
      } else if (option_left == "second" && option_right == "web") {
        onegi_web.style.display = "none";
        onegi_cpp.style.display = "none";
        onegi_game.style.display = "none";
        twogi_web.style.display = "block";
        twogi_cpp.style.display = "none";
        twogi_game.style.display = "none";
      } else if (option_left == "second" && option_right == "cpp") {
        onegi_web.style.display = "none";
        onegi_cpp.style.display = "none";
        onegi_game.style.display = "none";
        twogi_web.style.display = "none";
        twogi_cpp.style.display = "block";
        twogi_game.style.display = "none";
      } else if (option_left == "second" && option_right == "game") {
        onegi_web.style.display = "none";
        onegi_cpp.style.display = "none";
        onegi_game.style.display = "none";
        twogi_web.style.display = "none";
        twogi_cpp.style.display = "none";
        twogi_game.style.display = "block";
      } else if (option_left == "second" && option_right == "all") {
        onegi_web.style.display = "none";
        onegi_cpp.style.display = "none";
        onegi_game.style.display = "none";
        twogi_web.style.display = "block";
        twogi_cpp.style.display = "block";
        twogi_game.style.display = "block";
      } else if (option_left == "all" && option_right == "web") {
        onegi_web.style.display = "block";
        onegi_cpp.style.display = "none";
        onegi_game.style.display = "none";
        twogi_web.style.display = "block";
        twogi_cpp.style.display = "none";
        twogi_game.style.display = "none";
      } else if (option_left == "all" && option_right == "cpp") {
        onegi_web.style.display = "none";
        onegi_cpp.style.display = "block";
        onegi_game.style.display = "none";
        twogi_web.style.display = "none";
        twogi_cpp.style.display = "block";
        twogi_game.style.display = "none";
      } else if (option_left == "all" && option_right == "game") {
        onegi_web.style.display = "none";
        onegi_cpp.style.display = "none";
        onegi_game.style.display = "block";
        twogi_web.style.display = "none";
        twogi_cpp.style.display = "none";
        twogi_game.style.display = "block";
      } else {
        onegi_web.style.display = "block";
        onegi_cpp.style.display = "block";
        onegi_game.style.display = "block";
        twogi_web.style.display = "block";
        twogi_cpp.style.display = "block";
        twogi_game.style.display = "block";
      }
    };
  };
}
