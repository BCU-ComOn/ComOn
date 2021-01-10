function removeAllElement(targetId) { //지움
    target = document.getElementById(targetId);
    while (target.hasChildNodes()) {
        target.removeChild(target.firstChild);
    }
}
function appendAllElement(targetId) { //생성
    target = document.getElementById(targetId);
    while (target.hasChildNodes()) {
        target.appendChild(target.firstChild);
    }
}

function mouseoverImg(parent){ //마우스 오버시 >> 어두워보임
    
    let imgChild = parent.getElementsByTagName('div')[0];
    let spanChild = parent.getElementsByTagName("span")[0];

    imgChild.classList.toggle("yellow_layer");
    spanChild.style.display = "block";
}
    
function mouseoutImg(parent){ //마우스 빠져나올시 >> 어두워 보이지 않음
    
    let imgChild = parent.getElementsByTagName('div')[0];

    let spanChild = parent.getElementsByTagName("span")[0];

    imgChild.classList.toggle("yellow_layer");
    spanChild.style.display = "none";
}

class Plan {
    imageName = "./img/";
    planName;
    planText;
    constructor(
        imageName,
        planName,
        planText
    ) {
        this.imageName += imageName;
        this.planName = planName;
        this.planText = planText;
    }
    getElement = function () {
        let planboxArticle = document.createElement("article");
        let planboxDiv = document.createElement("div");
        let planboxStrong = document.createElement("strong");
        let planboxP = document.createElement("p");

        planboxArticle.className = "crew_plan";
        planboxArticle.style.backgroundImage = "url('" + this.imageName + "')";
        planboxArticle.style.backgroundPosition = "center";
        planboxArticle.style.backgroundSize = "cover";
        planboxDiv.className = "plan_box";

        planboxStrong.textContent = this.planName;
        planboxP.textContent = this.planText;

        planboxDiv.appendChild(planboxStrong);
        planboxDiv.appendChild(planboxP);

        planboxArticle.appendChild(planboxDiv);

        return planboxArticle;
    }
}

class Year {
    yearStage;
    constructor(
        yearStage
    ) {
        this.yearStage = yearStage;
    }
    getElement = function () {
        let comboboxOption = document.createElement("option");

        comboboxOption.value = this.yearStage;

        comboboxOption.textContent = this.yearStage + " 기";

        return comboboxOption;
    }
}
/* 콤보 박스 js로 구현하기 */

class Crew {
    crewName;
    imageName = "./img/";
    position = " 직위: ";
    interests = "관심사: ";
    addplus;
    yearNum;
    constructor(
        crewName,
        imageName,
        position,
        interests,
        addplus,
        yearNum
    ) {
        this.crewName = crewName;
        this.imageName += imageName;
        this.position += position;
        this.interests += interests;
        this.addplus = addplus;
        this.yearNum = yearNum;
    }
    getElement = function () {
        let profileTd = document.createElement("td");
        let profileName = document.createElement("div");
        let profileBox = document.createElement("span");
        let profilePosition = document.createElement("p");
        let profileInterests = document.createElement("p");
        let profileAddplus = document.createElement("p");

        profileTd.className = "profile_img";
        profileTd.style.backgroundImage = "url('" + this.imageName + "')";
        profileTd.style.backgroundPosition = "center";
        profileTd.style.backgroundSize = "cover";
        profileName.className = "profile_name";
        profileBox.className = "profile_box";
        profilePosition.className = "position_name";

        profileName.textContent = this.crewName;
        if (this.crewName.includes("운영진")) {
            profilePosition.textContent = this.position;
        }
        if (this.crewName.includes("부원")) {
            profilePosition.textContent = "팀명: " + this.addplus + "," + this.position;
        }
        profileInterests.textContent = this.interests;
        if (this.crewName.includes("운영진")) {
            profileAddplus.textContent = "한마디: " + this.addplus;
        }

        profileBox.appendChild(profilePosition);
        profileBox.appendChild(profileInterests);
        if (this.crewName.includes("운영진")) {
            profileBox.appendChild(profileAddplus);
        }
        profileTd.appendChild(profileName);
        profileTd.appendChild(profileBox);
        return profileTd;
        
    };
}

