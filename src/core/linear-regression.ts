/**
 * Simple Linear Regression
 *
 * Mean Squared Error (MSE): Error function = Loss function
 * E = (1/n) * sum_from_0_to_n((actual_value - predicted_value)^2)
 * E = (1/n) * sum_from_0_to_n((actual_value - (mx + b))^2)
 * ---------------------------------------------------------
 * Goal: Minimize the error function - find (m, b) with the lowest possible E.
 * How:
 *
 * - Take partial derivative with respect m and also with respect b.
 *   This helps to find the "m" that maximally increase E,
 *   and "b" that maximally increase E (the steepest ascent).
 *
 * - After we found them, we get the opposite direction
 *   to find the way to decrease E (the steepest descent).
 * ---------------------------------------------------------
 *
 * How to calculate partial derivative of "m"?
 * dE/dm = (1/n) * sum_from_0_to_n(2 * (actual_value - (mx + b)) * (-x))
 * dE/dm = (-2/n) * sum_from_0_to_n(x * (actual_value - (mx + b)))
 * ---------------------------------------------------------
 *
 * How to calculate partial derivative of "b"?
 * dE/db = (-2/n) * sum_from_0_to_n(actual_value - (mx + b))
 * ---------------------------------------------------------
 *
 * After the derivatives are found (the steepest ascent)
 * we need to find the steepest descent:
 *
 * new_m = current_m - learning_rate * dE/dm
 * new_b = current_b - learning_rate * dE/db
 */
export const gradientDescent = (learningRate: number, m: number, b: number, points: [number, number][]) => {

    let mGradientSum = 0;
    let bGradientSum = 0;
    const n = points.length;

    for(let i=0; i<n; i++) {
        const [x, actualValue] = points[i];
        const predictedValue = m * x + b;

        const diff = (-2/n) * (actualValue - predictedValue);

        // dE/dm = (-2/n) * sum_from_0_to_n(x * (actual_value - (mx + b)))
        mGradientSum += x * diff;

        // dE/db = (-2/n) * sum_from_0_to_n(actual_value - (mx + b))
        bGradientSum += diff;
    }

    // new_m = current_m - learning_rate * dE/dm
    const gradientM = m - learningRate * mGradientSum;

    // new_b = current_b - learning_rate * dE/db
    const gradientB  = b - learningRate * bGradientSum;

    return [gradientM, gradientB];
};

/**
 * Simple Linear Regression
 * -----------------------------
 * Learning rate can be 0.0001
 * Epochs can be 1000
 */
export const SimpleLinearRegression = (learningRate: number, epochs: number, points: [number, number][]) => {
    let m = 0;
    let b = 0;

    for(let i=0; i<epochs; i++) {
        const [gradientM, gradientB] = gradientDescent(learningRate, m, b, points);
        m = gradientM;
        b = gradientB;
    }

    return [m, b];
};

/*const getPoints = () => {

    // study time ---> exam score
    return [
        [10, 70],
        [12, 75],
        [8, 54],
        [40, 99],
        [1, 11],
    ];
};*/
