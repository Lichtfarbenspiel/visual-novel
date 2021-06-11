namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;


  export let data = {
    Protagonist: {
      name: ""
    },
    state: {
      a: 0
    },
    ended: false
  };


  // define transitions
  export let transition = {
    wave: {
      duration: 1.5,
      alpha: "Transitions/waves06.png",
      edge: 1.5
    }
  };

  //define sound
  export let sounds = {
    //Music
    backgroundTheme: "Sounds/",
    //Sound
    click: "Sounds/" 
  };

  // define locations
  export let locations = {
    rockyBeach: {
      name: "Rocky Beach",
      background: "Img/Backgrounds/Felsenstrand.jpg"
    },
    turtleBeach: {
      name: "Turtle Beach",
      background: "Img/Backgrounds/BabySchildkröte.jpg"
    }
  };

  //define characters
  export let characters = {
    Mermaid: {
      name: "Meerjungfrau",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        idle: "Img/Characters/Mermaid/mermaid-idle.png"
      }
    }
  };

  export let items = {
    item01: {
      name: "item01",
      description: "item01",
      image: "Img/Items"
    }
  };

  console.log("FudgeStory template starting");

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" },
      { scene: Scene02, name: "Scene02" }
    ];

    document.addEventListener("keydown", hndKeypress);
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