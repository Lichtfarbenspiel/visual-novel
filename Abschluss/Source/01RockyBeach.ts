namespace Abschluss {
  export async function RockyBeach(): ƒS.SceneReturn {
    console.log("RockyBeach scene starting");

    tickerDelay(30);
    await ƒS.Location.show(locations.rockyBeach);
    await ƒS.update(transition.wave.duration, transition.wave.alpha, transition.wave.edge);
    await ƒS.update(0.5);

    await ƒS.Speech.tell(null, "Bitte gib deinen Namen hier ein: ");
    data.Protagonist.name = await ƒS.Speech.getInput();
    console.log(data.Protagonist.name);

    let text = {
      Mermaid: {
        T0000: "Oh hallo, wer bist du denn?",
        T0001: "Das tut mir Leid, das wollte ich nicht. Ich bin Mermaid und ich verkleide mich doch gar nicht! ",
        T0002: "Wieso denn Seefahrer? Ich wollte nachsehen, ob die kleinen Schildkröten schon geschlüpft sind. Es wird nämlich immer schwerer für sie, sicher ins Meer zu kommen. Da können sie meine Hilfe gut gebrauchen.",
        T0003: "Ähm… Ich kann nicht über Land gehen. Aber du könntest doch für mich nachsehen gehen und wir treffen uns dann dort drüben."
      },
      Protagonist: {
        T0000: "Oha, du hast mich erschreckt. Ich bin " + data.Protagonist.name.toString() + " wer bist du? Und wieso verkleidest du dich als Meerjungfrau?!",
        T0001: "Als ob, das glaube ich dir nicht! Naja, was machst du denn dann hier? Seefahrer gibt es hier doch keine mehr.",
        T0002: "Hm, ich habe hier noch keine gesehen. Aber komm, wir können ja mal nachsehen.",
        T0003: "Na wenn du meinst. Dann bis gleich!"
      }
    };

    
    await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.idle, ƒS.positionPercent(60, 100));
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0000);
    await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0000);
    await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0001);
    await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0001);
    await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0002);
    await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0002);
    await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0003);
    await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0003);

    await ƒS.Character.hide(characters.Mermaid);
    await ƒS.update(0.5);
    ƒS.Speech.clear();
  }
}