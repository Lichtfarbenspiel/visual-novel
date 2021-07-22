namespace Abschluss {

    export async function TrashBeach(): ƒS.SceneReturn {
        console.log("TrashBeach scene starting");

        tickerDelay(30);

        let text = {
          Mermaid: {
            T0000: "Naja, drüben wird der Strand regelmäßig gesäubert. Aber ich glaube das Landet dann alles hier – hinter die Felsen kommen keine Urlauber, da sieht es niemand.",
            T0001: "Und dann werden natürlich noch Unmengen über das Meer angespült. Es wird jedes Jahr schlimmer!",
            T0002: "Ich habe einmal gehört, wie zwei Meeresbiologen darüber geredet haben.",
            T0003: "Sie meinten, dass jedes Jahr etwa 2 Millionen Tonnen Plastik über die Flüsse in die Meere gelangt.(1) Nur über Flüsse! Das sind um die 10.500 Blauwale.",
            T00031: "Insgesamt gelangt allerdings mehr als 10 Millionen Tonnen Plastikmüll pro Jahr in die Meere.(4) Das sind etwa 35 Tausend Blauwale.",
            T0004: "Achso, klar. Ein Blauwal wiegt bis zu 190 Tonnen.(2)",
            T0005: "Aber nein. Ich habe im Meer schon an vielen Stellen Müll schwimmen sehen. Sowohl weit draußen auf offener See als auch auf dem Meeresboden – dort befindet sich der meiste Müll.(3, 4)",
            T0006: "Das liegt daran, dass Meeresschildkröten immer wieder zu ihrem eigenen Geburtsstrand zurückkehren, um dort ihre Eier abzulegen.(5)",
            T0007: "Das ist richtig. Hier graben sie dann eine Mulde, in die sie über 100 Eier ablegen, die dann von der Sonne ausgebrütet werden.(5)",
            T0008: "Das kann ich dir nicht sagen, das Wissen bisher nur die Schildkröten selbst.(5)",
            T0009: "Hm, was denkst du denn? (Bitte gib nur Zahlen ein) ",
            T0010: "Es gibt weltweit noch sieben Meeresschildkrötenarten und alle sind sie vom Aussterben bedroht.(5)",
            T0011: "Eigentlich ausschließlich wegen den Menschen.(5)",
            T0012: "Auch, aber vor allem, weil sie gejagt werden. Seit Jahrhunderten schon werden sie gejagt – also wegen ihrem Fleisch, den Panzern, wie auch die Eier.(5)",
            T0013: "Dazu kommt, dass sie oft von ihren Niststränden durch Menschen verdrängt werden.(5)",
            T0014: "Ja genau, leider. Sowas sollte es einfach nicht geben! Zudem verenden die Schildkröten auch viel zu oft als Beifang.(7)",
            T0015: "Als Beifang werden in der Fischerei die Tiere oder Arten bezeichnet, die sie eigentlich nicht fangen wollen.(7)",
            T0016: "Diese geraten bei sehr umweltgefährdenden Fangmethoden ungewollt mit in die Netze.(7)",
            T0017: "Naja, ganz unmöglich ist es nicht…",
            T0018: "Das Fischen einfach ganz lassen. Zumindest diese überdimensionale Industriefischerei. Das zerstört so viele Ökosysteme!",
            T0019: "Das Trawling beispielsweise.(8)",
            T0020: "Dabei werden riesige Grundschleppnetze eingesetzt, die direkt über den Meeresboden gezogen werden und so alles zerstören, was dort vorher war.(8)",
            T0021: "Weil es leider immer weniger helfende Hände gibt, um die Strände zu kontrollieren und die Nester zu schützen.(10)",
            T0022: "Außerdem kommt dazu, dass die freiwilligen Helfer und Helferinnen teilweise keine Genehmigung der zuständigen Behörden erhielten und so die Strände nicht abgehen durften.(10)",
            T0023: "Darum mache ich es einfach.",
            T0024: "Aus dem Grund habe ich dich ja jetzt!",
            T0025: "Ja, also ich kann ja schon auch über den Strand robben, das ist dann halt super anstrengend für mich und zu lange sollte ich auch nicht unbedingt an Land bleiben.",
            T0026: "Für die ist es nämlich leider auch nicht ganz ungefährlich. Darum mache ich es einfach.",
            T0027: "Grundsätzlich eigentlich nichts, allerdings sind einige Strände sehr beliebt bei Wilderern.(6) Denen möchte ich tatsächlich auch nicht begegnen!",
            T0028: "Aber keine Sorge, hier habe ich noch nie welche gesehen.",
            T0029: "Ich würde sagen: ja das wäre Möglich und sollte auf jeden Fall passieren. Wer in diesem Fall dafür zuständig ist, weiß ich leider nicht. Die Politik wahrscheinlich in erster Linie",
            T0030: "Aktuell werden, Kontrollen auf See und in den Häfen einfach zu selten durchgeführt – da fängt das Problem schon an. Außerdem sind auch die Strafen für ein Vergehen, viel zu niedrig.(14)",
            T0031: "Die Organisation Sea Shepherd setzt sich sehr dafür ein, unsere Meere zu schützen und solche illegalen Machenschaften zu verhindern.(13)"
          },
          Protagonist: {
            T0000: "Wieso liegt hier denn so viel Müll? ",
            T0001: "Achso, okay.  Dann müssten also alle Mütter der Jungen an diesem Strand auch hier geboren sein…",
            T0002: "Oh, wegen all dem Müll?",
            T0003: "Hm stimmt, daran habe ich gar nicht gedacht. Ich meine, da gibt es auch einen unglaublich großen Schwarzmarkt für solche Tiere.(6)",
            T0004: "Ja, macht Sinn. So ein Netz lässt sich ja auch nicht wirklich nach Tierart steuern, da ist es ja wirklich unmöglich sowas zu verhindern.",
            T0005: "Aber du kannst doch nicht laufen, das ist doch dann gar nicht so einfach.",
            T0006: "Und wenn ich jetzt nicht da wäre, was würdet du dann machen?",
            T0007: "Aber was ist denn so gefährlich daran, Baby-Schildkröten vor Seevögeln zu schützen?"
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
        ƒS.Sound.play(sounds.softWavesOnSandyBeach, 0.01, true);
        ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.2, 0.5, true);
        await ƒS.Character.show(characters.Mermaid, characters.Mermaid.pose.floating, ƒS.positionPercent(-5, 110));
        await ƒS.update(1);

        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0000);
        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0000);
        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0001);


        let userInput = await ƒS.Menu.getInput(questionChoices, "class");

        switch (userInput) {
            case questionChoices.C0001:
                // Wieso wird es immer schlimmer
                addScore(5);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0002);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0003);
                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T00031);

                let questionChoices01 = {
                    C0001: "Wieviel wiegt denn so ein Blauwal?",
                    C0002: "Das ist echt ganz schön viel Müll. Liegt das dann alles immer an den Stränden?"
                };
        
                let userInput01 = await ƒS.Menu.getInput(questionChoices01, "class");
                switch (userInput01) {
                    case questionChoices01.C0001:
                        // Wieviel wiegt denn so ein Blauwal?
                        addScore(3);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0004);
                        await ƒS.Character.hide(characters.Mermaid);
                        await ƒS.update(0.5);
                        ƒS.Speech.clear();
                        ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                    case questionChoices01.C0002:
                        // Liegt das dann alles immer an den Stränden?
                        addScore(5);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0005);
                        // weiter zu GPGP
                        await ƒS.Character.hide(characters.Mermaid);
                        await ƒS.update(0.5);
                        ƒS.Speech.clear();
                        ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                        return "05";
                }
                break;
            case questionChoices.C0002:
                // Wieso werden die Eier überhaupt hier abgelegt?
                addScore(5);
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
                        addScore(2);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0008);
                        await ƒS.Character.hide(characters.Mermaid);
                        await ƒS.update(0.5);
                        ƒS.Speech.clear();
                        ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                    case questionChoices02.C0002:
                        // Wie viele Arten von Wasserschildkröten gibt es denn?
                        addScore(2);

                        let repeat = 2;
                        let count = 0;

                        for (let i: number = 0; count <= repeat; i++) {
                            console.log("correct? " + data.correct);

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

                                if (!data.correct) {
                                    let retryInput = await ƒS.Menu.getInput(retryChoices, "class");
                                    switch (retryInput) {
                                        case retryChoices.C0001:
                                            count ++;
                                            break;
                                        case retryChoices.C0002:
                                            break;
                                    }
                                } else break;
                            } else break;
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
                                addScore(5);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0011);
                                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0002);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0012);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0013);
                                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0003);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0014);

                                let questionChoices04 = {
                                    C0001: "Was meinst du mit Beifang?",
                                    C0002: "Könnte die Fischerei nicht besser kontrolliert werden?"
                                };
            
                                let userInput04 = await ƒS.Menu.getInput(questionChoices04, "class");

                                switch (userInput04) {
                                    case questionChoices04.C0001:
                                        // Was meinst du mit Beifang?
                                        addScore(5);
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
                                                await ƒS.Character.hide(characters.Mermaid);
                                                await ƒS.update(0.5);
                                                ƒS.Speech.clear();
                                                ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                                                return "end";
                                            case questionChoices05.C0002:
                                                // Was sind denn das für Fangmethoden?
                                                addScore(5);
                                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0019);
                                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0020);
                                                await ƒS.Character.hide(characters.Mermaid);
                                                await ƒS.update(0.5);
                                                ƒS.Speech.clear();
                                                ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                                                return "end";
                                        }
                                        break;
                                    case questionChoices04.C0002:
                                        // Könnte die Fischerei nicht besser kontrolliert werden?
                                        addScore(5);
                                        
                                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid. T0029);
                                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid. T0030);
                                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid. T0031);
                                        
                                        let questionChoices06 = {
                                            C0001: "Mehr erfahren!",
                                            C0002: "Nein danke."
                                        };
                    
                                        let userInput06 = await ƒS.Menu.getInput(questionChoices06, "class");

                                        switch (userInput06) {
                                            case questionChoices06.C0001:
                                                addScore(8);
                                                let learnMore: string[] = ["„Große ausländische industrielle Fabrikschiffe (Schleppnetzschiffe, die in der früheren Sowjetunion gefertigt wurden) hielten sich an der Grenze zu Namibias AWZ auf, überquerten diese heimlich nachts und plünderten Fischbestände. <br><br>Der illegale Fang wurde dann auf große Kühlschiffe verladen, die gleich hinter der Grenze zur AWZ darauf warteten, die Ladung entgegenzunehmen. Kühlschiffe tragen viel zur Verschleierung der IUU-Fischerei bei, da legal gefangene Fische mit illegalen Fängen vermischt werden. <br><br>Das macht es unmöglich, die Herkunft der Fische nachzuvollziehen. Aus diesem Grund verbietet die namibische Verordnung für Meeresressourcen das Umladen auf See und gestattet es nur im Hafen oder unter Aufsicht von Polizeibeamten.“ <br><br> <a href='https://sea-shepherd.de/kampagnen/operation-vanguard/' target='_blank'>Quelle</a> | Stand 06/2021"];
                                                nvlMode(learnMore, "aboutBtn");
                                                break;
                                            case questionChoices06.C0002:
                                                break;
                                        }
                                        await ƒS.Character.hide(characters.Mermaid);
                                        await ƒS.update(0.5);
                                        ƒS.Speech.clear();
                                        ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                                        return "end";
                                }
                                break;
                            case questionChoices03.C0002:
                                // Und wieso schaust du jetzt nach den Schildkrötenjungen?
                                addScore(2);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0021);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0022);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0023);
                                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0005);
                                await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0024);
                                await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0006);
                                await ƒS.Character.hide(characters.Mermaid);
                                await ƒS.update(0.5);
                                ƒS.Speech.clear();
                                ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                                return "end";
                        }
                        break;
                    case questionChoices02.C0003:
                        // Und wieso schaust du jetzt nach den Schildkrötenjungen?
                        addScore(5);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0021);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0026);
                        await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0007);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0027);
                        await ƒS.Speech.tell(characters.Mermaid, text.Mermaid.T0028);
                        await ƒS.Character.hide(characters.Mermaid);
                        await ƒS.update(0.5);
                        ƒS.Speech.clear();
                        ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                }
                break;
            case questionChoices.C0003:
                // Müll einsammeln
                addScore(8);
                await ƒS.Location.show(locations.trashBeachClean);
                await ƒS.update(transition.swirl.duration, transition.swirl.alpha, transition.swirl.edge);
                await ƒS.update(1);
                ƒS.Inventory.add(items.recycleBadge);
                ƒS.Inventory.add(items.plasticBottles);
                await ƒS.Inventory.open();  
                await ƒS.Character.hide(characters.Mermaid);
                await ƒS.update(0.5);
                ƒS.Speech.clear();
                ƒS.Sound.fade(sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                return "04";  
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
            addScore(1);
            return "Ja, fast richtig.";
        }
        else if (turtleGuess > 14) {
            data.correct = false;
            return "Nein, nicht ganz so viele.";
        }
        else if (turtleGuess == 7) {
            data.correct = true;
            addScore(7);
            return "Ja genau!";
        }
        return null;
    }
}
