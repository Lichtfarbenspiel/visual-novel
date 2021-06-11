declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let data: {
        Protagonist: {
            name: string;
        };
        state: {
            a: number;
        };
        ended: boolean;
    };
    let transition: {
        wave: {
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
        rockyBeach: {
            name: string;
            background: string;
        };
        turtleBeach: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Mermaid: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
    };
    let items: {
        item01: {
            name: string;
            description: string;
            image: string;
        };
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene02(): ƒS.SceneReturn;
}
