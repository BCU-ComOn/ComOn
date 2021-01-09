class Crew {
    profileName;
    imageName = "../img/";
    position = "직위: ";
    interests = "관심사: ";
    word = "한마디: ";
    constructor(
      profileName,
      imageName,
      position,
      interests,
      word
    ) {
      this.profileName = profileName;
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
      let nextBr = document.createElement("br /");
      let word = document.createElement("p");

      profileTd.className = "profile_img";
      profileTd.style.background = "url('" + this.imageName + "')";
      profileName.className = "profile_name";
      profileBox.className = "profile_box";

      profileName.textContent = this.profileName;
      position.textContent = this.position;
      interests.textContent = this.interests;
      word.textContent = this.word;

      profileBox.appendChild(interests);
      profileBox.appendChild(nextBr);
      profileBox.appendChild(word);

      profileTd.appendChild(profileName);
      profileTd.appendChild(profileBox);

      return profileTd;
    };
  }

window.onload = function () {
  db = [
    {
      profileName: "운영진1",
      imageName: "profile_img.png",
      position: "부장",
      interests: "어쩌구, 저쩌구",
      word: "동아리 활동이 도움이 되길 바랍니다!",
    },
    {
      profileName: "운영진2",
      imageName: "profile_img.png",
      position: "부장",
      interests: "어쩌구, 저쩌구",
      word: "동아리 활동이 도움이 되길 바랍니다!",
    },
    {
      profileName: "운영진3",
      imageName: "profile_img.png",
      position: "부장",
      interests: "어쩌구, 저쩌구",
      word: "동아리 활동이 도움이 되길 바랍니다!",
    },
    {
      profileName: "운영진1",
      imageName: "profile_img.png",
      position: "부장",
      interests: "어쩌구, 저쩌구",
      word: "동아리 활동이 도움이 되길 바랍니다!",
    },
    {
      profileName: "운영진2",
      imageName: "profile_img.png",
      position: "부장",
      interests: "어쩌구, 저쩌구",
      word: "동아리 활동이 도움이 되길 바랍니다!",
    },
    {
      profileName: "운영진3",
      imageName: "profile_img.png",
      position: "부장",
      interests: "어쩌구, 저쩌구",
      word: "동아리 활동이 도움이 되길 바랍니다!",
    },
  ];

  profileTable = document.getElementById("profile_table");

  let profileTd = document.createElement("td");
  profileTd.className = "profile_img";
  profileTable.appendChild(profileTd);

  var crewList = new Array();

  index = 0;

  for (var i = 0; i < db.length; i++) {
    index = 0;
    for () {
      crewList[i][index] = new Crew(
        db[index].profileName,
        db[index].imageName,
        db[index].position,
        db[index].interests,  
        db[index].word,
      );
      index += 1;
    };
  };
  
};