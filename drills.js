const LinkedList = require('./LinkedList');

// 1. Creating a singly linked list

// Write a function main. Within the function, using the linked list class above, create a linked list
// with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.

// Add Tauhida to the list.
// Remove Husker from the list.
// Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
// Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
// Implement a function called insertAt() that inserts an item at a specific position in the linked list.
// Add Athena before Boomer using your insertBefore() function.
// Add Hotdog after Helo using the insertAfter() method.
// Using the insertAt() method insert Kat in the 3rd position of the list.
// Remove Tauhida from the list.

function main() {
  const SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');
  SLL.remove('Husker');

  SLL.insertBefore('Athena','Boomer');
  SLL.insertAfter('Hotdog','Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  display(SLL);
  size(SLL);
  isEmpty(SLL);
  findPrevious(SLL, 'Boomer');
  findLast(SLL);

  thirdFromTheEnd(SLL);
  middleOfList(SLL);

  const reversedList = reverseList(SLL);
  display(reversedList);

  return SLL
}

main();


// 2. Supplemental functions for a linked list
// Implement the following functions that operate on your linked list class.
// Note that these should be free functions instead of methods of the linked list class, so implement them
// outside the linked list class.
// Test each function using the list created in exercise 1.

// display: displays the linked list
// size: returns the size of the linked list
// isEmpty: finds if the list is empty or not (without using the size() function)
// findPrevious: finds the node before the item you are looking for
// findLast: returns the last node in the linked list

// displays the linked list
function display(list) {
  let currNode = list.head;

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

// returns the size of the linked list
function size(list) {
  let size = 0;
  let currNode = list.head;

  while (currNode !== null) {
    size = size + 1;
    currNode = currNode.next;
  }
  console.log(size);
  return size;
}

// finds if the list is empty or not (without using the size() function)
function isEmpty(list) {
  if (list.head) {
    console.log('false');
  }
  else {
    console.log('true');
  }
}

// finds the node before the item you are looking for
function findPrevious(list, value) {
  let currNode = list.head;

  // while there is a next node and it is not our value then we continue to move forward
  while (currNode.next !== null && currNode.next.value !== value) {
    currNode = currNode.next;
  }
  console.log(currNode.value);
  return currNode;
}

// returns the last node in the linked list
function findLast(list) {
  if (!list.head) {
    return;
  }

  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }

  console.log(currNode.value);
  return currNode.value;
}


// 3. Mystery program
// Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve.
// What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// Remove duplicates from the list
// Time complexity is O(nlog(n))


// 4. Reverse a list
// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)).
// For this exercise, notice we are not asking you just to print the linked list in reverse or use another
// linked list to store the value in reverse order. Your program should reverse the direction of a given singly
// linked list. In other words, all pointers should point backward.
// BONUS: Solve this problem using both recursive and iterative algorithms.

function reverseList(list) {
  // Traverse the list keeping track of where we were/are
  let currNode = list.head;
  let prevNode = null;
  let tempNode = null;

  // iterate while we have a current node
  while ( currNode ) {

    // Store the next node
    tempNode = currNode.next;

    // Set current node's next node to the previous node
    // If first node, this is null
    currNode.next = prevNode;

    // Set our previous node to be the current node
    prevNode = currNode;

    // set current node to the stored node that was originally next
    currNode = tempNode;
  }

  list.head = prevNode;

  return list;
}

// 5. 3rd from the end
// Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a
// length property to your linked list class. The length property is not a typical property of linked list,
// therefore don't make any modification to the linked list class that is provided to you.

function thirdFromTheEnd(list) {
  let currNode = list.head;

  while(currNode.next.next.next !== null) {
    currNode = currNode.next;
  }

  return console.log(currNode.value);
}


// 6. Middle of a list
// Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length
// property to your linked list class. The length property is not a typical property of linked list, therefore
// don't make any modification to the linked list class that is provided to you. Also, finding the size of the
// linked list using the size() function and dividing it by half will not find the correct middle of the linked list.
// So, don't use either of these approaches.

function middleOfList(list) {
  let end = list.head;
  let middle = list.head;

  // two cases cover even and odd length
  while(end !== null && end.next !== null) {
    // advance one pointer 2 times faster than the other
    end = end.next.next;
    middle = middle.next;
  }

  // return the value of the node which was advanced at regular speed
  return console.log(middle.value);
};

// 7. Cycle in a list
// Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next
// value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList.
// Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.

function cycleList() {
  const list = new LinkedList();

  list.insertFirst('Shirt')
  list.insertLast('Pants');
  list.insertLast('Hat');
  list.insertLast('Shoes');
  // list.insertLast('Hat');
  // list.insertLast('Shoes');

  display(list);

  return testCycle(list);
}

console.log(cycleList());

function testCycle(list) {
  let currNode = list.head;
  while (currNode !== null) {
    if (currNode.next === null) {
      return false;
    }
    let newNode = currNode;
    while (newNode.next !== null) {
      if (newNode.next.value === currNode.value) {
        newNode.next = newNode.next.next;
        return true;
      }
      else {
        newNode = newNode.next;
      }
    }
    currNode = currNode.next;
  }
}


// 8. Sorting a list
// Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your
// program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or
// any other data structure such as an array to store the data.

let linkedList = new LinkedList();
linkedList.insertLast(3);
linkedList.insertLast(2);
linkedList.insertLast(5);
linkedList.insertLast(7);
linkedList.insertLast(1);

display(linkedList);
