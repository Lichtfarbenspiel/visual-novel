namespace Abschluss {

    export async function TrashBeach(): ƒS.SceneReturn {
        console.log("TrashBeach scene starting");

        tickerDelay(30);

        let text = {
          Mermaid: {
            T0000: "Naja, drüben wird der Strand regelmäßig gesäubert. Aber ich glaube das Landet dann alles hier – hinter die Felsen kommen keine Urlauber, da sieht es niemand.",
            T0001: "Und dann werden natürlich noch Unmengen über das Meer angespült. Es wird jedes Jahr schlimmer!",
            T0002: "Ich habe einmal gehört, wie zwei Meeresbiologen darüber geredet haben.",
            T0003: "Sie meinten, dass jedes Jahr etwa 1,15 bis 2,41 Millionen Tonnen Plastik über die Flüsse in die Meere gelangt. Das sind mehr als 6.000 beziehungsweise  11.000 Blauwale.",
            T0004: "Achso, klar. Ein Blauwal wiegt bis zu 190 Tonnen.",
            T0005: "Aber nein. Ich habe im Meer schon an vielen Stellen Müll schwimmen sehen. Sowohl am Meeresboden, als auch weit draußen auf offener See."
          },
          Protagonist: {
            T0000: "Wieso liegt hier denn so viel Müll? ",
            T0001: ".",
            T0002: "",
            T0003: ""
          }
        };

        
        let questionChoices = {
            C0001: "Wieso wird es immer schlimmer?",
            C0002: "Wieso werden die Eier überhaupt hier abgelegt?"
        };

        await ƒS.Location.show(locations.trashBeach);
        await ƒS.update(transition.wave.duration, transition.wave.alpha, transition.wave.edge);
        await ƒS.update(0.5);
        await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.floating, ƒS.positionPercent(-5, 105));
        await ƒS.update(1);

        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0000);
        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0001);


        let userInput = await ƒS.Menu.getInput(questionChoices, "class");

        switch (userInput) {
        case questionChoices.C0001:
            // Wieso wird es immer schlimmer
            await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0002);
            await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0003);
        
            let questionChoices01 = {
                C0001: "Wieviel wiegt denn so ein Blauwal?",
                C0002: "Das ist echt ganz schön viel Müll. Liegt das dann alles immer an den Stränden?"
            };
    
            let userInput01 = await ƒS.Menu.getInput(questionChoices01, "class");
            switch (userInput01) {
                case questionChoices01.C0001:
                    // Wieviel wiegt denn so ein Blauwal?
                    await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0004);
                    break;
                case questionChoices01.C0002:
                    // Liegt das dann alles immer an den Stränden?
                    await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0005);
                    break;
            }
            break;
        case questionChoices.C0002:
            // Wieso werden die Eier überhaupt hier abgelegt?
            break;
        }
    }
}