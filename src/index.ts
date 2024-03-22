import * as LinearRegression from './core/linear-regression';
import * as SimpleLinearRegression from './core/simple-linear-regression';

const api = {
    ...LinearRegression,
    ...SimpleLinearRegression,
};

declare global {
    interface Window {
        mzMl: typeof api,
    }
}

window.mzMl = window.mzMl || api;

export * from './core/linear-regression';
export * from './core/simple-linear-regression';