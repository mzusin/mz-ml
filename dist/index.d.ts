import { ILinearRegressionOptions } from '../types/interfaces';

declare module 'mz-ml' {

    export enum Optimization {
        GradientDescent = 0,
        StochasticGradientDescent = 1
    }
    export interface ILinearRegressionOptions {
        learningRate: number;
        epochs: number;
        points: [number, number][];
        epochsCallback?: (epoch: number, epochsCount: number, gradientM: number, gradientB: number) => void;
        optimization?: Optimization;
        shuffle?: boolean;
    }

    export class SimpleLinearRegression {
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