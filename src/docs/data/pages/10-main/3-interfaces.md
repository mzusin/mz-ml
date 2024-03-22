# TypesScript Definitions

```ts
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

    featuresSize: number;
    batchSize: number;
    weights: number[];
    bias: number;

    features: number[][];
    labels: number[];

    constructor(options: ILinearRegressionOptions);

    private static initZeroArray;
    private validateInput;
    private shuffle;
    private gradientDescent;

    fit(): (number | number[])[];
    predict(features: number[], logs?: boolean): number;
    predictBatch(featuresBatch: number[][], logs?: boolean): number[];

    // Statistics
    rSquared(): number;
    meanSquaredError(): number;
    pearson: () => number[];
}

export interface IEpochsCallbackParams {
    epoch: number;
    epochsCount: number;
    newWeights: number[];
    newBias: number;
    time: number;
}

export interface ISimpleLinearRegressionOptions{
    features: number[];
    labels: number[];

    learningRate: number;

    epochs: number;
    epochsCallback?: (params: IEpochsCallbackParams) => void;

    shuffle?: boolean;
    batchSize?: number;
}

export class SimpleLinearRegression extends LinearRegression {
    constructor(options: ISimpleLinearRegressionOptions);
}
```