import { LinearRegression } from '../src/core/linear-regression';

const features = [[17], [170], [80], [29], [124], [28], [200], [33], [44], [81], [18], [113], [189], [92], [154], [155], [158], [56], [198], [193], [42], [27], [76], [163], [56], [41], [197], [164], [62], [15], [78], [2], [57], [148], [169], [124], [122], [49], [151], [141], [66], [166], [173], [47], [110], [87], [65], [131], [76], [180], [115], [8], [106], [62], [136], [158], [125], [159], [20], [122], [62], [88], [57], [111], [187], [176], [42], [122], [103], [194], [109], [34], [100], [112], [186], [130], [70], [111], [40], [60], [21], [132], [102], [134], [170], [74], [31], [88], [200], [56], [90], [120], [195], [63], [3], [65], [109], [164], [138], [46]];

const labels = [91,66,58,9,24,84,126,14,87,90,72,24,119,8,31,75,92,26,161,115,87,9,29,114,69,65,113,70,78,76,92,16,95,100,127,107,141,90,165,94,85,78,147,11,109,71,100,106,59,133,134,14,60,65,111,25,184,91,88,55,43,57,7,132,87,180,79,158,34,147,199,73,171,75,95,78,97,111,80,31,4,192,125,56,195,50,76,74,133,68,34,91,141,20,2,90,192,104,100,1];

describe('Linear Regression', () => {

    test('GD with learning rate 0.00001', () => {

        const regression = new LinearRegression({
            learningRate: 0.00001,
            epochs: 1000,
            features,
            labels,
        });

        const [weights, bias] = regression.train();

        expect([weights, bias]).toStrictEqual([[0.7492312657204566], 0.17408378352957618]);
    });

    test('SGD with learning rate 0.00001', () => {

        const regression = new LinearRegression({
            learningRate: 0.00001,
            epochs: 1000,
            features,
            labels,
            batchSize: 1,
        });

        const [m, b] = regression.train();

        expect([m, b]).toStrictEqual([[0.6381096434369923], 13.13201182243643]);
    });

    test('Mini-Batch with learning rate 0.00001 and batch size = 3', () => {

        const regression = new LinearRegression({
            learningRate: 0.00001,
            epochs: 1000,
            features,
            labels,
            batchSize: 2,
        });

        const [m, b] = regression.train();

        expect([m, b]).toStrictEqual([[0.7558520339174016], 7.271072855627577]);
    });

    /*test('Learning rate 0.01', () => {

        const regression = new LinearRegression({
            learningRate: 0.01,
            epochs: 1000,
            points,
        });

        const [m, b] = regression.train();

        expect([m, b]).toStrictEqual([0.7492312657204566, 0.17408378352957618]);
    });*/
});