namespace Template {
    export async function Street(): ƒS.SceneReturn {
      console.log("Straße Scene playing");

      let text = {      
        Narrator: {
          T0000: "Welcome to the street!"
        }
      };

      await ƒS.Location.show(locations.street);
      await ƒS.update(2);

      ƒS.Sound.fade(sounds.backgroundTheme, 0.05, 0.1, true);

      await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000);


      
    }
  }    