import { expect } from 'chai';
import LinkedList from './linkedList.js';

describe('Linked List', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('can be created', () => {
    expect(list).to.exist;
  });

  it('can accept a value', () => {
    expect(new LinkedList(6).toArray()).to.eql([6]);
  });

  it('can accept arrays', () => {
    expect(new LinkedList([1, 2, 3]).toArray()).to.eql([1, 2, 3]);
  });

  it('can add elements', () => {
    expect(list.add(5).toArray()).to.eql([5]);
  });

  it('can remove elements', () => {
    expect(list
      .add(3)
      .add(6)
      .add(9)
      .remove(1)
      .toArray()).to.eql([3, 9]);
  });

  it('can get head', () => {
    expect(list
      .add(5)
      .head
      .value).to.eql(5);
  });

  it('nodes can get next', () => {
    expect(list
      .add(5)
      .add(8)
      .head
      .next
      .value).to.eql(8);
  });
});
