declare namespace Abschluss {
    function RockyBeach(): ƒS.SceneReturn;
}
declare namespace Abschluss {
    function TurtleBeach(): ƒS.SceneReturn;
}
declare namespace Abschluss {
    function TrashBeach(): ƒS.SceneReturn;
}
declare namespace Abschluss {
    function WaterBeach(): ƒS.SceneReturn;
}
declare namespace Abschluss {
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
        trashBeach: {
            name: string;
            background: string;
        };
        waterBeach: {
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
                floating: string;
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
    function increaseSound(): void;
    function decreaseSound(): void;
    function tickerDelay(_delay: number): void;
}
declare namespace Abschluss {
    function SceneTemplate(): ƒS.SceneReturn;
}
