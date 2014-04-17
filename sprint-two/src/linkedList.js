var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(!list.tail){
      list.tail = makeNode(value);
    }
    list.tail.next = makeNode(value);
    list.tail = list.tail.next;
    if(!list.head){
      list.head=list.tail;
    }

  };

  list.removeHead = function(){
    list.head=list.head.next;

  };

  list.contains = function(target, node){

  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
