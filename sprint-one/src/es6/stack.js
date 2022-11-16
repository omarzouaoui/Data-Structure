class Stack {
  constructor() {
    this.object={};
    this.key=0;
  }

  push(value) {
    this.key++
    return this.object[this.key]=value
  }

  pop() {
    if(this.key === 0){
      return null
    }
    var deleted=this.object[this.key]
    delete this.object[this.key]
    this.key--
    return deleted
  }

  size() {
    return this.key
  }
}
