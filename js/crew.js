function Combobox {
    
}

class Crew {
    crewName;
    imageName = "./img/";
    position = " 직위: ";
    interests = "관심사: ";
    addplus;
    constructor(
        crewName,
        imageName,
        position,
        interests,
        addplus
    ) {
        this.crewName = crewName;
        this.imageName += imageName;
        this.position += position;
        this.interests += interests;
        this.addplus = addplus;
    }
    getElement = function () {
        let profileTd = document.createElement("td");
        let profileName = document.createElement("div");
        let profileBox = document.createElement("span");
        let profilePosition = document.createElement("p");
        let profileInterests = document.createElement("p");
        let profileAddplus = document.createElement("p");

        profileTd.className = "profile_img";
        profileTd.style.background = "url('" + this.imageName + "')";
        profileTd.style.backgroundSize = "contain";
        profileName.className = "profile_name";
        profileBox.className = "profile_box";
        profilePosition.className = "position_name";

        profileName.textContent = this.crewName;
        if (this.crewName.includes("운영진")) {
            profilePosition.textContent = this.position;
            profileInterests.textContent = this.interests;
            profileAddplus.textContent = "한마디: " + this.addplus;

            profileBox.appendChild(profilePosition);
            profileBox.appendChild(profileInterests);
            profileBox.appendChild(profileAddplus);
        }
        else if (this.crewName.includes("부원")) {
            profilePosition.textContent = "팀명: " + this.addplus + ",";
            profilePosition.textContent += this.position;
            profileInterests.textContent = this.interests;

            profileBox.appendChild(profilePosition);
            profileBox.appendChild(profileInterests);
        }

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
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진2",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진3",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진4",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진5",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진6",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            addplus: "동아리 활동이 도움이 되길 바랍니다!",
        },
    ];
    dbCrew = [
        {
            crewName: "부원1",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: 1,
        },
        {
            crewName: "부원2",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: 1,
        },
        {
            crewName: "부원3",
            imageName: "profile_img.png",
            position: "팀장",
            interests: "어쩌구, 저쩌구",
            addplus: 1,
        },
        {
            crewName: "부원4",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 1,
        },
        {
            crewName: "부원5",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 1,
        },
        {
            crewName: "부원6",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 1,
        },
        {
            crewName: "부원7",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 2,
        },
        {
            crewName: "부원8",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 2,
        },
        {
            crewName: "부원9",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 2,
        },
        {
            crewName: "부원10",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 2,
        },
        {
            crewName: "부원11",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 2,
        },
        {
            crewName: "부원12",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 2,
        },
        {
            crewName: "부원13",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 3,
        },
        {
            crewName: "부원14",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 3,
        },
        {
            crewName: "부원15",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 3,
        },
        {
            crewName: "부원16",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 3,
        },
        {
            crewName: "부원17",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 3,
        },
        {
            crewName: "부원18",
            imageName: "profile_img.png",
            position: "조원",
            interests: "어쩌구, 저쩌구",
            addplus: 3,
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
            dbAdmin[i].addplus,
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
            dbCrew[i].addplus,
        )
    };

    for (var i = 0; i < crewList.length; i++) {
        console.log(crewList[i]);
        crewTable.appendChild(crewList[i].getElement());
    }
};