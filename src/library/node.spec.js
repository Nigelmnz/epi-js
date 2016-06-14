import { expect } from 'chai';
import Node from './node.js';

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  });

  it('can be created', () => {
    expect(node).to.exist;
  });

  it('can accept a value', () => {
    expect(new Node(6).toArray()).to.eql([6]);
  });

  it('can accept arrays', () => {
    expect(new Node([1, 2, 3]).toArray()).to.eql([1, 2, 3]);
  });
});
