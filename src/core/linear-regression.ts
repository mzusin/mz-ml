import { ILinearRegressionOptions } from '../interfaces';

/**
 * Linear Regression
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
 *
 * General Form:
 * ------------
 * y = w1*x1 + w2*x2 + … + wn*xn + b
 * [w1, ..., wn] = weights, b = bias
 *
 * Usage:
 * ------
 * const model = new LinearRegression({
 *     learningRate: 0.00001,
 *     epochs: 1000,
 *     points,
 *
 *     epochsCallback: (epoch, epochsCount, gradientM, gradientB) => {
 *         if(epoch % 50 === 0 || epoch === epochsCount) {
 *             console.log(`epochs: ${ epoch } / ${ epochsCount }, m = ${ gradientM }, b = ${ gradientB }`);
 *         }
 *     }
 * });
 *
 * const [m, b] = model.train();
 * const y = model.predict(80);
 */
export class LinearRegression {

    options: ILinearRegressionOptions;
    weights: number[];
    bias: number;

    features: number[][];
    labels: number[];
    n: number;

    batchSize: number;

    constructor(options: ILinearRegressionOptions) {
        this.options = options;

        this.features = [...this.options.features];
        this.labels = [...this.options.labels];
        this.n = this.features.length > 0 ? this.features[0].length : 0;

        // TODO: validate that features count === labels count

        // Initialize weights to zero
        this.weights = LinearRegression.initZeroArray(this.n);
        this.weights.length = this.n;
        this.weights.fill(0);

        this.bias = 0;

        this.batchSize = this.options.batchSize ?? this.features.length;
    }

    private static initZeroArray(len: number) {
        const arr: number[] = [];
        arr.length = len;
        arr.fill(0);
        return arr;
    }

    // TODO: shuffle
    /*private shuffle() {
        for (let i = this.options.points.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options.points[i], this.options.points[j]] = [this.options.points[j], this.options.points[i]];
        }
    }*/

    private gradientDescent(batchFeatures: number[][], batchLabels: number[]) : [ number[], number ] {

        const mGradientSums = LinearRegression.initZeroArray(this.n);
        let bGradientSum = 0;

        for (let i = 0; i < batchFeatures.length; i++) {

            const _features: number[] = batchFeatures[i];

            const actualValue = batchLabels[i];
            const predictedValue = this.predict(_features);
            const diff = actualValue - predictedValue;

            // dE/dm = (-2/n) * sum_from_0_to_n(x * (actual_value - (mx + b)))
            for (let j = 0; j < this.n; j++) {
                mGradientSums[j] += -2 * _features[j] * diff;
            }

            // dE/db = (-2/n) * sum_from_0_to_n(actual_value - (mx + b))
            bGradientSum += -2 * diff;
        }

        // Update weights and bias using learning rate
        const newWeights = [];

        for(let i=0; i<this.weights.length; i++) {
            const _weight = this.weights[i];

            // new_m = current_m - learning_rate * dE/dm
            const gradientM = _weight - (this.options.learningRate / this.batchSize) * mGradientSums[i];
            newWeights.push(gradientM);
        }

        // new_b = current_b - learning_rate * dE/db
        const newBias = this.bias - (this.options.learningRate / this.batchSize) * bGradientSum;

        return [newWeights, newBias];
    }

    train() {
        for(let i = 0; i < this.options.epochs; i++) {

            // TODO: shuffle
            /*if (this.options.shuffle) {
                this.shuffle();
            }*/

            // Split data into mini-batches
            for (let j = 0; j < this.features.length; j += this.batchSize) {

                const batchFeatures = this.features.slice(j, j + this.batchSize);
                const batchLabels = this.labels.slice(j, j + this.batchSize);

                const [newWeights, newBias] = this.gradientDescent(batchFeatures, batchLabels);

                if (typeof this.options.epochsCallback === 'function') {
                    this.options.epochsCallback(i, this.options.epochs, newWeights, newBias);
                }

                this.weights = newWeights;
                this.bias = newBias;
            }
        }

        return [this.weights, this.bias];
    }

    /**
     * y = w1*x1 + w2*x2 + … + wn*xn + b
     */
    predict(features: number[]) {

        if (features.length !== this.weights.length) {
            throw new Error('Number of features does not match the number of weights.');
        }

        // Calculate the dot product of features and weights and add bias
        // return this.m * x + this.b;
        let prediction = this.bias;

        for (let i = 0; i < features.length; i++) {
            prediction += features[i] * this.weights[i];
        }

        return prediction;
    }
}