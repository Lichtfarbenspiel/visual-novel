namespace Abschluss {
    export async function GPGP(): ƒS.SceneReturn {
        console.log("GPGP scene starting");

        tickerDelay(30);

        let text = {
            Mermaid: {
                T0000: "Schau, so sieht das dann aus. Das hier sind Bilder vom Great Pacific Garbage Patch, einer der Fünf Müllstrudel in den Ozeanen. (15, 16)",
                T0001: "Der pazifische Müllstrudel ist eine etwa drei Millionen Tonnen schwere treibende Insel.(15)",
                T0002: "Es wird geschätzt, dass sich darin etwa 1.8 Billionen Plastikteile befinden.(16, 17)",
                T0003: "Der Müllstrudel erstreckt sich oberflächlich über einen Bereich von 1,6 Millionen Quadratkilometer und ist damit Dreimal so groß wie Frankreich. (17, 18)",
                T0004: "In den letzten 40 Jahren hat sich die Größe des Müllstrudels übrigens um das Hundertfache vergrößert. (15)",
                T0005: "",
                T0006: "",
                T0007: "",
                T0008: "",
                T0009: "",
                T0010: "",
                T0011: "",
                T0012: "",
                T0013: "",
                T0014: "",
                T0015: "",
                T0016: "",
                T0017: "",
                T0018: "",
                T0019: "",
                T0020: "",
                T0021: "",
                T0022: "",
                T0023: "",
                T0024: "",
                T0025: "",
                T0026: "",
                T0027: "",
                T0028: ""
            },
            Protagonist: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: "",
                T0004: "",
                T0005: ""
            }
        };
        await ƒS.Location.show(locations.waterBeach);
        ƒS.Sound.play(sounds.singleWave, 0.5, false);
        await ƒS.update(transition.wave.duration, transition.wave.alpha, transition.wave.edge);
        await ƒS.update(0.5);

        ƒS.Sound.play(sounds.bigWavesOnSandyBeach, 0.001, true);
        ƒS.Sound.fade(sounds.bigWavesOnSandyBeach, 1, 0.1, true);

        await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.floating, ƒS.positionPercent(40, 115));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0000);

        // Fotos von GPGP in NVL style

        let imgGPGP: string[] = ["<img src='img/Visualisations/garbage_patches.png' alt='garbage_patches' height='100%'>", "<img src='img/Visualisations/GPGP-pollution.jpg' alt='GPGP-pollution' height='100%'>", "<img src='img/Visualisations/GPGP-pollution2.jpg' alt='GPGP-pollution2' height='100%'>"];

        await nvlMode(imgGPGP, "visual-contentBtn", "visual-content");

        let questionChoices = {
            C0001: "Wieviel Müll hat sich da bis jetzt angesammelt?",
            C0002: "Wie groß ist das denn?"
        };

        let userInput = await ƒS.Menu.getInput(questionChoices, "class");

        switch (userInput) {
            case questionChoices.C0001:
                //Wieviel Müll hat sich da bis jetzt angesammelt?
                addScore(5);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0001);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0002);
                break;
            case questionChoices.C0002:
                // Wie groß ist das denn?
                addScore(5);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0003);
                // Frankreich animation einbetten
                let gifGPGP: string[] = ["<img src='img/Visualisations/toc-gpgp-3xfrance.gif' alt='Müllstrudel Größe' height='100%'>"];
                await nvlMode(gifGPGP);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0004);
                break;
        }
    }
}