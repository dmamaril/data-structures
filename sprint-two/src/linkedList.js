var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
  if (!list.head) {
      list.head = node;
    }

    if (list.head === list.tail) {
      list.head.next = node;
    }

    if (list.tail) {
      list.tail.next = node;
    }

    list.tail = node;
  };

  list.removeHead = function(){
    list.head = list.head.next;
  };

  list.contains = function(target, node){
   if (node) {
     if (node.value === target) {
       return true;
     } else if (node.next === null) {
       return false;
     } else {
       return list.contains(target, list.head.next);
     }
   } else {
     return list.contains(target, list.head)
   }
  };




  	// if (node !== list.tail) {
  	// 	if (node.value === target) {
  	// 		return true;
  	// 	} else {
  	// 		list.contains(target, list.head.next);
  	// 	}
  	// } else {
  	// 	return false;
  	// }



	// if (node.value === target) {
	// 	return true;
	// } else if (node === list.tail) {
	// 	return false;
	// } else {
	// 	list.contains(target, list.head.next);
	// }

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
