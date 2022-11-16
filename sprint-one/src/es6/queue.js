class Queue {
  constructor() {
    this.items={};
    this.headIndex=0;
    this.tailIndex=0;
  }

  enqueue(value) {
    this.tailIndex++;
    return this.items[this.tailIndex]=value
  }

  dequeue() {
    if(this.tailIndex === this.headIndex){
      return null
    }
    this.headIndex++
    var item = this.items[this.headIndex]
    delete this.items[this.headIndex]
    return item
  }

  size() {
    return this.tailIndex - this.headIndex
  }
}
