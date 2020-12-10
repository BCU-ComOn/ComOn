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
    projectName.className ="project-name";
    projectTitle.className = "project-title";

    generation.textContent = "3기";
    teamName.textContent = "1팀";
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


}

window.onload = function() {
    let testData = {
        generation : "1기",
        teamName : "1팀명",
        projectType : "C++",
    }

    let pjlist = document.getElementById("project-list");
    let pjcon = createProjectContent();

    pjlist.appendChild(pjcon);


}