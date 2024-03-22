import { splitData } from '../src/core/utils';

describe('Split Data', () => {

    it('Throws an error if features array is empty.', () => {
        const testData = {
            features: [],
            labels: [1, 2, 3],
            testSetSize: 0.2,
        };

        expect(() => splitData(testData)).toThrow('Number of features does not match the number of labels.');
    });

    it('Throws an error if lengths of features and labels arrays do not match.', () => {
        const testData = {
            features: [[1], [2], [3]],
            labels: [1, 2],
            testSetSize: 0.2,
        };

        expect(() => splitData(testData)).toThrow('Number of features does not match the number of labels.');
    });

    it('Does not throw an error if features and labels arrays have the same length.', () => {
        const testData = {
            features: [[1], [2], [3]],
            labels: [1, 2, 3],
            testSetSize: 0.2,
        };

        expect(() => splitData(testData)).not.toThrow();
    });

    it('Throws an error if testSetSize < 0.', () => {
        const testData = {
            features: [[1], [2], [3]],
            labels: [1, 2, 3],
            testSetSize: -1,
        };

        expect(() => splitData(testData)).toThrow('testSetSize should be in the range (0, 1).');
    });

    it('Throws an error if testSetSize > 1.', () => {
        const testData = {
            features: [[1], [2], [3]],
            labels: [1, 2, 3],
            testSetSize: 1.1,
        };

        expect(() => splitData(testData)).toThrow('testSetSize should be in the range (0, 1).');
    });

    it('Throws an error if validationSetSize < 0.', () => {
        const testData = {
            features: [[1], [2], [3]],
            labels: [1, 2, 3],
            testSetSize: 0.5,
            validationSetSize: -1,
        };

        expect(() => splitData(testData)).toThrow('validationSetSize should be in the range (0, 1).');
    });

    it('Throws an error if validationSetSize > 1.', () => {
        const testData = {
            features: [[1], [2], [3]],
            labels: [1, 2, 3],
            testSetSize: 0.5,
            validationSetSize: 1.5,
        };

        expect(() => splitData(testData)).toThrow('validationSetSize should be in the range (0, 1).');
    });

    it('Throws an error if testSetSize + validationSetSize > 1.', () => {
        const testData = {
            features: [[1], [2], [3]],
            labels: [1, 2, 3],
            testSetSize: 0.5,
            validationSetSize: 0.6,
        };

        expect(() => splitData(testData)).toThrow('Sum of testSetSize and validationSetSize should not exceed 1.');
    });

    it('testSetSize = 0.2', () => {
        const testData = {
            features: [[1], [2], [3]],
            labels: [1, 2, 3],
            testSetSize: 0.2,
        };

        const result = splitData(testData);

        expect(result.featuresTrain).toStrictEqual([[1], [2]]);
        expect(result.labelsTrain).toStrictEqual([1, 2]);
        expect(result.featuresTest).toStrictEqual([[3]]);
        expect(result.labelsTest).toStrictEqual([3]);
    });

    it('8 items, testSetSize = 0.2, validationSetSize = 0.1', () => {
        const testData = {
            features: [[17], [170], [80], [29], [124], [28], [200], [33]],
            labels: [91,66,58,9,24,84,126,14],
            testSetSize: 0.2,
            validationSetSize: 0.1,
        };

        const result = splitData(testData);

        expect(result.featuresTrain).toStrictEqual([[17], [170], [80], [29], [124]]);
        expect(result.labelsTrain).toStrictEqual([91, 66, 58, 9, 24]);
        expect(result.featuresTest).toStrictEqual([[28], [200]]);
        expect(result.labelsTest).toStrictEqual([84, 126]);
        expect(result.featuresValidation).toStrictEqual([[33]]);
        expect(result.labelsValidation).toStrictEqual([14]);
    });

    it('9 items, testSetSize = 0.3, validationSetSize = 0.2', () => {
        const testData = {
            features: [[17], [170], [80], [29], [124], [28], [200], [33], [12]],
            labels: [91,66,58,9,24,84,126,14,9],
            testSetSize: 0.3,
            validationSetSize: 0.2,
        };

        const result = splitData(testData);

        expect(result.featuresTrain).toStrictEqual([[17], [170], [80], [29]]);
        expect(result.labelsTrain).toStrictEqual([91,66,58,9]);
        expect(result.featuresTest).toStrictEqual([[124], [28], [200]]);
        expect(result.labelsTest).toStrictEqual([24,84,126]);
        expect(result.featuresValidation).toStrictEqual([[33], [12]]);
        expect(result.labelsValidation).toStrictEqual([14,9]);
    });
});