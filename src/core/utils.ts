export interface ISplitDataOptions {
    features: number[][];
    labels: number[];
    testSetSize: number;
    validationSetSize?: number;
}

export interface ISplitDataResult {
    featuresTrain: number[][];
    featuresTest: number[][];
    featuresValidation?: number[][];

    labelsTrain: number[];
    labelsTest: number[];
    labelsValidation?: number[];
}

export const splitData = (options: ISplitDataOptions) : ISplitDataResult => {

    const n = options.features.length;

    if(n <= 0 || n !== options.labels.length) {
        throw new Error('Number of features does not match the number of labels.');
    }

    if(options.testSetSize < 0 || options.testSetSize > 1) {
        throw new Error('testSetSize should be in the range (0, 1).');
    }

    if(options.validationSetSize !== undefined) {
        if(options.validationSetSize < 0 || options.validationSetSize > 1) {
            throw new Error('validationSetSize should be in the range (0, 1).');
        }

        if(options.validationSetSize + options.testSetSize > 1) {
            throw new Error('Sum of testSetSize and validationSetSize should not exceed 1.');
        }
    }

    const validationSetSizePercent = options.validationSetSize ?? 0;
    const testSetSizePercent = options.testSetSize;
    // const trainingSetSizePercent = 1 - testSetSizePercent - validationSetSizePercent;

    const validationSetSize = Math.round(n * validationSetSizePercent);
    const testSetSize = Math.round(n * testSetSizePercent);
    const trainingSetSize = n - validationSetSize - testSetSize;

    // start to end (end not included)
    const featuresTrain: number[][] = options.features.slice(0, trainingSetSize);
    const labelsTrain: number[] = options.labels.slice(0, trainingSetSize);

    const secondSplitPoint = trainingSetSize + testSetSize;
    const featuresTest: number[][] = options.features.slice(trainingSetSize, secondSplitPoint);
    const labelsTest: number[] = options.labels.slice(trainingSetSize, secondSplitPoint);

    const featuresValidation: number[][] = validationSetSize <= 0 ? [] : options.features.slice(secondSplitPoint);
    const labelsValidation: number[] = validationSetSize <= 0 ? [] : options.labels.slice(secondSplitPoint);

    return {
        featuresTrain,
        featuresTest,
        featuresValidation,
        labelsTrain,
        labelsTest,
        labelsValidation,
    }
};