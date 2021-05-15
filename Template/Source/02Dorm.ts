namespace Template {
  export async function Dorm(): ƒS.SceneReturn {
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

    ƒS.Speech.setTickerDelays(50);
    await ƒS.Location.show(locations.dorm);
    await ƒS.update(2);
    await ƒS.Character.show(data.Protagonist, data.Protagonist.pose.idle, ƒS.positionPercent(1, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0000);
    await ƒS.Character.hide(data.Protagonist);
    ƒS.Speech.clear();
    
    let choice = {
      C0000: "Allison",
      C0001: "Joe"
    };


    console.log("Score " + data.score);
    let userInput = await ƒS.Menu.getInput(choice); 
    
    switch (userInput) {
      case choice.C0000:
        // talk to Allison
        ƒS.Sound.play(sounds.click, 1);
        await ƒS.Character.show(characters.Allison, characters.Allison.pose.idle,  ƒS.positionPercent(60, 100));      
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Allison, text.Allison.T0000);
        await ƒS.Speech.tell(characters.Allison, text.Allison.T0001);

        let choice2 = {
          C0000: "friendly",
          C0001: "mean"
        };
        let userInput2 = await ƒS.Menu.getInput(choice2);
  
        if (userInput2 == choice2.C0000) {
          characters.Allison.friendScore = 1;
          data.score += 1;
          await ƒS.Character.show(data.Protagonist, data.Protagonist.pose.idle,  ƒS.positionPercent(1, 100));      
          await ƒS.update(0.5);
          await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0001);
          await ƒS.Character.hide(data.Protagonist);
          await ƒS.Character.hide(characters.Allison);
          ƒS.Speech.clear();
          break;
        } else if (userInput2 == choice2.C0001) {
          characters.Allison.friendScore = -1;
          data.score -= 1;
          await ƒS.Character.show(data.Protagonist, data.Protagonist.pose.idle,  ƒS.positionPercent(1, 100));      
          await ƒS.update(0.5);
          await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0001);
          await ƒS.Character.hide(data.Protagonist);
          await ƒS.Character.hide(characters.Allison);
          ƒS.Speech.clear();
          break;
        }
        break;
      case choice.C0001:
        // Talk to Joe
        ƒS.Sound.play(sounds.click, 1);
        await ƒS.Character.show(characters.Joe, characters.Joe.pose.idle,  ƒS.positionPercent(60, 100));      
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.Joe, text.Joe.T0000);
  
        let choice3 = {
          C0000: "friendly",
          C0001: "mean"
        };
        let userInput3 = await ƒS.Menu.getInput(choice3);
  
        if (userInput3 == choice3.C0000) {
          characters.Joe.friendScore += 1;
          data.score += 1;
          await ƒS.Character.show(data.Protagonist, data.Protagonist.pose.idle,  ƒS.positionPercent(1, 100));      
          await ƒS.update(0.5);
          await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0001);
        
          await ƒS.Character.hide(data.Protagonist);
          await ƒS.update(0.5);
          await ƒS.Character.hide(characters.Joe);
          await ƒS.update(0.5);
          ƒS.Speech.clear();
          break;

        } else if (userInput3 == choice3.C0001) {
          characters.Joe.friendScore -= 1;
          data.score -= 1;
          await ƒS.Character.show(data.Protagonist, data.Protagonist.pose.idle,  ƒS.positionPercent(1, 100));      
          await ƒS.update(0.5);
          await ƒS.Speech.tell(data.Protagonist, text.Protagonist.T0001);
          
          await ƒS.Character.hide(data.Protagonist);
          await ƒS.update(0.5);
          await ƒS.Character.hide(characters.Joe);
          await ƒS.update(0.5);
          ƒS.Speech.clear();
          break;
        }
        break;

    }
  }
}