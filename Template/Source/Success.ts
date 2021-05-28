namespace Template {
  export async function Success(): ƒS.SceneReturn {
    console.log("Class Scene plying");
    let text = {      
      Narrator: {
        T0000: "Well done! Here is your graduation certificate."
      }
    };
    

    ƒS.Speech.setTickerDelays(50);
    await ƒS.Location.show(locations.hall);
    await ƒS.update(2);
    await ƒS.Character.show(characters.Narrator, characters.Narrator.pose.idle, ƒS.positionPercent(1, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000);
    ƒS.Inventory.add(items.item01);
    await ƒS.Inventory.open();  
  }
}    