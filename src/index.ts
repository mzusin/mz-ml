import * as LinearRegression from './core/simple-linear-regression';

const api = {
    ...LinearRegression,
};

declare global {
    interface Window {
        mzMl: typeof api,
    }
}

window.mzMl = window.mzMl || api;

export * from './core/simple-linear-regression';