namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  // all data that will be stored in json when saving
  export let data = {
    Protagonist: {
      name: "",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        idle: "Img/Characters/protagonist.png",
        happy: ""
      }
    },
    score: 0
  };


  // define transitions
  export let transitions = {
    clock: {
      duration: 3,
      alpha: "",
      edge: 1
    }
  };

  //define sound
  export let sounds = {
    //Music
    backgroundTheme: "Sounds/Background.mp3",
    
    //Sound
    click: "Sounds/click.mp3"
  };

  // define locations
  export let locations = {
    hall: {
      name: "hall",
      background: "Img/hall.jpg"
    },
    dorm: {
      name: "dorm",
      background: "Img/dorm.jpg"
    },
    class: {
      name: "class",
      background: "Img/hall.jpg"
    }, 
    city: {
      name: "class",
      background: "Img/city.jpg"
    }
  };

  //define characters
  export let characters = {
    Narrator: {
      name: "Narrator",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        idle: "Img/Characters/narrator.png"
      }
    },
    Joe: {
      name: "Joe",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        idle: "Img/Characters/joe.png",
        happy: ""
      }, 
      friendScore: 0
    },
    Allison: {
      name: "Allison",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        idle: "Img/Characters/allison.png",
        happy: ""
      },
      friendScore: 0
    }
  };

  export let items = {
    item01: {
      name: "Graduation",
      description: "Graduation hat and certificate.",
      image: "Img/graduation.png"
    }
  };

  export let sceneID = "";

  window.addEventListener("load", start);
  function start(_event: Event): void {

    console.log("This is working!");

    document.addEventListener("keydown", hndKeypress);

    let scenes: ƒS.Scenes = [
      { scene: Text, name: "Scene", id: "00001", next: "00002" },
      { scene: Dorm, name: "Scene", id: "00002", next: "00003" },
      { scene: Class, name: "Scene", id: "00003" }, 
      { scene: Success, name: "Success", id: "00004" },
      { scene: Failure, name: "Failure", id: "00005" }
    ];

    console.log("Score " + data.score);
    ƒS.Progress.setData(data);
    // start the sequence
    ƒS.Progress.go(scenes);
  }

  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F4:
        console.log("saving"); 
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("loading");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.I:
        await ƒS.Inventory.open();
        break;
    }
  }
}