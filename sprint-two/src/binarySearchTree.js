var makeBinarySearchTree = function(value){

  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;

  return bst;
};

var bstMethods = {


  insert: function(val){

    //check if value is less than current node and if so, check if empty, if not recurse and set val
    if(val < this.value){
      if(this.left === null){
        this.left = makeBinarySearchTree(val);
      }else{
        this.left.insert(val);
      }

    //check if value is greater than current node and if so, check if empty, if not recurse and set val
    } else if (val > this.value) {
      if (this.right === null) {
        this.right = makeBinarySearchTree(val);
      } else {
        this.right.insert(val);
      }
    }

  },


  contains: function(val){

    //check to see if value is less than current value, if so, go to search left
    if (val < this.value) {
      if (this.left !== null) {
        return this.left.contains(val);
      } else {
        return false;
      }

    //check to see if value is greater than current value, if so, go to search left

    } else if (val > this.value) {
      if (this.right !== null) {
        return this.right.contains(val);
      } else {
        return false;
      }

    // return value if it matches
    } else if (val === this.value) {
      return true;
    }
  },

  depthFirstLog: function(iterator){
    iterator(this.value);

    if (this.left !== null){
      this.left.depthFirstLog(iterator);
    }
    if (this.right !== null){
      this.right.depthFirstLog(iterator);
    }
  }
};
