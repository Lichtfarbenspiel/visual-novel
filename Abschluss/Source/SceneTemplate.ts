namespace Abschluss {
    export async function SceneTemplate(): ƒS.SceneReturn {
        console.log("Template scene starting");

        tickerDelay(30);

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

        let userInput = await ƒS.Menu.getInput(templateChoices, "class");

        await ƒS.Location.show(locations.turtleBeach);
        await ƒS.update(transition.wave.duration, transition.wave.alpha, transition.wave.edge);
        await ƒS.update(0.5);
    }
}