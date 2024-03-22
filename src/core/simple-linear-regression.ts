import { LinearRegression } from './linear-regression';
import { ISimpleLinearRegressionOptions, ILinearRegressionOptions } from '../interfaces';

export class SimpleLinearRegression extends LinearRegression{

    constructor(options: ISimpleLinearRegressionOptions) {

        const _features: number[][] = [];

        for(const feature of options.features) {
            _features.push([feature]);
        }

        const _options: ILinearRegressionOptions = {
            ...options,
            features: _features,
        };

        super(_options);
    }
}