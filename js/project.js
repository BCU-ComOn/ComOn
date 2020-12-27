function removeAllElement(targetId) {
    target = document.getElementById(targetId);
    while (target.hasChildNodes()) {
        target.removeChild(target.firstChild);
    }
}

class Project {
    generation;
    teamName;
    projectType;
    imageName = "../img/"
    progressBar;
    constructor(generation, teamName, projectType, imageName, progressBar) {
        this.generation = generation;
        this.teamName = teamName;
        this.projectType = projectType;
        this.imageName += imageName;
        this.progressBar = progressBar;
    }
    getElement = function () {
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
        projectImage.style.backgroundImage = "url('" + this.imageName + "')";
        generation.className = "generation";
        projectExplain.className = "project-explain";
        teamType.className = "team-type";
        teamName.className = "team-name";
        projectType.className = "project-type";
        projectName.className = "project-name";
        projectTitle.className = "project-title";

        generation.textContent = this.generation;
        teamName.textContent = this.teamName;
        projectType.textContent = this.projectType;
        projectTitle.textContent = this.projectName;
        progressBar.max = 100;
        progressBar.value = this.progressBar;

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
    }
}

window.onload = function () {
    projectList = new Array();


    db = [
        {
            generation: "1기",
            teamName: "승현",
            projectType: "JAVA",
            imageName: "human.png",
            progressBar: 10
        },
        {
            generation: "2기",
            teamName: "준권",
            projectType: "C++",
            imageName: "human.png",
            progressBar: 60
        },
        {
            generation: "2기",
            teamName: "회운",
            projectType: "Winform",
            imageName: "human.png",
            progressBar: 90
        },
        {
            generation: "1기",
            teamName: "민욱",
            projectType: "APP",
            imageName: "human.png",
            progressBar: 40
        },
        {
            generation: "1기",
            teamName: "민규",
            projectType: "WEB",
            imageName: "human.png",
            progressBar: 100
        },
        {
            generation: "1기",
            teamName: "민규",
            projectType: "WEB",
            imageName: "human.png",
            progressBar: 100
        }
        ,
        {
            generation: "1기",
            teamName: "민규",
            projectType: "WEB",
            imageName: "human.png",
            progressBar: 100
        }
        ,
        {
            generation: "1기",
            teamName: "민규",
            projectType: "WEB",
            imageName: "human.png",
            progressBar: 100
        }
        ,
        {
            generation: "1기",
            teamName: "민규",
            projectType: "WEB",
            imageName: "human.png",
            progressBar: 100
        }
        ,
        {
            generation: "1기",
            teamName: "민규",
            projectType: "WEB",
            imageName: "human.png",
            progressBar: 100
        }
        ,
        {
            generation: "1기",
            teamName: "민규",
            projectType: "WEB",
            imageName: "human.png",
            progressBar: 100
        }
    ];

    for (i of db) {
        project = new Project(i.generation, i.teamName, i.projectType, i.imageName, i.progressBar);
        projectList.push(project);
    }
    for(let i = 0; i < 6; i ++) {
        document.getElementById("project-list").appendChild(projectList[i].getElement());
    }

    document.getElementById("select_generation").onchange = function () {
        newList = [];
        removeAllElement("project-list");
        select = document.getElementById("select_generation");
        for (i of projectList) {
            if (select.options[select.selectedIndex].value == "전체") {
                newList.push(i);
            }
            else if (i.generation == select.options[select.selectedIndex].value) {
                newList.push(i);
            }
        }
        for (i of newList) {
            document.getElementById("project-list").appendChild(i.getElement());
        }
    }

    document.getElementById("right_btn").onclick = function() {
        removeAllElement("project-list");
        for(let i = 6; i < 11; i++) {
            document.getElementById("project-list").appendChild(projectList[i].getElement());
        }
    }

    document.getElementById("left_btn").onclick = function() {
        removeAllElement("project-list");
        for(let i = 0; i < 6; i++) {
            document.getElementById("project-list").appendChild(projectList[i].getElement());
        }
    }

}