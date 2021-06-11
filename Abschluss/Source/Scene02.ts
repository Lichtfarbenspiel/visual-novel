namespace Template {
  export async function Scene02(): ƒS.SceneReturn {
    console.log("Second scene starting");

    await ƒS.Location.show(locations.turtleBeach);
    await ƒS.update(2);
    await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.idle, ƒS.positions.bottomright);
    await ƒS.update(1);
  }
}