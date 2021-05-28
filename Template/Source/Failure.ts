namespace Template {
  export async function Failure(): ƒS.SceneReturn {
    console.log("Class Scene plying");
    let text = {      
      Protagonist: {
        T0000: "Great! That was it then, I guess..."
      }
    };
    

    ƒS.Speech.setTickerDelays(50);
    await ƒS.Location.show(locations.city);
    await ƒS.update(2);
    await ƒS.Character.show(data.Protagonist, data.Protagonist.pose.idle, ƒS.positionPercent(1, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0000);
  
  }
}    