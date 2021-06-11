"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    Template.data = {
        Protagonist: {
            name: ""
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
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
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
    console.log("FudgeStory template starting");
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" },
            { scene: Template.Scene02, name: "Scene02" }
        ];
        document.addEventListener("keydown", hndKeypress);
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
        }
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("First scene starting");
        await Template.ƒS.Location.show(Template.locations.rockyBeach);
        await Template.ƒS.update(Template.transition.wave.duration, Template.transition.wave.alpha, Template.transition.wave.edge);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.Mermaid, Template.characters.Mermaid.pose.idle, Template.ƒS.positions.bottomleft);
        await Template.ƒS.update(1);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene02() {
        console.log("Second scene starting");
        await Template.ƒS.Location.show(Template.locations.turtleBeach);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.Mermaid, Template.characters.Mermaid.pose.idle, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
    }
    Template.Scene02 = Scene02;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map