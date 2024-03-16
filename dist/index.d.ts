declare module 'mz-ml' {

    export enum Optimization {
        GradientDescent = 0,
        StochasticGradientDescent = 1,
        MiniBatchGradientDescent = 2,

    }
    export interface ILinearRegressionOptions {
        learningRate: number;
        epochs: number;
        points: [number, number][];
        epochsCallback?: (epoch: number, epochsCount: number, gradientM: number, gradientB: number) => void;
        optimization?: Optimization;
        shuffle?: boolean;
        batchSize?: number;
    }

    export class LinearRegression {
        options: ILinearRegressionOptions;
        m: number;
        b: number;
        constructor(options: ILinearRegressionOptions);
        private shuffle;
        private gradientDescent;
        private stochasticGradientDescent;
        train(): number[];
        predict(x: number): number;
    }
}