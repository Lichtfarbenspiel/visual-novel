namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  // define transitions
  export let transitions = {
    clock: {
      duration: 3,
      alpha: "",
      edge: 1
    }
  };

  //define sound
  export let sound = {
    //Music
    backgroundTheme: "",
    
    //Sound
    click: ""
  };

  // define locations
  export let locations = {
    city: {
      name: "city",
      background: "Img/city.jpg"
    }
  };

  //define characters
  export let characters = {
    Narrator: {
      name: ""
    },
    Protagonist: {
      name: "Protagonist",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        idle: "Img/Characters/placeholder_girl.png",
        happy: ""
      }
    },
    Joe: {
      name: "Joe",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        idle: "Img/Characters/Ryu_normal.png",
        happy: ""
      }
    }
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {

    console.log("This is working!");

    document.addEventListener("keydown", hndKeypress);

    let scenes: ƒS.Scenes = [
      { scene: Text, name: "Scene" }
    ];

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
    }
  }
}