var Queue = function () {
  this.obj={};
  this.head=0;
  this.tail=0;
};

Queue.prototype.enqueue = function (value) {
  this.tail++
  return this.obj[this.tail]=value
};

Queue.prototype.dequeue = function () {
  if(this.head === this.tail){
    return null
  }
  this.head++
  var deleted=this.obj[this.head]
  delete this.obj[this.head]
  return deleted
};

Queue.prototype.size = function () {
  return this.tail-this.head
};
