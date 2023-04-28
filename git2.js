class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class linklist2 {
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
    this.lenth++;
    return this;
  }
}

let link = new linklist2();
console.log(linklist2(6));
