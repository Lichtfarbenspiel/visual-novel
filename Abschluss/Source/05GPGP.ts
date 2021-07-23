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
                T0005: "Alle Fünf Müllstrudel befinden sich in der Nähe des Äquators, an Stellen, an denen unterschiedliche Meeresströmungen aufeinander treffen.(15)",
                T0006: "Wenn die verschiedenen Strömungen aus dem Norden und Süden dann aufeinander treffen, entstehen diese großen Strudel.(15)",
                T0007: "Dadurch wird der Plastikmüll zu einer Insel zusammen getrieben. (15)",
                T0008: "Mit 46% besteht fast die Hälfte des Mülls aus Ausrüstung der Fischerei, wie Fischernetze und Seile.(16)",
                T0009: "Teilweise werden sie vorsätzlich im Meer versorgt, teilweise schlicht und einfach verloren.(16)",
                T0010: "Ansonsten macht auch das Mikroplastik einen sehr Großen Anteil aus. Weniger aber Plastik wie Flaschen oder anderen Einwegprodukten.(16)",
                T0011: "Ja, tatsächlich einiges!",
                T0012: "Du könntest beispielsweise versuchen, wenn du das nicht sowieso schon tust, auf den Verzehr von Fisch und anderen Meerestieren zu verzichten.",
                T0013: "So trägst du nicht indirekt zur Verschmutzung durch Fischereigut bei und verursachst zusätzlich kein Tierleid.",
                T0014: "Und denke daran: es kommt nicht darauf an, alles perfekt zu machen. Jeder kleine Schritt ist ein Schritt in die richtige Richtung! Geh dein Tempo, das wichtigste ist, du bleibst in Bewegung.",
                T0015: "Vielen Dank für deine Hilfe! Ich hoffe, ich konnte auch dir etwas zurückgeben. Auch die Schildkröten danken dir!",
                T0016: "Oh nein, ich danke Dir! Danke, dass du mir geholfen hast. Auch die Schildkröten Danken dir dafür!"
            }
        };
        await ƒS.Location.show(locations.waterBeach);
        ƒS.Sound.play(sounds.singleWave, 0.5, false);
        await ƒS.update(transition.wave2.duration, transition.wave2.alpha, transition.wave2.edge);
        await ƒS.update(0.5);

        ƒS.Sound.play(sounds.bigWavesOnSandyBeach, 0.001, true);
        ƒS.Sound.fade(sounds.bigWavesOnSandyBeach, 1, 0.1, true);

        await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.floating, ƒS.positionPercent(40, 115));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0000);
        ƒS.Sound.play(sounds.seagull, 0.8, false);


        let imgGPGP: string[] = ["<img src='Img/Visualisations/garbage_patches.png' alt='Garbage Patches' height='100%'>", "<img src='Img/Visualisations/GPGP-pollution.jpg' alt='GPGP Pollution' height='100%'>", "<img src='Img/Visualisations/GPGP-pollution2.jpg' alt='GPGP Pollution 2' height='100%'>"];

        await nvlMode(imgGPGP, false, "aboutBtn", "visual-content");

        let questionChoices = {
            C0001: "Wie viel Müll hat sich da bis jetzt angesammelt?",
            C0002: "Wie groß ist das denn?"
        };

        let userInput = await ƒS.Menu.getInput(questionChoices, "selection");

        switch (userInput) {
            case questionChoices.C0001:
                // Wie viel Müll hat sich da bis jetzt angesammelt?
                addScore(10);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0001);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0002);
                break;
            case questionChoices.C0002:
                // Wie groß ist das denn?
                addScore(10);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0003);
                let gifGPGP: string[] = ["<img src='Img/Visualisations/toc-gpgp-3xfrance.gif' alt='Müllstrudel Größe' height='100%'>"];
                await nvlMode(gifGPGP, false, "aboutBtn", "visual-content");
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0004);
                break;
        }

        let questionChoices2 = {
            C0001: "Wieso sammelt sich der Müll in so einem Strudel?",
            C0002: "Welche Art von Plastikmüll befindet sich in dem Strudel?"
        };

        let userInput2 = await ƒS.Menu.getInput(questionChoices2, "selection");

        switch (userInput2) {
            case questionChoices2.C0001:
                // Wieso sammelt sich der Müll in so einem Strudel?
                addScore(10);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0005);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0006);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0007);
                break;
            case questionChoices2.C0002:
                // Welche Art von Plastikmüll befindet sich in dem Strudel?
                addScore(10);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0008);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0009);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0010);
                ƒS.Sound.play(sounds.seagull, 0.8, false);
                break;
        }

        let questionChoices3 = {
            C0001: "Könnte ich denn auch etwas gegen die Verschmutzung tun?",
            C0002: "Danke dir, das war wirklich sehr interessant!"
        };

        let userInput3 = await ƒS.Menu.getInput(questionChoices3, "selection");

        switch (userInput3) {
            case questionChoices3.C0001:
                // Könnte ich denn auch etwas gegen die Verschmutzung tun?
                addScore(10);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0011);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0012);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0013);

                let questionChoices4 = {
                    C0001: "Mehr erfahren!",
                    C0002: "Nein, danke!"
                };
        
                let userInput4 = await ƒS.Menu.getInput(questionChoices4, "selection");
        
                switch (userInput4) {
                    case questionChoices4.C0001:
                        // Mehr erfahren!
                        let learnMore: string[] = ["Allgemein weniger Müll verursachen - wiederverwendbare Produkte nutzen, wie beispielsweise Mehrwegflaschen.<br><br>Sammle Müll ein – auch auf dem Land, fern ab vom Meer, ist es wichtig, keinen Müll in der Natur zu hinterlassen. Zudem könnte auch dieser über Flüsse in die Meere gelangen.<br><br>Mülltrennung nicht vergessen! <br><br>Sprich darüber! Rede mit deinen Freunden, Familie, Kollegen usw. darüber. Dadurch entsteht ein größeres Bewusstsein."];
                        nvlMode(learnMore, true, "aboutBtn", "learnMore");
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0014);
                        ƒS.Sound.play(sounds.seagull, 0.8, false);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0015);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0015);
                        await ƒS.Character.hide(characters.Mermaid);
                        await ƒS.update(0.5);
                        ƒS.Speech.clear();
                        ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                    case questionChoices4.C0002:
                        // Nein, danke!
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0015);
                        await ƒS.Character.hide(characters.Mermaid);
                        await ƒS.update(0.5);
                        ƒS.Speech.clear();
                        ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                }
                break;
            case questionChoices3.C0002:
                // Danke dir, das war wirklich sehr interessant!
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0016);
                await ƒS.Character.hide(characters.Mermaid);
                await ƒS.update(0.5);
                ƒS.Speech.clear();
                ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                return "end";
        }
    }
}