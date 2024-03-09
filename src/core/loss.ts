import { setDecimalPlaces } from 'mz-math';
import { ERR_NON_EQUAL_COUNT } from './errors';

// -------------- Loss / Cost Functions -------------------

/**
 * MSE = (Sum_from_1_to_N((actual_value - predicted_value) ^ 2)) / n
 * n - number of data points
 */
export const meanSquaredError = (currentWeight: number, actualValues: number[], predictedValues: number[], decimalPlaces = Infinity) : number => {
    if(actualValues.length === 0) return 0;

    if(actualValues.length !== predictedValues.length) {
        throw new Error(ERR_NON_EQUAL_COUNT);
    }

    let sum = 0;

    for(let i=0; i<actualValues.length; i++) {
        sum += (actualValues[i] - (currentWeight * predictedValues[i])) ** 2;
    }

    return setDecimalPlaces(sum / actualValues.length, decimalPlaces);
};
