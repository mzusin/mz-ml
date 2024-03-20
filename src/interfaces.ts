export interface ILinearRegressionOptions {
    features: number[][];
    labels: number[];

    learningRate: number;

    epochs: number;
    epochsCallback?: (params: IEpochsCallbackParams) => void;

    shuffle?: boolean; // shuffle data on each epoch
    batchSize?: number;
}

export interface IEpochsCallbackParams {
    epoch: number;
    epochsCount: number;
    newWeights: number[];
    newBias: number;
    time: number; // milliseconds
}