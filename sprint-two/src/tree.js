var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function (val) {
  var newData=new Tree(val)
  this.children.push(newData)
};

Tree.prototype.contains = function (target) {
  if(this.value === target){
    return true
  }
  for(var i=0;i<this.children.length;i++){
    if(this.children[i].contains(target)){
      return true
    }
  }
  return false   
};
