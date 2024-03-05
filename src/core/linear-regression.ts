class LinearRegression {
    private readonly learningRate: number;
    private readonly iterations: number;
    private theta0: number;
    private theta1: number;

    constructor(learningRate: number, iterations: number) {
        this.learningRate = learningRate;
        this.iterations = iterations;
        this.theta0 = 0;
        this.theta1 = 0;
    }

    train(x: number[], y: number[]) {
        const n = x.length;
        for (let iter = 0; iter < this.iterations; iter++) {
            let theta0Sum = 0;
            let theta1Sum = 0;
            for (let i = 0; i < n; i++) {
                const prediction = this.predict(x[i]);
                const error = prediction - y[i];
                theta0Sum += error;
                theta1Sum += error * x[i];
            }
            const theta0Gradient = (2 / n) * theta0Sum;
            const theta1Gradient = (2 / n) * theta1Sum;
            this.theta0 -= this.learningRate * theta0Gradient;
            this.theta1 -= this.learningRate * theta1Gradient;
        }
    }

    predict(x: number): number {
        return this.theta0 + this.theta1 * x;
    }

    getTheta0(): number {
        return this.theta0;
    }

    getTheta1(): number {
        return this.theta1;
    }
}

// Example usage
const regression = new LinearRegression(0.01, 1000);
const x = [1, 2, 3, 4, 5];
const y = [2, 4, 5, 4, 5];
regression.train(x, y);
console.log('Theta0:', regression.getTheta0());
console.log('Theta1:', regression.getTheta1());
console.log('Prediction for x=6:', regression.predict(6));