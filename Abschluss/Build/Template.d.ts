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
    function GPGP(): ƒS.SceneReturn;
}
declare namespace Abschluss {
    function endScene(): ƒS.SceneReturn;
}
declare namespace Abschluss {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let data: {
        Protagonist: {
            name: string;
        };
        score: {
            a: number;
        };
        ended: boolean;
        correct: boolean;
    };
    let transition: {
        wave: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sounds: {
        backgroundTheme: string;
        wavesOnRocks: string;
        bigWavesOnSandyBeach: string;
        softWavesOnSandyBeach: string;
        seagull: string;
        singleWave: string;
        softSandSteps: string;
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
        trashBeachClean: {
            name: string;
            background: string;
        };
        waterBeach: {
            name: string;
            background: string;
        };
        end: {
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
        BabyTurtle: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
    };
    let items: {
        recycleBadge: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        plasticBottles: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof throwAway;
        };
    };
    function increaseSound(): void;
    function decreaseSound(): void;
    function tickerDelay(_delay: number): void;
    function addScore(amount: number): void;
    function subtractScore(amount: number): void;
    function nvlMode(content: string[], hideSpeech: boolean, buttonClass?: string, textClass?: string): Promise<void>;
    function throwAway(_event: CustomEvent): void;
    function endSore(): string;
}
declare namespace Abschluss {
    function SceneTemplate(): ƒS.SceneReturn;
}
