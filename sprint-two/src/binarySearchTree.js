class BinarySearchTree {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
  insert(val) {
    if(val>this.value){
      if(this.right === null){
        this.right = new BinarySearchTree(val);
      }
      this.right.insert(val)
    }else if(val<this.value){
      if(this.left === null){
        this.left = new BinarySearchTree(val);
      }
      this.left.insert(val)
    }
  }
  contains(val) {
    if(this.value === val){
      return true
    }else if(val>this.value){
      return !!(this.right && this.right.contains(val))
    }else if(val<this.value){
      return !!(this.right && this.right.contains(val))
    }
  }
  
  depthFirstLog(callBack) {
    callBack(this.value)
    if (this.left) {
      this.left.depthFirstLog(callBack);
    }if (this.right) {
      this.right.depthFirstLog(callBack);
    }
  }
}
