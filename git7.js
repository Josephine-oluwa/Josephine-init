class Node {
  constructor() {
    this.val = val;
    this.next = next;
  }
}

class linklist7 {
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
}

let link = new linklist7();
console.log(linklist7(7));
