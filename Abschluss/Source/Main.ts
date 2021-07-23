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
    },
    end: {
      name: "The End",
      background: "Img/Backgrounds/WDMU-Titel.png"
    }
  };

  // CHARACTERS
  export let characters = {
    Mermaid: {
      name: "Muriel",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        idle: "Img/Characters/Mermaid/mermaid-idle.png",
        floating: "Img/Characters/Mermaid/mermaid-floating.png"
      }
    },
    BabyTurtle: {
      name: "Turtle",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        idle: "Img/Characters/turtle.png"
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
      description: "Wenn du die Plastik Flaschen wieder weg wirfst, verlierst du 10 Wissens-Punkte.",
      image: "Img/Items/plastic-bottles.png",
      static: false,
      handler: throwAway
    }
  };
  

  // MENU AUDIO FUNCTIONS
  let volume: number = 1.0;

  export function increaseSound(): void {
    if (volume >= 100)
      return;
    volume += 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function decreaseSound(): void {
    if (volume > 0)
      return;
    volume -= 0.5;
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
    // tslint:disable-next-line: quotemark
    let credits: string[] = ['<h3>Quellen - Seite 1</h3> <br> <ol style="list-style-type: decimal;"><li>Laurent C. M. Lebreton, et al., &ldquo;River plastic emissions to the world&rsquo;s oceans,&rdquo; <em>Nature Communications&nbsp;</em>8, no. 15611 (June 2017), <a href="http://doi.org/10.1038/ncomms15611">http://doi.org/10.1038/ncomms15611</a></li><li><a href="https://de.whales.org/wale-delfine/wal-delfin-fakten/blauwale/">https://de.whales.org/wale-delfine/wal-delfin-fakten/blauwale/</a> Aufgerufen: 06/2021</li><li>Pham CK, Ramirez-Llodra E, Alt CHS, Amaro T, Bergmann M, Canals M, et al. (2014) Marine Litter Distribution and Density in European Seas, from the Shelves to Deep Basins. PLoS ONE 9(4): e95839. <a href="https://doi.org/10.1371/journal.pone.0095839">https://doi.org/10.1371/journal.pone.0095839</a></li><li><a href="https://www.nabu.de/natur-und-landschaft/meere/muellkippe-meer/16805.html">https://www.nabu.de/natur-und-landschaft/meere/muellkippe-meer/16805.html</a> Abgerufen: 06/2021</li></ol>', '<h3>Quellen - Seite 2</h3> <br> <ol style="list-style-type: decimal;" start="5"><li><a href="https://www.tierschutzbund.de/information/hintergrund/artenschutz/meeresschildkroeten/">https://www.tierschutzbund.de/information/hintergrund/artenschutz/meeresschildkroeten/</a> Abgerufen: 06/2021</li><li><a href="https://sea-shepherd.de/kampagnen/operation-nyamba/">https://sea-shepherd.de/kampagnen/operation-nyamba/</a> Abgerufen: 06/2021</li><li><a href="https://www.wwf.de/themen-projekte/meere-kuesten/fischerei/ungewollter-beifang">https://www.wwf.de/themen-projekte/meere-kuesten/fischerei/ungewollter-beifang</a> Abgerufen: 06/2021</li><li><a href="https://www.bund.net/meere/belastungen/fischerei/">https://www.bund.net/meere/belastungen/fischerei/</a><span style="color:#0563C1;text-decoration:underline;">&nbsp;</span>Abgerufen: 06/2021</li><li><a href="https://sea-shepherd.de/kampagnen/operation-vanguard/">https://sea-shepherd.de/kampagnen/operation-vanguard/</a> Abgerufen: 06/2021</li></ol>', '<h3>Quellen - Seite 3</h3> <br> <ol style="list-style-type: decimal;" start="10"><li><a href="https://reset.org/blog/anamurs-schildkroetenbabies-ohne-schutz">https://reset.org/blog/anamurs-schildkroetenbabies-ohne-schutz</a> Abgerufen: 06/2021</li><li><a href="http://www.unesco.org/new/en/oceans-day">http://www.unesco.org/new/en/oceans-day</a> Abgerufen: 06/2021</li><li><a href="https://www.wwf.de/themen-projekte/meere-kuesten/klima-und-meer/">https://www.wwf.de/themen-projekte/meere-kuesten/klima-und-meer/</a> Abgerufen: 06/2021</li><li><a href="https://sea-shepherd.de/uber-uns/">https://sea-shepherd.de/uber-uns/</a> Abgerufen: 07/2021</li><li><a href="https://www.greenpeace.de/themen/meere/fischerei">https://www.greenpeace.de/themen/meere/fischerei</a> Abgerufen: 07/2021</li></ol>', '<h3> Quellen - Seite 4</h3> <br> <ol style="list-style-type: decimal;" start="15"><li><a href="https://www.geo.de/geolino/natur-und-umwelt/16513-vdo-umweltverschmutzung-die-fuenf-muellstrudel-der-ozeane">https://www.geo.de/geolino/natur-und-umwelt/16513-vdo-umweltverschmutzung-die-fuenf-muellstrudel-der-ozeane</a> Abgerufen: 07/2021</li><li><a href="https://www.nationalgeographic.org/article/great-pacific-garbage-patch-isnt-what-you-think/?utm_source=BibblioRCM_Row">https://www.nationalgeographic.org/article/great-pacific-garbage-patch-isnt-what-you-think/?utm_source=BibblioRCM_Row</a> Abgerufen: 07/2021</li><li><a href="https://www.nature.com/articles/s41598-018-22939-w">https://www.nature.com/articles/s41598-018-22939-w</a> Abgerufen: 07/2021</li><li><a href="https://theoceancleanup.com/great-pacific-garbage-patch/ ">https://theoceancleanup.com/great-pacific-garbage-patch/ </a> Abgerufen: 07/2021</li><li><a href="https://www.peta.org/issues/animals-in-entertainment/zoos-pseudo-sanctuaries/aquariums-marine-parks/ ">https://www.peta.org/issues/animals-in-entertainment/zoos-pseudo-sanctuaries/aquariums-marine-parks/</a> Abgerufen: 07/2021</li><li><a href="https://www.stiftung-meeresschutz.org/meerestiere/">https://www.stiftung-meeresschutz.org/meerestiere/</a> Abgerufen: 07/2021</li><li><a href="https://de.whales.org/wdc-ziele/walfang-stoppen/">https://de.whales.org/wdc-ziele/walfang-stoppen/</a> Abgerufen: 07/2021</li><li><a href="https://www.peta.de/themen/Zoo/">https://www.peta.de/themen/Zoo/</a> Abgerufen: 07/2021</li></ol> ', '<h3>Credits - Seite 5</h3> <br>Titel: Waves of Hawaii <br>Autor: <a href="florianreichelt">florianreichelt</a> <a href="https://freesound.org/s/450755/">https://freesound.org/s/450755/</a><br>Lizenz: <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">Kein Urheberrechtsschutz</a><br><a href="https://creativecommons.org/publicdomain/zero/1.0/deed.de">https://creativecommons.org/publicdomain/zero/1.0/deed.de</a><br>Instagram: <a href="https://www.instagram.com/florianreichelt/">https://www.instagram.com/florianreichelt/</a><br><br>Titel: Big waves hit land<br>Autor: <a href="straget">straget</a> <a href="https://freesound.org/s/412308/">https://freesound.org/s/412308/</a><br>Lizenz: <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">Kein Urheberrechtsschutz</a> Wurde in mp3 Datei umgewandelt, kleinere Dateigröße. <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.de">https://creativecommons.org/publicdomain/zero/1.0/deed.de</a>', '<h3>Credits - Seite 6</h3> <br>Titel: Atlantic ocean waves<br>Autor: <a href="tim.kahn">tim.kahn</a> <a href="https://freesound.org/s/197714/">https://freesound.org/s/197714/</a><br>Lizenz: <a href="https://creativecommons.org/licenses/by-nc/3.0/legalcode">Namensnennung-Nicht kommerziell 3.0</a>. Wurde in mp3 Datei umgewandelt, kleinere Dateigröße.<br><a href="https://creativecommons.org/licenses/by-nc/3.0/deed.de">https://creativecommons.org/licenses/by-nc/3.0/deed.de</a><br><br>Titel: Waves on seaside rocks<br>Autor: <a href="https://freesound.org/people/arnaud%20coutancier/">arnaud coutancier</a> <a href="https://freesound.org/people/arnaud%20coutancier/sounds/213495/">https://freesound.org/people/arnaud%20coutancier/sounds/213495/</a><br>Lizenz: <a href="https://creativecommons.org/licenses/by-nc/3.0/legalcode">Namensnennung-Nicht kommerziell 3.0</a>. Wurde nicht verändert.<br><a href="https://creativecommons.org/licenses/by-nc/3.0/deed.de">https://creativecommons.org/licenses/by-nc/3.0/deed.de</a>', '<h3>Credits - Seite 7</h3> <br>Titel: Wave 2<br>Autor: <a href="https://freesound.org/people/Kayyy/">Kayyy</a> <a href="https://freesound.org/people/Kayyy/sounds/61012/">https://freesound.org/people/Kayyy/sounds/61012/</a><br>Lizenz: <a href="https://creativecommons.org/licenses/by-nc/3.0/legalcode">Namensnennung-Nicht kommerziell 3.0</a>. Wurde nicht verändert.<br><a href="https://creativecommons.org/licenses/by-nc/3.0/deed.de">https://creativecommons.org/licenses/by-nc/3.0/deed.de</a><br><br>Titel: Sea-gulls<br>Autor: <a href="Snapper4298">Snapper4298</a> <a href="https://freesound.org/s/166703/">https://freesound.org/s/166703/</a><br>Lizenz: <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">Kein Urheberrechtsschutz</a><br><a href="https://creativecommons.org/publicdomain/zero/1.0/deed.de">https://creativecommons.org/publicdomain/zero/1.0/deed.de</a>', '<h3>Credits - Seite 8</h3> <br>Titel: Soft sand steps<br>Autor: <a href="https://freesound.org/people/200221-WeanBekker/">200221-WeanBekker</a> <a href="https://freesound.org/s/543714/">https://freesound.org/s/543714/</a><br>Lizenz: <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">Kein Urheberrechtsschutz</a><br><a href="https://creativecommons.org/publicdomain/zero/1.0/deed.de">https://creativecommons.org/publicdomain/zero/1.0/deed.de</a><br><br>Titel: Open Sea Morning<br>Autor: Puddle of Infinity <a href="https://youtu.be/iL55mdlUe5w">https://youtu.be/iL55mdlUe5w></a><br>Lizenz: Lizenzfrei<br>Download via YouTube Audio Library', '<h3>Credits - Seite 9</h3> <br>Alt Text: Before Trawling<br>Credits: <a href=" https://wwwwwfbalticorg.cdn.triggerfish.cloud/uploads/2020/09/wwf-baltic-a-sea-under-pressure_impacts-of-bottom-trawling-2020.pdf "> WWF report - A sea under pressure: Bottom trawling impacts in the Baltic </a><br>Abgerufen: 07/2021<br><br>Alt Text: After Trawling<br>Credits: <a href=" https://wwwwwfbalticorg.cdn.triggerfish.cloud/uploads/2020/09/wwf-baltic-a-sea-under-pressure_impacts-of-bottom-trawling-2020.pdf "> WWF report - A sea under pressure: Bottom trawling impacts in the Baltic </a><br>Abgerufen: 07/2021<br><br> Alt Text: Garbage Patches<br>Credits:<a href="https://www.nationalgeographic.org/encyclopedia/great-pacific-garbage-patch/”>National Geographics Encyclopedia</a><br>Abgerufen: 07/2021', '<h3>Credits - Seite 10</h3> <br>Alt Text: Müllstrudel Größe<br>Credits: <a href=" https://theoceancleanup.com/media-gallery/">The Ocean Cleanup</a><br>Abgerufen: 07/2021<br><br>Alt Text: GPG Pollution<br>Credits: <a href=" https://www.nationalgeographic.org/encyclopedia/great-pacific-garbage-patch/"> National Geographics Encyclopedia </a><br>Abgerufen: 07/2021<br><br> Alt Text: GPG Pollution 2<br>Credits: <a href=" https://www.nationalgeographic.org/encyclopedia/great-pacific-garbage-patch/"> National Geographics Encyclopedia </a><br>Abgerufen: 07/2021<br><br> Restliches Bildmaterial<br>Credits: <a href=" https://pixabay.com/de/"> Lizenzfrei via Pixabay.com</a><br>Abgerufen: 07/2021'];
    
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
    turnDownVolume: "Musik leiser",
    turnUpVolume: "Musik lauter",
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
    } else if (_option == inGameMenu.turnDownVolume) {
      decreaseSound();
    } else if (_option == inGameMenu.turnUpVolume) {
      increaseSound();
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
      { scene: RockyBeach, name: "01RockyBeach", id: "01", next: "02" },
      { scene: TurtleBeach, name: "02TurtleBeach", id: "02", next: "null"},
      { scene: TrashBeach, name: "03TrashBeach", id: "03", next: "null"},  
      { scene: WaterBeach, name: "04WaterBeach", id: "04", next: "null"},
      { scene: GPGP, name: "05GPGP", id: "05", next: "null"},
      { scene: endScene, name: "EndScene", id: "end", next: "null"}
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

  export async function nvlMode(content: string[], hideSpeech: boolean, buttonClass?: string, textClass?: string): Promise<void> {
    if (hideSpeech) ƒS.Speech.hide();
    let current: number = 0; 
    let buttons = {back: "zurück", next: "weiter", done: "schließen x"};
    let choice: string;
    do {
      if (textClass) ƒS.Text.addClass(textClass); ƒS.Text.setClass(textClass);
      ƒS.Text.print(content[current]);
      choice = await ƒS.Menu.getInput(buttons, buttonClass);
      switch (choice) {
        case buttons.back: current = Math.max(0, current - 1); break;
        case buttons.next: current = Math.min(content.length - 1, current + 1); break;
      }
    } while (choice != buttons.done);
    ƒS.Text.close();
  }

  export function throwAway(_event: CustomEvent): void {
    console.log("Threw plastic bottles away");
    data.score.a -= 10;
  }

  export function endSore(): string {
    if (data.score.a < 50 && data.score.a > 0) return "Guter Anfang!";
    else if (data.score.a >= 50 && data.score.a < 85) return "Klasse, das ist nicht schlecht!";
    else if (data.score.a >= 85) return "Super! Du bist jetzt ja schon Profi.";
    else if (data.score.a <= 0) return "Hm, da geht doch noch mehr.";
    return null;
  }
}