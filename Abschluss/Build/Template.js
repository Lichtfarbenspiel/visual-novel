"use strict";
var Abschluss;
(function (Abschluss) {
    async function RockyBeach() {
        console.log("RockyBeach scene starting");
        Abschluss.tickerDelay(30);
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
        await Abschluss.ƒS.Location.show(Abschluss.locations.rockyBeach);
        await Abschluss.ƒS.update(Abschluss.transition.wave.duration, Abschluss.transition.wave.alpha, Abschluss.transition.wave.edge);
        await Abschluss.ƒS.update(0.5);
        await Abschluss.ƒS.Character.show(Abschluss.characters.Mermaid, Abschluss.characters.Mermaid.pose.idle, Abschluss.ƒS.positionPercent(0, 100));
        await Abschluss.ƒS.update(1);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0001);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0001);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0002);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0002);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0003);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0003);
        await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
        await Abschluss.ƒS.update(0.5);
        Abschluss.ƒS.Speech.clear();
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
        await Abschluss.ƒS.update(Abschluss.transition.wave.duration, Abschluss.transition.wave.alpha, Abschluss.transition.wave.edge);
        await Abschluss.ƒS.update(0.5);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0000);
        await Abschluss.ƒS.Character.show(Abschluss.characters.Mermaid, Abschluss.characters.Mermaid.pose.idle, Abschluss.ƒS.positionPercent(0, 100));
        await Abschluss.ƒS.update(1);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0001);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0001);
        let userInput = await Abschluss.ƒS.Menu.getInput(turtleChoices, "class");
        switch (userInput) {
            case turtleChoices.C0001:
                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                await Abschluss.ƒS.update(0.5);
                Abschluss.ƒS.Speech.clear();
                return "";
            case turtleChoices.C0002:
                await Abschluss.ƒS.Character.hide(Abschluss.characters.Mermaid);
                await Abschluss.ƒS.update(0.5);
                Abschluss.ƒS.Speech.clear();
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
        await Abschluss.ƒS.Location.show(Abschluss.locations.trashBeach);
        await Abschluss.ƒS.update(Abschluss.transition.wave.duration, Abschluss.transition.wave.alpha, Abschluss.transition.wave.edge);
        await Abschluss.ƒS.update(0.5);
        await Abschluss.ƒS.Character.show(Abschluss.characters.Mermaid, Abschluss.characters.Mermaid.pose.floating, Abschluss.ƒS.positionPercent(-5, 105));
        await Abschluss.ƒS.update(1);
        await Abschluss.ƒS.Speech.tell(Abschluss.data.Protagonist, text.Protagonist.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0000);
        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0001);
        let userInput = await Abschluss.ƒS.Menu.getInput(questionChoices, "class");
        switch (userInput) {
            case questionChoices.C0001:
                // Wieso wird es immer schlimmer
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
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0004);
                        break;
                    case questionChoices01.C0002:
                        // Liegt das dann alles immer an den Stränden?
                        await Abschluss.ƒS.Speech.tell(Abschluss.characters.Mermaid, text.Mermaid.T0005);
                        break;
                }
                break;
            case questionChoices.C0002:
                // Wieso werden die Eier überhaupt hier abgelegt?
                break;
        }
    }
    Abschluss.TrashBeach = TrashBeach;
})(Abschluss || (Abschluss = {}));
var Abschluss;
(function (Abschluss) {
    Abschluss.ƒ = FudgeCore;
    Abschluss.ƒS = FudgeStory;
    Abschluss.data = {
        Protagonist: {
            name: "Protagonist"
        },
        state: {
            a: 0
        },
        ended: false
    };
    // define transitions
    Abschluss.transition = {
        wave: {
            duration: 1.5,
            alpha: "Transitions/waves06.png",
            edge: 1.5
        }
    };
    //define sound
    Abschluss.sounds = {
        //Music
        backgroundTheme: "Sounds/",
        //Sound
        click: "Sounds/"
    };
    // define locations
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
            background: "Img/Backgrounds/TrashBeach.jpg"
        }
    };
    //define characters
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
        item01: {
            name: "item01",
            description: "item01",
            image: "Img/Items"
        }
    };
    // Menu audio functions
    let volume = 1.0;
    function increaseSound() {
        if (volume >= 100)
            return;
        volume += 0.1;
        Abschluss.ƒS.Sound.setVolume(Abschluss.sounds.backgroundTheme, volume);
    }
    Abschluss.increaseSound = increaseSound;
    function decreaseSound() {
        if (volume > 0)
            return;
        volume -= 0.1;
        Abschluss.ƒS.Sound.setVolume(Abschluss.sounds.backgroundTheme, volume);
    }
    Abschluss.decreaseSound = decreaseSound;
    // MENU
    let inGameMenu = {
        save: "Spielstand speichern",
        load: "Spielstand laden",
        close: "Menü schließen",
        turnUpVolume: "Musik lauter",
        turnDownVolume: "Musik leiser",
        credits: "Credits",
        about: "Über das Spiel"
    };
    // Menu Buttons
    let gameMenu;
    async function menuOptions(_option) {
        console.log(_option);
        if (_option == inGameMenu.save) {
            await Abschluss.ƒS.Progress.save();
        }
        else if (_option == inGameMenu.load) {
            await Abschluss.ƒS.Progress.load();
        }
        else if (_option == inGameMenu.close) {
            gameMenu.close();
        }
        else if (_option == inGameMenu.turnUpVolume) {
            increaseSound();
        }
        else if (_option == inGameMenu.turnUpVolume) {
            decreaseSound();
        }
        else if (_option == inGameMenu.credits) {
            return;
        }
        else if (_option == inGameMenu.about) {
            return;
        }
        else
            return;
    }
    console.log("FudgeStory template starting");
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Abschluss.ƒS.Menu.create(inGameMenu, menuOptions, "gameMenu");
        gameMenu.close();
        let scenes = [
            { scene: Abschluss.RockyBeach, name: "01RockyBeach", id: "01", next: "02" },
            { scene: Abschluss.TurtleBeach, name: "02TurtleBeach", id: "02" },
            { scene: Abschluss.TrashBeach, name: "03TrashBeach", id: "03" }
        ];
        document.addEventListener("keydown", hndKeypress);
        let uiElement = document.querySelector("[type=interface]");
        Abschluss.data.state = Abschluss.ƒS.Progress.setData(Abschluss.data.state, uiElement);
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
            // case ƒ.KEYBOARD_CODE.CTRL_LEFT && ƒ.KEYBOARD_CODE.I:
            //   await ƒS.Inventory.open();
            //   break;
            // case ƒ.KEYBOARD_CODE.CTRL_LEFT && ƒ.KEYBOARD_CODE.M:
            //   gameMenu.open();
            //   break;
        }
    }
    function tickerDelay(_delay) {
        Abschluss.ƒS.Speech.setTickerDelays(_delay);
    }
    Abschluss.tickerDelay = tickerDelay;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Template.js.map