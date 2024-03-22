import * as LinearRegression from './core/linear-regression';
import * as SimpleLinearRegression from './core/simple-linear-regression';
import * as utils from './core/utils';

const api = {
    ...LinearRegression,
    ...SimpleLinearRegression,
    ...utils,
};

declare global {
    interface Window {
        mzMl: typeof api,
    }
}

window.mzMl = window.mzMl || api;

export * from './core/linear-regression';
export * from './core/simple-linear-regression';
export * from './core/utils';