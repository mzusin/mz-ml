import { meanSquaredError } from '../src/core/loss-functions';

describe('Loss/Cost Functions', () => {

    describe('MSE', () => {

        it('calculates mean squared error when actual and predicted values are provided', () => {
            const actualValues = [1, 2, 3, 4, 5];
            const predictedValues = [1.5, 2.5, 3.5, 4.5, 5.5];
            expect(meanSquaredError(actualValues, predictedValues)).toStrictEqual(0.25);
        });

        it('returns 0 when actual values array is empty', () => {
            const actualValues: number[] = [];
            const predictedValues = [1, 2, 3, 4, 5];
            expect(meanSquaredError(actualValues, predictedValues)).toBe(0);
        });

        it('throws error when actual and predicted values arrays have different lengths', () => {
            const actualValues = [1, 2, 3];
            const predictedValues = [1, 2, 3, 4];
            expect(() => meanSquaredError(actualValues, predictedValues)).toThrowError('Actual values count should be equal to the predicted values count');
        });
    });
});
