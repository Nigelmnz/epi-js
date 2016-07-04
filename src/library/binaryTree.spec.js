import { expect } from 'chai';
import BT from './binaryTree.js';

describe('Binary Tree', () => {
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

  const treeTwo = new BT(3,
    new BT(1,
      null,
      new BT(2)
    ),
    new BT(5,
      new BT(4),
      null
    )
  );

  it('handles inorder morris traversal', () => {
    expect(tree.inorder()).to.eql([1, 2, 3, 4, 5, 6, 7]);
    expect(treeTwo.inorder()).to.eql([1, 2, 3, 4, 5]);
  });

  it('supports array init', () => {
    expect(new BT([4, 2, 6, 1, 3, 5, 7]).inorder()).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });
});
