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
 */
export class LinearRegression {

    options: ILinearRegressionOptions;
    weights: number[];
    bias: number;

    features: number[][];
    labels: number[];
    featuresSize: number;

    batchSize: number;

    constructor(options: ILinearRegressionOptions) {
        this.options = options;

        this.features = JSON.parse(JSON.stringify(this.options.features));
        this.labels = JSON.parse(JSON.stringify(this.options.labels));
        this.featuresSize = this.features.length > 0 ? this.features[0].length : 0;

        if(!this.validateInput()) {
            throw new Error('The input is not valid. Number of features should match the number of labels, and all features should have the same size.');
        }

        // Initialize weights to zero
        this.weights = LinearRegression.initZeroArray(this.featuresSize);
        this.bias = 0;

        this.batchSize = this.options.batchSize ?? this.features.length;
    }

    private validateInput(): boolean {
        if(this.features.length <= 0 || this.features.length !== this.labels.length) return false;
        const _featuresSize = this.features[0].length;

        for(const feature of this.features) {
            if(feature.length !== _featuresSize) return false;
        }

        return true;
    }

    private static initZeroArray(len: number) {
        const arr: number[] = [];
        arr.length = len;
        arr.fill(0);
        return arr;
    }

    private shuffle() {
        const indices: number[] = [];
        for(let i=0; i<this.featuresSize; i++) {
            indices.push(i);
        }

        for (let i = this.features.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }

        for (let i = this.features.length - 1; i > 0; i--) {
            [this.features[i], this.features[indices[i]]] = [this.features[indices[i]], this.features[i]];
            [this.labels[i], this.labels[indices[i]]] = [this.labels[indices[i]], this.labels[i]];
        }
    }

