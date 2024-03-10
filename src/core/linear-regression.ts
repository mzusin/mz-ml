import { ILinearRegression } from '../types';
import { gradientDescent } from './optimization';
import { meanSquaredError } from './loss';

/**
 * Usage:
 * --------
 * const regression = LinearRegression(0.01, 1000);
 *
 * const x = [1, 2, 3, 4, 5];
 * const y = [2, 4, 5, 4, 5];
 * regression.train(x, y);
 *
 * console.log('Theta0:', regression.getYIntercept());
 * console.log('Theta1:', regression.getSlope());
 * console.log('Prediction for x=6:', regression.predict(6));
 */
export const LinearRegression = (learningRate: number, iterations: number) : ILinearRegression => {

    let yIntercept = 0;
    let slope = 0;

    /**
     * Gradient descent is an optimization algorithm used to minimize a cost function
     * (also known as loss function).
     * The goal of gradient descent is to iteratively adjust the parameters (yIntercept and slope in this case)
     * to minimize this cost function.
     */
    const gradientDescentOptimization = (features: number[], targets: number[]) => {
        let yInterceptSum = 0;
        let slopeSum = 0;
        const n = features.length;

        for(let i=0; i<n; i++) {

            const prediction = predict(features[i]);
            const error = prediction - targets[i];

            yInterceptSum += error;
            slopeSum += error * features[i];
        }

        const yInterceptGradient = (2 / n) * yInterceptSum;
        const slopeGradient = (2 / n) * slopeSum;

        yIntercept -= learningRate * yInterceptGradient;
        slope -= learningRate * slopeGradient;
    };

    const train = (features: number[], targets: number[]) => {
        // TODO: check that x and y has the same length
        // TODO: batches, epochs

        for(let i=0; i<iterations; i++) {
            gradientDescentOptimization(features, targets);
        }
    };

    /**
     * f(x) = b + m⋅x
     */
    const predict = (feature: number) => {
        return yIntercept + slope * feature;
    };

    const getYIntercept = () => {
        return yIntercept;
    }

    const getSlope = () => {
        return slope;
    };

    return {
        train,
        predict,
        getYIntercept,
        getSlope,
    }
};

/*export const LinearRegression1 = (learningRate: number, iterations: number) => {
    let yIntercept = 0;
    let slope = 0;

    const train = (features: number[], targets: number[]) => {
        for (let i = 0; i < iterations; i++) {
            gradientDescentStep(features, targets);
        }
    };

    const gradientDescentStep = (features: number[], targets: number[]) => {
        const gradientYIntercept = gradientDescent(yIntercept, learningRate, targets, features, meanSquaredError);
        const gradientSlope = gradientDescent(slope, learningRate, targets, features, meanSquaredError);

        yIntercept -= gradientYIntercept;
        slope -= gradientSlope;
    };

    const predict = (feature: number) => {
        return yIntercept + slope * feature;
    };

    return {
        train,
        predict
    };
};*/

/*
export const LinearRegression2 = (learningRate: number, iterations: number) => {
    let yIntercept = 0;
    let slope = 0;

    const train = (features: number[], targets: number[]) => {
        const n = features.length;
        for (let i = 0; i < iterations; i++) {
            let gradientYIntercept = 0;
            let gradientSlope = 0;
            for (let j = 0; j < n; j++) {
                const prediction = yIntercept + slope * features[j];
                const error = prediction - targets[j];
                gradientYIntercept += error;
                gradientSlope += error * features[j];
            }
            gradientYIntercept *= 2 / n;
            gradientSlope *= 2 / n;

            yIntercept -= learningRate * gradientYIntercept;
            slope -= learningRate * gradientSlope;
        }
    };

    const predict = (feature: number) => {
        return yIntercept + slope * feature;
    };

    return {
        train,
        predict
    };
};*/
