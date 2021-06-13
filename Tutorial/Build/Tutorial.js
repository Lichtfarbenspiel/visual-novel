"use strict";
var Tutorial;
(function (Tutorial) {
    async function Animation() {
        console.log("Animation");
        // let text: {
        //   Narrator: {
        //     T0000: "<i></i>",
        //     T0001: "<i></i>",
        //     T0002: "<i> </i>"
        //   }
        //   Aoi: {
        //     T0000: "Hello~"
        //   }
        // };
        // let animation1: ƒS.AnimationDefinition = {
        //   start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("blue", 0) },
        //   end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red")},
        //   duration: 1,
        //   playmode: ƒS.ANIMATION_PLAYMODE.REVERSELOOP
        // };
        // let animation3: ƒS.AnimationDefinition = {
        //   start: { translation: ƒS.positionPercent(30, 100) },
        //   end: { translation: ƒS.positionPercent(70, 100) },
        //   duration: 3,
        //   playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        // };
        Tutorial.ƒS.Speech.hide();
        await Tutorial.ƒS.Location.show(Tutorial.locations.bench);
        // await ƒS.Character.animate(characters.Aoi, characters.Aoi.pose.normal, animation);
        // await ƒS.update(2);
        // await ƒS.Character.show(characters.Aoi, characters.Aoi.pose.normal, ƒS.positions.bottomleft);
        // await ƒS.Character.animate(characters.Aoi, characters.Aoi.pose.normal, leftToRight());
        await Tutorial.ƒS.Character.animate(Tutorial.characters.Aoi, Tutorial.characters.Aoi.pose.normal, Tutorial.fromRightToOutOfCanvas());
        await Tutorial.ƒS.Character.hide(Tutorial.characters.Aoi);
        await Tutorial.ƒS.update(2);
        // await ƒS.Character.hide(characters.Aoi);
        // await ƒS.update(2);
    }
    Tutorial.Animation = Animation;
})(Tutorial || (Tutorial = {}));
var Tutorial;
(function (Tutorial) {
    async function Decision() {
        console.log("Decision");
        let text = {
            Aoi: {
                T0000: "Hi, wie heißt Du?",
                T0001: "<p>Das war's auch schon.</p>",
                T0002: "Hast du die Verzögerung gemerkt?"
            }
        };
        // let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
        // let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        // ƒS.Text.addClass("cssklasse");
        // await ƒS.Text.print("Text, den ich anzeigen lassen möchte.");
        // ƒS.Text.close();
        Tutorial.ƒS.Speech.setTickerDelays(50, 2);
        Tutorial.ƒS.Sound.fade(Tutorial.sound.backgroundTheme, 0.2, 0.1, true);
        // ƒS.Inventory.add();
        // ƒS.Inventory.open();
        Tutorial.ƒS.Speech.hide();
        await Tutorial.ƒS.Location.show(Tutorial.locations.city);
        await Tutorial.ƒS.update(Tutorial.transition.clock.duration, Tutorial.transition.clock.alpha, Tutorial.transition.clock.edge);
        await Tutorial.ƒS.Character.show(Tutorial.characters.Aoi, Tutorial.characters.Aoi.pose.normal, Tutorial.ƒS.positions.bottomcenter);
        await Tutorial.ƒS.update();
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Aoi, text.Aoi.T0000);
        // Name field
        // dataForSave.Protagonist.name = await ƒS.Speech.getInput();
        // console.log(dataForSave.Protagonist.name);
        // await signalDelay2();
        Tutorial.ƒS.Speech.set(Tutorial.characters.Aoi, text.Aoi.T0002);
        Tutorial.ƒS.Sound.play(Tutorial.sound.click, 1);
        let firstDialogueElementAnswers = {
            iSayOk: "Okay.",
            iSayYes: "Ja.",
            iSayNo: "Nein."
        };
        let firstDialogueElement = await Tutorial.ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayOk:
                Tutorial.ƒS.Sound.play(Tutorial.sound.click, 1);
                //continue writing on this path here
                await Tutorial.ƒS.Speech.tell(Tutorial.characters.Aoi, "okay");
                Tutorial.ƒS.Character.hide(Tutorial.characters.Aoi);
                Tutorial.ƒS.Speech.clear();
                await Tutorial.ƒS.update(1);
                Tutorial.dataForSave.ended = true;
                break;
            case firstDialogueElementAnswers.iSayYes:
                Tutorial.dataForSave.score -= 10;
                console.log(Tutorial.dataForSave.score);
                Tutorial.ƒS.Sound.play(Tutorial.sound.click, 1);
                //continue writing on this path here
                await Tutorial.ƒS.Speech.tell(Tutorial.characters.Aoi, "Ja.");
                Tutorial.ƒS.Speech.clear();
                await Tutorial.ƒS.update(1);
                break;
            case firstDialogueElementAnswers.iSayNo:
                Tutorial.ƒS.Sound.play(Tutorial.sound.click, 1);
                //continue writing on this path here
                Tutorial.ƒS.Character.hide(Tutorial.characters.Aoi);
                await Tutorial.ƒS.update(1);
                await Tutorial.ƒS.Character.show(Tutorial.characters.Ryu, Tutorial.characters.Ryu.pose.normal, Tutorial.ƒS.positionPercent(70, 100));
                await Tutorial.ƒS.update(1);
                await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, "No.");
                await Tutorial.ƒS.Character.hide(Tutorial.characters.Ryu);
                Tutorial.ƒS.Speech.clear();
                await Tutorial.ƒS.update(1);
                break;
        }
        await Tutorial.ƒS.Character.show(Tutorial.characters.Aoi, Tutorial.characters.Aoi.pose.normal, Tutorial.ƒS.positions.bottomcenter);
        await Tutorial.ƒS.update();
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Aoi, text.Aoi.T0001);
        await Tutorial.ƒS.Character.hide(Tutorial.characters.Aoi);
        Tutorial.ƒS.Speech.hide();
        await Tutorial.ƒS.update(1);
        // Musik ausblenden
        Tutorial.ƒS.Sound.fade(Tutorial.sound.backgroundTheme, 0, 1);
    }
    Tutorial.Decision = Decision;
})(Tutorial || (Tutorial = {}));
var Tutorial;
(function (Tutorial) {
    async function End() {
        console.log("End");
    }
    Tutorial.End = End;
})(Tutorial || (Tutorial = {}));
var Tutorial;
(function (Tutorial) {
    async function GameMenu() {
        console.log("Text");
        let text = {
            Narrator: {
                T0000: "",
                T0001: ""
            },
            Protagonist: {
                T0000: "",
                T0001: ""
            },
            Ryu: {
                T0000: "Willkommen.",
                T0001: ""
            }
        };
        Tutorial.ƒS.Sound.play(Tutorial.sound.backgroundTheme, 1);
        document.getElementsByName("scoreRyu").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementsByName("scoreForRyu").forEach(meterStuff => meterStuff.hidden = true);
        Tutorial.ƒS.Speech.hide();
        await Tutorial.ƒS.Location.show(Tutorial.locations.city);
        await Tutorial.ƒS.update(Tutorial.transition.clock.duration, Tutorial.transition.clock.alpha, Tutorial.transition.clock.edge);
        // await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomcenter);
        await Tutorial.ƒS.Character.show(Tutorial.characters.Ryu, Tutorial.characters.Ryu.pose.normal, Tutorial.ƒS.positionPercent(30, 100));
        await Tutorial.ƒS.update(1);
        Tutorial.ƒS.Speech.show();
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, text.Ryu.T0000);
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, "Fremder.");
        await Tutorial.ƒS.Character.hide(Tutorial.characters.Ryu);
        await Tutorial.ƒS.update(1);
    }
    Tutorial.GameMenu = GameMenu;
})(Tutorial || (Tutorial = {}));
var Tutorial;
(function (Tutorial) {
    async function Inventory() {
        console.log("Inventory");
        let text = {
            Narrator: {
                T0000: "",
                T0001: ""
            },
            Protagonist: {
                T0000: "",
                T0001: ""
            },
            Ryu: {
                T0000: "Willkommen.",
                T0001: ""
            }
        };
        Tutorial.ƒS.Speech.hide();
        await Tutorial.ƒS.Location.show(Tutorial.locations.city);
        await Tutorial.ƒS.update(Tutorial.transition.clock.duration, Tutorial.transition.clock.alpha, Tutorial.transition.clock.edge);
        // ƒS.Inventory.add(items.Toy);
        // ƒS.Inventory.add(items.Toy);
        // ƒS.Inventory.add(items.Toy);
        // ƒS.Inventory.add(items.Toy);
        Tutorial.ƒS.Inventory.add(Tutorial.items.BlobBU);
        Tutorial.ƒS.Inventory.add(Tutorial.items.BlobRED);
        Tutorial.ƒS.Inventory.add(Tutorial.items.BlobGN);
        Tutorial.ƒS.Inventory.add(Tutorial.items.BlobDKBU);
        Tutorial.ƒS.Inventory.add(Tutorial.items.BlobYL);
        Tutorial.ƒS.Inventory.add(Tutorial.items.BlobPK);
        Tutorial.ƒS.Inventory.add(Tutorial.items.BlobOG);
        // console.log(await ƒS.Inventory.open());
        await Tutorial.ƒS.Inventory.open();
        Tutorial.ƒS.Speech.hide();
        // await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomcenter);
        await Tutorial.ƒS.Character.show(Tutorial.characters.Ryu, Tutorial.characters.Ryu.pose.normal, Tutorial.ƒS.positionPercent(30, 100));
        await Tutorial.ƒS.update(1);
        Tutorial.ƒS.Speech.show();
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, text.Ryu.T0000);
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, "Fremder.");
        await Tutorial.ƒS.Character.hide(Tutorial.characters.Ryu);
        await Tutorial.ƒS.update(1);
    }
    Tutorial.Inventory = Inventory;
})(Tutorial || (Tutorial = {}));
var Tutorial;
(function (Tutorial) {
    Tutorial.ƒ = FudgeCore;
    Tutorial.ƒS = FudgeStory;
    console.log("Start");
    // define transitions
    Tutorial.transition = {
        clock: {
            duration: 1.5,
            alpha: "FreeTransitions/WipesAndOther/circlewipe-ccw.jpg",
            edge: 1
        }
    };
    // define sound
    Tutorial.sound = {
        // Music
        backgroundTheme: "Audio/Nightclub.ogg",
        // Sound
        click: ""
    };
    Tutorial.locations = {
        city: {
            name: "Cloudy City",
            background: "Images/Backgrounds/bg_city_cloudy.png"
        },
        bench: {
            name: "Bench 1",
            background: "Images/Backgrounds/bg_bench.png"
        }
    };
    // define characters that will show on the stage with some data 
    Tutorial.characters = {
        Narrator: {
            name: ""
        },
        Aoi: {
            name: "Aoi",
            origin: Tutorial.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Aoi_normal.png"
            }
        },
        Ryu: {
            name: "Ryu",
            origin: Tutorial.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/Ryu_normal.png",
                smile: ""
            }
        }
    };
    // define items as key-object-pairs, the objects with the properties name, description and an address to an image
    Tutorial.items = {
        // Toy: {
        //   name: "Fish",
        //   description: "Fishy fish",
        //   image: "Images/Items/fishySmall.png"
        // },
        // Blobbys
        BlobRED: {
            name: "Blob Red",
            description: "A reddish something",
            image: "Images/Items/blobRED.png"
        },
        BlobBU: {
            name: "Blob Blue",
            description: "A blueish something",
            image: "Images/Items/blobBU.png"
        },
        BlobDKBU: {
            name: "Blob DK Blue",
            description: "A dark blueish something",
            image: "Images/Items/blobDKBU.png"
        },
        BlobGN: {
            name: "Blob Green",
            description: "A greenish something",
            image: "Images/Items/blobGN.png"
        },
        BlobPK: {
            name: "Blob Pink",
            description: "A pinkish something",
            image: "Images/Items/blobPK.png"
        },
        BlobYL: {
            name: "Blob Yellow",
            description: "A yellowish something",
            image: "Images/Items/blobYL.png"
        },
        BlobOG: {
            name: "Blob Orange",
            description: "An orangeish something",
            image: "Images/Items/blobOG.png"
        }
    };
    // tell FUDGE Story the data to save besides the current scene
    Tutorial.dataForSave = {
        score: 0,
        // to fix
        Protagonist: {
            name: "Protagonist"
        },
        nameProtagonist: "Protagonist",
        scoreAoi: 0,
        scoreForAoi: "",
        scoreRyu: 0,
        scoreForRyu: "",
        ended: false
    };
    //  MENU - Audio functions
    // MENU - create Menu with Buttons
    // shortcuts to save and load game progress
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Tutorial.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Tutorial.ƒS.Progress.save();
                break;
            case Tutorial.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Tutorial.ƒS.Progress.load();
                break;
        }
    }
    // shortcuts to open and close the inventory
    document.addEventListener("keydown", hndKeypressForInventory);
    async function hndKeypressForInventory(_event) {
        switch (_event.code) {
            case Tutorial.ƒ.KEYBOARD_CODE.I:
                console.log("open inventory");
                await Tutorial.ƒS.Inventory.open();
                break;
            case Tutorial.ƒ.KEYBOARD_CODE.ESC:
                console.log("close inventory");
                Tutorial.ƒS.Inventory.close();
                break;
        }
    }
    function leftToRight() {
        return {
            start: { translation: Tutorial.ƒS.positions.bottomleft },
            end: { translation: Tutorial.ƒS.positions.bottomright },
            duration: 3,
            playmode: Tutorial.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Tutorial.leftToRight = leftToRight;
    function fromRightToOutOfCanvas() {
        return {
            start: { translation: Tutorial.ƒS.positionPercent(30, 100) },
            end: { translation: Tutorial.ƒS.positionPercent(120, 100) },
            duration: 3,
            playmode: Tutorial.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Tutorial.fromRightToOutOfCanvas = fromRightToOutOfCanvas;
    window.addEventListener("load", start);
    function start(_event) {
        // MENU
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            // { scene: Text, name: "How To Text" },
            // { scene: Decision, name: "How To Decide" },
            // { scene: End, name: "End" },
            // { id: "Endo", scene: End, name: "This is an ending", next: "Endo" },
            // { scene: Inventory, name: "How To Make An Inventory" }
            // { scene: Animation, name: "How To Animate" },
            { scene: Tutorial.GameMenu, name: "How To Make A Game Menu" },
            // { scene: Meter, name: "How To Make a Progress bar" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Tutorial.dataForSave = Tutorial.ƒS.Progress.setData(Tutorial.dataForSave, uiElement);
        // start the sequence
        // ƒS.Progress.setData(dataForSave, uiElement);
        Tutorial.ƒS.Progress.go(scenes);
    }
})(Tutorial || (Tutorial = {}));
var Tutorial;
(function (Tutorial) {
    async function Meter() {
        console.log("Text");
        let text = {
            Narrator: {
                T0000: "",
                T0001: ""
            },
            Protagonist: {
                T0000: "",
                T0001: ""
            },
            Ryu: {
                T0000: "Du hast bisher ganz gut durchgehalten...",
                T0001: "Weiter so."
            }
        };
        document.getElementsByName("scoreRyu").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementsByName("scoreForRyu").forEach(meterStuff => meterStuff.hidden = true);
        Tutorial.ƒS.Speech.hide();
        await Tutorial.ƒS.Location.show(Tutorial.locations.bench);
        await Tutorial.ƒS.Character.show(Tutorial.characters.Ryu, Tutorial.characters.Ryu.pose.normal, Tutorial.ƒS.positionPercent(30, 100));
        await Tutorial.ƒS.update(1);
        Tutorial.ƒS.Speech.show();
        document.getElementsByName("scoreRyu").forEach(meterStuff => meterStuff.hidden = false);
        document.getElementsByName("scoreForRyu").forEach(meterStuff => meterStuff.hidden = false);
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, text.Ryu.T0000);
        Tutorial.dataForSave.scoreRyu += 50;
        Tutorial.dataForSave.scoreForRyu = "You earned 50 points on Ryus bar",
            // dataForSave.scoreAoi += 15;
            // dataForSave.scoreForAoi = "You earned 15 points on Aois bar",
            await Tutorial.ƒS.update(1);
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, text.Ryu.T0001);
        // document.getElementById("meterli").hidden = true;
        // document.getElementById("meterInput").hidden = true;
        // beide auf einmal hiden
        // document.getElementsByName("a").forEach(meterStuff => meterStuff.hidden = true);
        await Tutorial.ƒS.Character.hide(Tutorial.characters.Ryu);
        // dataForSave.state.scoreAoi += 100;
    }
    Tutorial.Meter = Meter;
})(Tutorial || (Tutorial = {}));
var Tutorial;
(function (Tutorial) {
    async function Text() {
        console.log("Text");
        let text = {
            Narrator: {
                T0000: "",
                T0001: ""
            },
            Protagonist: {
                T0000: "",
                T0001: ""
            },
            Ryu: {
                T0000: "Willkommen.",
                T0001: ""
            }
        };
        Tutorial.ƒS.Speech.hide();
        await Tutorial.ƒS.Location.show(Tutorial.locations.city);
        await Tutorial.ƒS.update(Tutorial.transition.clock.duration, Tutorial.transition.clock.alpha, Tutorial.transition.clock.edge);
        // await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomcenter);
        await Tutorial.ƒS.Character.show(Tutorial.characters.Ryu, Tutorial.characters.Ryu.pose.normal, Tutorial.ƒS.positionPercent(30, 100));
        await Tutorial.ƒS.update(1);
        Tutorial.ƒS.Speech.show();
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, text.Ryu.T0000);
        await Tutorial.ƒS.Speech.tell(Tutorial.characters.Ryu, "Fremder.");
        await Tutorial.ƒS.Character.hide(Tutorial.characters.Ryu);
        await Tutorial.ƒS.update(1);
    }
    Tutorial.Text = Text;
})(Tutorial || (Tutorial = {}));
//# sourceMappingURL=Tutorial.js.map