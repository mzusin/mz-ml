import { gradientDescent } from '../src/core/optimization';
import { meanSquaredError } from '../src/core/loss';

describe('gradientDescent', () => {

    it('returns 0 when actual values array is empty', () => {

        const actualValues: number[] = [];
        const predictedValues: number[] = [];
        const currentWeight = 1.0;
        const learningRate = 0.1;
        const decimalPlaces = 2;

        const result = gradientDescent(currentWeight, learningRate, actualValues, predictedValues, meanSquaredError, decimalPlaces);
        expect(result).toBe(0);
    });

    it('throws error when actual and predicted values arrays have different lengths', () => {
        // Define sample actual and predicted values with different lengths
        const actualValues = [1, 2, 3];
        const predictedValues = [1, 2, 3, 4];
        const currentWeight = 1.0;
        const learningRate = 0.1;
        const decimalPlaces = 2;

        expect(() => gradientDescent(currentWeight, learningRate, actualValues, predictedValues, meanSquaredError, decimalPlaces)).toThrowError();
    });

    it('calculates gradient and updates weight correctly - 1', () => {
        const actualValues = [1, 2, 3];
        const predictedValues = [1, 2, 3];
        const currentWeight = 1;
        const learningRate = 0.1;
        const decimalPlaces = 2;

        const result = gradientDescent(currentWeight, learningRate, actualValues, predictedValues, meanSquaredError, decimalPlaces);
        expect(result).toStrictEqual(1);
    });

    it('calculates gradient and updates weight correctly - 2', () => {
        const actualValues = [1, 2, 3];
        const predictedValues = [2, 3, 4];
        const currentWeight = 1;
        const learningRate = 0.1;
        const decimalPlaces = 2;

        const result = gradientDescent(currentWeight, learningRate, actualValues, predictedValues, meanSquaredError, decimalPlaces);
        expect(result).toStrictEqual(0.4);
    });
});