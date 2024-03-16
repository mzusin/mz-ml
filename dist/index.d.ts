declare module 'mz-ml' {
    export interface ILinearRegressionOptions {
        learningRate: number;
        epochs: number;
        points: [number, number][];
        epochsCallback?: (epoch: number, epochsCount: number, gradientM: number, gradientB: number) => void;
    }

    export class SimpleLinearRegression {
        options: ILinearRegressionOptions;
        m: number;
        b: number;
        constructor(options: ILinearRegressionOptions);
        private gradientDescent;
        train(): number[];
        predict(x: number): number;
    }
}