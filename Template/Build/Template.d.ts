declare namespace Template {
    function Text(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        click: string;
    };
    let locations: {
        city: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Protagonist: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                idle: string;
                happy: string;
            };
        };
        Joe: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                idle: string;
                happy: string;
            };
        };
    };
}
