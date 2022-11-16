class LinkedList {
  constructor() {
    this.list = {};
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
  var newNode= new Node(value);
  this.tail=newNode;

  if(Object.keys(this.list).length===0){
    this.head=new Node(value)
    this.list=new Node(value)
  }
   else {
    var x=this.list;

   if(x.next!== null){
    x=x.next;
  }
  x.next=this.tail;
}
}

  removeHead() {
    if(this.head === null){
      return null;
    }
    var current = this.head;
    this.list = this.list.next;
    this.head = this.list;
    return current.value;
  }

  contains(target) {
    var node = this.list;
    while(node){
      if(node.value === target){
        return true
      }node = node.next
    }return false
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

