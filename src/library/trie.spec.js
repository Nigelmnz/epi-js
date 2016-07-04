import { expect } from 'chai';
import Trie from './trie.js';

describe('Trie', () => {
  let trie;
  beforeEach(() => {
    trie = new Trie();
  });
  it('handles init', () => {
    expect(trie).to.not.be.null;
  });

  it('handles insertion', () => {
    trie.insert('hello');
    expect(trie.children.h).to.not.be.undefined;
    expect(trie.children.h.children.e).to.not.be.undefined;
    expect(trie.isLeaf).to.be.false;
  });

  it('modifies leaf status', () => {
    trie.insert('h');
    expect(trie.isLeaf).to.be.false;
    expect(trie.children.h.isLeaf).to.be.true;
  });

  it('can search', () => {
    trie.insert('hello');
    expect(trie.search('hello')).to.be.true;
    expect(trie.search('hell')).to.be.false;
    trie.insert('helmet');
    trie.insert('hellion');
    trie.insert('hockey');
    expect(trie.search('helmet')).to.be.true;
    expect(trie.search('helme')).to.be.false;
  });
  it('can delete', () => {
    trie.insert('hello');
    trie.delete('hell');
    expect(trie.search('hello')).to.be.true;
    trie.insert('helmet');
    trie.insert('helm');
    trie.insert('hellion');
    trie.insert('hockey');
    trie.delete('helmet');
    trie.insert('hell');
    trie.delete('hellion');
    expect(trie.search('helmet')).to.be.false;
    expect(trie.search('helm')).to.be.true;
    expect(trie.search('hell')).to.be.true;
    expect(trie.search('hellion')).to.be.false;
  });

  it('can get all', () => {
    trie.insert('one');
    trie.insert('two');
    trie.insert('uno');
    trie.insert('under');
    trie.insert('un');
    expect(trie.getAll().length).to.be.equal(5);
  });

  it('can get all with prefix', () => {
    trie.insert('one');
    trie.insert('two');
    trie.insert('twin');
    trie.insert('uno');
    trie.insert('under');
    trie.insert('understand');
    trie.insert('underboard');
    expect(trie.getWithPrefix('tw').length).to.be.equal(2);
    expect(trie.getWithPrefix('und').length).to.be.equal(3);
  });

  it('can autocomplete', () => {
    trie.insert('lodash', 3);
    trie.insert('love', 4);
    trie.insert('lovely', 5);
    trie.insert('mega', 3);
    expect(trie.autocomplete('lo')).to.eql('love');
    expect(trie.autocomplete('m')).to.eql('mega');
  });
});
