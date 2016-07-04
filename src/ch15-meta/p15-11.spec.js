import { expect } from 'chai';
import func from './p15-11.js';

describe('Edit Distance', () => {
  it('handles empty strings', () => {
    expect(func('', '')).to.equal(0);
  });

  it('handles a character', () => {
    expect(func('q', '')).to.equal(1);
  });

  it('handles single strings', () => {
    expect(func('qwerty', '')).to.equal(6);
    expect(func('', 'qwerty')).to.equal(6);
  });

  it('handles all replace', () => {
    expect(func('mega', 'lolo')).to.equal(4);
  });

  it('handles a complex case', () => {
    expect(func('Carthorse', 'Orchestra')).to.equal(8);
  });

  it('handles a deceptive case', () => {
    expect(func('cow', 'own')).to.equal(2);
  });
});
