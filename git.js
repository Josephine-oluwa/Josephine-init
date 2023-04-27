class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let node = new node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail = node;
      this.tail.next = node;
    }
    this.length++;
    return this;
  }

  //   remove() {
  //     if (!this.head) {
  //       return undefined;
  //     } else {
  //       let current = this.tail;
  //       let newTail = current;

  //       while (current.next) {
  //         this.tail = newTail;
  //         this.tail.next = null;
  //       }

  //       this.length--;
  //       return current;
}
//   }
// }

console.clear();
let link = new Linklist();
console.log(Linklist.insert(6));
