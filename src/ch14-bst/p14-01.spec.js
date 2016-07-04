import { expect } from 'chai';
import func from './p14-01.js';
import BT from '../library/binaryTree.js';

describe('isBST?', () => {
  const tree = new BT(4,
    new BT(2,
      new BT(1),
      new BT(3)
    ),
    new BT(6,
      new BT(5),
      new BT(7)
    )
  );

  const badtree = new BT(4,
    new BT(2,
      new BT(1),
      null
    ),
    null
  );

  const badtree2 = new BT(4,
    new BT(2,
      null,
      new BT(5, null, null)
    ),
    new BT(6, null, null)
  );

  it('handles a single node', () => {
    expect(func(new BT(5, null, null))).to.be.true;
  });

  it('handles a two node tree', () => {
    expect(func(new BT(1, new BT(1, null, null), null))).to.be.false;
  });

  it('handles a three node tree', () => {
    expect(func(new BT(5, new BT(2, null, null), new BT(10, null, null)))).to.be.true;
  });

  it('handles a medium-sized balanced tree', () => {
    expect(func(tree)).to.be.true;
  });

  it('handles an unbalanced tree', () => {
    expect(func(badtree)).to.be.true;
  });

  it('handles another unbalanced tree', () => {
    expect(func(badtree2)).to.be.false;
  });
});
