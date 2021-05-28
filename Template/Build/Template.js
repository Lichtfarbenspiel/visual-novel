"use strict";
var Template;
(function (Template) {
    async function Text() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Narrator: {
                T0000: "Welcome to Whatever Academy!",
                T0001: "In the name of all teachers and students of  Whatever Academy, I invite you to explore our beautiful grounds.",
                T0002: "May you have a wonderful and unforgettable time here.",
                T0003: "Now, it is time to decide what path you want to take."
            },
            Protagonist: {
                T0000: "Ich bin Protagonist",
                T0001: ""
            },
            Joe: {
                T0000: "Hi, I'm Joe. I will become one of the best healers this academy has ever seen. What about you?",
                T0001: ""
            },
            Allison: {
                T0000: "Hey, I am Allison, but you can call me Allie. What made you enrol in Whatever Academy? Well, I want to be the greatest swordswoman there has ever been!",
                T0001: ""
            }
        };
        // let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        // let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
        Template.data.Protagonist.name = await Template.ƒS.Speech.getInput();
        console.log(Template.data.Protagonist.name);
        // ƒS.Inventory.add(items.item01);
        Template.ƒS.Speech.setTickerDelays(50);
        Template.ƒS.Sound.fade(Template.sounds.backgroundTheme, 0.2, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.hall);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.Narrator, Template.characters.Narrator.pose.idle, Template.ƒS.positions.bottomleft);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0002);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0003);
        // await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0003, true, "css Klasse");
        // ƒS.Speech.set(characters.Narrator, text.Narrator.T0003);
        await Template.ƒS.Character.hide(Template.characters.Narrator);
        await Template.ƒS.update(0.5);
        Template.ƒS.Speech.clear();
        let firstDialogueElementAnswer = {
            A0001: "Become a mage.",
            A0002: "Become a swordsperson.",
            A0003: "Become a healer."
        };
        // ƒS.Sound.play(sounds.click, 0.2);
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswer, "class");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswer.A0001:
                Template.data.score += 2;
                Template.ƒS.Sound.play(Template.sounds.click, 1);
                // continue writing on this path here
                await Template.ƒS.Character.show(Template.characters.Narrator, Template.characters.Narrator.pose.idle, Template.ƒS.positions.bottomleft);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Welcome Everybody! Soon you will learn amazing things and at some point you will leave this Academy as skilled mages.");
                Template.ƒS.Character.hide(Template.characters.Narrator);
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                break;
            case firstDialogueElementAnswer.A0002:
                Template.data.score += 1;
                Template.ƒS.Sound.play(Template.sounds.click, 1);
                await Template.ƒS.Character.show(Template.characters.Narrator, Template.characters.Narrator.pose.idle, Template.ƒS.positions.bottomleft);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Welcome, future swordsmen and swordswomen! May you all train hard.");
                Template.ƒS.Character.hide(Template.characters.Narrator);
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                break;
            case firstDialogueElementAnswer.A0003:
                Template.data.score += 3;
                Template.ƒS.Sound.play(Template.sounds.click, 1);
                await Template.ƒS.Character.show(Template.characters.Narrator, Template.characters.Narrator.pose.idle, Template.ƒS.positions.bottomleft);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Narrator, "Great choice! Good healers are very valuable, so be sure to always aspire great skills.");
                Template.ƒS.Character.hide(Template.characters.Narrator);
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                break;
        }
        console.log("Score " + Template.data.score);
        Template.ƒS.Sound.fade(Template.sounds.backgroundTheme, 0, 1);
    }
    Template.Text = Text;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Dorm() {
        console.log("Dorm Scene plying");
        let text = {
            Protagonist: {
                T0000: "Hm, there are two other people staying in the same dormatory as me. Which one should I talk to first?",
                T0001: "Hey I'm Lillian, nice to meet you!",
                T0002: "Uhm...",
                T0003: "What makes you think you can talk to me?!"
            },
            Joe: {
                T0000: "Hi, I'm Joe. I will become one of the best healers this academy has ever seen. What about you?",
                T0001: ""
            },
            Allison: {
                T0000: "Hey, I am Allison, but you can call me Allie. What made you enrol in Whatever Academy?",
                T0001: "Well, I want to be the greatest swordswoman there has ever been!"
            }
        };
        Template.ƒS.Speech.setTickerDelays(50);
        await Template.ƒS.Location.show(Template.locations.dorm);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.data.Protagonist, Template.data.Protagonist.pose.idle, Template.ƒS.positionPercent(1, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.Character.hide(Template.data.Protagonist);
        Template.ƒS.Speech.clear();
        let choice = {
            C0000: "Allison",
            C0001: "Joe"
        };
        console.log("Score " + Template.data.score);
        let userInput = await Template.ƒS.Menu.getInput(choice);
        switch (userInput) {
            case choice.C0000:
                // talk to Allison
                Template.ƒS.Sound.play(Template.sounds.click, 1);
                await Template.ƒS.Character.show(Template.characters.Allison, Template.characters.Allison.pose.idle, Template.ƒS.positionPercent(60, 100));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Allison, text.Allison.T0000);
                await Template.ƒS.Speech.tell(Template.characters.Allison, text.Allison.T0001);
                let choice2 = {
                    C0000: "friendly",
                    C0001: "mean"
                };
                let userInput2 = await Template.ƒS.Menu.getInput(choice2);
                if (userInput2 == choice2.C0000) {
                    Template.characters.Allison.friendScore = 1;
                    Template.data.score += 1;
                    await Template.ƒS.Character.show(Template.data.Protagonist, Template.data.Protagonist.pose.idle, Template.ƒS.positionPercent(1, 100));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0001);
                    await Template.ƒS.Character.hide(Template.data.Protagonist);
                    await Template.ƒS.Character.hide(Template.characters.Allison);
                    Template.ƒS.Speech.clear();
                    break;
                }
                else if (userInput2 == choice2.C0001) {
                    Template.characters.Allison.friendScore = -1;
                    Template.data.score -= 1;
                    await Template.ƒS.Character.show(Template.data.Protagonist, Template.data.Protagonist.pose.idle, Template.ƒS.positionPercent(1, 100));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0001);
                    await Template.ƒS.Character.hide(Template.data.Protagonist);
                    await Template.ƒS.Character.hide(Template.characters.Allison);
                    Template.ƒS.Speech.clear();
                    break;
                }
                break;
            case choice.C0001:
                // Talk to Joe
                Template.ƒS.Sound.play(Template.sounds.click, 1);
                await Template.ƒS.Character.show(Template.characters.Joe, Template.characters.Joe.pose.idle, Template.ƒS.positionPercent(60, 100));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.Joe, text.Joe.T0000);
                let choice3 = {
                    C0000: "friendly",
                    C0001: "mean"
                };
                let userInput3 = await Template.ƒS.Menu.getInput(choice3);
                if (userInput3 == choice3.C0000) {
                    Template.characters.Joe.friendScore += 1;
                    Template.data.score += 1;
                    await Template.ƒS.Character.show(Template.data.Protagonist, Template.data.Protagonist.pose.idle, Template.ƒS.positionPercent(1, 100));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0001);
                    await Template.ƒS.Character.hide(Template.data.Protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.Joe);
                    await Template.ƒS.update(0.5);
                    Template.ƒS.Speech.clear();
                    break;
                }
                else if (userInput3 == choice3.C0001) {
                    Template.characters.Joe.friendScore -= 1;
                    Template.data.score -= 1;
                    await Template.ƒS.Character.show(Template.data.Protagonist, Template.data.Protagonist.pose.idle, Template.ƒS.positionPercent(1, 100));
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0001);
                    await Template.ƒS.Character.hide(Template.data.Protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.Joe);
                    await Template.ƒS.update(0.5);
                    Template.ƒS.Speech.clear();
                    break;
                }
                break;
        }
    }
    Template.Dorm = Dorm;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Class() {
        console.log("Class Scene plying");
        let text = {
            Protagonist: {
                T0000: "Oh no, I missed that last part, maybe I can ask someone to explain.",
                T0001: "Hey Allison, can you please explain xyz to me?",
                T0002: "Hey Joe, can you please explain xyz to me?",
                T0003: "Thank you!",
                T0004: "Shit... Well done Lillian!"
            },
            Joe: {
                T0000: "Yeah, sure I can help you! Let me see...",
                T0001: "I'm sorry, but maybe you should pay better attention next time."
            },
            Allison: {
                T0000: "Yeah, sure I can help you! Let me see...",
                T0001: "I'm sorry, but maybe you should have been a little more kind to me earlier!"
            },
            Narrator: {
                T0000: "Well done! You completed this class successfully.",
                T0001: "I'm sorry, but you will have to repeat this class!"
            }
        };
        Template.ƒS.Speech.setTickerDelays(50);
        await Template.ƒS.Location.show(Template.locations.class);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.data.Protagonist, Template.data.Protagonist.pose.idle, Template.ƒS.positionPercent(1, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0000);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.data.Protagonist);
        Template.ƒS.Speech.clear();
        let choice = {
            C0000: "Allison",
            C0001: "Joe"
        };
        let userInput = await Template.ƒS.Menu.getInput(choice);
        switch (userInput) {
            case choice.C0000:
                // talk to Allison
                Template.ƒS.Sound.play(Template.sounds.click, 1);
                await Template.ƒS.Character.show(Template.data.Protagonist, Template.data.Protagonist.pose.idle, Template.ƒS.positionPercent(1, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0001);
                await Template.ƒS.Character.show(Template.characters.Allison, Template.characters.Allison.pose.idle, Template.ƒS.positionPercent(60, 100));
                await Template.ƒS.update(0.5);
                if (Template.characters.Allison.friendScore > 0) {
                    Template.data.score += 1;
                    await Template.ƒS.Speech.tell(Template.characters.Allison, text.Allison.T0000);
                    await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0003);
                    await Template.ƒS.Character.hide(Template.data.Protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.Allison);
                    await Template.ƒS.update(0.5);
                    Template.ƒS.Speech.clear();
                    return "00004";
                }
                else {
                    Template.data.score -= 1;
                    await Template.ƒS.Speech.tell(Template.characters.Allison, text.Allison.T0001);
                    await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0004);
                    await Template.ƒS.Character.hide(Template.data.Protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.Allison);
                    await Template.ƒS.update(0.5);
                    Template.ƒS.Speech.clear();
                    return "00005";
                }
            case choice.C0001:
                // Talk to Joe
                Template.ƒS.Sound.play(Template.sounds.click, 1);
                await Template.ƒS.Character.show(Template.data.Protagonist, Template.data.Protagonist.pose.idle, Template.ƒS.positionPercent(1, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0002);
                await Template.ƒS.Character.show(Template.characters.Joe, Template.characters.Joe.pose.idle, Template.ƒS.positionPercent(60, 100));
                await Template.ƒS.update(0.5);
                if (Template.characters.Joe.friendScore > 0) {
                    Template.data.score += 1;
                    await Template.ƒS.Speech.tell(Template.characters.Joe, text.Joe.T0000);
                    await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0003);
                    await Template.ƒS.Character.hide(Template.data.Protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.Joe);
                    await Template.ƒS.update(0.5);
                    Template.ƒS.Speech.clear();
                    console.log("Score " + Template.data.score);
                    return "00004";
                }
                else {
                    Template.data.score -= 1;
                    await Template.ƒS.Speech.tell(Template.characters.Joe, text.Joe.T0001);
                    await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0004);
                    await Template.ƒS.Character.hide(Template.data.Protagonist);
                    await Template.ƒS.update(0.5);
                    await Template.ƒS.Character.hide(Template.characters.Joe);
                    await Template.ƒS.update(0.5);
                    Template.ƒS.Speech.clear();
                    console.log("Score " + Template.data.score);
                    return "00005";
                }
        }
    }
    Template.Class = Class;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Failure() {
        console.log("Class Scene plying");
        let text = {
            Protagonist: {
                T0000: "Great! That was it then, I guess..."
            }
        };
        Template.ƒS.Speech.setTickerDelays(50);
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.data.Protagonist, Template.data.Protagonist.pose.idle, Template.ƒS.positionPercent(1, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.data.Protagonist, text.Protagonist.T0000);
    }
    Template.Failure = Failure;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Success() {
        console.log("Class Scene plying");
        let text = {
            Narrator: {
                T0000: "Well done! Here is your graduation certificate."
            }
        };
        Template.ƒS.Speech.setTickerDelays(50);
        await Template.ƒS.Location.show(Template.locations.hall);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.Narrator, Template.characters.Narrator.pose.idle, Template.ƒS.positionPercent(1, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0000);
        Template.ƒS.Inventory.add(Template.items.item01);
        await Template.ƒS.Inventory.open();
    }
    Template.Success = Success;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // all data that will be stored in json when saving
    Template.data = {
        Protagonist: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                idle: "Img/Characters/protagonist.png",
                happy: ""
            }
        },
        score: 0
    };
    // define transitions
    Template.transitions = {
        clock: {
            duration: 3,
            alpha: "",
            edge: 1
        }
    };
    //define sound
    Template.sounds = {
        //Music
        backgroundTheme: "Sounds/Background.mp3",
        //Sound
        click: "Sounds/click.mp3"
    };
    // define locations
    Template.locations = {
        hall: {
            name: "hall",
            background: "Img/hall.jpg"
        },
        dorm: {
            name: "dorm",
            background: "Img/dorm.jpg"
        },
        class: {
            name: "class",
            background: "Img/hall.jpg"
        },
        city: {
            name: "class",
            background: "Img/city.jpg"
        }
    };
    //define characters
    Template.characters = {
        Narrator: {
            name: "Narrator",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                idle: "Img/Characters/narrator.png"
            }
        },
        Joe: {
            name: "Joe",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                idle: "Img/Characters/joe.png",
                happy: ""
            },
            friendScore: 0
        },
        Allison: {
            name: "Allison",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                idle: "Img/Characters/allison.png",
                happy: ""
            },
            friendScore: 0
        }
    };
    Template.items = {
        item01: {
            name: "Graduation",
            description: "Graduation hat and certificate.",
            image: "Img/graduation.png"
        }
    };
    Template.sceneID = "";
    window.addEventListener("load", start);
    function start(_event) {
        console.log("This is working!");
        document.addEventListener("keydown", hndKeypress);
        let scenes = [
            { scene: Template.Text, name: "Scene", id: "00001", next: "00002" },
            { scene: Template.Dorm, name: "Scene", id: "00002", next: "00003" },
            { scene: Template.Class, name: "Scene", id: "00003" },
            { scene: Template.Success, name: "Success", id: "00004" },
            { scene: Template.Failure, name: "Failure", id: "00005" }
        ];
        console.log("Score " + Template.data.score);
        Template.ƒS.Progress.setData(Template.data);
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
//# sourceMappingURL=Template.js.map