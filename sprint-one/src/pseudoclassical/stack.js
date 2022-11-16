var Stack = function () {
  this.obj={};
  this.key=0
};

Stack.prototype.push = function (value) {
  this.key++
  return this.obj[this.key]=value
};

Stack.prototype.pop = function () {
  if(this.key === 0){
    return null
  }
  var deleted=this.obj[this.key]
  delete this.obj[this.key]
  this.key--
  return deleted
};

Stack.prototype.size = function () {
  return this.key
};
