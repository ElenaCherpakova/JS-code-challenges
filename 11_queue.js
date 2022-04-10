/* Create a queue that will implement operations to add elements to the end of the queue, remove the first element, and calculate the size of the 
queue with the complexity of the O(1) algorithm.*/
class LinkedList {
  #length = 0;
  #head = 0;
  #tail = 0;

  addToTail(value) {
    const node = {
      value: value,
      next: null,
    };

    if (this.#length === 0) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail = node;
    }
    this.#length++;
  }

  removeFromHead() {
    if (this.#length === 0) {
      return;
    }
    const value = this.#head.value;
    this.#head = this.#head.next;
    this.#length--;
    return value;
  }

  receiveSize() {
    return this.#length;
  }
}

class Queue extends LinkedList {
  constructor() {
    //call constructor of parent
    super();
    this.enqueue = this.addToTail;
    this.dequeue = this.removeFromHead;
  }
  get size() {
    return super.receiveSize();
  }
}
// class Queue {
//   #storage = {}; //where # -> private mode only available within the class
//   #last = 0;
//   #first = 0;

//   enqueue(item) {
//     //adding element in the end of queue
//     this.#storage[this.#last] = item;
//     this.last++;
//   }

//   dequeue() {
//     //deleting 1st element from queue
//     if (this.size === 0) {
//       return;
//     }
//     const value = this.#storage[this.#first];
//     delete this.#storage[this.#first];
//     this.#first++;
//     return value;
//   }

//   get size() {
//     return this.#last - this.#first;
//   }
// }

const table = new Queue();
table.enqueue(1);
table.enqueue(2);
table.enqueue(45);
table.enqueue(45);

console.log(table.dequeue());
console.log(table.size);
