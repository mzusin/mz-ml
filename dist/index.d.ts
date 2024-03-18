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

        n: number;
        batchSize: number;
        weights: number[];
        bias: number;

        features: number[][];
        labels: number[];

        constructor(options: ILinearRegressionOptions);

        private static initZeroArray;
        private shuffle;
        private gradientDescent;

        fit(): (number | number[])[];
        predict(features: number[]): number;
        predictBatch(featuresBatch: number[][]): number[];

        // Statistics
        rSquared(): number;
        meanSquaredError(): number;
        pearson: () => number[];
    }
}