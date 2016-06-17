import { expect } from 'chai';
import HashTable from './hashtable.js';

describe('HashTable', () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable;
  });
  it('handles one insertion', () => {
    hashTable.set('test', 100);
    expect(hashTable.get('test')).to.equal(100);
  });
  it('handles several insertions', () => {
    hashTable.set('test', 100);
    hashTable.set('hoot', 30);
    hashTable.set('crab', 20);
    expect(hashTable.get('hoot')).to.equal(30);
  });
  it('returns undefined when getting missing keys', () => {
    expect(hashTable.get('hoot')).to.eql(undefined);
  });
  it('handles deletion', () => {
    hashTable.set('test', 100);
    hashTable.set('hoot', 30);
    hashTable.set('crab', 20);
    hashTable.remove('hoot');
    expect(hashTable.get('hoot')).to.eql(undefined);
  });
});
