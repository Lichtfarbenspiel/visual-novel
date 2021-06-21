namespace Abschluss {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;


  // DATA TO SAVE
  export let data = {
    Protagonist: {
      name: "Protagonist"
    },
    state: {
      a: 0
    },
    ended: false
  };


  // TRANSITIONS
  export let transition = {
    wave: {
      duration: 1.5,
      alpha: "Transitions/waves06.png",
      edge: 1.5
    }
  };

  // SOUND
  export let sounds = {
    //Music
    backgroundTheme: "Sounds/",
    //Sound
    click: "Sounds/" 
  };

  // LOCATIONS
  export let locations = {
    rockyBeach: {
      name: "Rocky Beach",
      background: "Img/Backgrounds/RockyBeach.jpg"
    },
    turtleBeach: {
      name: "Turtle Beach",
      background: "Img/Backgrounds/TurtleBeach.jpg"
    },
    trashBeach: {
      name: "Trash Beach",
      background: "Img/Backgrounds/TrashBeach.jpg"
    },
    waterBeach: {
      name: "Water Beach",
      background: "Img/Backgrounds/WaterBeach.jpg"
    }
  };

  // CHARACTERS
  export let characters = {
    Mermaid: {
      name: "Meerjungfrau",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        idle: "Img/Characters/Mermaid/mermaid-idle.png",
        floating: "Img/Characters/Mermaid/mermaid-floating.png"
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

  // MENU AUDIO FUNCTIONS
  let volume: number = 1.0;

  export function increaseSound(): void {
    if (volume >= 100)
      return;
    volume += 0.1;
    ƒS.Sound.setVolume(sounds.backgroundTheme, volume);
  }

  export function decreaseSound(): void {
    if (volume > 0)
      return;
    volume -= 0.1;
    ƒS.Sound.setVolume(sounds.backgroundTheme, volume);
  }

  // MENU
  let inGameMenu = {
    save: "Spielstand speichern",
    load: "Spielstand laden",
    close: "Menü schließen",
    turnUpVolume: "Musik lauter",
    turnDownVolume: "Musik leiser",
    credits: "Credits",
    about: "Über das Spiel"
  };

  // MENU BUTTONS
  let gameMenu: ƒS.Menu;

  async function menuOptions(_option: string): Promise<void> {
    console.log(_option);

    if (_option == inGameMenu.save) {
      await ƒS.Progress.save();
    } else if (_option == inGameMenu.load) {
      await ƒS.Progress.load();
    } else if (_option == inGameMenu.close) {
      gameMenu.close();
    } else if (_option == inGameMenu.turnUpVolume) {
      increaseSound();
    } else if (_option == inGameMenu.turnUpVolume) {
      decreaseSound();
    } else if (_option == inGameMenu.credits) {
      return;
    } else if (_option == inGameMenu.about) {
      return;
    } else return;
  }


  console.log("FudgeStory template starting");

  window.addEventListener("load", start);
  function start(_event: Event): void {

    gameMenu = ƒS.Menu.create(inGameMenu, menuOptions, "gameMenu");
    gameMenu.close();

    let scenes: ƒS.Scenes = [
      { scene: RockyBeach, name: "01RockyBeach", id: "01", next: "02" },
      { scene: TurtleBeach, name: "02TurtleBeach", id: "02", next: "null"},
      { scene: TrashBeach, name: "03TrashBeach", id: "03", next: "null"},
      { scene: WaterBeach, name: "04WaterBeach", id: "04", next: "null"}
    ];

    document.addEventListener("keydown", hndKeypress);

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    data.state = ƒS.Progress.setData(data.state, uiElement);

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
      // case ƒ.KEYBOARD_CODE.CTRL_LEFT && ƒ.KEYBOARD_CODE.I:
      //   await ƒS.Inventory.open();
      //   break;
      // case ƒ.KEYBOARD_CODE.CTRL_LEFT && ƒ.KEYBOARD_CODE.M:
      //   gameMenu.open();
      //   break;
    }
  }

  export function tickerDelay(_delay: number): void {
    ƒS.Speech.setTickerDelays(_delay);
  }
}