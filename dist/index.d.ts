declare module 'mz-ml' {

    export interface ILinearRegressionOptions {
        features: number[][];
        labels: number[];
        learningRate: number;
        epochs: number;
        epochsCallback?: (epoch: number, epochsCount: number, newWeights: number[], newBias: number) => void;
        shuffle?: boolean;
        batchSize?: number;
    }

    export class LinearRegression {
        options: ILinearRegressionOptions;
        weights: number[];
        bias: number;
        features: number[][];
        labels: number[];
        n: number;
        batchSize: number;
        constructor(options: ILinearRegressionOptions);
        private static initZeroArray;
        private shuffle;
        private gradientDescent;
        train(): (number | number[])[];
        predict(features: number[]): number;
    }
}