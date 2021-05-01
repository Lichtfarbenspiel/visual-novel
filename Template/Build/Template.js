"use strict";
var Template;
(function (Template) {
    async function Text() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Narrator: {
                T0000: "Ich bin Narrator",
                T0001: ""
            },
            Protagonist: {
                T0000: "Ich bin Protagonist",
                T0001: ""
            },
            Joe: {
                T0000: "Willkommen",
                T0001: ""
            }
        };
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.update(3);
        await Template.ƒS.Character.show(Template.characters.Joe, Template.characters.Joe.pose.idle, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Joe, text.Joe.T0000);
    }
    Template.Text = Text;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // define transitions
    Template.transitions = {
        clock: {
            duration: 3,
            alpha: "",
            edge: 1
        }
    };
    //define sound
    Template.sound = {
        //Music
        backgroundTheme: "",
        //Sound
        click: ""
    };
    // define locations
    Template.locations = {
        city: {
            name: "city",
            background: "Img/city.jpg"
        }
    };
    //define characters
    Template.characters = {
        Narrator: {
            name: ""
        },
        Protagonist: {
            name: "Protagonist",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                idle: "Img/Characters/placeholder_girl.png",
                happy: ""
            }
        },
        Joe: {
            name: "Joe",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                idle: "Img/Characters/Ryu_normal.png",
                happy: ""
            }
        }
    };
    window.addEventListener("load", start);
    function start(_event) {
        console.log("This is working!");
        document.addEventListener("keydown", hndKeypress);
        let scenes = [
            { scene: Template.Text, name: "Scene" }
        ];
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
        }
    }
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map