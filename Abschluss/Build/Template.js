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
                T0000: "Oh hallo, wer bist du denn?",
                T0001: "Das tut mir Leid, das wollte ich nicht. Ich bin Mermaid und ich verkleide mich doch gar nicht! ",
                T0002: "Wieso denn Seefahrer? Ich wollte nachsehen, ob die kleinen Schildkröten schon geschlüpft sind. Es wird nämlich immer schwerer für sie, sicher ins Meer zu kommen. Da können sie meine Hilfe gut gebrauchen.",
                T0003: "Ähm… Ich kann nicht über Land gehen. Aber du könntest doch für mich nachsehen gehen und wir treffen uns dann dort drüben."
            },
            Protagonist: {
                T0000: "Oha, du hast mich erschreckt. Ich bin " + Abschluss.data.Protagonist.name.toString() + " wer bist du? Und wieso verkleidest du dich als Meerjungfrau?!",
                T0001: "Als ob, das glaube ich dir nicht! Naja, was machst du denn dann hier? Seefahrer gibt es hier doch keine mehr.",
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
                T0000: "Mermaid! Du wirst es nicht glauben, aber hier hinten sind wirklich kleine Schildkröten. Sie müssen gerade erst geschlüpft sein!",
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
                T0020: "Dabei werden riesige Grundschleppnetze eingesetzt, die direkt über den Meeresboden gezogen werden und so alles zerstören, was dort vorher war.",
                T0021: "Weil es leider immer weniger helfende Hände gibt, um die Strände zu kontrollieren und die Nester zu schützen.",
                T0022: "Außerdem kommt dazu, dass die freiwilligen Helfer und Helferinnen teilweise keine Genehmigung der zuständigen Behörden erhielten und so die Strände nicht abgehen durften.",
                T0023: "Darum mache ich es einfach.",
                T0024: "Aus dem Grund habe ich dich ja jetzt!",
                T0025: "Ja, also ich kann ja schon auch über den Strand robben, das ist dann halt super anstrengend für mich und zu lange sollte ich auch nicht unbedingt an Land bleiben.",
                T0026: "Für die ist es nämlich leider auch nicht ganz ungefährlich. Darum mache ich es einfach.",
                T0027: "Grundsätzlich eigentlich nichts, allerdings sind einige Strände sehr beliebt bei Wilderern. Denen möchte ich tatsächlich auch nicht begegnen!",
                T0028: "Aber keine Sorge, hier habe ich noch nie welche gesehen."
            },
            Protagonist: {
                T0000: "Wieso liegt hier denn so viel Müll? ",
                T0001: "Achso, dann müssten alle Mütter der Jungen hier am Strand also auch hier geboren sein…",
                T0002: "Oh, wegen all dem Müll?",
                T0003: "Hm stimmt, daran hab ich gar nicht gedacht. Ich meine, da gibt es auch einen unglaublich großen Schwarzmarkt für solche Tiere.",
                T0004: "Ja, macht Sinn. So ein Netz lässt sich ja auch nicht wirklich Steuern, da ist es ja unmöglich sowas zu verhindern.",
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
                        break;
                    case questionChoices01.C0002:
                        // Liegt das dann alles immer an den Stränden?
                        Abschluss.addScore(5);
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0005);
                        // weiter zu GPGP
                        break;
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
                        break;
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
                                                break;
                                            case questionChoices05.C0002:
                                                // Was sind denn das für Fangmethoden?
                                                Abschluss.addScore(5);
                                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0019);
                                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0020);
                                                break;
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
                                        break;
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
                                break;
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
                        break;
                }
                break;
            case questionChoices.C0003:
                // Müll einsammeln
                Abschluss.addScore(8);
                await Abschluss.ƒS.Location.show(Abschluss.locations.trashBeachClean);
                await Abschluss.ƒS.update(Abschluss.transition.swirl.duration, Abschluss.transition.swirl.alpha, Abschluss.transition.swirl.edge);
                await Abschluss.ƒS.update(0.5);
                Abschluss.ƒS.Inventory.add(Abschluss.items.recycleBadge);
                Abschluss.ƒS.Inventory.add(Abschluss.items.plasticBottles);
                Abschluss.ƒS.Inventory.open();
                break;
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
                        break;
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
                                break;
                            case questionChoices02.C0002:
                                // Stimmt es, dass das Meer auch Sauerstoff selbst produziert?
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0024);
                                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0025);
                                break;
                        }
                        break;
                }
                break;
            case questionChoices.C0002:
                // Wow, wieviel unterschiedliches Leben es da unten wohl geben muss?
                Abschluss.addScore(5);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0026);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0027);
                await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0028);
                await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0005);
                break;
        }
    }
    Abschluss.WaterBeach = WaterBeach;
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
        }
    };
    // CHARACTERS
    Abschluss.characters = {
        Mermaid: {
            name: "Meerjungfrau",
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
            static: true
        },
        plasticBottles: {
            name: "Plastik Flaschen",
            description: "Wenn du die Plastik Flaschen wieder weg wirfst, verlierst du xy Punkte.",
            image: "Img/Items/plastic-bottles.png"
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
        let credits = ["<h3>Credits</h3> <br> XYZ", "<h3>Quellen<h3><br> XYZ"];
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
            // { scene: RockyBeach, name: "01RockyBeach", id: "01", next: "02" },
            // { scene: TurtleBeach, name: "02TurtleBeach", id: "02", next: "null"},
            { scene: Abschluss.TrashBeach, name: "03TrashBeach", id: "03", next: "null" },
            { scene: Abschluss.WaterBeach, name: "04WaterBeach", id: "04", next: "null" }
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