namespace Abschluss {
    export async function WaterBeach(): ƒS.SceneReturn {
        console.log("WaterBeach scene starting");

        tickerDelay(30);

        let text = {
            Mermaid: {
                T0000: "Oh ja, da hast du recht.",
                T0001: "Tatsächlich ist mehr als zwei Drittel (71%) der Erdoberfläche von Meeren bedeckt.(11) Das ist echt unglaublich viel.",
                T0002: "Nein. Ich weiß auch gar nicht, ob ich es überall hinschaffen würde, besonders in die Tiefen.",
                T0003: "Da steigt der Druck irgendwann enorm an.",
                T0004: "Aber man munkelt, dass einmal eine Meerjungfrau im Mariannengraben bis auf den Grund geschwommen sei.",
                T0005: "Ich halte das für ein Gerücht.",
                T0006: "Oh ja, das ist ganz interessant und ich wünschte, ich würde mehr davon verstehen.",
                T0007: "Tatsächlich haben auch die Menschen bisher, trotz der Technik, noch immer weniger als 10% der Unterwasserwelten erforscht(11)",
                T0008: "Ja, könnte man so sagen.",
                T0009: "Hm genau weiß ich das jetzt nicht. Aber ich habe mal gehört, dass sich 96% des Wassers auf der Erdoberfläche in den Meeren befindet.(11)",
                T0010: "Also würde ich sagen: sehr, sehr viel.",
                T0011: "Ja genau, das übrige Frischwasser ist in Seen, Flüssen und in Form von Eis zu finden. Also wie Gletscher zum Beispiel.(11)",
                T0012: "Oh ja, leider. Die Meere werden immer wärmer.",
                T0013: "Das führt dann dazu, dass sich die Wasserschichten nicht mehr so gut vermischen, (12)",
                T0014: "wodurch in manchen dieser Schichten die Lebewesen nicht mehr ausreichend mit Sauerstoff und lebenswichtigen Nährstoffen versorgt werden.(12)",
                T0015: "Außerdem versauern die Meere durch die vermehrte Aufnahme von menschengemachtem CO2.(12)",
                T0016: "Also der PH-Wert sinkt, was wiederum sehr schlecht für uns marine Lebewesen ist.(12)",
                T0017: "Ja, das ist ganz richtig. Letztendlich sind aber nicht nur die wundervollen Korallen betroffen, (12)",
                T0018: "sondern alle anderen Tiere und Pflanzen, die zusammen mit den Korallen leben, ebenfalls.",
                T0019: "Und nicht nur die. Aber besonders auch andere kalkbildende Lebewesen leiden darunter.(12)",
                T0020: "Die Frage ist wohl eher, welche nicht?",
                T0021: "Andere marine Arten haben genauso mit den ansteigenden Temperaturen zu kämpfen.",
                T0022: "Beispielsweise wandern dann ganze Fischbestände mit dem kalten Wasser Richtung Norden (12)",
                T0023: "und nur wenn sie dort dann ein geeignetes Nahrungsangebot haben, können sie auch überleben.(12)",
                T0024: "Ja das ist richtig. Wobei es nicht das Meer an sich ist, sondern beispielsweise Phytoplankton oder Seegraswiesen.(11)",
                T0025: "So wird beinahe die Hälfte des CO2 in der Atmosphäre im Meer produziert.(11)",
                T0026: "Ah das kann ich dir sagen! Okay, vielleicht nicht ganz genau, aber…",
                T0027: "Die Meere beherbergen etwa die Hälfte bis 80% allen Lebens der Erde.(11)",
                T0028: "Außerdem machen sie auch 99% des gesamten Lebensraums aus.(11)",
                T0029: "Tatsächlich weiß aber niemand, wie viele Arten von Meerestieren es gibt. (20)",
                T0030: "Ja, Wale werden auch heute noch gejagt.",
                T0031: "Zum einen, aus finanziellem Interesse, zum anderen auch aus häufig Tradition, wobei auch hier eher der finanzielle Aspekt im Vordergrund steht.(21)",
                T0032: "Wie fändest du es, dein Leben, in einem kleinen Zimmer zu verbringen?",
                T0033: "Du könntest nicht ans Meer fahren, dich nur innerhalb ein paar Quadratmetern fortbewegen.",
                T0034: "Ich halte nichts davon. Tieren wird die Freiheit genommen und teilweise werden sie dann noch zu Dingen gezwungen, die für sie nicht natürlich sind.",
                T0035: "Ja genau.",
                T0036: "Nein. In Gefangenschaft gezogene Tiere können meist nicht ausgewildert werden.(22)",
                T0037: "Außerdem, was bringt es eine Art zu retten, deren Lebensraum bald oder bereits nicht mehr existiert?",
                T0038: "Die Ursache muss bekämpft, nicht die Symptome unterdrückt werden.",
                T0039: "Keiner Tierart ist mit einem Käfig geholfen.",
                T0040: "Du könntest beispielsweise Aquarien nicht unterstützen. So trägst du nicht zu unnötigem Tierleid bei und unterstützt den Fang der Wildtiere nicht.(19)",
                T0041: "Vielen Dank für deine Hilfe! Ich hoffe, ich konnte auch dir etwas zurück geben. Auch die Schildkröten danken dir!"
            },
            Protagonist: {
                T0000: "Es ist echt unglaublich, wie groß das Meer doch ist. Und so tief… Ich kann es mir gar nicht richtig vorstellen.",
                T0001: "Zum Glück haben wir auch Technik für Unterwasser, die schafft alles!",
                T0002: "Also wissen wir eigentlich noch gar nichts…",
                T0003: "Und wo genau ist dann das restliche Wasser? In Seen?",
                T0004: "Stimmt, ich habe schon gehört, dass besonders die Korallen unter der Wassererwärmung leiden.",
                T0005: "Nicht schlecht! Das war mir bisher gar nicht so bewusst.",
                T0006: "Wie Kunststücke?",
                T0007: "Aber sind sie nicht gut, um bedrohte Arten vor dem Aussterben zu retten?",
                T0008: "Gibt es denn etwas, das ich beispielsweise tun könnte?"
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

        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0000);
        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0001);

        let questionChoices = {
            C0001: "Warst du schon überall?",
            C0002: "Wow, wieviel unterschiedliches Leben es da unten wohl geben muss?"
        };

        let userInput = await ƒS.Menu.getInput(questionChoices, "selection");

        switch (userInput) {
            case questionChoices.C0001:
                // Warst du schon überall?
                addScore(5);
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
        
                let userInput01 = await ƒS.Menu.getInput(questionChoices01, "selection");

                switch (userInput01) {
                    case questionChoices01.C0001:
                        // Weißt du denn, wieviel Wasser es auf der Erde gibt?
                        addScore(10);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0009);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0010);
                        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0003);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0011);

                        let questionChoices02 = {
                            C0001: "Werden Wale noch immer gejagt?",
                            C0002: "Was hältst du von Aquarien und Zoos?"
                        };
                
                        let userInput02 = await ƒS.Menu.getInput(questionChoices02, "selection");
        
                        switch (userInput02) {
                            case questionChoices02.C0001:
                                // Werden Wale noch immer gejagt?
                                addScore(10);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0030);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0031);
                                break;
                            case questionChoices02.C0002:
                                // Was hältst du von Aquarien und Zoos?
                                addScore(10);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0032);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0033);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0034);
                                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0006);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0035);
                                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0007);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0036);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0037);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0038);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0039);
                                break;
                        }
        
                        // TO Do was kann ich tun?
                        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0008);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0040);
        
                        let questionChoices03 = {
                            C0001: "Mehr erfahren!",
                            C0002: "Nein, danke!"
                        };
                
                        let userInput03 = await ƒS.Menu.getInput(questionChoices03, "selection");
                
                        switch (userInput03) {
                            case questionChoices03.C0001:
                                // Mehr erfahren!
                                addScore(10);
                                let learnMore: string[] = ["Wenn du kannst und das nicht bereits tust, verzichte auf den Verzehr von Fisch und anderen Meerestieren. So trägst du nicht zur Überfischung bei. Fisch aus Aquakulturen ist hier nicht besser. <br><br>Vermeide Kreuzfahrten.<br><br>Du kannst auch mit Freunden, Familie usw. darüber reden. So entsteht ein größeres Bewusstsein in der Gesellschaft. Viele sind sich gar nicht bewusst, wie es tatsächlich um unsere Meerestiere steht.<br><br>Informiere dich weiter über das Thema."];
                                nvlMode(learnMore, true, "aboutBtn", "learnMore");
                                break;
                            case questionChoices03.C0002:
                                // Nein, danke!
                                break;
                        }
        
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0041);
                        await ƒS.Character.hide(characters.Mermaid);
                        await ƒS.update(0.5);
                        ƒS.Speech.clear();
                        ƒS.Sound.fade(sounds.bigWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                    case questionChoices01.C0002:
                        // Stimmt es denn, dass es den Meeren immer schlechter geht?
                        addScore(10);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0012);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0013);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0014);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0015);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0016);
                        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0004);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0017);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0018);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0019);

                        let questionChoices04 = {
                            C0001: "Welche Tiere leiden denn noch unter der Wassererwärmung?",
                            C0002: "Stimmt es, dass das Meer auch Sauerstoff selbst produziert?"
                        };
                
                        let userInput04 = await ƒS.Menu.getInput(questionChoices04, "selection");

                        switch (userInput04) {
                            case questionChoices04.C0001:
                                // Welche Tiere leiden denn noch unter der Wassererwärmung?
                                addScore(10);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0020);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0021);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0022);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0023);
                                break;
                            case questionChoices04.C0002:
                                // Stimmt es, dass das Meer auch Sauerstoff selbst produziert?
                                addScore(10);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0024);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0025);
                                break;
                        }

                        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0008);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0040);

                        let questionChoices05 = {
                            C0001: "Mehr erfahren!",
                            C0002: "Nein, danke!"
                        };
                
                        let userInput05 = await ƒS.Menu.getInput(questionChoices05, "selection");
                
                        switch (userInput05) {
                            case questionChoices05.C0001:
                                // Mehr erfahren!
                                addScore(10);
                                let learnMore: string[] = ["Wenn du kannst und das nicht bereits tust, verzichte auf den Verzehr von Fisch und anderen Meerestieren. So trägst du nicht zur Überfischung bei. Fisch aus Aquakulturen ist hier nicht besser. <br><br>Vermeide Kreuzfahrten.<br><br>Du kannst auch mit Freunden, Familie usw. darüber reden. So entsteht ein größeres Bewusstsein in der Gesellschaft. Viele sind sich gar nicht bewusst, wie es tatsächlich um unsere Meerestiere steht.<br><br>Informiere dich weiter über das Thema."];
                                nvlMode(learnMore, true, "aboutBtn", "learnMore");
                                break;
                            case questionChoices04.C0002:
                                // Nein, danke!
                                break;
                        }
        
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0041);

                        await ƒS.Character.hide(characters.Mermaid);
                        await ƒS.update(0.5);
                        ƒS.Speech.clear();
                        ƒS.Sound.fade(sounds.bigWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                }
                break;
            case questionChoices.C0002:
                // Wow, wieviel unterschiedliches Leben es da unten wohl geben muss?
                addScore(10);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0026);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0027);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0028);
                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0005);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0029);

                let questionChoices03 = {
                    C0001: "Werden Wale noch immer gejagt?",
                    C0002: "Was hältst du von Aquarien und Zoos?"
                };
        
                let userInput03 = await ƒS.Menu.getInput(questionChoices03, "selection");

                switch (userInput03) {
                    case questionChoices03.C0001:
                        // Werden Wale noch immer gejagt?
                        addScore(10);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0030);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0031);
                        break;
                    case questionChoices03.C0002:
                        // Was hältst du von Aquarien und Zoos?
                        addScore(10);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0032);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0033);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0034);
                        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0006);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0035);
                        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0007);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0036);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0037);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0038);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0039);
                        break;
                }

                // TO Do was kann ich tun?
                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0008);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0040);

                let questionChoices05 = {
                    C0001: "Mehr erfahren!",
                    C0002: "Nein, danke!"
                };
        
                let userInput05 = await ƒS.Menu.getInput(questionChoices05, "selection");
        
                switch (userInput05) {
                    case questionChoices05.C0001:
                        // Mehr erfahren!
                        addScore(10);
                        let learnMore: string[] = ["Wenn du kannst und das nicht bereits tust, verzichte auf den Verzehr von Fisch und anderen Meerestieren. So trägst du nicht zur Überfischung bei. Fisch aus Aquakulturen ist hier nicht besser. <br><br>Vermeide Kreuzfahrten.<br><br>Du kannst auch mit Freunden, Familie usw. darüber reden. So entsteht ein größeres Bewusstsein in der Gesellschaft. Viele sind sich gar nicht bewusst, wie es tatsächlich um unsere Meerestiere steht.<br><br>Informiere dich weiter über das Thema."];
                        nvlMode(learnMore, true, "aboutBtn", "learnMore");
                        break;
                    case questionChoices05.C0002:
                        // Nein, danke!
                        break;
                }

                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0041);

                await ƒS.Character.hide(characters.Mermaid);
                await ƒS.update(0.5);
                ƒS.Speech.clear();
                ƒS.Sound.fade(sounds.bigWavesOnSandyBeach, 0.001, 0.1, false);
                return "end";
        }
    }
}