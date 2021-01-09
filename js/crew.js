class Crew {
    crewName;
    imageName = "./img/";
    position;
    interests = "관심사: ";
    word = "한마디: ";
    constructor(
      crewName,
      imageName,
      position,
      interests,
      word
    ) {
      this.crewName = crewName;
      this.imageName += imageName;
      this.position += position;
      this.interests += interests;
      this.word += word;
    }
    getElement = function () {
        let profileTd = document.createElement("td");
        let profileName = document.createElement("div");
        let profileBox = document.createElement("span");
        let interests = document.createElement("p");
        let word = document.createElement("p");

        profileTd.className = "profile_img";
        profileTd.style.background = "url('" + this.imageName + "')";
        profileTd.style.backgroundSize = "contain";
        profileName.className = "profile_name";
        profileBox.className = "profile_box";

        profileName.textContent = this.crewName;
        if (this.crewName.includes("운영진")) {
            profileBox.textContent = "직위: "  + this.position;
        }
        else if (this.crewName.includes("부원")) {
            profileBox.textContent = "부원: "  + this.position;
        }
        
        interests.textContent = this.interests;
        word.textContent = this.word;

        profileBox.appendChild(interests);
        profileBox.appendChild(word);

        profileTd.appendChild(profileName);
        profileTd.appendChild(profileBox);

        return profileTd;
    };
}

window.onload = function () {
    dbAdmin = [
        {
            crewName: "운영진1",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진2",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진3",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진4",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진5",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진6",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
    ];
    dbCrew = [
        {
            crewName: "부원1",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원2",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원3",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원4",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원5",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원6",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원7",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원8",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원9",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원10",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원11",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원12",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원13",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원14",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원15",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원16",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원17",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
        },
        {
            crewName: "부원18",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
        },
    ];

    adminTable = document.getElementById("admin_table");
    crewTable = document.getElementById("crew_table");

    var adminList = new Array();
    var crewList = new Array();

    for (var i = 0; i < dbAdmin.length; i++) {
        adminList[i] = new Crew(
            dbAdmin[i].crewName,
            dbAdmin[i].imageName,
            dbAdmin[i].position,
            dbAdmin[i].interests,
            dbAdmin[i].word,
        )
    };

    for (var i = 0; i < adminList.length; i++) {
        adminTable.appendChild(adminList[i].getElement());
    }

    for (var i = 0; i < dbCrew.length; i++) {
        crewList[i] = new Crew(
            dbCrew[i].crewName,
            dbCrew[i].imageName,
            dbCrew[i].position,
            dbCrew[i].interests,
        )
    };

    for (var i = 0; i < crewList.length; i++) {
        crewTable.appendChild(crewList[i].getElement());
    }
};