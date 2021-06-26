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
            T0005: "Aber nein. Ich habe im Meer schon an vielen Stellen Müll schwimmen sehen. Sowohl am Meeresboden, als auch weit draußen auf offener See.",
            T0006: "Das liegt daran, dass Meeresschildkröten immer wieder zu ihrem eigenen Geburtsstrand zurückkehren, um dort ihre Eier abzulegen.",
            T0007: "Das ist richtig. Hier graben sie dann eine Mulde, in die sie über 100 Eier ablegen, die dann von der Sonne ausgebrütet werden.",
            T0008: "Das kann ich dir nicht sagen, das wissen bisher nur die Schildkröten selbst.",
            T0009: "Hm, was denkst du denn? (Bitte gib nur Zahlen ein) ",
            T0010: "Es gibt weltweit noch sieben Meeresschildkrötenarten und alle sind sie vom Aussterben bedroht.",
            T0011: "Eigentlich ausschließlich wegen Menschen.",
            T0012: "Auch, aber vor allem, weil sie gejagt werden. Seit Jahrhunderten schon werden sie, wegen ihrem Fleisch und den Panzern, und auch die Eier gejagt.",
            T0013: "Dazu kommt, dass sie oft von ihren Niststränden durch Menschen verdrängt werden.",
            T0014: "Ja leider und eben für ganz viele andere marine Lebewesen auch. Sowas sollte es einfach nicht geben! Außerdem verenden die Schildkröten auch viel zu oft als Beifang.",
            T0015: "Als Beifang werden in der Fischerei die Tiere oder Arten bezeichnet, die sie eigentlich nicht fangen wollen.",
            T0016: "Diese geraten bei sehr umweltgefährdenden Fangmethoden ungewollt mit in die Netze.",
            T0017: "Naja, ganz unmöglich ist es nicht…",
            T0018: "Das Fischen einfach ganz lassen, zumindest diese überdimensionale Industriefischerei. Das zerstört einfach so viele Ökosysteme!",
            T0019: "Das Trawling beispielsweise.",
            T0020: "Dabei werden riesige Grundschleppnetze eingesetzt, die direkt über den Meeresboden gezogen werden und so alles zerstören, was dort vorher war."

          },
          Protagonist: {
            T0000: "Wieso liegt hier denn so viel Müll? ",
            T0001: "Achso, dann müssten alle Mütter der Jungen hier am Strand also auch hier geboren sein…",
            T0002: "Oh, wegen all dem Müll?",
            T0003: "Hm stimmt, daran hab ich gar nicht gedacht. Ich meine, da gibt es auch einen unglaublich großen Schwarzmarkt für solche Tiere.",
            T0004: "Ja, macht Sinn. So ein Netz lässt sich ja auch nicht wirklich Steuern, da ist es ja unmöglich sowas zu verhindern."
          }
        };

        
        let questionChoices = {
            C0001: "Wieso wird es immer schlimmer?",
            C0002: "Wieso werden die Eier überhaupt hier abgelegt?",
            C0003: "Müll einsammeln"
        };

        await ƒS.Location.show(locations.trashBeach);
        ƒS.Sound.play(sounds.singleWave, 0.5, false);
        await ƒS.update(transition.wave.duration, transition.wave.alpha, transition.wave.edge);
        await ƒS.update(0.5);
        await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.floating, ƒS.positionPercent(-5, 110));
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
                        // weiter zu GPGP
                        break;
                }
                break;
            case questionChoices.C0002:
                // Wieso werden die Eier überhaupt hier abgelegt?
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0006);
                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0001);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0007);

                let questionChoices02 = {
                    C0001: "Wieso kommen sie denn immer nur an den Geburtsstrand zurück?",
                    C0002: "Wie viele Arten von Wasserschildkröten gibt es denn?",
                    C0003: "Und wieso schaust du jetzt nach den Schildkrötenjungen?"
                };

                let userInput02 = await ƒS.Menu.getInput(questionChoices02, "class");

                switch (userInput02) {
                    case questionChoices02.C0001:
                        // Wieso kommen sie denn immer nur an den Geburtsstrand zurück?
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0008);
                        break;
                    case questionChoices02.C0002:
                        // Wie viele Arten von Wasserschildkröten gibt es denn?

                        let repeat = 2;
                        let count = 0;

                        for (let i: number = 0; count <= repeat; i++) {
                            if (!data.correct) {

                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0009);
                                let turtleGuess = await ƒS.Speech.getInput();
                                console.log(turtleGuess);
                                let response = hndTurtleGuess(turtleGuess);
                                await ƒS.Speech.tell(characters.Mermaid, response);

                                if (count == repeat) break;

                                let retryChoices = {
                                    C0001: "Nochmal versuchen!",
                                    C0002: "Bitte sag mir die Lösung."
                                };
 
                                let retryInput = await ƒS.Menu.getInput(retryChoices, "class");
                                switch (retryInput) {
                                    case retryChoices.C0001:
                                        count ++;
                                        break;
                                    case retryChoices.C0002:
                                        break;
                                }
                            }
                        }

                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0010);
                        data.correct = false;
                        
                        let questionChoices03 = {
                            C0001: "Warum sind sie vom Aussterben bedroht?",
                            C0002: "Und wieso schaust du jetzt nach den Schildkrötenjungen?"
                        };

                        let userInput03 = await ƒS.Menu.getInput(questionChoices03, "class");

                        switch (userInput03) {
                            case questionChoices03.C0001:
                                // Warum sind sie vom Aussterben bedroht?
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0011);
                                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0002);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0012);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0013);
                                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0003);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0014);

                                let questionChoices04 = {
                                    C0001: "Was meinst du mit Beifang?",
                                    C0002: "" // TO DO
                                };
            
                                let userInput04 = await ƒS.Menu.getInput(questionChoices04, "class");

                                switch (userInput04) {
                                    case questionChoices04.C0001:
                                        // Was meinst du mit Beifang?
                                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0015);
                                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0016);
                                        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0004);
                                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0017);

                                        let questionChoices05 = {
                                            C0001: "Was genau meinst du?",
                                            C0002: "Was sind denn das für Fangmethoden?"
                                        };
                    
                                        let userInput05 = await ƒS.Menu.getInput(questionChoices05, "class");

                                        switch (userInput05) {
                                            case questionChoices05.C0001:
                                                // Was genau meinst du?
                                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0018);
                                                break;
                                            case questionChoices05.C0002:
                                                // Was sind denn das für Fangmethoden?
                                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0019);
                                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0020);
                                                break;
                                        }

                                        break;
                                    case questionChoices04.C0002:
                                        // TO DO
                                        break;
                                }

                                break;
                            case questionChoices03.C0002:
                                // Und wieso schaust du jetzt nach den Schildkrötenjungen?

                                // TO DO
                                break;
                        }
                        break;
                    case questionChoices02.C0003:
                        // Und wieso schaust du jetzt nach den Schildkrötenjungen?

                        // TO DO
                        break;
                        }

                break;
            case questionChoices.C0003:
                // Müll einsammeln
                await ƒS.Location.show(locations.trashBeachClean);
                await ƒS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);
                await ƒS.update(0.5);
                ƒS.Inventory.add(items.recycleBadge);
                ƒS.Inventory.add(items.plasticBottles);
                ƒS.Inventory.open();  
                break;    
        }
    }

    // tslint:disable-next-line: no-any
    function hndTurtleGuess(turtleGuess: any): string {
        if (isNaN(turtleGuess) || !turtleGuess) {
            data.correct = false;
            return "Das war doch keine Zahl, oder?";
        } 
        else if (turtleGuess > 0 && turtleGuess < 7 || turtleGuess > 7 && turtleGuess <= 13) {
            data.correct = false;
            return "Ja, fast richtig.";
        }
        else if (turtleGuess > 14) {
            data.correct = false;
            return "Nein, nicht ganz so viele.";
        }
        else if (turtleGuess == 7) {
            data.correct = true;
            return "Ja genau!";
        }
        return null;
    }
}
