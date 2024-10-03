const model = {
  app: [
    "mainPage",
    "profileShuffle",
    "createProfile",
    "logIn",
    "personalProfile",
    "createAlbum",
    "directMessages",
  ],

  inputs: {
    createProfile: {
      name: "",
      location: "",
      age: null,
      hobby: [],
      aboutMe: "",
      profileImage: "",
      fotoAlbum: [],
    },
    logIn: {
      userName: "",
      password: "",
    },
    createAlbum: {
      profileImage: "",
      fotoAlbum: "",
    },
    directMessages: {
      userMessage: "",
    },
  },

  data: {
    profile: {
      name: "Marri",
      location: "Oslo",
      age: 34,
      hobby: ["hekling", "ridning"],
      aboutMe: "Hestejinte ifra Hedmarken",
      profileImage: "images/FA7F9F5D-E6F9-46C1-ACB2-48A6E6E689CA_1_105_c.jpeg",
      fotoAlbum: [
        "images/D7D5F159-28E5-47F2-BB86-0A72B8872E41_1_105_c.jpeg",
        "images/8FC21113-C563-4B0B-BB95-33180D4F6B59_1_105_c.jpeg",
        "images/35877BDB-2A7F-4A5B-AAC3-E44BE83CA721_1_105_c.jpeg",
      ],
    },
  },
};

console.table(model.data.profile); //Logger burkerprofil
