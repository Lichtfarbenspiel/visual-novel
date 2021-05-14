declare namespace Template {
    function Text(): ƒS.SceneReturn;
}
declare namespace Template {
    function Dorm(): ƒS.SceneReturn;
}
declare namespace Template {
    function Class(): ƒS.SceneReturn;
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
    let sounds: {
        backgroundTheme: string;
        click: string;
    };
    let locations: {
        hall: {
            name: string;
            background: string;
        };
        dorm: {
            name: string;
            background: string;
        };
        class: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                idle: string;
            };
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
            friendScore: number;
        };
        Allison: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                idle: string;
                happy: string;
            };
            friendScore: number;
        };
    };
}
