export default class LinkedListNode<T> {
    private tailRef = {
        ref: {
            tail: this as LinkedListNode<T>,
        },
    };
    next: LinkedListNode<T> | null = null;
    value: T | null = null;

    constructor(init?: T | T[]) {
        if (Array.isArray(init)) {
            init.forEach((x) => this.add(x));
        } else if (init) {
            this.add(init);
        }
    }

    get tail(): LinkedListNode<T> {
        return this.tailRef.ref.tail;
    }

    set tail(newTail: LinkedListNode<T>) {
        this.tailRef.ref.tail = newTail;
    }

    get length(): number {
        return this.toArray().length;
    }

    add(x: T): LinkedListNode<T> {
        if (this.value === null) {
            this.value = x;
        } else {
            const newNode = new LinkedListNode(x);
            this.tail.next = newNode;
            this.tail = newNode;
            newNode.tailRef = this.tailRef;
        }
        return this;
    }

    append(node: LinkedListNode<T>): LinkedListNode<T> {
        if (this.value === null) {
            this.value = node.value;
            this.next = node.next;
            this.tailRef = node.tailRef;
        } else {
            this.tail.next = node;
            this.tail = node.tail;
            node.tailRef.ref = this.tailRef.ref;
        }
        return this;
    }

    find(
        predFn: (ptr: LinkedListNode<T>) => boolean
    ): LinkedListNode<T> | null {
        let ptr: LinkedListNode<T> | null = this;
        while (ptr !== null && !predFn(ptr)) {
            ptr = ptr.next;
        }
        return ptr;
    }

    atIndex(i: number): LinkedListNode<T> | null {
        let curIdx = 0;
        return this.find(() => {
            return curIdx++ === i;
        });
    }

    appendAfter(
        target: LinkedListNode<T>,
        newNode: LinkedListNode<T>
    ): LinkedListNode<T> {
        const insertPtr = this.find((node) => node === target);
        if (insertPtr) {
            if (insertPtr === this.tail) {
                this.append(newNode);
            } else {
                newNode.tail.next = insertPtr.next;
                insertPtr.next = newNode;
                newNode.tailRef.ref = insertPtr.tailRef.ref;
            }
        }
        return this;
    }

    deleteAfter(target: LinkedListNode<T>): LinkedListNode<T> {
        const deletePtr = this.find((node) => node === target);
        if (deletePtr && deletePtr.next) {
            if (deletePtr.next === this.tail) {
                deletePtr.tail = deletePtr;
            }
            deletePtr.next = deletePtr.next.next;
        }
        return this;
    }

    toArray(): T[] {
        const arr: T[] = [];
        let ptr: LinkedListNode<T> | null = this;
        while (ptr !== null && ptr.value !== null) {
            arr.push(ptr.value);
            ptr = ptr.next;
        }
        return arr;
    }
}
