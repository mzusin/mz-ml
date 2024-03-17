export interface ILinearRegressionOptions {
    features: number[][];
    labels: number[];

    learningRate: number;

    epochs: number;
    epochsCallback?: (epoch: number, epochsCount: number, newWeights: number[], newBias: number) => void;

    shuffle?: boolean; // shuffle data on each epoch
    batchSize?: number;
}