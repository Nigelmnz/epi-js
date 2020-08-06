export class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(init: T) {
        this.value = init;
    }

    toArray(): T[] {
        const arr: T[] = [this.value];
        let ptr = this.next;
        while (ptr !== null) {
            arr.push(ptr.value);
            ptr = ptr.next;
        }
        return arr;
    }
}
