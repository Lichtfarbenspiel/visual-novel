namespace Template {
  export async function Class(): ƒS.SceneReturn {
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

    ƒS.Speech.setTickerDelays(100);
    await ƒS.Location.show(locations.class);
    await ƒS.update(2);
    await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.idle, ƒS.positionPercent(1, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0000);
    await ƒS.update(0.5);
    await ƒS.Character.hide(characters.Protagonist);
    ƒS.Speech.clear();
    
    let choice = {
      C0000: "Allison",
      C0001: "Joe"
    };

    let userInput = await ƒS.Menu.getInput(choice);

    switch (userInput) {
      case choice.C0000:
        // talk to Allison
        ƒS.Sound.play(sounds.click, 1);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.idle, ƒS.positionPercent(1, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0001);
        await ƒS.Character.show(characters.Allison, characters.Allison.pose.idle,  ƒS.positionPercent(60, 100)); 
        await ƒS.update(0.5);

        if (characters.Allison.friendScore > 0) {
          await ƒS.Speech.tell(characters.Allison, text.Allison.T0000);
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
        } else {
          await ƒS.Speech.tell(characters.Allison, text.Allison.T0001);
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
        }
      
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.update(0.5);
        await ƒS.Character.hide(characters.Allison);
        await ƒS.update(0.5);
        ƒS.Speech.clear();
        break;
      case choice.C0001:
        // Talk to Joe
        ƒS.Sound.play(sounds.click, 1);
        await ƒS.Character.show(characters.Protagonist, characters.Protagonist.pose.idle, ƒS.positionPercent(1, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0002);
        await ƒS.Character.show(characters.Joe, characters.Joe.pose.idle,  ƒS.positionPercent(60, 100)); 
        await ƒS.update(0.5);

        if (characters.Joe.friendScore > 0) {
          await ƒS.Speech.tell(characters.Joe, text.Joe.T0000);
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0003);
        } else {
          await ƒS.Speech.tell(characters.Joe, text.Joe.T0001);
          await ƒS.Speech.tell(characters.Protagonist, text.Protagonist.T0004);
        }
        
        await ƒS.Character.hide(characters.Protagonist);
        await ƒS.update(0.5);
        await ƒS.Character.hide(characters.Joe);
        await ƒS.update(0.5);
        ƒS.Speech.clear();
        break;
    }
  }
}    