import { expect } from 'chai';
import func from './p05-01.js';

describe('Computing Parity', () => {
  it('handles a single number number with parity', () => {
    expect(func([2])).to.eql([1]);
  });

  it('handles a single number number without parity', () => {
    expect(func([3])).to.eql([0]);
  });

  it('handles many numbers that will have parity', () => {
    expect(func([2, 4, 8, 16, 32, 64])).to.eql([1, 1, 1, 1, 1, 1]);
  });

  it('handles many numbers that will not have parity', () => {
    expect(func([3, 5, 9, 17, 33, 65])).to.eql([0, 0, 0, 0, 0, 0]);
  });

  it('handles a mix of numbers', () => {
    expect(func([3, 4, 9, 16, 33, 64])).to.eql([0, 1, 0, 1, 0, 1]);
  });

  it('handles a large number', () => {
    expect(func([31283678])).to.eql([1]);
  });

  it('handles many large numbers', () => {
    expect(func([31283678, 31283672, 12312312332, 2019380923])).to.eql([1, 1, 0, 1]);
  });
});
