namespace Template {
    export async function Street(): ƒS.SceneReturn {
      console.log("Straße Scene playing");

      let text = {      
        Narrator: {
          T0000: "Welcome to the street!",
          T0001: ""
        }
      };

      await ƒS.Location.show(locations.street);
      await ƒS.update(2);

      ƒS.Sound.fade(sounds.street, 0.5, 0.1, true);
      

      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000);
      ƒS.Sound.fade(sounds.backgroundTheme, 0.05, 0.1, true);

      let playSound = {
        cars: "play cars sound",
        pidgeons: "play pidgeons sound",
        dogs: "play dogs sound",
        drums: "play drums"
      };

      

      let userInput = await ƒS.Menu.getInput(playSound); 

      while (true) {
        switch (userInput) {
          case playSound.cars:
            break;
          case playSound.pidgeons:
            break;
          case playSound.dogs:
            break;
          case playSound.drums:
            break;
        }
      }
      
    }
  }    