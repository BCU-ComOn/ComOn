window.onload = function() {
    
    let project_content1 = {project_img:"img/human.png", generation:"1기", team_name:"2팀명", project_type:"C++", project_title:"어떤거 진행중", progress:"30"};
    let project_content2 = {project_img:"img/human.png", generation:"2기", team_name:"GPS", project_type:"C++", project_title:"어떤거 진행중", progress:"30"};
    let project_content3 = {project_img:"img/human.png", generation:"1기", team_name:"2팀명", project_type:"C++", project_title:"어떤거 진행중", progress:"30"};
    let project_content4 = {project_img:"img/human.png", generation:"1기", team_name:"2팀명", project_type:"C++", project_title:"어떤거 진행중", progress:"30"};
    let project_content5 = {project_img:"img/human.png", generation:"1기", team_name:"2팀명", project_type:"C++", project_title:"어떤거 진행중", progress:"30"};
    let project_content6 = {project_img:"img/human.png", generation:"1기", team_name:"2팀명", project_type:"C++", project_title:"어떤거 진행중", progress:"30"};
    let project_content7 = {project_img:"img/human.png", generation:"1기", team_name:"2팀명", project_type:"C++", project_title:"어떤거 진행중", progress:"30"};

    let content_list = [project_content1,project_content2,project_content3,project_content4,project_content5,project_content6];

    for(let i=0; i<content_list.length; i++) {

        let project_content_box = document.createElement("div");
        project_content_box.classList.add("project-content");
        let project_img = document.createElement("div");
        project_img.classList.add("project-img");
        let generation = document.createElement("div");
        generation.classList.add("generation");
        let project_explain = document.createElement("div");
        project_explain.classList.add("project-explain");
        let team_name = document.createElement("div");
        team_name.classList.add("team-name");
        let project_type = document.createElement("div");
        project_type.classList.add("project-type");
        let project_name = document.createElement("div");
        project_name.classList.add("project-name");
        let project_title = document.createElement("span");
        project_title.classList.add("project-title");
        let progress = document.createElement("progress");
        progress.classList.add("progress");
        progress.max = "100"
        
        project_content_box.appendChild(project_img);
        project_img.appendChild(generation);
        project_content_box.appendChild(project_explain);
        project_explain.appendChild(team_name);
        project_explain.appendChild(project_type);
        project_explain.appendChild(project_name);
        project_name.appendChild(project_title);
        project_name.appendChild(progress);

        generation.textContent = content_list[i].generation;
        team_name.textContent = content_list[i].team_name;
        project_type.textContent = content_list[i].project_type;
        project_title.textContent = content_list[i].project_title;
        progress.value = content_list[i].progress;
        project_img.style = `background-image : url(${content_list[i].project_img});`
        
        let project_list = document.getElementsByClassName("project-list")[0];
        project_list.appendChild(project_content_box);
    }

}

