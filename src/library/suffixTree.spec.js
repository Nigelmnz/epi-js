import { expect } from 'chai';
import SuffixTree from './suffixTree.js';

describe('Suffix Tree', () => {
  it('handles creation', () => {
    expect(new SuffixTree()).is.not.equal(undefined);
  });
});
