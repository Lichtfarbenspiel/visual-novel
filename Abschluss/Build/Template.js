"use strict";
var Abschluss;
(function (Abschluss) {
    async function RockyBeach() {
        console.log("RockyBeach scene starting");
        Abschluss.tickerDelay(30);
        await Abschluss.ƒS.Location.show(Abschluss.locations.rockyBeach);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.singleWave, 0.5, false);
        await Abschluss.ƒS.update(Abschluss.transition.wave.duration, Abschluss.transition.wave.alpha, Abschluss.transition.wave.edge);
        await Abschluss.ƒS.update(0.5);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.wavesOnRocks, 0.01, true);
        Abschluss.ƒS.Sound.fade(Abschluss.sounds.wavesOnRocks, 0.5, 0.1, true);
        await Abschluss.ƒS.Speech.tell(null, "Bitte gib deinen Namen hier ein: ");
        Abschluss.data.Protagonist.name = await Abschluss.ƒS.Speech.getInput();
        console.log(Abschluss.data.Protagonist.name);
        let text = {
            Mermaid: {
                T0000: "Hallo, wer bist du denn?",
                T0001: "Das tut mir leid, das wollte ich nicht. Ich bin Muriel und ich verkleide mich doch gar nicht! ",
                T0002: "Wieso denn Seefahrer? Ich wollte nachsehen, ob die kleinen Schildkröten schon geschlüpft sind. Es wird nämlich immer schwerer für sie, sicher ins Meer zu kommen. Da können sie meine Hilfe gut gebrauchen.",
                T0003: "Ähm… Ich kann nicht über Land gehen. Aber du könntest doch für mich nachsehen gehen und wir treffen uns dann dort drüben."
            },
            Protagonist: {
                T0000: "Oha, du hast mich erschreckt. Ich bin " + Abschluss.data.Protagonist.name.toString() + ", wer bist du? Und wieso verkleidest du dich als Meerjungfrau?!",
                T0001: "Als ob, das glaube ich dir nicht! Naja, was machst du denn dann hier? Seefahrer gibt es hier doch keine mehr...",
                T0002: "Hm, ich habe hier noch keine gesehen. Aber komm, wir können ja mal nachsehen.",
                T0003: "Na wenn du meinst. Dann bis gleich!"
            }
        };
        await Abschluss.ƒS.Character.show(Abschluss.characters.Mermaid, Abschluss.characters.Mermaid.pose.idle, Abschluss.ƒS.positionPercent(60, 100));
        await Abschluss.ƒS.update(1);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.backgroundTheme, 0.01, true);
        Abschluss.ƒS.Sound.fade(Abschluss.sounds.backgroundTheme, 0.03, 0.1, true);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0001);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0001);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.seagull, 0.5, false);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0002);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0002);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0003);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0003);
        await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
        await Abschluss.ƒS.update(0.5);
        Abschluss.ƒS.Speech.clear();
        Abschluss.ƒS.Sound.fade(Abschluss.sounds.wavesOnRocks, 0.001, 0.1, false);
    }
    Abschluss.RockyBeach = RockyBeach;
})(Abschluss || (Abschluss = {}));
var Abschluss;
(function (Abschluss) {
    async function TurtleBeach() {
        console.log("TurtleBeach scene starting");
        Abschluss.tickerDelay(30);
        let text = {
            Mermaid: {
                T0000: "Oh das ist super! Kannst du schauen, dass sie alle sicher bis ans Meer gelangen?",
                T0001: "Nein, besser nicht. Sie müssen das selbst schaffen, aber du kannst aufpassen, dass sie nicht den Seevögeln zum Opfer fallen. Oder in all dem Müll stecken bleiben. Schrecklich ist das.",
                T0002: "",
                T0003: ""
            },
            Protagonist: {
                T0000: "Muriel! Du wirst es nicht glauben, aber hier hinten sind wirklich kleine Schildkröten. Sie müssen gerade erst geschlüpft sein!",
                T0001: "Ja natürlich, ich kann sie auch kurz rüber tragen.",
                T0002: "",
                T0003: ""
            }
        };
        let turtleChoices = {
            C0001: "Schildkröten zum Wasser tragen",
            C0002: "Schildkröten beobachten"
        };
        await Abschluss.ƒS.Location.show(Abschluss.locations.turtleBeach);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.singleWave, 0.5, false);
        await Abschluss.ƒS.update(Abschluss.transition.wave.duration, Abschluss.transition.wave.alpha, Abschluss.transition.wave.edge);
        await Abschluss.ƒS.update(0.5);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.softWavesOnSandyBeach, 0.01, true);
        Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.2, 0.5, true);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.softSandSteps, 1.5, true);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0000);
        await Abschluss.ƒS.Character.show(Abschluss.characters.Mermaid, Abschluss.characters.Mermaid.pose.idle, Abschluss.ƒS.positionPercent(0, 100));
        await Abschluss.ƒS.update(1);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.seagull, 0.8, false);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0001);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0001);
        let userInput = await Abschluss.ƒS.Menu.getInput(turtleChoices, "class");
        switch (userInput) {
            case turtleChoices.C0001:
                // Schildkröten zum Wasser tragen
                Abschluss.addScore(3);
                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                await Abschluss.ƒS.update(0.5);
                Abschluss.ƒS.Speech.clear();
                Abschluss.ƒS.Sound.fade(Abschluss.sounds.softSandSteps, 0.001, 0.1, false);
                Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                return "04";
            case turtleChoices.C0002:
                // Schildkröten beobachten
                Abschluss.addScore(5);
                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                await Abschluss.ƒS.update(0.5);
                Abschluss.ƒS.Speech.clear();
                Abschluss.ƒS.Sound.fade(Abschluss.sounds.softSandSteps, 0.001, 0.1, false);
                Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                return "03";
        }
    }
    Abschluss.TurtleBeach = TurtleBeach;
})(Abschluss || (Abschluss = {}));
var Abschluss;
(function (Abschluss) {
    async function TrashBeach() {
        console.log("TrashBeach scene starting");
        Abschluss.tickerDelay(30);
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
                T0028: "Aber keine Sorge, hier habe ich noch nie welche gesehen."
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
        await Abschluss.ƒS.Location.show(Abschluss.locations.trashBeach);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.singleWave, 0.5, false);
        await Abschluss.ƒS.update(Abschluss.transition.wave.duration, Abschluss.transition.wave.alpha, Abschluss.transition.wave.edge);
        await Abschluss.ƒS.update(0.5);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.softWavesOnSandyBeach, 0.01, true);
        Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.2, 0.5, true);
        await Abschluss.ƒS.Character.show(Abschluss.characters.Mermaid, Abschluss.characters.Mermaid.pose.floating, Abschluss.ƒS.positionPercent(-5, 110));
        await Abschluss.ƒS.update(1);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0001);
        let userInput = await Abschluss.ƒS.Menu.getInput(questionChoices, "class");
        switch (userInput) {
            case questionChoices.C0001:
                // Wieso wird es immer schlimmer
                Abschluss.addScore(5);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0002);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0003);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T00031);
                let questionChoices01 = {
                    C0001: "Wieviel wiegt denn so ein Blauwal?",
                    C0002: "Das ist echt ganz schön viel Müll. Liegt das dann alles immer an den Stränden?"
                };
                let userInput01 = await Abschluss.ƒS.Menu.getInput(questionChoices01, "class");
                switch (userInput01) {
                    case questionChoices01.C0001:
                        // Wieviel wiegt denn so ein Blauwal?
                        Abschluss.addScore(3);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0004);
                        await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                        await Abschluss.ƒS.update(0.5);
                        Abschluss.ƒS.Speech.clear();
                        Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                    case questionChoices01.C0002:
                        // Liegt das dann alles immer an den Stränden?
                        Abschluss.addScore(5);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0005);
                        // weiter zu GPGP
                        await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                        await Abschluss.ƒS.update(0.5);
                        Abschluss.ƒS.Speech.clear();
                        Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                }
                break;
            case questionChoices.C0002:
                // Wieso werden die Eier überhaupt hier abgelegt?
                Abschluss.addScore(5);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0006);
                await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0001);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0007);
                let questionChoices02 = {
                    C0001: "Wieso kommen sie denn immer nur an den Geburtsstrand zurück?",
                    C0002: "Wie viele Arten von Wasserschildkröten gibt es denn?",
                    C0003: "Und wieso schaust du jetzt nach den Schildkrötenjungen?"
                };
                let userInput02 = await Abschluss.ƒS.Menu.getInput(questionChoices02, "class");
                switch (userInput02) {
                    case questionChoices02.C0001:
                        // Wieso kommen sie denn immer nur an den Geburtsstrand zurück?
                        Abschluss.addScore(2);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0008);
                        await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                        await Abschluss.ƒS.update(0.5);
                        Abschluss.ƒS.Speech.clear();
                        Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                    case questionChoices02.C0002:
                        // Wie viele Arten von Wasserschildkröten gibt es denn?
                        Abschluss.addScore(2);
                        let repeat = 2;
                        let count = 0;
                        for (let i = 0; count <= repeat; i++) {
                            console.log("correct? " + Abschluss.data.correct);
                            if (!Abschluss.data.correct) {
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0009);
                                let turtleGuess = await Abschluss.ƒS.Speech.getInput();
                                console.log(turtleGuess);
                                let response = hndTurtleGuess(turtleGuess);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, response);
                                if (count == repeat)
                                    break;
                                let retryChoices = {
                                    C0001: "Nochmal versuchen!",
                                    C0002: "Bitte sag mir die Lösung."
                                };
                                if (!Abschluss.data.correct) {
                                    let retryInput = await Abschluss.ƒS.Menu.getInput(retryChoices, "class");
                                    switch (retryInput) {
                                        case retryChoices.C0001:
                                            count++;
                                            break;
                                        case retryChoices.C0002:
                                            break;
                                    }
                                }
                                else
                                    break;
                            }
                            else
                                break;
                        }
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0010);
                        Abschluss.data.correct = false;
                        let questionChoices03 = {
                            C0001: "Warum sind sie vom Aussterben bedroht?",
                            C0002: "Und wieso schaust du jetzt nach den Schildkrötenjungen?"
                        };
                        let userInput03 = await Abschluss.ƒS.Menu.getInput(questionChoices03, "class");
                        switch (userInput03) {
                            case questionChoices03.C0001:
                                // Warum sind sie vom Aussterben bedroht?
                                Abschluss.addScore(5);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0011);
                                await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0002);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0012);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0013);
                                await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0003);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0014);
                                let questionChoices04 = {
                                    C0001: "Was meinst du mit Beifang?",
                                    C0002: "Könnte die Fischerei nicht besser kontrolliert werden?"
                                };
                                let userInput04 = await Abschluss.ƒS.Menu.getInput(questionChoices04, "class");
                                switch (userInput04) {
                                    case questionChoices04.C0001:
                                        // Was meinst du mit Beifang?
                                        Abschluss.addScore(5);
                                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0015);
                                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0016);
                                        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0004);
                                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0017);
                                        let questionChoices05 = {
                                            C0001: "Was genau meinst du?",
                                            C0002: "Was sind denn das für Fangmethoden?"
                                        };
                                        let userInput05 = await Abschluss.ƒS.Menu.getInput(questionChoices05, "class");
                                        switch (userInput05) {
                                            case questionChoices05.C0001:
                                                // Was genau meinst du?
                                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0018);
                                                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                                                await Abschluss.ƒS.update(0.5);
                                                Abschluss.ƒS.Speech.clear();
                                                Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                                                return "end";
                                            case questionChoices05.C0002:
                                                // Was sind denn das für Fangmethoden?
                                                Abschluss.addScore(5);
                                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0019);
                                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0020);
                                                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                                                await Abschluss.ƒS.update(0.5);
                                                Abschluss.ƒS.Speech.clear();
                                                Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                                                return "end";
                                        }
                                        break;
                                    case questionChoices04.C0002:
                                        // Könnte die Fischerei nicht besser kontrolliert werden?
                                        Abschluss.addScore(5);
                                        // TO DO
                                        let questionChoices06 = {
                                            C0001: "Mehr erfahren!",
                                            C0002: "Nein danke."
                                        };
                                        let userInput06 = await Abschluss.ƒS.Menu.getInput(questionChoices06, "class");
                                        switch (userInput06) {
                                            case questionChoices06.C0001:
                                                Abschluss.addScore(8);
                                                let learnMore = ["„Große ausländische industrielle Fabrikschiffe (Schleppnetzschiffe, die in der früheren Sowjetunion gefertigt wurden) hielten sich an der Grenze zu Namibias AWZ auf, überquerten diese heimlich nachts und plünderten Fischbestände. <br><br>Der illegale Fang wurde dann auf große Kühlschiffe verladen, die gleich hinter der Grenze zur AWZ darauf warteten, die Ladung entgegenzunehmen. Kühlschiffe tragen viel zur Verschleierung der IUU-Fischerei bei, da legal gefangene Fische mit illegalen Fängen vermischt werden. <br><br>Das macht es unmöglich, die Herkunft der Fische nachzuvollziehen. Aus diesem Grund verbietet die namibische Verordnung für Meeresressourcen das Umladen auf See und gestattet es nur im Hafen oder unter Aufsicht von Polizeibeamten.“ <br><br> <a href='https://sea-shepherd.de/kampagnen/operation-vanguard/' target='_blank'>Quelle</a> | Stand 06/2021"];
                                                Abschluss.nvlMode(learnMore);
                                                break;
                                            case questionChoices06.C0002:
                                                break;
                                        }
                                        await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                                        await Abschluss.ƒS.update(0.5);
                                        Abschluss.ƒS.Speech.clear();
                                        Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                                        return "end";
                                }
                                break;
                            case questionChoices03.C0002:
                                // Und wieso schaust du jetzt nach den Schildkrötenjungen?
                                Abschluss.addScore(2);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0021);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0022);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0023);
                                await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0005);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0024);
                                await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0006);
                                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                                await Abschluss.ƒS.update(0.5);
                                Abschluss.ƒS.Speech.clear();
                                Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                                return "end";
                        }
                        break;
                    case questionChoices02.C0003:
                        // Und wieso schaust du jetzt nach den Schildkrötenjungen?
                        Abschluss.addScore(5);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0021);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0026);
                        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0007);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0027);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0028);
                        await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                        await Abschluss.ƒS.update(0.5);
                        Abschluss.ƒS.Speech.clear();
                        Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                }
                break;
            case questionChoices.C0003:
                // Müll einsammeln
                Abschluss.addScore(8);
                await Abschluss.ƒS.Location.show(Abschluss.locations.trashBeachClean);
                await Abschluss.ƒS.update(Abschluss.transition.swirl.duration, Abschluss.transition.swirl.alpha, Abschluss.transition.swirl.edge);
                await Abschluss.ƒS.update(1);
                Abschluss.ƒS.Inventory.add(Abschluss.items.recycleBadge);
                Abschluss.ƒS.Inventory.add(Abschluss.items.plasticBottles);
                await Abschluss.ƒS.Inventory.open();
                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                await Abschluss.ƒS.update(0.5);
                Abschluss.ƒS.Speech.clear();
                Abschluss.ƒS.Sound.fade(Abschluss.sounds.softWavesOnSandyBeach, 0.001, 0.1, false);
                return "04";
        }
    }
    Abschluss.TrashBeach = TrashBeach;
    // tslint:disable-next-line: no-any
    function hndTurtleGuess(turtleGuess) {
        if (isNaN(turtleGuess) || !turtleGuess) {
            Abschluss.data.correct = false;
            return "Das war doch keine Zahl, oder?";
        }
        else if (turtleGuess > 0 && turtleGuess < 7 || turtleGuess > 7 && turtleGuess <= 13) {
            Abschluss.data.correct = false;
            Abschluss.addScore(1);
            return "Ja, fast richtig.";
        }
        else if (turtleGuess > 14) {
            Abschluss.data.correct = false;
            return "Nein, nicht ganz so viele.";
        }
        else if (turtleGuess == 7) {
            Abschluss.data.correct = true;
            Abschluss.addScore(7);
            return "Ja genau!";
        }
        return null;
    }
})(Abschluss || (Abschluss = {}));
var Abschluss;
(function (Abschluss) {
    async function WaterBeach() {
        console.log("WaterBeach scene starting");
        Abschluss.tickerDelay(30);
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
                T0028: "Außerdem machen sie auch 99% des gesamten Lebensraums aus.(11)"
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
        await Abschluss.ƒS.Location.show(Abschluss.locations.waterBeach);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.singleWave, 0.5, false);
        await Abschluss.ƒS.update(Abschluss.transition.wave.duration, Abschluss.transition.wave.alpha, Abschluss.transition.wave.edge);
        await Abschluss.ƒS.update(0.5);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.bigWavesOnSandyBeach, 0.001, true);
        Abschluss.ƒS.Sound.fade(Abschluss.sounds.bigWavesOnSandyBeach, 1, 0.1, true);
        await Abschluss.ƒS.Character.show(Abschluss.characters.Mermaid, Abschluss.characters.Mermaid.pose.floating, Abschluss.ƒS.positionPercent(40, 115));
        await Abschluss.ƒS.update(1);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0001);
        let questionChoices = {
            C0001: "Warst du schon überall?",
            C0002: "Wow, wieviel unterschiedliches Leben es da unten wohl geben muss?"
        };
        let userInput = await Abschluss.ƒS.Menu.getInput(questionChoices, "class");
        switch (userInput) {
            case questionChoices.C0001:
                // Warst du schon überall?
                Abschluss.addScore(5);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0002);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0003);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0004);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0005);
                await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0001);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0006);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0007);
                await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0002);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0008);
                let questionChoices01 = {
                    C0001: "Weißt du denn, wieviel Wasser es auf der Erde gibt?",
                    C0002: "Stimmt es denn, dass es den Meeren immer schlechter geht?"
                };
                let userInput01 = await Abschluss.ƒS.Menu.getInput(questionChoices01, "class");
                switch (userInput01) {
                    case questionChoices01.C0001:
                        // Weißt du denn, wieviel Wasser es auf der Erde gibt?
                        Abschluss.addScore(4);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0009);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0010);
                        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0003);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0011);
                        await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                        await Abschluss.ƒS.update(0.5);
                        Abschluss.ƒS.Speech.clear();
                        Abschluss.ƒS.Sound.fade(Abschluss.sounds.bigWavesOnSandyBeach, 0.001, 0.1, false);
                        return "end";
                    case questionChoices01.C0002:
                        // Stimmt es denn, dass es den Meeren immer schlechter geht?
                        Abschluss.addScore(6);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0012);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0013);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0014);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0015);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0016);
                        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0004);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0017);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0018);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0019);
                        let questionChoices02 = {
                            C0001: "Welche Tiere leiden denn noch unter der Wassererwärmung?",
                            C0002: "Stimmt es, dass das Meer auch Sauerstoff selbst produziert?"
                        };
                        let userInput02 = await Abschluss.ƒS.Menu.getInput(questionChoices02, "class");
                        switch (userInput02) {
                            case questionChoices02.C0001:
                                // Welche Tiere leiden denn noch unter der Wassererwärmung?
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0020);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0021);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0022);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0023);
                                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                                await Abschluss.ƒS.update(0.5);
                                Abschluss.ƒS.Speech.clear();
                                Abschluss.ƒS.Sound.fade(Abschluss.sounds.bigWavesOnSandyBeach, 0.001, 0.1, false);
                                return "end";
                            case questionChoices02.C0002:
                                // Stimmt es, dass das Meer auch Sauerstoff selbst produziert?
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0024);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0025);
                                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                                await Abschluss.ƒS.update(0.5);
                                Abschluss.ƒS.Speech.clear();
                                Abschluss.ƒS.Sound.fade(Abschluss.sounds.bigWavesOnSandyBeach, 0.001, 0.1, false);
                                return "end";
                        }
                        break;
                }
                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                await Abschluss.ƒS.update(0.5);
                Abschluss.ƒS.Speech.clear();
                Abschluss.ƒS.Sound.fade(Abschluss.sounds.bigWavesOnSandyBeach, 0.001, 0.1, false);
                return "end";
            case questionChoices.C0002:
                // Wow, wieviel unterschiedliches Leben es da unten wohl geben muss?
                Abschluss.addScore(5);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0026);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0027);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0028);
                await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0005);
                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                await Abschluss.ƒS.update(0.5);
                Abschluss.ƒS.Speech.clear();
                Abschluss.ƒS.Sound.fade(Abschluss.sounds.bigWavesOnSandyBeach, 0.001, 0.1, false);
                return "end";
        }
    }
    Abschluss.WaterBeach = WaterBeach;
})(Abschluss || (Abschluss = {}));
var Abschluss;
(function (Abschluss) {
    async function endScene() {
        console.log("End scene starting");
        Abschluss.tickerDelay(30);
        let text = {
            Mermaid: {
                T0000: "Vielen Dank für deine Hilfe, " + Abschluss.data.Protagonist.name.toString() + "! Bald kann ich dir hier noch mehr zeigen und erzählen - schau unbedingt nochmal bei mir vorbei."
            }
        };
        await Abschluss.ƒS.Location.show(Abschluss.locations.end);
        Abschluss.ƒS.Sound.play(Abschluss.sounds.singleWave, 0.5, false);
        await Abschluss.ƒS.update(Abschluss.transition.wave.duration, Abschluss.transition.wave.alpha, Abschluss.transition.wave.edge);
        await Abschluss.ƒS.update(0.5);
        await Abschluss.ƒS.Character.show(Abschluss.characters.Mermaid, Abschluss.characters.Mermaid.pose.idle, Abschluss.ƒS.positionPercent(10, 100));
        await Abschluss.ƒS.update(1);
        Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0000);
        let questionChoices = {
            C0001: "Nochmal spielen!"
        };
        let userInput = await Abschluss.ƒS.Menu.getInput(questionChoices, "play-again");
        if (userInput == questionChoices.C0001) {
            await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
            await Abschluss.ƒS.update(0.5);
            Abschluss.ƒS.Speech.clear();
            return "02";
        }
    }
    Abschluss.endScene = endScene;
})(Abschluss || (Abschluss = {}));
var Abschluss;
(function (Abschluss) {
    Abschluss.ƒ = FudgeCore;
    Abschluss.ƒS = FudgeStory;
    // DATA TO SAVE
    Abschluss.data = {
        Protagonist: {
            name: "Protagonist"
        },
        score: {
            a: 0
        },
        ended: false,
        correct: false
    };
    // TRANSITIONS
    Abschluss.transition = {
        wave: {
            duration: 1.5,
            alpha: "Transitions/waves06.png",
            edge: 1
        },
        swirl: {
            duration: 1.5,
            alpha: "Transitions/swirl.png",
            edge: 1.5
        }
    };
    // SOUND
    Abschluss.sounds = {
        //Music
        backgroundTheme: "Sounds/open-sea-morning-puddle-of-infinity-youtube-royalty-free-music-download.mp3",
        //Sound
        wavesOnRocks: "Sounds/213495__arnaud-coutancier__waves-on-seaside-rocks-3.wav",
        bigWavesOnSandyBeach: "Sounds/197714__tim-kahn__atlantic-ocean-waves.mp3",
        softWavesOnSandyBeach: "Sounds/412308__straget__big-waves-hit-land.mp3",
        seagull: "Sounds/166703__snapper4298__sea-gulls.wav",
        singleWave: "Sounds/61012__kayyy__wave2.wav",
        softSandSteps: "Sounds/197714__tim-kahn__atlantic-ocean-waves.wav"
    };
    // LOCATIONS
    Abschluss.locations = {
        rockyBeach: {
            name: "Rocky Beach",
            background: "Img/Backgrounds/RockyBeach.jpg"
        },
        turtleBeach: {
            name: "Turtle Beach",
            background: "Img/Backgrounds/TurtleBeach.jpg"
        },
        trashBeach: {
            name: "Trash Beach",
            background: "Img/Backgrounds/TrashBeach02.jpg"
        },
        trashBeachClean: {
            name: "Trash Beach",
            background: "Img/Backgrounds/TrashBeach02-cleaner.jpg"
        },
        waterBeach: {
            name: "Water Beach",
            background: "Img/Backgrounds/WaterBeach.jpg"
        },
        end: {
            name: "The End",
            background: "Img/Backgrounds/WDMU-Titel.png"
        }
    };
    // CHARACTERS
    Abschluss.characters = {
        Mermaid: {
            name: "Muriel",
            origin: Abschluss.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                idle: "Img/Characters/Mermaid/mermaid-idle.png",
                floating: "Img/Characters/Mermaid/mermaid-floating.png"
            }
        }
    };
    Abschluss.items = {
        recycleBadge: {
            name: "Recycle Badge",
            description: "Du hast am Strand Müll eingesammelt.",
            image: "Img/Items/recycle-badge.png",
            static: true,
            handler: hndItem
        },
        plasticBottles: {
            name: "Plastik Flaschen",
            description: "Wenn du die Plastik Flaschen wieder weg wirfst, verlierst du 10 Wissens-Punkte.",
            image: "Img/Items/plastic-bottles.png",
            static: false,
            handler: throwAway
        }
    };
    // MENU AUDIO FUNCTIONS
    let volume = 1.0;
    function increaseSound() {
        if (volume >= 100)
            return;
        volume += 0.1;
        Abschluss.ƒS.Sound.setMasterVolume(volume);
    }
    Abschluss.increaseSound = increaseSound;
    function decreaseSound() {
        if (volume > 0)
            return;
        volume -= 0.1;
        Abschluss.ƒS.Sound.setMasterVolume(volume);
    }
    Abschluss.decreaseSound = decreaseSound;
    // MENU PAGES FUNCTIONS
    async function about() {
        let about = ["<h3>Über das Spiel</h3> <br>“Wie die Meere untergehen” ist eine Visual Novel die, neben dem klassischen Unterhaltungsaspekt, Wissen über die Weltmeere vermitteln soll. Dabei begegnen die Spieler einer Meerjungfrau, die sich darum bemüht, hilfsbedürftige Meeresbewohner zu unterstützen wo sie nur kann. <br> Gleichzeitig versucht sie ihren Lebensraum und den vieler anderer Spezies von der konstanten und immer weiter ansteigenden, von Menschen verursachten, Verschmutzung zu befreien. Bei dieser, schier unmöglichen Aufgabe kann sie die Hilfe der Spieler sehr gut gebrauchen. <br>Im Gegenzug begleitet sie dann die Spieler durch die Visual Novel hindurch und gibt dabei interessantes und teils auch sehr erschreckendes Wissen weiter, wie beispielsweise Informationen über die aktuellen Zustände dieser bewundernswerten und eindrucksvollen Unterwasserwelten.<br><br>Durch diese etwas andere Form des Japanischen Adventure Games, soll spielerisch Wissen vermittelt werden, wie auch ein Bewusstsein gegenüber unserer Natur – besonders gegenüber den Meeren – erschaffen bzw. verstärkt werden. So sollen die Spieler dann auch zum weiteren Nachdenken und vielleicht sogar zum eigenem Handeln angeregt werden."];
        let buttons = { done: "schließen x" };
        let choice;
        do {
            Abschluss.ƒS.Text.print(about[0]);
            choice = await Abschluss.ƒS.Menu.getInput(buttons, "aboutBtn");
        } while (choice != buttons.done);
        Abschluss.ƒS.Text.close();
    }
    async function credits() {
        // tslint:disable-next-line: quotemark
        let credits = ['<h3>Quellen - Seite 1</h3> <br> <ol style="list-style-type: decimal;"><li>Laurent C. M. Lebreton, et al., &ldquo;River plastic emissions to the world&rsquo;s oceans,&rdquo; <em>Nature Communications&nbsp;</em>8, no. 15611 (June 2017), <a href="http://doi.org/10.1038/ncomms15611">http://doi.org/10.1038/ncomms15611</a></li><li><a href="https://de.whales.org/wale-delfine/wal-delfin-fakten/blauwale/">https://de.whales.org/wale-delfine/wal-delfin-fakten/blauwale/</a> Aufgerufen: 06/2021</li><li>Pham CK, Ramirez-Llodra E, Alt CHS, Amaro T, Bergmann M, Canals M, et al. (2014) Marine Litter Distribution and Density in European Seas, from the Shelves to Deep Basins. PLoS ONE 9(4): e95839. <a href="https://doi.org/10.1371/journal.pone.0095839">https://doi.org/10.1371/journal.pone.0095839</a></li><li><a href="https://www.nabu.de/natur-und-landschaft/meere/muellkippe-meer/16805.html">https://www.nabu.de/natur-und-landschaft/meere/muellkippe-meer/16805.html</a> Abgerufen: 06/2021</li></ol>', '<h3>Quellen - Seite 2</h3> <br> <ol style="list-style-type: decimal;"><li><a href="https://www.tierschutzbund.de/information/hintergrund/artenschutz/meeresschildkroeten/">https://www.tierschutzbund.de/information/hintergrund/artenschutz/meeresschildkroeten/</a> Abgerufen: 06/2021</li><li><a href="https://sea-shepherd.de/kampagnen/operation-nyamba/">https://sea-shepherd.de/kampagnen/operation-nyamba/</a> Abgerufen: 06/2021</li><li><a href="https://www.wwf.de/themen-projekte/meere-kuesten/fischerei/ungewollter-beifang">https://www.wwf.de/themen-projekte/meere-kuesten/fischerei/ungewollter-beifang</a> Abgerufen: 06/2021</li><li><a href="https://www.bund.net/meere/belastungen/fischerei/">https://www.bund.net/meere/belastungen/fischerei/</a><span style="color:#0563C1;text-decoration:underline;">&nbsp;</span>Abgerufen: 06/2021</li></ol>', '<h3>Quellen - Seite 3</h3> <br> <ol style="list-style-type: decimal;"><li><a href="https://sea-shepherd.de/kampagnen/operation-vanguard/">https://sea-shepherd.de/kampagnen/operation-vanguard/</a> Abgerufen: 06/2021</li><li><a href="https://reset.org/blog/anamurs-schildkroetenbabies-ohne-schutz">https://reset.org/blog/anamurs-schildkroetenbabies-ohne-schutz</a> Abgerufen: 06/2021</li><li><a href="http://www.unesco.org/new/en/oceans-day">http://www.unesco.org/new/en/oceans-day</a> Abgerufen: 06/2021</li><li><a href="https://www.wwf.de/themen-projekte/meere-kuesten/klima-und-meer/">https://www.wwf.de/themen-projekte/meere-kuesten/klima-und-meer/</a> Abgerufen: 06/2021</li></ol>', '<h3>Credits - Seite 4</h3> <br>Titel: Waves of Hawaii <br>Autor: <a href="florianreichelt">florianreichelt</a> <a href="https://freesound.org/s/450755/">https://freesound.org/s/450755/</a><br>Lizenz: <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">Kein Urheberrechtsschutz</a><br><a href="https://creativecommons.org/publicdomain/zero/1.0/deed.de">https://creativecommons.org/publicdomain/zero/1.0/deed.de</a><br>Instagram: <a href="https://www.instagram.com/florianreichelt/">https://www.instagram.com/florianreichelt/</a><br><br>Titel: Big waves hit land<br>Autor: <a href="straget">straget</a> <a href="https://freesound.org/s/412308/">https://freesound.org/s/412308/</a><br>Lizenz: <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">Kein Urheberrechtsschutz</a> Wurde in mp3 Datei umgewandelt, kleinere Dateigröße. <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.de">https://creativecommons.org/publicdomain/zero/1.0/deed.de</a>', '<h3>Credits - Seite 5</h3> <br>Titel: Atlantic ocean waves<br>Autor: <a href="tim.kahn">tim.kahn</a> <a href="https://freesound.org/s/197714/">https://freesound.org/s/197714/</a><br>Lizenz: <a href="https://creativecommons.org/licenses/by-nc/3.0/legalcode">Namensnennung-Nicht kommerziell 3.0</a>. Wurde in mp3 Datei umgewandelt, kleinere Dateigröße.<br><a href="https://creativecommons.org/licenses/by-nc/3.0/deed.de">https://creativecommons.org/licenses/by-nc/3.0/deed.de</a><br><br>Titel: Waves on seaside rocks<br>Autor: <a href="https://freesound.org/people/arnaud%20coutancier/">arnaud coutancier</a> <a href="https://freesound.org/people/arnaud%20coutancier/sounds/213495/">https://freesound.org/people/arnaud%20coutancier/sounds/213495/</a><br>Lizenz: <a href="https://creativecommons.org/licenses/by-nc/3.0/legalcode">Namensnennung-Nicht kommerziell 3.0</a>. Wurde nicht verändert.<br><a href="https://creativecommons.org/licenses/by-nc/3.0/deed.de">https://creativecommons.org/licenses/by-nc/3.0/deed.de</a>', '<h3>Credits - Seite 6</h3> <br>Titel: Wave 2<br>Autor: <a href="https://freesound.org/people/Kayyy/">Kayyy</a> <a href="https://freesound.org/people/Kayyy/sounds/61012/">https://freesound.org/people/Kayyy/sounds/61012/</a><br>Lizenz: <a href="https://creativecommons.org/licenses/by-nc/3.0/legalcode">Namensnennung-Nicht kommerziell 3.0</a>. Wurde nicht verändert.<br><a href="https://creativecommons.org/licenses/by-nc/3.0/deed.de">https://creativecommons.org/licenses/by-nc/3.0/deed.de</a><br><br>Titel: Sea-gulls<br>Autor: <a href="Snapper4298">Snapper4298</a> <a href="https://freesound.org/s/166703/">https://freesound.org/s/166703/</a><br>Lizenz: <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">Kein Urheberrechtsschutz</a><br><a href="https://creativecommons.org/publicdomain/zero/1.0/deed.de">https://creativecommons.org/publicdomain/zero/1.0/deed.de</a>', '<h3>Credits - Seite 7</h3> <br>Titel: Soft sand steps<br>Autor: <a href="https://freesound.org/people/200221-WeanBekker/">200221-WeanBekker</a> <a href="https://freesound.org/s/543714/">https://freesound.org/s/543714/</a><br>Lizenz: <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">Kein Urheberrechtsschutz</a><br><a href="https://creativecommons.org/publicdomain/zero/1.0/deed.de">https://creativecommons.org/publicdomain/zero/1.0/deed.de</a><br><br>Titel: Open Sea Morning<br>Autor: Puddle of Infinity <a href="https://youtu.be/iL55mdlUe5w">https://youtu.be/iL55mdlUe5w</a><br>Lizenz: Lizenzfrei<br>Download via YouTube Audio Library'];
        let current = 0;
        let buttons = { back: "zurück", next: "weiter", done: "schließen x" };
        let choice;
        do {
            Abschluss.ƒS.Text.print(credits[current]);
            choice = await Abschluss.ƒS.Menu.getInput(buttons, "aboutBtn");
            switch (choice) {
                case buttons.back:
                    current = Math.max(0, current - 1);
                    break;
                case buttons.next:
                    current = Math.min(credits.length - 1, current + 1);
                    break;
            }
        } while (choice != buttons.done);
        Abschluss.ƒS.Text.close();
    }
    // MENU
    let inGameMenu = {
        close: "schließen x",
        save: "Spielstand speichern",
        load: "Spielstand laden",
        turnUpVolume: "Musik lauter",
        turnDownVolume: "Musik leiser",
        about: "Über das Spiel",
        credits: "Credits"
    };
    // MENU BUTTONS
    let gameMenu;
    async function menuOptions(_option) {
        console.log(_option);
        if (_option == inGameMenu.close) {
            gameMenu.close();
        }
        else if (_option == inGameMenu.save) {
            await Abschluss.ƒS.Progress.save();
        }
        else if (_option == inGameMenu.load) {
            await Abschluss.ƒS.Progress.load();
        }
        else if (_option == inGameMenu.turnUpVolume) {
            increaseSound();
        }
        else if (_option == inGameMenu.turnDownVolume) {
            decreaseSound();
        }
        else if (_option == inGameMenu.about) {
            about();
            return;
        }
        else if (_option == inGameMenu.credits) {
            credits();
            return;
        }
        else
            return;
    }
    console.log("FudgeStory template starting");
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Abschluss.ƒS.Menu.create(inGameMenu, menuOptions, "gameMenu");
        // gameMenu.close();
        let scenes = [
            { scene: Abschluss.RockyBeach, name: "01RockyBeach", id: "01", next: "02" },
            { scene: Abschluss.TurtleBeach, name: "02TurtleBeach", id: "02", next: "null" },
            { scene: Abschluss.TrashBeach, name: "03TrashBeach", id: "03", next: "null" },
            { scene: Abschluss.WaterBeach, name: "04WaterBeach", id: "04", next: "null" },
            { scene: Abschluss.endScene, name: "EndScene", id: "end", next: "null" }
        ];
        document.addEventListener("keydown", hndKeypress);
        let uiElement = document.querySelector("[type=interface]");
        Abschluss.data.score = Abschluss.ƒS.Progress.setData(Abschluss.data.score, uiElement);
        // start the sequence
        Abschluss.ƒS.Progress.go(scenes);
    }
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Abschluss.ƒ.KEYBOARD_CODE.F4:
                console.log("saving");
                await Abschluss.ƒS.Progress.save();
                break;
            case Abschluss.ƒ.KEYBOARD_CODE.F9:
                console.log("loading");
                await Abschluss.ƒS.Progress.load();
                break;
            case Abschluss.ƒ.KEYBOARD_CODE.F2:
                await Abschluss.ƒS.Inventory.open();
                break;
            case Abschluss.ƒ.KEYBOARD_CODE.F8:
                gameMenu.open();
                break;
        }
    }
    // ADDITIONAL FUNCTIONS
    function tickerDelay(_delay) {
        Abschluss.ƒS.Speech.setTickerDelays(_delay);
    }
    Abschluss.tickerDelay = tickerDelay;
    function addScore(amount) {
        Abschluss.data.score.a += amount;
    }
    Abschluss.addScore = addScore;
    function subtractScore(amount) {
        Abschluss.data.score.a -= amount;
    }
    Abschluss.subtractScore = subtractScore;
    async function nvlMode(content) {
        Abschluss.ƒS.Speech.hide();
        let current = 0;
        let buttons = { back: "zurück", next: "weiter", done: "schließen x" };
        let choice;
        do {
            Abschluss.ƒS.Text.print(content[current]);
            choice = await Abschluss.ƒS.Menu.getInput(buttons, "aboutBtn");
            switch (choice) {
                case buttons.back:
                    current = Math.max(0, current - 1);
                    break;
                case buttons.next:
                    current = Math.min(content.length - 1, current + 1);
                    break;
            }
        } while (choice != buttons.done);
        Abschluss.ƒS.Text.close();
    }
    Abschluss.nvlMode = nvlMode;
    function throwAway(_event) {
        console.log("Threw plastic bottles away");
        Abschluss.data.score.a -= 10;
    }
    Abschluss.throwAway = throwAway;
    function hndItem(_event) {
        console.log("Badge");
    }
    Abschluss.hndItem = hndItem;
})(Abschluss || (Abschluss = {}));
var Abschluss;
(function (Abschluss) {
    async function SceneTemplate() {
        console.log("Template scene starting");
        Abschluss.tickerDelay(30);
        let text = {
            Mermaid: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: ""
            },
            Protagonist: {
                T0000: "",
                T0001: "",
                T0002: "",
                T0003: ""
            }
        };
        let templateChoices = {
            C0001: "",
            C0002: ""
        };
        let userInput = await Abschluss.ƒS.Menu.getInput(templateChoices, "class");
        await Abschluss.ƒS.Location.show(Abschluss.locations.turtleBeach);
        await Abschluss.ƒS.update(Abschluss.transition.wave.duration, Abschluss.transition.wave.alpha, Abschluss.transition.wave.edge);
        await Abschluss.ƒS.update(0.5);
    }
    Abschluss.SceneTemplate = SceneTemplate;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Template.js.map