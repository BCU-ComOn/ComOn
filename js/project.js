function removeAllElement(targetId) {
  target = document.getElementById(targetId);
  while (target.hasChildNodes()) {
    target.removeChild(target.firstChild);
  }
}
function appendAllElement(targetId) {
  target = document.getElementById(targetId);
  while (target.hasChildNodes()) {
    target.appendChild(target.firstChild);
  }
}

function setPage(pageNow) {
  for (
    let i = 0;
    i < document.getElementsByClassName("page")[0].childNodes.length;
    i++
  ) {
    document
      .getElementsByClassName("page")[0]
      .children[i].classList.remove("page-now");
  }
  document
    .getElementsByClassName("page")[0]
    .children[pageNow].classList.add("page-now");
}

function circle(page){
  let circle = document.createElement("div");
  circle.className = "circle";
  page.appendChild(circle);
}

class Project {
  generation;
  teamName;
  projectType;
  imageName = "../img/";
  pjTitle;
  progressBar;

  constructor(generation, teamName, projectType, imageName, pjTitle, progressBar) {
    this.generation = generation;
    this.teamName = teamName;
    this.projectType = projectType;
    this.imageName += imageName;
    this.pjTitle = pjTitle;
    this.progressBar = progressBar;
  }

  getElement = function () {
    let projectContent = document.createElement("a");
    let projectImage = document.createElement("div");
    let generation = document.createElement("div");
    let projectExplain = document.createElement("div");
    let teamType = document.createElement("div");
    let teamName = document.createElement("span");
    let projectType = document.createElement("div");
    let projectName = document.createElement("div");
    let projectTitle = document.createElement("span");
    let progressBar = document.createElement("progress");
    let completeBox = document.createElement("div");

    projectContent.className = "project-content";
    projectContent.href = "";
    projectImage.className = "project-img";
    projectImage.style.backgroundImage = "url('" + this.imageName + "')";
    generation.className = "generation";
    projectExplain.className = "project-explain";
    teamType.className = "team-type";
    teamName.className = "team-name";
    projectType.className = "project-type";
    projectName.className = "project-name";
    projectTitle.className = "project-title";
    completeBox.className = "complete-box";

    generation.textContent = this.generation;
    teamName.textContent = this.teamName;
    projectType.textContent = this.projectType;
    projectTitle.textContent = this.pjTitle;
    progressBar.max = 100;
    progressBar.value = parseInt(this.progressBar);
    completeBox.textContent = "complete";

    projectType.appendChild(completeBox);

    if (progressBar.value == 100) {
      completeBox.style.display = "block";
    } else {
      completeBox.style.display = "none";
    }

    teamType.appendChild(teamName);
    teamType.appendChild(projectType);
    projectName.appendChild(projectTitle);
    projectName.appendChild(progressBar);

    projectImage.appendChild(generation);
    projectExplain.appendChild(teamType);
    projectExplain.appendChild(projectName);

    projectContent.appendChild(projectImage);
    projectContent.appendChild(projectExplain);
    
    return projectContent;
  };
}

