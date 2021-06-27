namespace Abschluss {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;


  // DATA TO SAVE
  export let data = {
    Protagonist: {
      name: "Protagonist"
    },
    score: {
      a: 0
    },
    ended: false,
    correct: false
  };


  // TRANSITIONS
  export let transition = {
    wave: {
      duration: 1.5,
      alpha: "Transitions/waves06.png",
      edge: 1
    },
    swirl: {
      duration: 1.5,
      alpha: "Transitions/swirl.png",
      edge: 1.5
    }
  };

  // SOUND
  export let sounds = {
    //Music
    backgroundTheme: "Sounds/open-sea-morning-puddle-of-infinity-youtube-royalty-free-music-download.mp3",
    //Sound
    wavesOnRocks: "Sounds/213495__arnaud-coutancier__waves-on-seaside-rocks-3.wav",
    bigWavesOnSandyBeach: "Sounds/197714__tim-kahn__atlantic-ocean-waves.mp3",
    softWavesOnSandyBeach: "Sounds/412308__straget__big-waves-hit-land.mp3",
    seagull: "Sounds/166703__snapper4298__sea-gulls.wav",
    singleWave: "Sounds/61012__kayyy__wave2.wav",
    softSandSteps: "Sounds/197714__tim-kahn__atlantic-ocean-waves.wav"
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
      background: "Img/Backgrounds/TrashBeach02.jpg"
    },
    trashBeachClean: {
      name: "Trash Beach",
      background: "Img/Backgrounds/TrashBeach02-cleaner.jpg"
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
    recycleBadge: {
      name: "Recycle Badge",
      description: "Du hast am Strand Müll eingesammelt.",
      image: "Img/Items/recycle-badge.png",
      static: true
    },
    plasticBottles: {
      name: "Plastik Flaschen",
      description: "Wenn du die Plastik Flaschen wieder weg wirfst, verlierst du xy Punkte.",
      image: "Img/Items/plastic-bottles.png"
    }
  };
  

  // MENU AUDIO FUNCTIONS
  let volume: number = 1.0;

  export function increaseSound(): void {
    if (volume >= 100)
      return;
    volume += 0.1;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function decreaseSound(): void {
    if (volume > 0)
      return;
    volume -= 0.1;
    ƒS.Sound.setMasterVolume(volume);
  }

  // MENU PAGES FUNCTIONS
  async function about(): Promise<void> {
    let about: string[] = ["<h3>Über das Spiel</h3> <br>“Wie die Meere untergehen” ist eine Visual Novel die, neben dem klassischen Unterhaltungsaspekt, Wissen über die Weltmeere vermitteln soll. Dabei begegnen die Spieler einer Meerjungfrau, die sich darum bemüht, hilfsbedürftige Meeresbewohner zu unterstützen wo sie nur kann. <br> Gleichzeitig versucht sie ihren Lebensraum und den vieler anderer Spezies von der konstanten und immer weiter ansteigenden, von Menschen verursachten, Verschmutzung zu befreien. Bei dieser, schier unmöglichen Aufgabe kann sie die Hilfe der Spieler sehr gut gebrauchen. <br>Im Gegenzug begleitet sie dann die Spieler durch die Visual Novel hindurch und gibt dabei interessantes und teils auch sehr erschreckendes Wissen weiter, wie beispielsweise Informationen über die aktuellen Zustände dieser bewundernswerten und eindrucksvollen Unterwasserwelten.<br><br>Durch diese etwas andere Form des Japanischen Adventure Games, soll spielerisch Wissen vermittelt werden, wie auch ein Bewusstsein gegenüber unserer Natur – besonders gegenüber den Meeren – erschaffen bzw. verstärkt werden. So sollen die Spieler dann auch zum weiteren Nachdenken und vielleicht sogar zum eigenem Handeln angeregt werden."];
    
    let buttons = {done: "schließen x"};
    let choice: string;
    do {
      ƒS.Text.print(about[0]);
      choice = await ƒS.Menu.getInput(buttons, "aboutBtn");
    } while (choice != buttons.done);
    ƒS.Text.close();
  }

  async function credits(): Promise<void> {
    let credits: string[] = ["<h3>Credits</h3> <br> XYZ", "<h3>Quellen<h3><br> XYZ"];
    
    let current: number = 0; 
    let buttons = {back: "zurück", next: "weiter", done: "schließen x"};
    let choice: string;
    do {
      ƒS.Text.print(credits[current]);
      choice = await ƒS.Menu.getInput(buttons, "aboutBtn");
      switch (choice) {
        case buttons.back: current = Math.max(0, current - 1); break;
        case buttons.next: current = Math.min(credits.length - 1, current + 1); break;
      }
    } while (choice != buttons.done);
    ƒS.Text.close();
  } 
  // MENU
  let inGameMenu = {
    close: "schließen x",
    save: "Spielstand speichern",
    load: "Spielstand laden",
    turnUpVolume: "Musik lauter",
    turnDownVolume: "Musik leiser",
    about: "Über das Spiel",
    credits: "Credits"
    
  };

  // MENU BUTTONS
  let gameMenu: ƒS.Menu;

  async function menuOptions(_option: string): Promise<void> {
    console.log(_option);

    if (_option == inGameMenu.close) {
      gameMenu.close();
    } else if (_option == inGameMenu.save) {
      await ƒS.Progress.save();
    } else if (_option == inGameMenu.load) {
      await ƒS.Progress.load();
    } else if (_option == inGameMenu.turnUpVolume) {
      increaseSound();
    } else if (_option == inGameMenu.turnDownVolume) {
      decreaseSound();
    } else if (_option == inGameMenu.about) {
      about();
      return;
    } else if (_option == inGameMenu.credits) {
      credits();
      return;
    } else return;
  }


  console.log("FudgeStory template starting");

  window.addEventListener("load", start);
  function start(_event: Event): void {

    gameMenu = ƒS.Menu.create(inGameMenu, menuOptions, "gameMenu");
    // gameMenu.close();

    let scenes: ƒS.Scenes = [
      // { scene: RockyBeach, name: "01RockyBeach", id: "01", next: "02" },
      // { scene: TurtleBeach, name: "02TurtleBeach", id: "02", next: "null"},
      { scene: TrashBeach, name: "03TrashBeach", id: "03", next: "null"},  
      { scene: WaterBeach, name: "04WaterBeach", id: "04", next: "null"}
    ];

    document.addEventListener("keydown", hndKeypress);

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    data.score = ƒS.Progress.setData(data.score, uiElement);

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
      case ƒ.KEYBOARD_CODE.F2:
        await ƒS.Inventory.open();
        break;
      case ƒ.KEYBOARD_CODE.F8:
        gameMenu.open();
        break;
    }
  }


  // ADDITIONAL FUNCTIONS
  export function tickerDelay(_delay: number): void {
    ƒS.Speech.setTickerDelays(_delay);
  }

  export function addScore(amount: number): void {
    data.score.a += amount;
  }

  export function subtractScore(amount: number): void {
    data.score.a -= amount;
  }

  export async function nvlMode(content: string[]): Promise<void> {
    ƒS.Speech.hide();
    let current: number = 0; 
    let buttons = {back: "zurück", next: "weiter", done: "schließen x"};
    let choice: string;
    do {
      ƒS.Text.print(content[current]);
      choice = await ƒS.Menu.getInput(buttons, "aboutBtn");
      switch (choice) {
        case buttons.back: current = Math.max(0, current - 1); break;
        case buttons.next: current = Math.min(content.length - 1, current + 1); break;
      }
    } while (choice != buttons.done);
    ƒS.Text.close();
  }
}