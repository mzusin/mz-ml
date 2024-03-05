export interface ILinearRegression {
    train: (features: number[], targets: number[]) => void;
    getYIntercept: () => number;
    getSlope: () => number;
    predict: (feature: number) => number;
}