namespace Template {
  export async function Text(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {      
      Narrator: {
        T0000: "Ich bin Narrator",
        T0001: ""
      },
      Protagonist: {
        T0000: "Ich bin Protagonist",
        T0001: ""
      },
      Joe: {
        T0000: "Willkommen",
        T0001: ""
      }
    };

    await ƒS.Location.show(locations.city);
    await ƒS.update(3);
    await ƒS.Character.show(characters.Joe, characters.Joe.pose.idle, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Joe, text.Joe.T0000);
  }
}