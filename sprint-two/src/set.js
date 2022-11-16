class Set {
  constructor() {
    this._storage = {};
  }

  add(item) {
    this._storage[item]=true;
  }
  
  contains(item) {
    return !!this._storage[item]
  }

  remove(item) {
    delete this._storage[item]
  }
}
