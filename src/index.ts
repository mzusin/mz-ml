import * as LinearRegression from './core/linear-regression';

const api = {
    ...LinearRegression,
};

declare global {
    interface Window {
        mzMl: typeof api,
    }
}

window.mzMl = window.mzMl || api;

export * from './core/linear-regression';