namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("First scene starting");

    await ƒS.Location.show(locations.rockyBeach);
    await ƒS.update(transition.wave.duration, transition.wave.alpha, transition.wave.edge);
    await ƒS.update(2);
    await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.idle, ƒS.positions.bottomleft);
    await ƒS.update(1);
  }
}