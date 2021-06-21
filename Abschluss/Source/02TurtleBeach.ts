namespace Abschluss {
  export async function TurtleBeach(): ƒS.SceneReturn {
    console.log("TurtleBeach scene starting");

    tickerDelay(30);

    let text = {
      Mermaid: {
        T0000: "Oh das ist super! Kannst du schauen, dass sie alle sicher bis ans Meer gelangen?",
        T0001: "Nein, besser nicht. Sie müssen das selbst schaffen, aber du kannst aufpassen, dass sie nicht den Seevögeln zum Opfer fallen. Oder in all dem Müll stecken bleiben. Schrecklich ist das.",
        T0002: "",
        T0003: ""
      },
      Protagonist: {
        T0000: "Mermaid! Du wirst es nicht glauben, aber hier hinten sind wirklich kleine Schildkröten. Sie müssen gerade erst geschlüpft sein!",
        T0001: "Ja natürlich, ich kann sie auch kurz rüber tragen.",
        T0002: "",
        T0003: ""
      }
    };

    let turtleChoices = {
      C0001: "Schildkröten zum Wasser tragen",
      C0002: "Schildkröten beobachten"
    };

    await ƒS.Location.show(locations.turtleBeach);
    await ƒS.update(transition.wave.duration, transition.wave.alpha, transition.wave.edge);
    await ƒS.update(0.5);

    await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0000);
    await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.idle, ƒS.positionPercent(0, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0000);
    await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0001);
    await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0001);

    let userInput = await ƒS.Menu.getInput(turtleChoices, "class");

    switch (userInput) {
      case turtleChoices.C0001:
        // Schildkröten zum Wasser tragen
        await ƒS.Character.hide(characters.Mermaid);
        await ƒS.update(0.5);
        ƒS.Speech.clear();
        return "04";
      case turtleChoices.C0002:
        // Schildkröten beobachten
        await ƒS.Character.hide(characters.Mermaid);
        await ƒS.update(0.5);
        ƒS.Speech.clear();
        return "03";
    }
  }
}