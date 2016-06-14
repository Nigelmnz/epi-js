import { expect } from 'chai';
import func from './p06-01.js';

describe('Array Partitioning', () => {
  it('handles one element', () => {
    expect(func([1], 0)).to.eql([1]);
  });

  it('handles two elements', () => {
    expect(func([1, 5], 1)).to.eql([1, 5]);
  });

  it('handles three elements', () => {
    expect(func([5, 3, 2], 1)).to.eql([2, 3, 5]);
  });

  it('handles many elements', () => {
    const attempt = func([5, 3, 6, 1, 2, 8, 4, 9], 2);
    const pivotLoc = attempt.indexOf(6);
    const leftCheck = attempt.slice(0, pivotLoc).filter((x) => x > 6);
    const rightCheck = attempt.slice(pivotLoc).filter((x) => x < 6);
    expect(leftCheck).to.eql([]);
    expect(rightCheck).to.eql([]);
  });

  it('handles duplicates', () => {
    expect(func([2, 2, 1, 1, 5, 5], 1)).to.eql([1, 1, 2, 2, 5, 5]);
  });
});