window.onload = function () {
    dbPlan = [
        {
            imageName: "bg_comee_\ distinction_01.jpg",
            planName: "열정",
            planText: "버퍼들은 열정이 가득한 사람들입니다. 과제를 수행하면서 열정이 중요한 역할을 합니다.",
        },
        {
            imageName: "bg_comee_\ distinction_02.jpg",
            planName: "협업",
            planText: "버퍼들은 협업 중심의 과제로 활동이 이루어집니다. 함께 고민하고 협업으로 결과물을 만들어보세요.",
        },
        {
            imageName: "bg_comee_\ distinction_03.jpg",
            planName: "공유",
            planText: "버퍼들은 자신의 지식을 공유합니다. 배움에서 멈추는 것이 아닌, 서로의 퍼즐을 맞춰주는 역할을 합니다.",
        },
    ]
    dbYear = [
        {
            yearStage: "1",
        },
        {
            yearStage: "2",
        },
        {
            yearStage: "3",
        },
    ]
    dbAdmin = [
        {
            crewName: "운영진1",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 1,
        },
        {
            crewName: "운영진2",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 1,
        },
        {
            crewName: "운영진3",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 1,
        },
        {
            crewName: "운영진4",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 1,
        },
        {
            crewName: "운영진5",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 1,
        },
        {
            crewName: "운영진6",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 1,
        },
        {
            crewName: "1운영진",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 2,
        },
        {
            crewName: "2운영진",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 2,
        },
        {
            crewName: "3운영진",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 2,
        },
        {
            crewName: "4운영진",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 2,
        },
        {
            crewName: "5운영진",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 2,
        },
        {
            crewName: "6운영진",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 2,
        },
        {
            crewName: "1운영진1",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 3,
        },
        {
            crewName: "2운영진2",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 3,
        },
        {
            crewName: "3운영진3",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 3,
        },
        {
            crewName: "4운영진4",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 3,
        },
        {
            crewName: "5운영진5",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 3,
        },
        {
            crewName: "6운영진6",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
            yearNum: 3,
        },
    ];
    dbCrew = [
        {
            crewName: "부원1",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 1,
        },
        {
            crewName: "부원2",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 1,
        },
        {
            crewName: "부원3",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 1,
        },
        {
            crewName: "부원4",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 1,
        },
        {
            crewName: "부원5",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 1,
        },
        {
            crewName: "부원6",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 1,
        },
        {
            crewName: "부원7",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 1,
        },
        {
            crewName: "부원8",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 1,
        },
        {
            crewName: "부원9",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 1,
        },
        {
            crewName: "부원10",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 1,
        },
        {
            crewName: "부원11",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 1,
        },
        {
            crewName: "부원12",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 1,
        },
        {
            crewName: "부원13",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 1,
        },
        {
            crewName: "부원14",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 1,
        },
        {
            crewName: "부원15",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 1,
        },
        {
            crewName: "부원16",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 1,
        },
        {
            crewName: "부원17",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 1,
        },
        {
            crewName: "부원18",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 1,
        },
        {
            crewName: "1부원",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 2,
        },
        {
            crewName: "2부원",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 2,
        },
        {
            crewName: "3부원",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 2,
        },
        {
            crewName: "4부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 2,
        },
        {
            crewName: "5부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 2,
        },
        {
            crewName: "6부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 2,
        },
        {
            crewName: "7부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 2,
        },
        {
            crewName: "8부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 2,
        },
        {
            crewName: "9부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 2,
        },
        {
            crewName: "10부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 2,
        },
        {
            crewName: "11부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 2,
        },
        {
            crewName: "12부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 2,
        },
        {
            crewName: "13부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 2,
        },
        {
            crewName: "14부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 2,
        },
        {
            crewName: "15부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 2,
        },
        {
            crewName: "16부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 2,
        },
        {
            crewName: "17부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 2,
        },
        {
            crewName: "18부원",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 2,
        },
        {
            crewName: "1부원1",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 3,
        },
        {
            crewName: "2부원2",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 3,
        },
        {
            crewName: "3부원3",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 3,
        },
        {
            crewName: "4부원4",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 3,
        },
        {
            crewName: "5부원5",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 3,
        },
        {
            crewName: "6부원6",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "1",
            yearNum: 3,
        },
        {
            crewName: "7부원7",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 3,
        },
        {
            crewName: "부원8",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 3,
        },
        {
            crewName: "9부원9",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 3,
        },
        {
            crewName: "10부원10",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 3,
        },
        {
            crewName: "11부원11",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 3,
        },
        {
            crewName: "12부원12",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "2",
            yearNum: 3,
        },
        {
            crewName: "13부원13",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 3,
        },
        {
            crewName: "14부원14",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 3,
        },
        {
            crewName: "15부원15",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 3,
        },
        {
            crewName: "16부원16",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 3,
        },
        {
            crewName: "17부원17",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 3,
        },
        {
            crewName: "18부원18",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: "3",
            yearNum: 3,
        },
    ];

    planBox = document.getElementById("plan_box");

    var planList = new Array();

    for (var i = 0; i < dbPlan.length; i++) {
        planList[i] = new Plan(
            dbPlan[i].imageName,
            dbPlan[i].planName,
            dbPlan[i].planText,
        )
    };

    for (var i = 0; i < dbPlan.length; i++) {
        planBox.appendChild(planList[i].getElement());
    } /* 동아리 계획 js 완료 */

    yearSelect = document.getElementById("select_id");

    let comboboxChoice = document.createElement("option");

    comboboxChoice.value = "Nothing";
    comboboxChoice.selected = true;
    comboboxChoice.disabled = true;
    comboboxChoice.hidden = true;

    comboboxChoice.textContent = "선택하세요";

    yearSelect.appendChild(comboboxChoice);

    var yearList = new Array();

    for (var i = 0; i < dbYear.length; i++) {
        yearList[i] = new Year(
            dbYear[i].yearStage,
        )
    };

    for (var i = 0; i < dbYear.length; i++) {
        yearSelect.appendChild(yearList[i].getElement());
    } /* 동아리 기수 js 완료 */

    let totalProfile = document.getElementById("profile");
    let adminDiv = document.createElement("div");
    let crewDiv = document.createElement("div");
    let adminHfour = document.createElement("h4");
    let crewHfour = document.createElement("h4");
    let adminTable = document.createElement("table");
    let crewTable = document.createElement("table");
    let adminTr = document.createElement("tr");
    let crewTr = document.createElement("tr");

    adminDiv.className = "admin_profile";
    crewDiv.className = "crew_profile";
    adminTable.className = "admin_table";
    crewTable.className = "crew_table";
    adminTr.id = "admin_tr";
    crewTr.id = "crew_tr";

    adminHfour.textContent = "운영진";
    crewHfour.textContent = "부원";

    adminTable.appendChild(adminTr);
    crewTable.appendChild(crewTr);
    adminDiv.appendChild(adminHfour);
    crewDiv.appendChild(crewHfour);
    adminDiv.appendChild(adminTable);
    crewDiv.appendChild(crewTable);
    totalProfile.appendChild(adminDiv);
    totalProfile.appendChild(crewDiv);

    let allTd = document.getElementsByTagName("td");

    for(var i = 0; i < allTd.length; i++){

        allTd[i].onmouseover = function() {
            mouseoverImg(this);
        }
        allTd[i].onmouseout = function() {
            mouseoutImg(this);
        }
    }

    var adminList = new Array();
    var crewList = new Array();

    document.getElementById("select_id").onchange = function () {
        
        selectId = document.getElementById("select_id");
        for (var i = 0; i < dbYear.length; i++) {
            if (selectId.options[selectId.selectedIndex].value == dbYear[i].yearStage) {
                removeAllElement("adminTr");
                removeAllElement("crewTr");
                for (var j = 0; j < dbAdmin.length; j++) {
                    if (dbYear[i].yearStage == dbAdmin[j].yearNum) {
                        adminList[j] = new Crew(
                            dbAdmin[j].crewName,
                            dbAdmin[j].imageName,
                            dbAdmin[j].position,
                            dbAdmin[j].interests,
                            dbAdmin[j].addplus,
                        )
                        adminTr.appendChild(adminList[j].getElement());
                    };
                };
                for (var j = 0; j < dbCrew.length; j++) {
                    if (dbYear[i].yearStage == dbCrew[j].yearNum) {
                        crewList[j] = new Crew(
                            dbCrew[j].crewName,
                            dbCrew[j].imageName,
                            dbCrew[j].position,
                            dbCrew[j].interests,
                            dbCrew[j].addplus,
                        )
                        crewTr.appendChild(crewList[j].getElement());
                    };  
                };
            };
        };
    }; /* 운영진, 부원 js 완료 */
};
