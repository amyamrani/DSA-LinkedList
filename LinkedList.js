class _Node {
  // accepts a value variable that holds the data and a next variable that serves as a pointer to the next node
  constructor(value, next) {
      this.value = value;
      this.next = next;
  }
}

class LinkedList {
  // start with an empty list, represented by null
  constructor() {
      this.head = null;
  }

  // insert an item at the beginning of the list
  // O(1) - inserting at only 1 place, the 1st position, regardless of list length
  insertFirst(item) {
    // point the head to that new node
    this.head = new _Node(item, this.head);
  }

  // insert an item at the end of the list
  // O(n) - you have to iterate over all nodes individually in sequence until you reach the end
  insertLast(item) {
    // Check to see if the list is empty, if it is, then insert the new item as the only item in the list
    if (this.head === null) {
        this.insertFirst(item);
    }
    // if there are nodes in the list, then set tempNode to the last node (this.head)
    // then while tempNode.next is null (end of list), set end node's next pointer to the new node
    else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // Check for the item
    while (currNode.value !== item) {
        /* Return null if it's the end of the list
           and the item is not on the list */
        if (currNode.next === null) {
            return null;
        }
        else {
            // Otherwise, keep looking
            currNode = currNode.next;
        }
    }
    // Found it
    return currNode;
  }

  remove(item){
    // If the list is empty
    if (!this.head) {
        return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
        this.head = this.head.next;
        return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    // O(n) - average and worst case, iterate over each node to find the one you want to remove
    while ((currNode !== null) && (currNode.value !== item)) {
        // Save the previous node
        previousNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Item not found');
        return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, key) {
    // inserts a new node before a given node containing a key(name) insertBefore('something','something')
    if (!this.head){
        return null;
    }

    let curNode = this.head;
    let prevNode = this.head;

    while (curNode.value !== key){
        if (curNode.next === null) {
            return null;
        }
        else {
            prevNode = curNode;
            curNode = curNode.next;
        }
    }
    prevNode.next = new _Node(item, curNode)
    // need to set new node.next for new item and reset .next for key Node
  }

  insertAfter(item, key) {
    // inserts a new node after a node containing a key (name) insertAfter('something','something')
    if (!this.head){
        return null;
    }

    let curNode = this.head;

    while (curNode.value !== key){
        if (curNode.next === null) {
            return null;
        }
        else {
            curNode = curNode.next;
        }
    }
    curNode.next = new _Node(item, curNode.next)
    // need to set new node.next for new item and reset .next for key Node
  }

  insertAt(item, position) {
    // inserts an item at a specific position in the linked list
    if (!this.head){
        return null;
    }

    let curNode = this.head;
    let prevNode = this.head;

    let ind = 0;

    while (ind < position){
        if (curNode.next === null) {
            return null;
        }
        else {
            prevNode = curNode;
            curNode = curNode.next;
            ind++
        }
    }
    prevNode.next = new _Node(item, curNode)
    // need to set new node.next for new item and reset .next for key Node
  }
}

module.exports = LinkedList;