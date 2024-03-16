export enum Optimization {
    GradientDescent = 0,
    StochasticGradientDescent = 1,
}

export interface ILinearRegressionOptions {
    learningRate: number;
    epochs: number;
    points: [number, number][];
    epochsCallback?: (epoch: number, epochsCount: number, gradientM: number, gradientB: number) => void;
    optimization?: Optimization;
    shuffle?: boolean;
}