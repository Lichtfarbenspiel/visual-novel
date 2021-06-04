namespace Template {
  export async function Animation(): ƒS.SceneReturn {
    console.log("Animation Scene plying");
    // let text = {      
    //   Narrator: {
    //     T0000: "Well done! Here is your graduation certificate."
    //   }
    // };
    
    let animation: ƒS.AnimationDefinition = {
      start: { translation: ƒS.positionPercent(60, 100), color: ƒS.Color.CSS("red", 0) },
      end: { translation: ƒS.positionPercent(1, 100), color: ƒS.Color.CSS("blue", 0)},
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };

    await ƒS.Location.show(locations.city);

    // Character translation -> Animation findet mit diesem Aufruf statt

    await ƒS.Character.animate(characters.Allison, characters.Allison.pose.idle, animation);

  }
}    