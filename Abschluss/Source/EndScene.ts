namespace Abschluss {
    export async function endScene(): ƒS.SceneReturn {
        console.log("End scene starting");

        tickerDelay(30);

        let text = {
            Mermaid: {
                T0000: "Vielen Dank für deine Hilfe, " + data.Protagonist.name.toString() + "! Dein erreichter Wissenscore: <b>" + data.score.a + "</b> " + endScore()
            }
        };

        await ƒS.Location.show(locations.end);
        ƒS.Sound.play(sounds.singleWave, 0.5, false);
        await ƒS.update(transition.wave.duration, transition.wave.alpha, transition.wave.edge);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.idle, ƒS.positionPercent(10, 100));
        await ƒS.update(1);
        ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0000);

        let questionChoices = {
            C0001: "Nochmal spielen!"
        };

        let userInput = await ƒS.Menu.getInput(questionChoices, "play-again");

        if (userInput == questionChoices.C0001) {
            addScore(5);
            await ƒS.Character.hide(characters.Mermaid);
            await ƒS.update(0.5);
            ƒS.Speech.clear();
            return "02";
        }
    }
}