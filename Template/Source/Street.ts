namespace Template {
    export async function Street(): ƒS.SceneReturn {
      console.log("Straße Scene playing");

      let text = {      
        Narrator: {
          T0000: "Welcome to the street!",
          T0001: "Cars",
          T0002: "Pidgons",
          T0003: "dogs",
          T0004: "drums"
        }
      };

      await ƒS.Location.show(locations.street);
      await ƒS.update(2);

      ƒS.Sound.fade(sounds.street, 0.5, 0.1, true);
      

      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000);
      ƒS.Sound.fade(sounds.backgroundTheme, 0.2, 0.1, true);

      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0001);
      ƒS.Sound.play(sounds.cars, 0.05, false);
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0002);
  
      ƒS.Sound.play(sounds.pidgeons, 0.05, false);
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0003);

      ƒS.Sound.play(sounds.dogs, 0.05, false);
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0004);
    
      ƒS.Sound.play(sounds.drums, 0.05, false);
      await ƒS.update(2);


      // let playSound = {
      //   cars: "play cars sound",
      //   pidgeons: "play pidgeons sound",
      //   dogs: "play dogs sound",
      //   drums: "play drums"
      // };

      

      // let userInput = await ƒS.Menu.getInput(playSound); 

      // let round = 1;

      // for (let i = 0; i <= round; i++) {
      //   switch (userInput) {
      //     case playSound.cars:
      //       ƒS.Sound.play(sounds.cars, 0.05, false);
      //       await ƒS.update(2);
      //       round += 1;
      //       break;
      //     case playSound.pidgeons:
      //       ƒS.Sound.play(sounds.pidgeons, 0.05, false);
      //       await ƒS.update(2);
      //       round += 1;
      //       break;
      //     case playSound.dogs:
      //       ƒS.Sound.play(sounds.dogs, 0.05, false);
      //       await ƒS.update(2);
      //       round += 1;
      //       break;
      //     case playSound.drums:
      //       ƒS.Sound.play(sounds.drums, 0.05, false);
      //       await ƒS.update(2);
      //       round += 1;
      //       break;
      //   }
      // }      
    }
  }    