    private gradientDescent(batchFeatures: number[][], batchLabels: number[]) : [ number[], number ] {

        const mGradientSums = LinearRegression.initZeroArray(this.featuresSize);
        let bGradientSum = 0;

        for (let i = 0; i < batchFeatures.length; i++) {

            const _features: number[] = batchFeatures[i];

            const actualValue = batchLabels[i];
            const predictedValue = this.predict(_features);
            const diff = actualValue - predictedValue;

            // dE/dm = (-2/n) * sum_from_0_to_n(x * (actual_value - (mx + b)))
            for (let j = 0; j < this.featuresSize; j++) {
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

    fit() {
        const startTime = performance.now();

        for(let i = 0; i < this.options.epochs; i++) {

            if (this.options.shuffle) {
                this.shuffle();
            }

            // Split data into mini-batches
            for (let j = 0; j < this.features.length; j += this.batchSize) {

                const batchFeatures = this.features.slice(j, j + this.batchSize);
                const batchLabels = this.labels.slice(j, j + this.batchSize);

                const [newWeights, newBias] = this.gradientDescent(batchFeatures, batchLabels);

                if (typeof this.options.epochsCallback === 'function') {
                    const endTime = performance.now();
                    this.options.epochsCallback({
                        epoch: i,
                        epochsCount: this.options.epochs,
                        newWeights,
                        newBias,
                        time: endTime - startTime,
                    });
                }

                this.weights = newWeights;
                this.bias = newBias;
            }
        }

        console.log('------------', Math.fround)

        return [this.weights, this.bias];
    }

    /**
     * y = w1*x1 + w2*x2 + … + wn*xn + b
     */
    predict(features: number[], logs?: boolean) : number {

        if (features.length !== this.weights.length) {
            throw new Error('Number of features does not match the number of weights.');
        }

        const startTime = performance.now();

        // Calculate the dot product of features and weights and add bias
        // return this.m * x + this.b;
        let prediction = this.bias;

        for (let i = 0; i < features.length; i++) {
            prediction += features[i] * this.weights[i];
        }

        if(logs) {
            console.log(`Prediction = ${ prediction }, ${ performance.now() - startTime } ms`);
        }

        return prediction;
    }

    predictBatch(featuresBatch: number[][], logs?: boolean) : number[] {
        const predictions: number[] = [];
        const startTime = performance.now();

        for(const batch of featuresBatch) {
            predictions.push(this.predict(batch));
        }

        if(logs) {
            console.log(`Predictions = ${ predictions }, ${ performance.now() - startTime } ms`);
        }

        return predictions;
    }

    /**
     * R-squared is the coefficient of determination value,
     * which measures the goodness of fit of the regression line to the data.
     * A value close to 1 indicates a perfect fit.
     * R-Squared range: [0, 1]
     *
     * Formula:
     * --------
     * R^2 = 1 - (residualSumOfSquares / totalSumOfSquares)
     * RSS (Residual Sum of Squares) is the sum of squared differences
     *      between the actual and predicted values
     * TSS (Total Sum of Squares) is the sum of squared differences between
     *      the actual values and the mean of the actual values
     */
    rSquared() {
        let residualSumOfSquares = 0; // rss
        let totalSumOfSquares = 0; // tss

        const meanOfActualValues = this.labels.length <= 0 ? 0 :
            this.labels.reduce((sum, x) => sum + x) / this.labels.length; // yMean

        for (let i = 0; i < this.features.length; i++) {
            const actualValue = this.labels[i];
            const predictedValue = this.predict(this.features[i]);

            residualSumOfSquares += (actualValue - predictedValue) ** 2;
            totalSumOfSquares += (actualValue - meanOfActualValues) ** 2;
        }

        return 1 - (residualSumOfSquares / totalSumOfSquares);
    }

    /**
     * MSE = (1/n) * sum_from_0_to_n((actual_value - (mx + b))^2)
     * The ideal value of Mean Squared Error (MSE) is 0.
     * Achieving an MSE of 0 would mean that the model perfectly predicts the target variable
     * for every data point in the training set. However, it's important to note
     * that achieving an MSE of exactly 0 is extremely rare and often unrealistic, especially with real-world data.
     */
    meanSquaredError() {
        if(this.features.length <= 0) return 0;

        let mse = 0;

        for (let i = 0; i < this.features.length; i++) {
            const actualValue = this.labels[i];
            const predictedValue = this.predict(this.features[i]);

            mse += (actualValue - predictedValue) ** 2;
        }

        mse /= this.features.length;

        return mse;
    }

    /**
     * Compute the Pearson correlation coefficient.
     * --------------------------------------------
     * It is a statistical measure that quantifies the strength and direction of the linear relationship
     * between two variables. It's commonly used to assess the strength of association
     * between two continuous variables.
     *
     * Range [-1, 1]
     * r=1 indicates a perfect positive linear relationship,
     *      meaning that as one variable increases, the other variable increases proportionally.
     *
     * r=−1 indicates a perfect negative linear relationship, meaning that as one variable increases,
     *      the other variable decreases proportionally.
     *
     * r= 0 indicates no linear relationship between the variables.
     */
    pearson = () : number[] => {
        if (this.features.length <= 0 || this.labels.length <= 0) return [];

        const pearsonCoefficients: number[] = [];
        const yMean = this.labels.reduce((sum, y) => sum + y, 0) / this.labels.length;

        for (let featureIndex = 0; featureIndex < this.featuresSize; featureIndex++) {
            let sumXY = 0; // Sum of the product of (x - xMean) and (y - yMean)
            let sumX2 = 0; // Sum of squared differences between x and xMean
            let sumY2 = 0; // Sum of squared differences between y and yMean

            const xValues = this.features.map(feature => feature[featureIndex]);
            const xMean = xValues.reduce((sum, x) => sum + x, 0) / xValues.length;

            for (let i = 0; i < this.features.length; i++) {
                const x = this.features[i][featureIndex];
                const y = this.labels[i];

                sumXY += (x - xMean) * (y - yMean);
                sumX2 += (x - xMean) ** 2;
                sumY2 += (y - yMean) ** 2;
            }

            pearsonCoefficients.push((sumX2 === 0 || sumY2 === 0) ? 0 : (sumXY / Math.sqrt(sumX2 * sumY2)));
        }

        return pearsonCoefficients;
    }
}