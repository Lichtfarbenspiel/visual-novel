"use strict";
var Template;
(function (Template) {
    async function RockyBeach() {
        console.log("First scene starting");
        // data.Protagonist.name = await ƒS.Speech.getInput();
        // console.log(data.Protagonist.name);
        let text = {
            Mermaid: {
                T0000: "Oh hallo, wer bist du denn?",
                T0001: "Das tut mir Leid, das wollte ich nicht. Ich bin Mermaid und ich verkleide mich doch gar nicht! ",
                T0002: "Wieso denn Seefahrer? Ich wollte nachsehen, ob die kleinen Schildkröten schon geschlüpft sind. Es wird nämlich immer schwerer für sie, sicher ins Meer zu kommen. Da können sie meine Hilfe gut gebrauchen.",
                T0003: "Ähm… Ich kann nicht über Land gehen. Aber du könntest doch für mich nachsehen gehen und wir treffen uns dann dort drüben."
            },
            Protagonist: {
                T0000: "Oha, du hast mich erschreckt. Ich bin " + Template.data.Protagonist.name.toString() + " wer bist du? Und wieso verkleidest du dich als Meerjungfrau?!",
                T0001: "Als ob, das glaube ich dir nicht! Naja, was machst du denn dann hier? Seefahrer gibt es hier doch keine mehr.",
                T0002: "Hm, ich habe hier noch keine gesehen. Aber komm, wir können ja mal nachsehen.",
                T0003: "Na wenn du meinst. Dann bis gleich!"
            }
        };
        Template.tickerDelay(50);
        await Template.ƒS.Location.show(Template.locations.rockyBeach);
        await Template.ƒS.update(Template.transition.wave.duration, Template.transition.wave.alpha, Template.transition.wave.edge);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.Mermaid, Template.characters.Mermaid.pose.idle, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Mermaid, text.Mermaid.T0000);
        await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Mermaid, text.Mermaid.T0001);
        await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Mermaid, text.Mermaid.T0002);
        await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Mermaid, text.Mermaid.T0003);
        await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0003);
        await Template.ƒS.Character.hide(Template.characters.Mermaid);
        await Template.ƒS.update(0.5);
        Template.ƒS.Speech.clear();
    }
    Template.RockyBeach = RockyBeach;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function TurtleBeach() {
        console.log("Second scene starting");
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
        await Template.ƒS.Location.show(Template.locations.turtleBeach);
        await Template.ƒS.update(Template.transition.wave.duration, Template.transition.wave.alpha, Template.transition.wave.edge);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Character.show(Template.characters.Mermaid, Template.characters.Mermaid.pose.idle, Template.ƒS.positions.bottomleft);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Mermaid, text.Mermaid.T0000);
        await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Mermaid, text.Mermaid.T0001);
        let userInput = await Template.ƒS.Menu.getInput(turtleChoices, "class");
        switch (userInput) {
            case turtleChoices.C0001:
                break;
            case turtleChoices.C0002:
                break;
        }
    }
    Template.TurtleBeach = TurtleBeach;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    Template.data = {
        Protagonist: {
            name: "Protagonist"
        },
        state: {
            a: 0
        },
        ended: false
    };
    // define transitions
    Template.transition = {
        wave: {
            duration: 1.5,
            alpha: "Transitions/waves06.png",
            edge: 1.5
        }
    };
    //define sound
    Template.sounds = {
        //Music
        backgroundTheme: "Sounds/",
        //Sound
        click: "Sounds/"
    };
    // define locations
    Template.locations = {
        rockyBeach: {
            name: "Rocky Beach",
            background: "Img/Backgrounds/Felsenstrand.jpg"
        },
        turtleBeach: {
            name: "Turtle Beach",
            background: "Img/Backgrounds/BabySchildkröte.jpg"
        }
    };
    //define characters
    Template.characters = {
        Mermaid: {
            name: "Meerjungfrau",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                idle: "Img/Characters/Mermaid/mermaid-idle.png"
            }
        }
    };
    Template.items = {
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
        Template.ƒS.Sound.setVolume(Template.sounds.backgroundTheme, volume);
    }
    Template.increaseSound = increaseSound;
    function decreaseSound() {
        if (volume > 0)
            return;
        volume -= 0.1;
        Template.ƒS.Sound.setVolume(Template.sounds.backgroundTheme, volume);
    }
    Template.decreaseSound = decreaseSound;
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
            await Template.ƒS.Progress.save();
        }
        else if (_option == inGameMenu.load) {
            await Template.ƒS.Progress.load();
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
        gameMenu = Template.ƒS.Menu.create(inGameMenu, menuOptions, "gameMenu");
        let scenes = [
            // { scene: RockyBeach, name: "Scene", id: "00001", next: "00002" },
            { scene: Template.TurtleBeach, name: "Scene02", id: "00002", next: "" }
        ];
        document.addEventListener("keydown", hndKeypress);
        let uiElement = document.querySelector("[type=interface]");
        Template.data.state = Template.ƒS.Progress.setData(Template.data.state, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F4:
                console.log("saving");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("loading");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.I:
                await Template.ƒS.Inventory.open();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                gameMenu.open();
                break;
        }
    }
    function tickerDelay(_delay) {
        Template.ƒS.Speech.setTickerDelays(_delay);
    }
    Template.tickerDelay = tickerDelay;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map