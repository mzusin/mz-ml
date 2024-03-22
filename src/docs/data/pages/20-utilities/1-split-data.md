# Split Data

Split data to training set, test set, and optional validation set.

```js
import { splitData } from 'mz-ml';

const result = splitData({
    features: [[1], [2], [3]],
    labels: [1, 2, 3],
    testSetSize: 0.2,
});

console.log(result.featuresTrain); // [[1], [2]]
console.log(result.labelsTrain); // [1, 2]
console.log(result.featuresTest); // [[3]]
console.log(result.labelsTest); // [3]
```

```js
import { splitData } from 'mz-ml';

const result = splitData({
    features: [[17], [170], [80], [29], [124], [28], [200], [33]],
    labels: [91,66,58,9,24,84,126,14],
    testSetSize: 0.2,
    validationSetSize: 0.1,
});

console.log(result.featuresTrain); // [[17], [170], [80], [29], [124]]
console.log(result.labelsTrain); // [91, 66, 58, 9, 24]
console.log(result.featuresTest); // [[28], [200]]
console.log(result.labelsTest); // [84, 126]
console.log(result.featuresValidation); // [[33]]
console.log(result.labelsValidation); // [14]
```