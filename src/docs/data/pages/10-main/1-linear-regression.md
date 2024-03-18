# Linear Regression

```js
import { LinearRegression } from 'mz-ml';

const features = [[17], [170], [80]];
const labels = [91, 66, 58];

const regression = new LinearRegression({
    learningRate: 0.00001,
    epochs: 1000,
    features,
    labels,
    batchSize: 2,
});

const [weights, bias] = regression.train(); // [[0.4855781005489537], 0.8483783596443771]
const prediction = regression.predict([17]);

```