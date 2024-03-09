import { setDecimalPlaces } from 'mz-math';

// -------------- Loss / Cost Functions -------------------

/**
 * MSE = (Sum_from_1_to_N((actual_value - predicted_value) ^ 2)) / n
 * n - number of data points
 */
export const meanSquaredError = (actualValues: number[], predictedValues: number[], decimalPlaces = Infinity) : number => {
    if(actualValues.length === 0) return 0;

    if(actualValues.length !== predictedValues.length) {
        throw new Error('Actual values count should be equal to the predicted values count');
    }

    let sum = 0;

    for(let i=0; i<actualValues.length; i++) {
        sum += (actualValues[i] - predictedValues[i]) ** 2;
    }

    return setDecimalPlaces(sum / actualValues.length, decimalPlaces);
};