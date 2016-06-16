import { expect } from 'chai';
import * as Traverse from './p09-05.js';
import BT from '../library/binaryTree.js';

describe('Traversal', () => {
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

  const treeThree = new BT(4,
    new BT(1,
      null,
      new BT(3,
        new BT(2),
        null
      )
    ),
    null
  );

  describe('handles a node', () => {
    describe('inorder', () => {
      it('can use recursion', () => {
        expect(Traverse.inorderRecur(new BT(4))).to.eql([4]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.inorderParent(new BT(4))).to.eql([4]);
      });
      it('can use stacks', () => {
        expect(Traverse.inorderStack(new BT(4))).to.eql([4]);
      });
      it('can use threading', () => {
        expect(Traverse.inorderThread(new BT(4))).to.eql([4]);
      });
    });
    describe('preorder', () => {
      it('can use recursion', () => {
        expect(Traverse.preorderRecur(new BT(4))).to.eql([4]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.preorderParent(new BT(4))).to.eql([4]);
      });
      it('can use stacks', () => {
        expect(Traverse.preorderStack(new BT(4))).to.eql([4]);
      });
    });
    describe('postorder', () => {
      it('can use recursion', () => {
        expect(Traverse.postorderRecur(new BT(4))).to.eql([4]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.postorderParent(new BT(4))).to.eql([4]);
      });
      it('can use stacks', () => {
        expect(Traverse.postorderStack(new BT(4))).to.eql([4]);
      });
    });
  });

  describe('handles a standard tree', () => {
    describe('inorder', () => {
      it('can use recursion', () => {
        expect(Traverse.inorderRecur(tree)).to.eql([1, 2, 3, 4, 5, 6, 7]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.inorderParent(tree)).to.eql([1, 2, 3, 4, 5, 6, 7]);
      });
      it('can use stacks', () => {
        expect(Traverse.inorderStack(tree)).to.eql([1, 2, 3, 4, 5, 6, 7]);
      });
      it('can use threading', () => {
        expect(Traverse.inorderThread(tree)).to.eql([1, 2, 3, 4, 5, 6, 7]);
      });
    });
    describe('preorder', () => {
      it('can use recursion', () => {
        expect(Traverse.preorderRecur(tree)).to.eql([4, 2, 1, 3, 6, 5, 7]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.preorderParent(tree)).to.eql([4, 2, 1, 3, 6, 5, 7]);
      });
      it('can use stacks', () => {
        expect(Traverse.preorderStack(tree)).to.eql([4, 2, 1, 3, 6, 5, 7]);
      });
    });
    describe('postorder', () => {
      it('can use recursion', () => {
        expect(Traverse.postorderRecur(tree)).to.eql([1, 3, 2, 5, 7, 6, 4]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.postorderParent(tree)).to.eql([1, 3, 2, 5, 7, 6, 4]);
      });
      it('can use stacks', () => {
        expect(Traverse.postorderStack(tree)).to.eql([1, 3, 2, 5, 7, 6, 4]);
      });
    });
  });

  describe('handles a nonstandard tree', () => {
    describe('inorder', () => {
      it('can use recursion', () => {
        expect(Traverse.inorderRecur(treeTwo)).to.eql([1, 2, 3, 4, 5]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.inorderParent(treeTwo)).to.eql([1, 2, 3, 4, 5]);
      });
      it('can use stacks', () => {
        expect(Traverse.inorderStack(treeTwo)).to.eql([1, 2, 3, 4, 5]);
      });
      it('can use threading', () => {
        expect(Traverse.inorderThread(treeTwo)).to.eql([1, 2, 3, 4, 5]);
      });
    });
    describe('preorder', () => {
      it('can use recursion', () => {
        expect(Traverse.preorderRecur(treeTwo)).to.eql([3, 1, 2, 5, 4]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.preorderParent(treeTwo)).to.eql([3, 1, 2, 5, 4]);
      });
      it('can use stacks', () => {
        expect(Traverse.preorderStack(treeTwo)).to.eql([3, 1, 2, 5, 4]);
      });
    });
    describe('postorder', () => {
      it('can use recursion', () => {
        expect(Traverse.postorderRecur(treeTwo)).to.eql([2, 1, 4, 5, 3]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.postorderParent(treeTwo)).to.eql([2, 1, 4, 5, 3]);
      });
      it('can use stacks', () => {
        expect(Traverse.postorderStack(treeTwo)).to.eql([2, 1, 4, 5, 3]);
      });
    });
  });

  describe('handles a snaking tree', () => {
    describe('inorder', () => {
      it('can use recursion', () => {
        expect(Traverse.inorderRecur(treeThree)).to.eql([1, 2, 3, 4]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.inorderParent(treeThree)).to.eql([1, 2, 3, 4]);
      });
      it('can use stacks', () => {
        expect(Traverse.inorderStack(treeThree)).to.eql([1, 2, 3, 4]);
      });
      it('can use threading', () => {
        expect(Traverse.inorderThread(treeThree)).to.eql([1, 2, 3, 4]);
      });
    });
    describe('preorder', () => {
      it('can use recursion', () => {
        expect(Traverse.preorderRecur(treeThree)).to.eql([4, 1, 3, 2]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.preorderParent(treeThree)).to.eql([4, 1, 3, 2]);
      });
      it('can use stacks', () => {
        expect(Traverse.preorderStack(treeThree)).to.eql([4, 1, 3, 2]);
      });
    });
    describe('postorder', () => {
      it('can use recursion', () => {
        expect(Traverse.postorderRecur(treeThree)).to.eql([2, 3, 1, 4]);
      });
      it('can use parent pointers', () => {
        expect(Traverse.postorderParent(treeThree)).to.eql([2, 3, 1, 4]);
      });
      it('can use stacks', () => {
        expect(Traverse.postorderStack(treeThree)).to.eql([2, 3, 1, 4]);
      });
    });
  });
});
