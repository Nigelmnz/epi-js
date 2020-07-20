import { performance } from "perf_hooks";

/** Computes the time spent running an arbitrary function. */
export function computeTime(fn: () => void): number {
    const t0 = performance.now();
    fn();
    const t1 = performance.now();

    return t1 - t0;
}
/** Computes how much faster fnA is relative to fnB. A return value of 2.0 implies fnA is twice as fast. */
export function timeFactor(fnA: () => void, fnB: () => void): number {
    return computeTime(fnB) / computeTime(fnA);
}
