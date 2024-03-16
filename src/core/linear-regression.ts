import { ILinearRegressionOptions, Optimization } from '../interfaces';

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
    m: number;
    b: number;

    constructor(options: ILinearRegressionOptions) {
        this.options = options;
        this.options.points = [...this.options.points];
        this.m = 0;
        this.b = 0;
    }

    private shuffle() {
        for (let i = this.options.points.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.options.points[i], this.options.points[j]] = [this.options.points[j], this.options.points[i]];
        }
    }

    private gradientDescent(batch: [number, number][]) {

        let mGradientSum = 0;
        let bGradientSum = 0;
        const batchSize = batch.length;

        for (const [x, actualValue] of batch) {

            const predictedValue = this.m * x + this.b;

            const diff = actualValue - predictedValue;

            // dE/dm = (-2/n) * sum_from_0_to_n(x * (actual_value - (mx + b)))
            mGradientSum += -2 * x * diff;

            // dE/db = (-2/n) * sum_from_0_to_n(actual_value - (mx + b))
            bGradientSum += -2 * diff;
        }

        // new_m = current_m - learning_rate * dE/dm
        const gradientM = this.m - (this.options.learningRate / batchSize) * mGradientSum;

        // new_b = current_b - learning_rate * dE/db
        const gradientB = this.b - (this.options.learningRate / batchSize) * bGradientSum;

        return [gradientM, gradientB];
    }

    private getBatchSize() {
        switch (this.options.optimization) {
            case Optimization.StochasticGradientDescent: {
                return 1;
            }

            case Optimization.MiniBatchGradientDescent: {
                return this.options.batchSize ?? this.options.points.length;
            }

            default: {
                return this.options.points.length;
            }
        }
    }

    train() {
        const batchSize = this.getBatchSize();

        for(let i = 0; i < this.options.epochs; i++) {

            if (this.options.shuffle) {
                this.shuffle();
            }

            for (let j = 0; j < this.options.points.length; j += batchSize) {
                const batch = this.options.points.slice(j, j + batchSize);
                const [gradientM, gradientB] = this.gradientDescent(batch);

                if (typeof this.options.epochsCallback === 'function') {
                    this.options.epochsCallback(i, this.options.epochs, gradientM, gradientB);
                }

                this.m = gradientM;
                this.b = gradientB;
            }
        }

        return [this.m, this.b];
    }

    predict(x: number) {
        return this.m * x + this.b;
    }
}