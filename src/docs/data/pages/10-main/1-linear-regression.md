# Linear Regression

```js
import { LinearRegression } from 'mz-ml';

// feature can be of any dimension
const features = [[17], [170], [80]];
const labels = [91, 66, 58];

const regression = new LinearRegression({
    learningRate: 0.00001,
    epochs: 1000,
    features,
    labels,
    batchSize: 2, // optional
});

const [weights, bias] = model.train(); // [[0.4855781005489537], 0.8483783596443771]
const prediction = model.predict([17]); // 89

// The coefficient of determination R-Squared
const r2 = model.rSquared(); // 0.4
```