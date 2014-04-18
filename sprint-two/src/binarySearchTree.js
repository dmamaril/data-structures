var makeBinarySearchTree = function(value){

  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;

  return bst;
};

var bstMethods = {
  insert: function(val){
    if(val < this.value){
      if(this.left === null){
        this.left = makeBinarySearchTree(val);
      }else{
        this.left.insert(val);
      }
    } else if (val > this.value) {
      if (this.right === null) {
        this.right = makeBinarySearchTree(val);
      } else {
        this.right.insert(val);
      }
    }

  },
  contains: function(val){
    if (val < this.value) {
      if (this.left !== null) {
        return this.left.contains(val);
      } else {
        return false;
      }
    } else if (val > this.value) {
      if (this.right !== null) {
        return this.right.contains(val);
      } else {
        return false;
      }
    } else if (val === this.value) {
      return true;
    }
  },
  depthFirstLog: function(){}
};
