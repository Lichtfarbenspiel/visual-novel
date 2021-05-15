namespace Template {
  export async function Text(): ƒS.SceneReturn {
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

    let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

    data.Protagonist.name = await ƒS.Speech.getInput();
    console.log(data.Protagonist.name);

    ƒS.Speech.setTickerDelays(50);

    ƒS.Sound.fade(sounds.backgroundTheme, 0.2, 0.1, true);

    await ƒS.Location.show(locations.hall);
    await ƒS.update(2);
    await ƒS.Character.show(characters.Narrator, characters.Narrator.pose.idle, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0001);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0002);
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0003);
    // await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0003, true, "css Klasse");
    // ƒS.Speech.set(characters.Narrator, text.Narrator.T0003);

    
    await ƒS.Character.hide(characters.Narrator);
    await ƒS.update(0.5);
    ƒS.Speech.clear();
    

    let firstDialogueElementAnswer = {
      A0001: "Become a mage.",
      A0002: "Become a swordsperson.",
      A0003: "Become a healer."
    };

    // ƒS.Sound.play(sounds.click, 0.2);
    

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswer, "class");

    switch (firstDialogueElement) {
      case firstDialogueElementAnswer.A0001:
        data.score += 2;
        ƒS.Sound.play(sounds.click, 1);
        // continue writing on this path here
        await ƒS.Character.show(characters.Narrator, characters.Narrator.pose.idle, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Narrator, "Welcome Everybody! Soon you will learn amazing things and at some point you will leave this Academy as skilled mages.");
        ƒS.Character.hide(characters.Narrator);
        ƒS.Speech.clear();
        await ƒS.update(1);
        break;
      case firstDialogueElementAnswer.A0002:
        data.score += 1;
        ƒS.Sound.play(sounds.click, 1);
        await ƒS.Character.show(characters.Narrator, characters.Narrator.pose.idle, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Narrator, "Welcome, future swordsmen and swordswomen! May you all train hard.");
        ƒS.Character.hide(characters.Narrator);
        ƒS.Speech.clear();
        await ƒS.update(1);
        break;
      case firstDialogueElementAnswer.A0003:
        data.score += 3;
        ƒS.Sound.play(sounds.click, 1);
        await ƒS.Character.show(characters.Narrator, characters.Narrator.pose.idle, ƒS.positions.bottomleft);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Narrator, "Great choice! Good healers are very valuable, so be sure to always aspire great skills.");
        ƒS.Character.hide(characters.Narrator);
        ƒS.Speech.clear();
        await ƒS.update(1);
        break;
    }
    console.log("Score " + data.score);
    ƒS.Sound.fade(sounds.backgroundTheme, 0, 1);
  }
}