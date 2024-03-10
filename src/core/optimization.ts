import { setDecimalPlaces } from 'mz-math';
import { ERR_NON_EQUAL_COUNT } from './errors';

/**
 * The value 0.0001 is a small increment used to approximate the derivative of the loss function.
 * This technique is called "finite differences or numerical differentiation".
 * The purpose of this approximation is to estimate the gradient of the loss function
 * at a specific point (currentWeight) by evaluating the loss function at two nearby points
 * (currentWeight + 0.0001 and currentWeight) and computing the difference.
 * The division by 0.0001 at the end is used to normalize the difference
 * to obtain the approximate derivative.
 * It's essentially equivalent to taking the limit as the difference approaches zero in the definition of the derivative.
 * This technique is commonly used in numerical optimization algorithms, like Gradient Descent,
 * when the analytical expression for the gradient of the loss function
 * is not available or difficult to compute directly.
 */
const DERIVATIVE_STEP_SIZE = 0.0001;

export const gradientDescent = (
    currentWeight: number,
    learningRate: number,
    actualValues: number[],
    predictedValues: number[],
    lossFunction: (currentWeight: number, actualValues: number[], predictedValues: number[]) => number,
    decimalPlaces = Infinity) : number => {

    if(actualValues.length === 0) return 0;

    if(actualValues.length !== predictedValues.length) {
        throw new Error(ERR_NON_EQUAL_COUNT);
    }

    const loss1 = lossFunction(currentWeight + DERIVATIVE_STEP_SIZE, actualValues, predictedValues);
    const loss2 = lossFunction(currentWeight, actualValues, predictedValues);

    const gradient = (loss1 - loss2) / DERIVATIVE_STEP_SIZE;
    return setDecimalPlaces(currentWeight - learningRate * gradient, decimalPlaces);
};

