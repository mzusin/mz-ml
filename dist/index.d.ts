declare module 'mz-ml' {
    export const gradientDescent: (learningRate: number, m: number, b: number, points: [number, number][]) => number[];
    export const SimpleLinearRegression: (learningRate: number, epochs: number, points: [number, number][]) => number[];
}