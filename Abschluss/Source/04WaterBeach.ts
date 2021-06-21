namespace Abschluss {
    export async function WaterBeach(): ƒS.SceneReturn {
        console.log("WaterBeach scene starting");

        tickerDelay(30);

        let text = {
        Mermaid: {
            T0000: "Oh ja, da hast du recht.",
            T0001: "Tatsächlich ist mehr als zwei Drittel (71%) der Erdoberfläche von Meeren bedeckt. Das ist echt unglaublich viel.",
            T0002: "Nein. Ich weiß auch gar nicht, ob ich es überall hinschaffen würde, besonders in die Tiefen.",
            T0003: "Da steigt der Druck irgendwann enorm an.",
            T0004: "Aber man munkelt, dass einmal eine Meerjungfrau im Mariannengraben bis auf den Grund geschwommen sei.",
            T0005: "Ich denke das ist nur ein Gerücht!",
            T0006: "Oh ja, das ist ganz interessant und ich wünschte, ich würde mehr davon verstehen.",
            T0007: "Tatsächlich haben auch die Menschen bisher trotzdem noch weniger als 10% der Unterwasserwelten erforscht.",
            T0008: "Ja, könnte man so sagen.",
            T0009: "Hm genau weiß ich das nicht. Aber ich habe mal gehört, dass sich 96% des Wassers auf der Erdoberfläche in den Meeren befindet.",
            T0010: "Also würde ich sagen: sehr, sehr viel.",
            T0011: "Ja genau, das übrige Frischwasser ist in Seen, Flüssen und in Form von Eis zu finden. Also wie Gletscher zum Beispiel.",
            T0012: "Oh ja, leider. Die Meere werden immer wärmer.",
            T0013: "Das führt dann dazu, dass sich die Wasserschichten nicht mehr so gut vermischen,",
            T0014: "wodurch in manchen dieser Schichten die Lebewesen nicht mehr ausreichend mit Sauerstoff und lebenswichtigen Nährstoffen versorgt werden.",
            T0015: "Außerdem versauern die Meere durch die vermehrte Aufnahme von menschengemachtem CO2.",
            T0016: "Also der PH-Wert sinkt, was wiederum sehr schlecht für uns marine Lebewesen ist.",
            T0017: "Ja, das ist ganz richtig. Letztendlich sind aber nicht nur die wundervollen Korallen betroffen,",
            T0018: "sondern alle anderen Tiere und Pflanzen, die zusammen mit den Korallen leben, ebenfalls.",
            T0019: "Und nicht nur die.",
            T0020: "Die Frage ist wohl eher, welche nicht?",
            T0021: "Andere marine Arten haben genauso mit den ansteigenden Temperaturen zu kämpfen.",
            T0022: "Beispielsweise wandern dann ganze Fischbestände mit dem kalten Wasser Richtung Norden",
            T0023: "und nur wenn sie dort dann ein geeignetes Nahrungsangebot haben, können sie auch überleben.",
            T0024: "Ja das ist richtig. Wobei es nicht das Meer an sich ist, sondern beispielsweise Phytoplankton oder Seegraswiesen.",
            T0025: "So wird beinahe die Hälfte des CO2 in der Atmosphäre im Meer produziert.",
            T0026: "Ah das kann ich dir sagen! Okay, vielleicht nicht ganz genau, aber…",
            T0027: "Die Meere beherbergen etwa die Hälfte bis 80% allen Lebens der Erde.",
            T0028: "Außerdem machen sie auch 99% des Lebensraums aus."
        },
        Protagonist: {
            T0000: "Es ist echt unglaublich, wie groß das Meer doch ist. Und so tief… Ich kann es mir gar nicht richtig vorstellen.",
            T0001: "Zum Glück haben wir auch Technik für Unterwasser, die schafft alles!",
            T0002: "Also wissen wir eigentlich noch gar nichts…",
            T0003: "Und wo genau ist dann das restliche Wasser? In Seen?",
            T0004: "Stimmt, ich habe schon gehört, dass besonders die Korallen unter der Wassererwärmung leiden.",
            T0005: "Nicht schlecht! Das war mir bisher gar nicht so bewusst."
        }
        };

        await ƒS.Location.show(locations.waterBeach);
        await ƒS.update(transition.wave.duration, transition.wave.alpha, transition.wave.edge);
        await ƒS.update(0.5);

        await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.floating, ƒS.positionPercent(40, 105));
        await ƒS.update(1);

        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0000);
        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0001);

        let questionChoices = {
            C0001: "Warst du schon überall?",
            C0002: "Wow, wieviel unterschiedliches Leben es da unten wohl geben muss?"
        };

        let userInput = await ƒS.Menu.getInput(questionChoices, "class");

        switch (userInput) {
            case questionChoices.C0001:
                // Warst du schon überall?
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0002);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0003);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0004);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0005);
                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0001);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0006);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0007);
                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0002);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0008);

                let questionChoices01 = {
                    C0001: "Weißt du denn, wieviel Wasser es auf der Erde gibt?",
                    C0002: "Stimmt es denn, dass es den Meeren immer schlechter geht?"
                };
        
                let userInput01 = await ƒS.Menu.getInput(questionChoices01, "class");

                switch (userInput01) {
                    case questionChoices01.C0001:
                        // Weißt du denn, wieviel Wasser es auf der Erde gibt?
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0009);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0010);
                        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0003);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0011);
                        break;
                    case questionChoices01.C0002:
                        // Stimmt es denn, dass es den Meeren immer schlechter geht?
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0012);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0013);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0014);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0015);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0016);
                        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0004);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0017);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0018);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0019);

                        let questionChoices02 = {
                            C0001: "Welche Tiere leiden denn noch unter der Wassererwärmung?",
                            C0002: "Stimmt es, dass das Meer auch Sauerstoff selbst produziert?"
                        };
                
                        let userInput02 = await ƒS.Menu.getInput(questionChoices02, "class");

                        switch (userInput02) {
                            case questionChoices02.C0001:
                                // Welche Tiere leiden denn noch unter der Wassererwärmung?
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0020);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0021);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0022);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0023);
                                break;
                            case questionChoices02.C0002:
                                // Stimmt es, dass das Meer auch Sauerstoff selbst produziert?
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0024);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0025);
                                break;
                        }
                        break;
                }

                break;
            case questionChoices.C0002:
                // Wow, wieviel unterschiedliches Leben es da unten wohl geben muss?
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0026);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0027);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0028);
                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0005);
                break;
        }

    }
}