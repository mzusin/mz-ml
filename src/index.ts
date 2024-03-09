import * as LinearRegression from './core/linear-regression';
import * as lossFunctions from './core/loss';

const api = {
    ...LinearRegression,
    ...lossFunctions,
};

declare global {
    interface Window {
        mzMl: typeof api,
    }
}

window.mzMl = window.mzMl || api;

export * from './core/linear-regression';
export * from './core/loss';