window.onload = function () {
  db = [
    {
      generation: "1기",
      teamName: "승현1",
      projectType: "JAVA",
      imageName: "사람.jpg",
      projectTitle: "어떤거 진행중",
      progressBar: 10,
    },
    {
      generation: "2기",
      teamName: "준권2",
      projectType: "C++",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 60,
    },
    {
      generation: "2기",
      teamName: "회운3",
      projectType: "Winform",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 90,
    },
    {
      generation: "1기",
      teamName: "민욱4",
      projectType: "APP",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 40,
    },
    {
      generation: "1기",
      teamName: "민규5",
      projectType: "WEB",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 100,
    },
    {
      generation: "1기",
      teamName: "민규6",
      projectType: "WEB",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 100,
    },
    {
      generation: "1기",
      teamName: "승현7",
      projectType: "JAVA",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 10,
    },
    {
      generation: "2기",
      teamName: "준권8",
      projectType: "C++",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 60,
    },
    {
      generation: "2기",
      teamName: "회운9",
      projectType: "Winform",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 90,
    },
    {
      generation: "1기",
      teamName: "민욱10",
      projectType: "APP",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 40,
    },
    {
      generation: "1기",
      teamName: "민규11",
      projectType: "WEB",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 100,
    },
    {
      generation: "1기",
      teamName: "민욱12",
      projectType: "APP",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 40,
    },
    {
      generation: "1기",
      teamName: "민규13",
      projectType: "WEB",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 100,
    },
  ];

  //<div id="project"></div>
  let projectSection = document.getElementById("project");
  
  //<div id="project-list"></div>
  let projectPage = document.getElementById("project-list");
  
  //<div class="page"></div>
  let page = document.createElement("div");
  page.className = "page";
  projectSection.appendChild(page);
  
  let pageNow = 0;
  let pageAll = db.length % 6 == 0 ? db.length / 6 - 1 : parseInt(db.length / 6);
  
  //페이지 별로 프로젝트 객체를 담는 2차원 배열
  let projectList = new Array();

  //프로젝트 객체 모두를 담는 배열
  let projectElement = new Array();

  for (let i = 0; i <= pageAll; i++) {
    //<div class="pjpage"></div>
    let pjpage = document.createElement("div");
    pjpage.className = "pjpage";
    projectPage.appendChild(pjpage);

    projectList.push(new Array());

    //<div class="circle"></div>
    circle(page);
    setPage(pageNow);
  }

  index = 0;
  for (let i = 0; i <= pageAll; i++) {
    num = 0;
    for (let j = 6 * i - 6; j <= 6 * i - 1; j++) {
      if (db.length <= index) {
        break;
      }

      //project 객체를 생성해서 페이지별로 2차원 배열에 저장
      projectList[i][num] = new Project(
        db[index].generation,
        db[index].teamName,
        db[index].projectType,
        db[index].imageName,
        db[index].projectTitle,
        db[index].progressBar
      );
      projectElement.push(projectList[i][num].getElement());
      num += 1;
      index += 1;
    }
  }

  /*  <div class="pjpage">
        <div class="project-content"></div>
      </div>
  */
  for (let i = 0; i <= pageAll; i++) {
    for (let j = 0; j < projectList[i].length; j++) {
      projectPage.children[i].appendChild(projectElement[j + 6 * i]);
    }
  }
  setPage(pageNow);

  //왼쪽 콤보박스에 맞는 이벤트, 해당하는 모든 항목이 한 페이지에 나타남
  document.getElementById("select_generation").onchange = function () {
    newList = new Array();
    removeAllElement("project-list");
    select = document.getElementById("select_generation");
    for (let i = 0; i < projectList.length; i++) {
      for (j of projectList[i]) {
        if (select.options[select.selectedIndex].value == "전체") {
          projectList[i] = j;
          newList.push(projectList[i]);
        } else if (select.options[select.selectedIndex].value == j.generation) {
          projectList[i] = j;

          newList.push(projectList[i]);
        }
      }
    }
    for (let i = 0; i < newList.length; i++) {
      document
        .getElementById("project-list")
        .appendChild(newList[i].getElement());
    }
  };

  //각 버튼에 맞는 이벤트, 콤보박스에서 항목을 바꾼 후에 버튼을 누르면 초기 상태로 바뀜

  //오른쪽 버튼
  document.getElementById("right_btn").onclick = function () {
    pageNow++;
    if (pageNow > pageAll) {
      pageNow = 0;
    }

    for(let i = 0; i <= pageAll; i++){
      projectPage.children[i].style.transform = "translateX(-" + 102 * pageNow + "%)";
    }
    setPage(pageNow);
  };

  //왼쪽 버튼
  document.getElementById("left_btn").onclick = function () {
    pageNow--;
    if (pageNow < 0) {
      pageNow = pageAll;
    }

    //오류 있음
    for(let i = 0; i <= pageAll; i++){
      projectPage.children[i].style.transform = "translateX(" + 102 * pageNow + "%)";
    }
    setPage(pageNow);
  };
};
